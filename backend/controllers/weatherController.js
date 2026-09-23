const { ok } = require('../utils/response');

// Known zones mapped to coordinates (Zimbabwe)
const ZONES = {
  'Harare':        { lat:-17.8292, lon:31.0522 },
  'Harare East':   { lat:-17.8216, lon:31.1027 },
  'Harare West':   { lat:-17.8340, lon:30.9800 },
  'Mbare':         { lat:-17.8536, lon:31.0284 },
  'Mazowe':        { lat:-17.5167, lon:30.9667 },
  'Bulawayo':      { lat:-20.1500, lon:28.5833 },
  'Mutare':        { lat:-18.9707, lon:32.6709 },
  'Gweru':         { lat:-19.4500, lon:29.8167 },
};

function iconFor(code) {
  if (code >= 200 && code < 300) return '⛈';
  if (code >= 300 && code < 600) return '🌧';
  if (code >= 600 && code < 700) return '🌨';
  if (code >= 700 && code < 800) return '🌫';
  if (code === 800) return '☀';
  if (code === 801 || code === 802) return '🌤';
  return '⛅';
}

exports.getForecast = async (req, res, next) => {
  try {
    const { zone = 'Harare' } = req.query;
    const key = process.env.OPENWEATHER_API_KEY;
    const coords = ZONES[zone] || ZONES['Harare'];

    if (!key) {
      return ok(res, {
        forecast: {
          zone, unavailable: true,
          message: 'Live weather is not configured yet (missing OPENWEATHER_API_KEY).',
        },
      });
    }

    const [curRes, fcRes] = await Promise.all([
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${key}`),
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${coords.lat}&lon=${coords.lon}&units=metric&appid=${key}`),
    ]);
    if (!curRes.ok || !fcRes.ok) {
      const errBody = await curRes.text().catch(()=>'');
      throw new Error(`OpenWeatherMap request failed: ${curRes.status} ${errBody}`);
    }
    const cur = await curRes.json();
    const fc  = await fcRes.json();

    const cloudPct = cur.clouds?.all ?? 50;
    const uvIndex = cloudPct > 70 ? 'Low' : cloudPct > 30 ? 'Moderate' : 'High';

    const byDay = {};
    (fc.list || []).forEach(item => {
      const d = new Date(item.dt * 1000);
      const key2 = d.toISOString().slice(0,10);
      const hour = d.getUTCHours();
      if (!byDay[key2] || Math.abs(hour-12) < Math.abs(byDay[key2].hour-12)) {
        byDay[key2] = { hour, item };
      }
    });
    const dayNames = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const days = Object.entries(byDay).slice(0,5).map(([dateStr,{item}], i) => {
      const d = new Date(dateStr);
      return {
        day: i===0 ? 'Today' : dayNames[d.getUTCDay()],
        icon: iconFor(item.weather[0].id),
        high: Math.round(item.main.temp_max),
        low: Math.round(item.main.temp_min),
        rain: `${Math.round((item.pop||0)*100)}%`,
      };
    });

    const rainChance = days[0] ? days[0].rain : '0%';
    let advisory = 'Conditions look stable for routine field work.';
    if (parseInt(rainChance) >= 60) advisory = 'Rain likely — plan harvesting or spraying before it arrives.';
    else if (cur.main.temp >= 30) advisory = 'High temperatures expected — ensure crops and livestock have enough water.';
    else if (uvIndex === 'High') advisory = 'High UV expected — complete outdoor field work earlier in the day.';

    ok(res, {
      forecast: {
        zone,
        current: {
          temp: Math.round(cur.main.temp),
          condition: cur.weather[0].main,
          humidity: cur.main.humidity,
          rainChance,
          windSpeed: `${Math.round(cur.wind.speed * 3.6)}km/h`,
          uvIndex,
        },
        advisory,
        days,
        pestAlerts: [],
      },
    });
  } catch (e) { next(e); }
};
