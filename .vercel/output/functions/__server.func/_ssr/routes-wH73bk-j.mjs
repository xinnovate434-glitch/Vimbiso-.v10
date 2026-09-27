import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Camera, a as Store, c as Search, d as Package, f as Mic, g as ChevronLeft, h as ClipboardList, l as Repeat, m as House, n as Users, o as Smartphone, p as Inbox, r as User, s as ShoppingBag, t as Zap, u as RefreshCw, v as Bike, y as BatteryLow } from "../_libs/lucide-react.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-wH73bk-j.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var IMG = {
	splash: "/images/bg-splash.jpg",
	welcome: "/images/bg-welcome.jpg",
	onboard: "/images/bg-onboard.jpg",
	signin: "/images/bg-signin.jpg",
	identity: "/images/bg-identity.jpg",
	home: "/images/bg-home.jpg",
	trader: "/images/bg-trader.jpg",
	delivery: "/images/bg-delivery.jpg",
	radar: "/images/bg-radar.jpg",
	profile: "/images/bg-profile.jpg",
	spices: "/images/bg-spices.jpg",
	road: "/images/bg-road.jpg",
	tomatoes: "/images/item-tomatoes.jpg",
	maize: "/images/item-maize.jpg",
	peppers: "/images/item-peppers.jpg",
	fruit: "/images/item-fruit.jpg",
	qrId: "/images/qr-id.png",
	qrDel: "/images/qr-del.png"
};
var PORTRAITS = {
	john: "/images/p-john.jpg",
	chipo: "/images/p-chipo.jpg",
	mary: "/images/p-mary.jpg",
	tendai: "/images/p-tendai.jpg",
	tinashe: "/images/p-tinashe.jpg",
	rudo: "/images/p-rudo.jpg",
	farai: "/images/p-farai.jpg"
};
var CATS = [
	{
		id: "food",
		name: "Food",
		photo: "/images/cat-food.jpg"
	},
	{
		id: "veg",
		name: "Veg",
		photo: "/images/cat-veg.jpg"
	},
	{
		id: "electronics",
		name: "Electronics",
		photo: "/images/cat-electronics.jpg"
	},
	{
		id: "clothing",
		name: "Clothing",
		photo: "/images/cat-clothing.jpg"
	},
	{
		id: "hardware",
		name: "Hardware",
		photo: "/images/cat-hardware.jpg"
	},
	{
		id: "services",
		name: "Services",
		photo: "/images/cat-services.jpg"
	},
	{
		id: "household",
		name: "Household",
		photo: "/images/cat-household.jpg"
	},
	{
		id: "other",
		name: "Other",
		photo: "/images/cat-other.jpg"
	}
];
var QUALITIES = [
	{
		id: "premium",
		name: "Premium",
		detail: "Top grade, fresh today"
	},
	{
		id: "standard",
		name: "Standard",
		detail: "Good everyday quality"
	},
	{
		id: "budget",
		name: "Budget",
		detail: "Value pick"
	}
];
var UNITS = [
	"kg",
	"pieces",
	"litres",
	"bags",
	"units"
];
var MARKET = { tomatoes: 15.2 };
var OFFERS = [
	{
		id: "A",
		name: "John Vegetables",
		vid: "VMB-004821",
		img: PORTRAITS.john,
		qty: "20kg",
		price: 15,
		rating: 4.8,
		trust: 94,
		dist: "2.1 km",
		ful: "Delivery",
		quality: "Premium"
	},
	{
		id: "C",
		name: "Chipo Produce",
		vid: "VMB-005512",
		img: PORTRAITS.chipo,
		qty: "25kg",
		price: 16,
		rating: 4.9,
		trust: 97,
		dist: "1.5 km",
		ful: "Delivery",
		quality: "Premium"
	},
	{
		id: "B",
		name: "Mary Fresh Foods",
		vid: "VMB-003980",
		img: PORTRAITS.mary,
		qty: "20kg",
		price: 14,
		rating: 4.6,
		trust: 89,
		dist: "3.4 km",
		ful: "Collection",
		quality: "Standard"
	}
];
var NEAR = [
	{
		img: PORTRAITS.john,
		name: "John Vegetables",
		trust: 94,
		rating: 4.8,
		dist: "2.1 km",
		stock: "Tomatoes, onions"
	},
	{
		img: PORTRAITS.chipo,
		name: "Chipo Produce",
		trust: 97,
		rating: 4.9,
		dist: "1.5 km",
		stock: "Veg, fruit"
	},
	{
		img: PORTRAITS.tinashe,
		name: "Tinashe Electronics",
		trust: 91,
		rating: 4.7,
		dist: "3.0 km",
		stock: "Chargers, airtime"
	}
];
var JOBS = [
	{
		id: 1,
		item: "20kg tomatoes (Premium)",
		from: "Mbare Musika",
		to: "47 Chiremba Ave, Avondale",
		dist: "4.2 km",
		pay: 3.5,
		buyerTrust: 88,
		traderTrust: 94,
		eta: "by 10:15"
	},
	{
		id: 2,
		item: "Phone charger + cable",
		from: "Podium Rd, Harare",
		to: "Greendale, Harare",
		dist: "6.8 km",
		pay: 5,
		buyerTrust: 92,
		traderTrust: 87,
		eta: "by 11:00"
	},
	{
		id: 3,
		item: "50kg maize meal",
		from: "Chitungwiza Central",
		to: "Zengeza 5, Chitungwiza",
		dist: "2.1 km",
		pay: 2.5,
		buyerTrust: 85,
		traderTrust: 91,
		eta: "by 10:45"
	},
	{
		id: 4,
		item: "Fridge repair parts",
		from: "Selous Ave, Harare",
		to: "Mount Pleasant, Harare",
		dist: "5.3 km",
		pay: 4,
		buyerTrust: 90,
		traderTrust: 88,
		eta: "by 12:00"
	}
];
var TICKER = [
	"Group buy pooled: 45kg tomatoes",
	"Order #VIM00000181 completed",
	"47 traders online near you",
	"Delivery in transit · Avondale",
	"USSD request · Bindura",
	"EcoCash payment verified"
];
var ONBOARD = [
	{
		title: "Tell us what you need.",
		body: "Search by voice or text, or build a bid with exact quality, quantity, and your price.",
		photo: IMG.onboard
	},
	{
		title: "Available traders respond.",
		body: "Traders online and near you get your bid instantly and send live offers.",
		photo: IMG.trader
	},
	{
		title: "Choose with confidence.",
		body: "Compare price, fairness vs market, distance, rating and Vimbiso Trust Score.",
		photo: IMG.spices
	},
	{
		title: "Pool, deliver, or use USSD.",
		body: "Group-buy with neighbours, hand off to riders, or trade over *123# from any phone.",
		photo: IMG.delivery
	}
];
var DICT = {
	en: {
		tagline: "Trade in real time.",
		headline: "Trade in real time.",
		sub: "Tell us what you need. Available traders respond. You choose who to trade with.",
		trades: "trades done",
		completion: "completion",
		verified: "verified traders",
		getstarted: "Get started",
		signin: "I already have an account",
		ussd: "No smartphone? Use USSD *123#",
		hello: "Good afternoon, Tendai",
		need: "What do you need?",
		buildbid: "Build bid",
		buildbid2: "Build a bid",
		online: "traders online near you",
		matched: "requests matched today",
		rating: "avg trader rating",
		categories: "Browse categories",
		toptraders: "Top-rated traders near you"
	},
	sn: {
		tagline: "Enga mu nguva chaiyo.",
		headline: "Enga mu nguva chaiyo.",
		sub: "Tiudze zvaunoda. Vengesi vanopindura. Iwe unosarudza waungaenga naye.",
		trades: "kutengesa kwaitwa",
		completion: "kupera",
		verified: "vengesi vakasimbiswa",
		getstarted: "Tanga",
		signin: "Ndine account",
		ussd: "Huna foni? Shandisa USSD *123#",
		hello: "Mhoroi Tendai",
		need: "Unoda chii?",
		buildbid: "Gadzira bidhi",
		buildbid2: "Gadzira bidhi",
		online: "vengesi vari online pedyo newe",
		matched: "zvikumbiro zvakawanikwa nhasi",
		rating: "chiyero chevengesi",
		categories: "Tarisa mitengo",
		toptraders: "Vengesi vane mukurumbira pedyo"
	}
};
function fairBadge(price) {
	const m = MARKET.tomatoes;
	if (price < m - .5) return {
		kind: "low",
		label: "Below market"
	};
	if (price > m + .5) return {
		kind: "high",
		label: "Above market"
	};
	return {
		kind: "good",
		label: "Fair price"
	};
}
function money(n) {
	return `$${n.toFixed(2)}`;
}
var HIDE_NAV = [
	"splash",
	"onboard",
	"welcome",
	"signin",
	"otp",
	"signup",
	"identity",
	"delreg",
	"delid",
	"radar",
	"delRadar",
	"admin",
	"ussd"
];
function homeFor(role) {
	if (role === "trader") return "trade";
	if (role === "delivery") return "delDash";
	if (role === "admin") return "admin";
	return "home";
}
var useVimbiso = create((set, get) => ({
	screen: "splash",
	role: "buyer",
	regRole: "buyer",
	lang: "en",
	lite: false,
	online: false,
	delOnline: false,
	name: "Tendai Moyo",
	city: "Chitungwiza",
	phone: "+263 77 123 4567",
	toast: null,
	onboardStep: 0,
	suStep: 1,
	bidStep: 1,
	bidItem: "Tomatoes",
	bidCat: "veg",
	bidQuality: "premium",
	bidQty: 20,
	bidUnit: "kg",
	bidPrice: 15,
	bidItems: [],
	selectedOffer: null,
	payMethod: "cash",
	orderStep: 2,
	reviewStars: 0,
	reviewNote: "",
	voiceOn: false,
	poolOpen: false,
	poolJoined: 3,
	ussdStack: ["main"],
	counterMode: "accept",
	counterPrice: 16.5,
	offerQuality: "premium",
	offerFulfill: "delivery",
	vehicle: "Motorcycle",
	vehicleColor: "Red",
	make: "Honda CB125",
	plate: "ABC-1234",
	insurance: "Old Mutual",
	policy: "INS-2024-8821",
	licence: "DL-0099281",
	delStep: 0,
	jobPhotos: [],
	search: "20kg tomatoes",
	safePoint: "Shell station Avondale",
	go: (screen) => set({ screen }),
	goHome: () => set({ screen: homeFor(get().role) }),
	enterApp: (role) => {
		const resolved = role === "both" ? "buyer" : role;
		set({
			role: resolved,
			screen: homeFor(resolved)
		});
	},
	setLang: (lang) => set({ lang }),
	toggleLite: () => set({ lite: !get().lite }),
	toastMsg: (message) => {
		const id = Date.now();
		set({ toast: {
			id,
			message
		} });
		window.setTimeout(() => {
			if (get().toast?.id === id) set({ toast: null });
		}, 2200);
	},
	set: (partial) => set(partial)
}));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Wordmark({ dark, large, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("wm", dark && "dk", large && "lg", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "VIMBISO" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "NETWORK" })]
	});
}
function Photo({ src, alt, overlay = "navy", kenBurns, className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("vn-photo", kenBurns && "ken", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt
			}),
			overlay !== "none" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("vn-ov", `vn-ov-${overlay}`) }) : null,
			children
		]
	});
}
function Btn({ variant = "navy", className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn("relative w-full overflow-hidden rounded-md px-4 py-3.5 text-[15px] font-extrabold transition duration-150", "active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-45 disabled:active:scale-100", variant === "navy" && "bg-navy text-white shadow-[0_10px_24px_rgb(14_42_71_/_0.32)] hover:-translate-y-0.5", variant === "teal" && "bg-teal text-white shadow-[0_10px_24px_rgb(15_118_110_/_0.34)] hover:-translate-y-0.5", variant === "gold" && "bg-gold text-navy-3 shadow-[0_10px_24px_rgb(224_163_43_/_0.36)] hover:-translate-y-0.5", variant === "outline" && "bg-surf text-navy shadow-[inset_0_0_0_2px_var(--color-navy)] hover:bg-navy hover:text-white", variant === "ghost" && "bg-transparent text-navy hover:bg-navy/5", variant === "white" && "bg-white/15 text-white backdrop-blur-sm hover:bg-white/25", className),
		...props,
		children
	});
}
function Card({ className, children, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: onClick ? "button" : void 0,
		onClick,
		className: cn("rounded-lg bg-surf p-4 shadow-[var(--shadow-card)]", onClick && "transition duration-150 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]", className),
		children
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.08em] text-mut",
			children: label
		}), children]
	});
}
function Input(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		...props,
		className: cn("w-full rounded-sm border-[1.5px] border-line bg-white px-3.5 py-3.5 text-[15px] text-ink outline-none", "transition focus:border-teal focus:shadow-[0_0_0_4px_rgb(15_118_110_/_0.14)]", props.className)
	});
}
function Badge({ tone = "navy", children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-extrabold", tone === "navy" && "bg-navy/10 text-navy", tone === "teal" && "bg-teal/12 text-teal", tone === "gold" && "bg-gold/20 text-gold-d", tone === "ok" && "bg-ok/12 text-ok", tone === "warn" && "bg-warn/15 text-warn", tone === "err" && "bg-err/12 text-err", tone === "live" && "bg-teal-2/16 text-teal", tone === "glass" && "bg-white/14 text-teal-3", className),
		children: [tone === "live" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "vn-live" }) : null, children]
	});
}
function Stars({ value, size = 14 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex gap-px text-gold",
		children: Array.from({ length: 5 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			width: size,
			height: size,
			viewBox: "0 0 24 24",
			className: i < Math.round(value) ? "fill-current" : "fill-[#d9dee6]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" })
		}, i))
	});
}
function Avatar({ src, alt, size = "md", verified }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("relative inline-block shrink-0", size === "sm" ? "h-9 w-9" : size === "lg" ? "h-16 w-16" : size === "xl" ? "h-[84px] w-[84px]" : "h-11 w-11"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: "h-full w-full rounded-full object-cover shadow-[0_0_0_2px_#fff,0_4px_12px_rgb(14_42_71_/_0.18)]"
		}), verified ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "absolute -right-0.5 -bottom-0.5 grid h-[18px] w-[18px] place-items-center rounded-full border-2 border-white bg-teal",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				width: "10",
				height: "10",
				viewBox: "0 0 24 24",
				fill: "none",
				stroke: "#fff",
				strokeWidth: "3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 6 9 17l-5-5" })
			})
		}) : null]
	});
}
function Steps({ total, current }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mb-4 flex gap-1.5",
		children: Array.from({ length: total }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: cn("h-1.5 flex-1 rounded-full", i < current ? "bg-gradient-to-r from-teal to-teal-2" : "bg-line") }, i))
	});
}
function TopBar({ left, title, right, ghost }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("sticky top-0 z-30 pt-[max(env(safe-area-inset-top),6px)]", ghost ? "bg-transparent" : "border-b border-line/90 bg-surf/72 backdrop-blur-md"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-[54px] items-center justify-between px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex min-w-[38px] items-center",
					children: left
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-center text-[16px] font-extrabold tracking-[-0.02em] text-navy",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex min-w-[38px] items-center justify-end",
					children: right
				})
			]
		})
	});
}
function IconBtn({ onClick, children, light, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		className: cn("grid h-[38px] w-[38px] place-items-center rounded-sm text-xl transition hover:bg-navy/10", light ? "text-white hover:bg-white/15" : "text-navy", className),
		children
	});
}
function Choice({ active, onClick, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: cn("flex w-full items-center gap-2.5 rounded-sm border-[1.5px] bg-white px-3.5 py-3 text-left font-bold text-navy transition", active ? "border-teal bg-teal/6 shadow-[0_0_0_3px_rgb(15_118_110_/_0.12)]" : "border-line hover:-translate-y-px hover:border-teal", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex-1",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("grid h-5 w-5 place-items-center rounded-full border-2 text-[11px] font-black text-white", active ? "border-teal bg-teal" : "border-line"),
			children: active ? "✓" : ""
		})]
	});
}
function Pad({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative z-[2] px-4 pb-24 pt-4", className),
		children
	});
}
function CountUp({ to, suffix = "", decimals = 0 }) {
	const [n, setN] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t0 = performance.now();
		let raf = 0;
		const tick = (now) => {
			const p = Math.min(1, (now - t0) / 1100);
			const cur = to * (1 - Math.pow(1 - p, 3));
			setN(cur);
			if (p < 1) raf = requestAnimationFrame(tick);
		};
		raf = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(raf);
	}, [to]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: (decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString()) + suffix });
}
function SplashScreen() {
	const go = useVimbiso((s) => s.go);
	const [status, setStatus] = (0, import_react.useState)("Connecting to the network…");
	(0, import_react.useEffect)(() => {
		const msgs = [
			"Connecting to the network…",
			"Loading your city…",
			"Waking nearby traders…",
			"Ready."
		];
		const t = window.setInterval(() => {
			setStatus((cur) => {
				const i = msgs.indexOf(cur);
				return msgs[Math.min(i + 1, msgs.length - 1)] ?? cur;
			});
		}, 1600);
		const done = window.setTimeout(() => go("onboard"), 6500);
		return () => {
			clearInterval(t);
			clearTimeout(done);
		};
	}, [go]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "vn-screen bg-navy-3 text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
				src: IMG.splash,
				alt: "Fresh produce at an open market stall",
				overlay: "navy",
				kenBurns: true,
				className: "absolute inset-0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-[2] flex min-h-[100dvh] flex-col items-center justify-center px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {
						dark: true,
						large: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-5 h-0.5 w-[120px] bg-gradient-to-r from-transparent via-gold to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-[15px] font-semibold text-white/90",
						children: "Trade in real time."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-7 flex gap-8",
						children: [
							[12480, "trades"],
							[1240, "traders"],
							[
								98,
								"completion",
								"%"
							]
						].map(([n, k, suf]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl font-extrabold text-gold-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
									to: n,
									suffix: suf || ""
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] tracking-[0.08em] text-white/60 uppercase",
								children: k
							})]
						}, String(k)))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 h-[3px] w-40 overflow-hidden rounded-full bg-white/15",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "block h-full w-full origin-left animate-[vn-fill_6.5s_cubic-bezier(.4,0,.2,1)_both] rounded-full bg-gradient-to-r from-teal-3 to-gold-2" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[11px] tracking-wide text-white/50",
						children: status
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => go("onboard"),
						className: "mt-6 rounded-sm bg-white/12 px-5 py-2.5 text-sm font-extrabold text-white/90 backdrop-blur-sm hover:bg-white/20",
						children: "Skip intro"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `@keyframes vn-fill{from{transform:scaleX(0)}to{transform:scaleX(1)}}` })
		]
	});
}
function OnboardScreen() {
	const { onboardStep, set, go } = useVimbiso();
	const step = ONBOARD[onboardStep] ?? ONBOARD[0];
	const last = onboardStep === ONBOARD.length - 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "vn-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
				src: step.photo,
				alt: "",
				overlay: "header",
				kenBurns: true,
				className: "hero"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-[2] -mt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
					ghost: true,
					left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-sm font-bold text-white/80",
						onClick: () => go("welcome"),
						children: "Skip"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pad, {
				className: "pt-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, {
						total: 4,
						current: onboardStep + 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "p-7 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-[26px] leading-tight font-extrabold tracking-[-0.03em] text-navy",
							children: step.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[15px] leading-relaxed text-mut",
							children: step.body
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						className: "mt-4",
						onClick: () => {
							if (last) go("signup");
							else set({ onboardStep: onboardStep + 1 });
						},
						children: last ? "Create account" : "Next"
					})
				]
			})
		]
	});
}
function WelcomeScreen() {
	const { lang, setLang, go } = useVimbiso();
	const t = DICT[lang];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "vn-screen bg-navy-3 text-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
			src: IMG.welcome,
			alt: "Crates of citrus and produce at a wholesale market",
			overlay: "teal",
			kenBurns: true,
			className: "absolute inset-0"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-[2] flex min-h-[100dvh] flex-col justify-end px-[18px] pt-6 pb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { dark: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex overflow-hidden rounded-[10px] border border-white/25 bg-white/10",
						children: ["en", "sn"].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setLang(l),
							className: lang === l ? "bg-white px-2.5 py-1.5 text-[11px] font-extrabold text-navy" : "px-2.5 py-1.5 text-[11px] font-extrabold text-white/80",
							children: l.toUpperCase()
						}, l))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-5 text-[32px] leading-tight font-extrabold tracking-[-0.03em] text-white",
					children: t.headline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2.5 max-w-[300px] text-[15px] leading-relaxed text-white/88",
					children: t.sub
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 flex overflow-hidden rounded-md bg-navy text-white shadow-[var(--shadow-card)]",
					children: [
						[12480, t.trades],
						[
							98,
							t.completion,
							"%"
						],
						[1240, t.verified]
					].map(([n, k, suf], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex-1 px-1.5 py-3 text-center",
						children: [
							i > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "absolute top-[18%] left-0 h-[64%] w-px bg-white/16" }) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-[17px] font-extrabold text-gold-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountUp, {
									to: n,
									suffix: suf || ""
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-0.5 text-[10px] font-semibold text-white/70",
								children: k
							})
						]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							variant: "gold",
							onClick: () => go("signup"),
							children: t.getstarted
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							variant: "white",
							onClick: () => go("signin"),
							children: t.signin
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => go("ussd"),
							className: "py-2 text-[13px] font-bold text-white/70",
							children: t.ussd
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-center text-xs text-white/60",
					children: "Free to join · Phone sign-in · Buyer · Trader · Delivery"
				})
			]
		})]
	});
}
function SignInScreen() {
	const { phone, set, go } = useVimbiso();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "vn-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
			src: IMG.signin,
			alt: "City street with buses and pedestrians",
			overlay: "navy",
			className: "absolute inset-0"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-[2]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
				ghost: true,
				left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
					light: true,
					onClick: () => go("welcome"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pad, {
				className: "pt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "border border-white/20 bg-white/12 p-[22px] text-white shadow-none backdrop-blur-md",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {
							dark: true,
							className: "wm sm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display mt-3.5 text-xl font-extrabold text-white",
							children: "Welcome back."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-white/75",
							children: "Sign in with your Zimbabwe phone number."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Phone number",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: phone,
									onChange: (e) => set({ phone: e.target.value }),
									placeholder: "+263 7X XXX XXXX"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							variant: "gold",
							className: "mt-3.5",
							onClick: () => go("otp"),
							children: "Send code"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-center text-xs text-white/70",
							children: [
								"No account?",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "font-bold text-gold-2",
									onClick: () => go("signup"),
									children: "Create one"
								})
							]
						})
					]
				})
			})]
		})]
	});
}
function OtpScreen() {
	const { go, regRole } = useVimbiso();
	const [digits] = (0, import_react.useState)([
		"1",
		"2",
		"3",
		"4",
		"5",
		"6"
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "vn-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
				src: IMG.signin,
				alt: "",
				overlay: "soft",
				className: "absolute inset-0 opacity-70"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
				left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
					onClick: () => go("signin"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
				}),
				title: "Verify"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pad, {
				className: "pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-[28px] font-extrabold tracking-[-0.03em] text-navy",
						children: "Enter your code."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1.5 text-mut",
						children: [
							"We sent a 6-digit code to ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
								className: "text-ink",
								children: "+263 77 123 4567"
							}),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "my-7 flex justify-center gap-2",
						children: digits.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							defaultValue: d,
							maxLength: 1,
							className: "h-12 w-11 rounded-sm border-[1.5px] border-line bg-white text-center text-xl font-extrabold text-navy outline-none focus:border-teal"
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						onClick: () => {
							if (regRole === "delivery") go("delreg");
							else go("identity");
						},
						children: "Verify & continue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3.5 text-center text-xs text-mut",
						children: [
							"Didn't get it?",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "font-bold text-teal",
								onClick: () => useVimbiso.getState().toastMsg("Code resent"),
								children: "Resend"
							})
						]
					})
				]
			})
		]
	});
}
function SignupScreen() {
	const s = useVimbiso();
	const roles = [
		{
			id: "buyer",
			label: "Buy things",
			icon: ShoppingBag
		},
		{
			id: "trader",
			label: "Sell things",
			icon: Store
		},
		{
			id: "both",
			label: "Buy and sell",
			icon: RefreshCw
		},
		{
			id: "delivery",
			label: "Deliver things",
			icon: Bike
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "vn-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
				src: IMG.onboard,
				alt: "Grocery aisles of fresh food",
				overlay: "soft",
				className: "absolute inset-0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
				left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
					onClick: () => s.go("welcome"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
				}),
				title: "Create account"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pad, {
				className: "relative z-[2] pt-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, {
						total: 3,
						current: s.suStep
					}),
					s.suStep === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-[28px] font-extrabold tracking-[-0.03em] text-navy",
							children: "Start with your phone."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 mb-4 text-mut",
							children: "We'll text you a code. No password to remember."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Phone number",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: s.phone,
								onChange: (e) => s.set({ phone: e.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							className: "mt-3.5",
							onClick: () => s.set({ suStep: 2 }),
							children: "Send code"
						})
					] }),
					s.suStep === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-[28px] font-extrabold tracking-[-0.03em] text-navy",
							children: "Enter code."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1.5 mb-4 text-mut",
							children: ["Sent to ", s.phone]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center gap-2",
							children: [
								"1",
								"2",
								"3",
								"4",
								"5",
								"6"
							].map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								defaultValue: d,
								maxLength: 1,
								className: "h-12 w-11 rounded-sm border-[1.5px] border-line bg-white text-center text-xl font-extrabold outline-none focus:border-teal"
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							className: "mt-4",
							onClick: () => s.set({ suStep: 3 }),
							children: "Verify"
						})
					] }),
					s.suStep === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-[28px] font-extrabold tracking-[-0.03em] text-navy",
							children: "Who are you?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 mb-4 text-mut",
							children: "This builds your Vimbiso identity."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Full name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: s.name,
								onChange: (e) => s.set({ name: e.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.08em] text-mut",
								children: "I want to"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid gap-2",
								children: roles.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
									active: s.regRole === r.id,
									onClick: () => s.set({ regRole: r.id }),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, { className: "size-4" }), r.label]
									})
								}, r.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2.5",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "City",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									className: "w-full rounded-sm border-[1.5px] border-line bg-white px-3.5 py-3.5 text-[15px] outline-none focus:border-teal",
									value: s.city,
									onChange: (e) => s.set({ city: e.target.value }),
									children: [
										"Chitungwiza",
										"Harare",
										"Bulawayo",
										"Mutare"
									].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							variant: "gold",
							className: "mt-4",
							onClick: () => s.go(s.regRole === "delivery" ? "delreg" : "identity"),
							children: "Create my Vimbiso ID"
						})
					] })
				]
			})
		]
	});
}
function IdentityScreen() {
	const { name, city, enterApp, regRole } = useVimbiso();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "vn-screen bg-navy-3 text-white",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
			src: IMG.identity,
			alt: "Handshake after a trade",
			overlay: "navy",
			kenBurns: true,
			className: "absolute inset-0"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pad, {
			className: "relative z-[2] pt-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-extrabold tracking-[0.08em] text-gold-2 uppercase",
					children: "Your Vimbiso Identity is ready"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-2 text-[28px] font-extrabold text-white",
					children: "You're on the network."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "vn-idcard mt-4 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] font-extrabold tracking-[0.14em] text-gold-2",
							children: "VIMBISO ID"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 mb-3 font-mono text-[28px] font-extrabold tracking-wide",
							children: "VMB-004821"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[17px] font-extrabold",
								children: name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-white/70",
								children: [city, ", Zimbabwe"]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "glass",
								children: "Verified"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-4 w-max rounded-[18px] bg-white p-3.5 shadow-[var(--shadow-card)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/qr-id.png",
						alt: "Vimbiso identity QR code",
						width: 150,
						height: 150,
						className: "block rounded-xs"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2.5 text-xs text-white/70",
					children: "Scan to verify · resolves to vimbiso.co/id"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3.5 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "gold",
						children: "NFC card ready"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						tone: "teal",
						children: "QR identity"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
					variant: "gold",
					className: "mt-5",
					onClick: () => enterApp(regRole),
					children: "Enter Vimbiso"
				})
			]
		})]
	});
}
function DelRegScreen() {
	const s = useVimbiso();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "vn-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
				src: IMG.delivery,
				alt: "Motorcycle on the open road",
				overlay: "header",
				className: "mid"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
				ghost: true,
				left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
					light: true,
					onClick: () => s.go("signup"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
				}),
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-white",
					children: "Register vehicle"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pad, {
				className: "-mt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-[26px] font-extrabold tracking-[-0.03em] text-navy",
						children: "Set up your delivery profile."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1.5 mb-4 text-mut",
						children: "Register your vehicle so buyers and traders can trust your deliveries."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "vn-idcard",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] font-extrabold tracking-[0.14em] text-gold-2 uppercase",
								children: "Vimbiso Delivery ID"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 font-mono text-[22px] font-extrabold",
								children: "VMB-DEL-003217"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex justify-between text-xs text-white/80",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Driver" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "text-white",
									children: s.name
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-xs text-white/80",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Vehicle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", {
									className: "text-white",
									children: [
										s.make,
										" · ",
										s.vehicle
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between text-xs text-white/80",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Colour" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
									className: "text-white",
									children: s.vehicleColor
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1.5 inline-block rounded-xs bg-white/12 px-3 py-1 font-mono text-xl font-extrabold tracking-widest",
								children: s.plate.toUpperCase()
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-2 block text-[11px] font-extrabold uppercase tracking-[0.08em] text-mut",
							children: "Vehicle type"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-4 gap-2.5",
							children: [
								"Motorcycle",
								"Car",
								"Van",
								"Bicycle"
							].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => s.set({ vehicle: v }),
								className: s.vehicle === v ? "rounded-[18px] border-2 border-teal bg-teal/6 px-2 py-4 text-center text-[11px] font-bold text-navy" : "rounded-[18px] border-2 border-line bg-white px-2 py-4 text-center text-[11px] font-bold text-navy",
								children: v
							}, v))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid gap-2.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Make & model",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: s.make,
									onChange: (e) => s.set({ make: e.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Plate number",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: s.plate,
									onChange: (e) => s.set({ plate: e.target.value }),
									className: "font-extrabold tracking-wider uppercase"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-1.5 block text-[11px] font-extrabold uppercase tracking-[0.08em] text-mut",
								children: "Colour"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-2",
								children: [
									["#DC2626", "Red"],
									["#1D4ED8", "Blue"],
									["#16A34A", "Green"],
									["#F59E0B", "Yellow"],
									["#17202A", "Black"],
									["#FFFFFF", "White"],
									["#6B7280", "Grey"]
								].map(([hex, n]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									"aria-label": n,
									onClick: () => s.set({ vehicleColor: n }),
									style: { background: hex },
									className: cn("h-[34px] w-[34px] rounded-full border-2 shadow-sm", s.vehicleColor === n ? "border-teal ring-2 ring-teal/30" : "border-line")
								}, n))
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Insurance provider",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: s.insurance,
									onChange: (e) => s.set({ insurance: e.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Policy number",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									value: s.policy,
									onChange: (e) => s.set({ policy: e.target.value })
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						variant: "gold",
						className: "mt-4",
						onClick: () => s.go("delid"),
						children: "Get my Delivery ID"
					})
				]
			})
		]
	});
}
function DelIdScreen() {
	const s = useVimbiso();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "vn-screen bg-navy-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
			src: IMG.road,
			alt: "Open road for deliveries",
			overlay: "navy",
			kenBurns: true,
			className: "absolute inset-0"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pad, {
			className: "relative z-[2] pt-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-extrabold tracking-[0.08em] text-gold-2 uppercase",
					children: "Your Delivery Identity is ready"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-2 text-[28px] font-extrabold text-white",
					children: "You're on the road."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "vn-idcard mt-4 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] font-extrabold tracking-[0.14em] text-gold-2",
							children: "VIMBISO DELIVERY ID"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 mb-3 font-mono text-[26px] font-extrabold",
							children: "VMB-DEL-003217"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[17px] font-extrabold text-white",
								children: s.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-white/70",
								children: [
									s.make,
									" · ",
									s.plate
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "glass",
								children: "Insured"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/70",
								children: "Insurance"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", {
								className: "text-white",
								children: [
									s.insurance,
									" · ",
									s.policy
								]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-4 w-max rounded-[18px] bg-white p-3.5 shadow-[var(--shadow-card)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/images/qr-del.png",
						alt: "Delivery identity QR",
						width: 150,
						height: 150
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2.5 text-xs text-white/70",
					children: "Scan at pickup · verifies driver + vehicle"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
					variant: "gold",
					className: "mt-5",
					onClick: () => s.enterApp("delivery"),
					children: "Start finding jobs"
				})
			]
		})]
	});
}
function UssdScreen() {
	const s = useVimbiso();
	const key = s.ussdStack[s.ussdStack.length - 1] ?? "main";
	const text = {
		main: "Welcome to Vimbiso\n\n1. Buy something\n2. I'm a trader\n3. My orders\n4. My Vimbiso ID\n5. Transaction history\n6. Delivery jobs\n0. Exit",
		buy: "What do you need?\nEnter text or:\n1. Tomatoes\n2. Maize meal\n3. Charger",
		buyres: "Searching...\n\n20kg tomatoes\n3 traders online near you\n\n1. See prices\n2. Place order\n0. Back",
		id: "Your Vimbiso ID:\nVMB-004821\nStatus: Verified\nTrust: 94\n\n0. Back",
		hist: "Recent trades:\n1. 20kg tomatoes  $15  done\n2. Charger  $4  done\n\n0. Back",
		del: "Delivery jobs near you:\n1. 20kg tomatoes  $3.50\n2. Maize 50kg  $2.50\n\n1. Accept  0. Back"
	}[key] ?? "";
	const map = {
		main: {
			"1": "buy",
			"2": "main",
			"4": "id",
			"5": "hist",
			"6": "del"
		},
		buy: {
			"1": "buyres",
			"2": "buyres",
			"3": "buyres"
		},
		buyres: {
			"1": "buyres",
			"2": "hist"
		},
		del: { "1": "hist" }
	};
	function press(k) {
		if (k === "0" || k === "#") {
			if (s.ussdStack.length > 1) s.set({ ussdStack: s.ussdStack.slice(0, -1) });
			else {
				s.toastMsg("USSD session ended");
				s.go("welcome");
			}
			return;
		}
		const next = (map[key] ?? {})[k];
		if (next) s.set({ ussdStack: [...s.ussdStack, next] });
		else s.toastMsg("Option " + k);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "vn-screen p-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "ussd-wrap",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between px-[18px] pt-2 text-[11px] text-[#6fbf6f]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Vimbiso" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "2G" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "84%" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ussd-screen",
					children: text
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-3 gap-2 px-[18px] pt-3.5 pb-6",
					children: [
						"1",
						"2",
						"3",
						"4",
						"5",
						"6",
						"7",
						"8",
						"9",
						"*",
						"0",
						"#"
					].map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => press(k),
						className: "rounded-[10px] border border-[#2a3a2a] bg-[#1c2c1c] py-3.5 font-bold text-[#9fef9f] active:scale-95",
						children: k
					}, k))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-[18px] pb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							if (s.ussdStack.length > 1) s.set({ ussdStack: s.ussdStack.slice(0, -1) });
							else s.go("welcome");
						},
						className: "w-full rounded-[10px] bg-[#243824] py-3.5 font-bold text-[#9fef9f]",
						children: "Back / Exit"
					})
				})
			]
		})
	});
}
function HomeScreen() {
	const s = useVimbiso();
	const t = DICT[s.lang];
	const ticker = (0, import_react.useMemo)(() => [...TICKER, ...TICKER], []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "vn-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
				src: IMG.home,
				alt: "Leafy greens stacked at a produce market",
				overlay: "header",
				className: "hero"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-[2] -mt-[280px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-4 pt-[max(env(safe-area-inset-top),10px)] h-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { dark: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5 text-[11px] font-extrabold text-teal-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "vn-live" }), " live"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex overflow-hidden rounded-[10px] border border-white/30 bg-white/10",
								children: ["en", "sn"].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => s.setLang(l),
									className: s.lang === l ? "bg-white px-2 py-1 text-[10px] font-extrabold text-navy" : "px-2 py-1 text-[10px] font-extrabold text-white/80",
									children: l.toUpperCase()
								}, l))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
								light: true,
								onClick: () => {
									s.toggleLite();
									s.toastMsg(s.lite ? "Lite mode off" : "Lite mode on — saving data");
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BatteryLow, { className: "size-[18px]" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
								light: true,
								onClick: () => s.go("profile"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-[18px]" })
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-[18px] pt-4 pb-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[13px] font-semibold text-white/80",
							children: t.hello
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display mt-1 text-[28px] font-extrabold text-white",
							children: t.need
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex items-center gap-2.5 rounded-[18px] bg-white py-1.5 pr-1.5 pl-4 shadow-[var(--shadow-lift)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "size-5 shrink-0 text-mut" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: s.search,
									onChange: (e) => s.set({ search: e.target.value }),
									placeholder: "Tomatoes, charger, plumber…",
									className: "min-w-0 flex-1 border-0 bg-transparent text-base outline-none"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => s.set({ voiceOn: true }),
									className: "grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-teal to-teal-2 text-white shadow-[0_6px_16px_rgb(15_118_110_/_0.35)]",
									"aria-label": "Search by voice",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "size-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => s.go("bid"),
									className: "rounded-[13px] bg-teal px-4 py-3 text-sm font-extrabold text-white",
									children: t.buildbid
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3.5 flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										s.set({ bidItems: [{
											name: "Tomatoes",
											quality: "Premium",
											qty: 20,
											unit: "kg",
											price: 15,
											total: 300,
											photo: IMG.tomatoes
										}] });
										s.toastMsg("Loaded your last order");
										s.go("basket");
									},
									className: "inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-line bg-white px-3.5 py-2 text-xs font-bold text-navy shadow-[var(--shadow-card)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Repeat, { className: "size-3.5" }), " Reorder: 20kg tomatoes"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => s.go("bid"),
									className: "inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-line bg-white px-3.5 py-2 text-xs font-bold text-navy shadow-[var(--shadow-card)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-3.5" }), " Pool a group buy"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => s.go("ussd"),
									className: "inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-line bg-white px-3.5 py-2 text-xs font-bold text-navy shadow-[var(--shadow-card)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "size-3.5" }), " USSD mode"]
								})
							]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-4 pb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex overflow-hidden rounded-md bg-navy text-white shadow-[var(--shadow-card)]",
						children: [
							["47", t.online],
							["312", t.matched],
							["4.8", t.rating]
						].map(([v, k], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex-1 px-1.5 py-3 text-center",
							children: [
								i > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "absolute top-[18%] left-0 h-[64%] w-px bg-white/16" }) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-[17px] font-extrabold text-gold-2",
									children: v
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-0.5 text-[10px] font-semibold text-white/70",
									children: k
								})
							]
						}, k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "vn-ticker mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "vn-ticker-track",
							children: ticker.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-navy",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "h-1.5 w-1.5 rounded-full bg-teal-2" }), item]
							}, i))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-extrabold tracking-[0.08em] text-mut uppercase",
								children: t.categories
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => s.go("bid"),
								className: "text-xs font-bold text-teal",
								children: t.buildbid2
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2.5 grid grid-cols-4 gap-2.5",
							children: CATS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => {
									s.set({
										bidCat: c.id,
										bidStep: 1
									});
									s.go("bid");
								},
								className: "overflow-hidden rounded-md bg-white text-center shadow-[var(--shadow-card)] transition hover:-translate-y-0.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.photo,
									alt: "",
									className: "h-12 w-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "px-1 py-1.5 text-[11px] font-bold text-navy",
									children: c.name
								})]
							}, c.id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-extrabold tracking-[0.08em] text-mut uppercase",
							children: t.toptraders
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2.5 grid gap-3",
							children: NEAR.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
								onClick: () => s.go("bid"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
											src: n.img,
											alt: n.name,
											verified: true
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-extrabold text-navy",
											children: n.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-xs text-mut",
											children: [
												n.stock,
												" · ",
												n.dist
											]
										})] })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-right",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
											tone: "gold",
											children: ["Trust ", n.trust]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-1 flex items-center justify-end gap-1",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { value: n.rating }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-mut",
												children: n.rating
											})]
										})]
									})]
								})
							}, n.name))
						})]
					})
				]
			})
		]
	});
}
function BidScreen() {
	const s = useVimbiso();
	const tot = s.bidQty * s.bidPrice;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "vn-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
				src: IMG.tomatoes,
				alt: "Fresh tomatoes",
				overlay: "soft",
				className: "absolute inset-0 opacity-80"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
				left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
					onClick: () => s.go("home"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
				}),
				title: "Build your bid",
				right: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, { children: [s.bidItems.length, " items"] })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pad, {
				className: "relative z-[2]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, {
						total: 4,
						current: s.bidStep
					}),
					s.bidStep === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-[26px] font-extrabold tracking-[-0.03em] text-navy",
							children: "What do you need?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 mb-3.5 text-mut",
							children: "Add items to your bid. Traders respond to your exact request."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Item name",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: s.bidItem,
								onChange: (e) => s.set({ bidItem: e.target.value })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mb-2 block text-[11px] font-extrabold uppercase tracking-[0.08em] text-mut",
								children: "Category"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-4 gap-2.5",
								children: CATS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => s.set({ bidCat: c.id }),
									className: cn("overflow-hidden rounded-md border-[1.5px] bg-white text-center", s.bidCat === c.id ? "border-teal bg-teal/6" : "border-transparent"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: c.photo,
										alt: "",
										className: "h-12 w-full object-cover"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "px-1 py-1.5 text-[11px] font-bold text-navy",
										children: c.name
									})]
								}, c.id))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							className: "mt-4",
							onClick: () => s.set({ bidStep: 2 }),
							children: "Continue"
						})
					] }),
					s.bidStep === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-[26px] font-extrabold tracking-[-0.03em] text-navy",
							children: "Quality standard"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 mb-3.5 text-mut",
							children: "Tell traders exactly what grade you expect."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-3 gap-2.5",
							children: QUALITIES.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => s.set({ bidQuality: q.id }),
								className: cn("relative overflow-hidden rounded-[18px] border-2 bg-white px-2 py-4 text-center", s.bidQuality === q.id ? "border-teal bg-teal/8" : "border-line"),
								children: [
									s.bidQuality === q.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute top-0 right-0 rounded-bl-[10px] bg-teal px-2 py-0.5 text-[9px] font-extrabold text-white",
										children: "Selected"
									}) : null,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-extrabold text-navy",
										children: q.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-0.5 text-[10px] text-mut",
										children: q.detail
									})
								]
							}, q.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
								variant: "ghost",
								className: "w-auto",
								onClick: () => s.set({ bidStep: 1 }),
								children: "Back"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
								onClick: () => s.set({ bidStep: 3 }),
								children: "Continue"
							})]
						})
					] }),
					s.bidStep === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-[26px] font-extrabold tracking-[-0.03em] text-navy",
							children: "How many?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 mb-3.5 text-mut",
							children: "Set the quantity you need."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "my-5 flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex overflow-hidden rounded-sm border-[1.5px] border-line bg-white",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "grid h-11 w-11 place-items-center bg-paper text-xl font-extrabold text-navy",
										onClick: () => s.set({ bidQty: Math.max(1, s.bidQty - 1) }),
										children: "−"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display grid h-11 w-14 place-items-center border-x-[1.5px] border-line text-[22px] font-extrabold text-navy",
										children: s.bidQty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										className: "grid h-11 w-11 place-items-center bg-paper text-xl font-extrabold text-navy",
										onClick: () => s.set({ bidQty: s.bidQty + 1 }),
										children: "+"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-2 block text-[11px] font-extrabold uppercase tracking-[0.08em] text-mut",
							children: "Unit"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: UNITS.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => s.set({ bidUnit: u }),
								className: cn("rounded-sm border-[1.5px] px-3.5 py-2.5 text-[13px] font-bold", s.bidUnit === u ? "border-teal bg-teal/6 text-navy" : "border-line bg-white text-navy"),
								children: u
							}, u))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
								variant: "ghost",
								className: "w-auto",
								onClick: () => s.set({ bidStep: 2 }),
								children: "Back"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
								onClick: () => s.set({ bidStep: 4 }),
								children: "Continue"
							})]
						})
					] }),
					s.bidStep === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display text-[26px] font-extrabold tracking-[-0.03em] text-navy",
							children: "Your price"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 mb-3.5 text-mut",
							children: "Set what you're willing to pay. Traders can accept or counter."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "my-5 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-[32px] font-extrabold text-navy",
								children: money(s.bidPrice)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-mut",
								children: ["per unit · total ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: money(tot) })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "range",
							className: "vn-range",
							min: 1,
							max: 200,
							step: .5,
							value: s.bidPrice,
							onChange: (e) => s.set({ bidPrice: parseFloat(e.target.value) })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 flex justify-between text-xs text-mut",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "$1" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "$200" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
							className: "mt-4 bg-paper",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-extrabold tracking-[0.08em] text-mut uppercase",
									children: "Bid summary"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex justify-between text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-mut",
										children: "Item"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: s.bidItem })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-mut",
										children: "Quality"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: "gold",
										className: "capitalize",
										children: s.bidQuality
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-mut",
										children: "Quantity"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", { children: [
										s.bidQty,
										" ",
										s.bidUnit
									] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-2 h-px bg-line" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-extrabold text-navy",
										children: "Total bid"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-[22px] font-extrabold text-navy",
										children: money(tot)
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								s.set({
									bidItems: [...s.bidItems, {
										name: s.bidItem,
										quality: s.bidQuality,
										qty: s.bidQty,
										unit: s.bidUnit,
										price: s.bidPrice,
										total: +(s.bidPrice * s.bidQty).toFixed(2),
										photo: s.bidCat === "veg" ? IMG.tomatoes : IMG.fruit
									}],
									bidStep: 1
								});
								s.toastMsg(`${s.bidItem} added to your bid`);
							},
							className: "mt-4 w-full rounded-[20px] bg-gradient-to-br from-teal to-teal-2 py-[18px] text-[17px] font-extrabold text-white shadow-[0_12px_30px_rgb(15_118_110_/_0.35)]",
							children: "Add to bid"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2.5 flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
								variant: "ghost",
								className: "w-auto",
								onClick: () => s.set({ bidStep: 3 }),
								children: "Back"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, {
								variant: "ghost",
								className: "w-auto",
								onClick: () => s.go("basket"),
								children: [
									"View basket (",
									s.bidItems.length,
									")"
								]
							})]
						})
					] })
				]
			}),
			s.bidItems.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed bottom-20 left-1/2 z-20 w-[calc(100%-32px)] max-w-[398px] -translate-x-1/2 rounded-[22px] bg-gradient-to-br from-navy to-navy-2 px-[18px] py-4 text-white shadow-[var(--shadow-lift)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 place-items-center rounded-full bg-gold text-base font-black text-navy-3",
							children: s.bidItems.length
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm font-extrabold",
							children: "Your bid"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-xs text-white/60",
							children: [
								s.bidItems.length,
								" item",
								s.bidItems.length === 1 ? "" : "s"
							]
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-xl font-extrabold text-gold-2",
							children: money(s.bidItems.reduce((a, i) => a + i.total, 0))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => s.go("basket"),
							className: "rounded-sm bg-teal px-4 py-3 text-sm font-extrabold",
							children: "View"
						})]
					})]
				})
			}) : null
		]
	});
}
function BasketScreen() {
	const s = useVimbiso();
	const tot = s.bidItems.reduce((a, i) => a + i.total, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "vn-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
				src: IMG.welcome,
				alt: "Market crates",
				overlay: "soft",
				className: "absolute inset-0 opacity-60"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
				left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
					onClick: () => s.go("bid"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
				}),
				title: "Your bid"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pad, {
				className: "relative z-[2]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-navy-2 p-[22px] text-white",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-white/60",
								children: "Total bid value"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-4xl font-extrabold text-gold-2",
								children: money(tot)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2.5 flex flex-wrap gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
										tone: "glass",
										children: [s.bidItems.length, " items"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: "gold",
										children: "Chitungwiza"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: "glass",
										children: "Now"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						variant: "outline",
						className: "mt-3",
						onClick: () => s.set({
							poolOpen: true,
							poolJoined: 3
						}),
						children: "Pool this bid with neighbours"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 mb-2.5 flex justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-extrabold tracking-[0.08em] text-mut uppercase",
							children: "Items in your bid"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "text-xs font-bold text-teal",
							onClick: () => s.go("bid"),
							children: "+ Add more"
						})]
					}),
					s.bidItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-10 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl font-extrabold text-navy",
								children: "Your bid is empty"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-mut",
								children: "Add items to tell traders exactly what you need."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
								variant: "teal",
								className: "mx-auto mt-4 w-auto px-6",
								onClick: () => s.go("bid"),
								children: "Build your bid"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3",
						children: s.bidItems.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: it.photo,
									alt: "",
									className: "h-12 w-12 rounded-sm object-cover"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-extrabold text-navy",
										children: it.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-[11px] text-mut",
										children: [
											it.qty,
											" ",
											it.unit,
											" · ",
											it.quality,
											" · ",
											money(it.price),
											"/unit"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-lg font-extrabold text-navy",
									children: money(it.total)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => s.set({ bidItems: s.bidItems.filter((_, j) => j !== i) }),
									className: "grid h-8 w-8 place-items-center rounded-full bg-err/10 text-err",
									"aria-label": "Remove",
									children: "×"
								})
							]
						}) }, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						className: "mt-4",
						disabled: s.bidItems.length === 0,
						onClick: () => s.go("radar"),
						children: "Find traders for this bid"
					})
				]
			})
		]
	});
}
function RadarScreen() {
	const s = useVimbiso();
	const [st, setSt] = (0, import_react.useState)("Waking the network…");
	const [km, setKm] = (0, import_react.useState)(.5);
	const [found, setFound] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const seq = [
			[.5, "Waking the network…"],
			[1, "Scanning 1 km…"],
			[2, "Expanding to 2 km…"],
			[3, "Checking 3 km traders…"],
			[5, "Widening to 5 km…"],
			[8, "8 km ring…"],
			[12, "12 km — final sweep…"]
		];
		const fnd = [
			{
				a: 35,
				r: .62,
				n: "Chipo"
			},
			{
				a: 150,
				r: .5,
				n: "John"
			},
			{
				a: 265,
				r: .74,
				n: "Mary"
			}
		];
		const timers = [];
		seq.forEach(([k, label], i) => {
			timers.push(window.setTimeout(() => {
				setKm(k);
				setSt(label);
			}, i * 620));
		});
		fnd.forEach((f, i) => {
			timers.push(window.setTimeout(() => {
				setFound((cur) => [...cur, {
					...f,
					lk: false
				}]);
				window.setTimeout(() => {
					setFound((cur) => cur.map((x) => x.n === f.n ? {
						...x,
						lk: true
					} : x));
				}, 420);
			}, 1400 + i * 900));
		});
		timers.push(window.setTimeout(() => s.go("offers"), 1400 + fnd.length * 900 + 1100));
		return () => timers.forEach(clearTimeout);
	}, [s]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "vn-screen p-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "vn-radar",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "vn-radar-map",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: IMG.radar,
						alt: "City at dusk while the network scans"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vn-radar-grid" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-[max(env(safe-area-inset-top),18px)] right-0 left-0 z-[6] px-[18px] text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold text-white/70",
						children: "Chitungwiza · scanning outward"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display mt-1 text-[22px] font-extrabold text-white",
						children: st
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "vn-dish",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vn-ring" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vn-ring r2" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vn-ring r3" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vn-ring r4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vn-pulse" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vn-pulse p2" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vn-pulse p3" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vn-cross absolute inset-0" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vn-sweep" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute top-1/2 left-1/2 z-[3] -translate-x-1/2 -translate-y-1/2 text-[9px] font-bold text-teal-2",
							style: { transform: `translate(-50%, -50%) scale(${.6 + km / 16})` },
							children: [km, " km"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vn-center" }),
						found.map((f) => {
							const x = 50 + Math.cos(f.a * Math.PI / 180) * f.r * 46;
							const y = 50 + Math.sin(f.a * Math.PI / 180) * f.r * 46;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("vn-blip in", f.lk && "lk"),
								style: {
									left: `${x}%`,
									top: `${y}%`
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [f.n, " · locked"] })
							}, f.n);
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute right-0 bottom-8 left-0 z-[6] text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-display text-[30px] font-extrabold text-gold-2",
							children: [found.filter((f) => f.lk).length, " traders"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-0.5 text-xs text-white/65",
							children: "looking for people who have what you need…"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => s.go("offers"),
							className: "mt-3.5 text-sm font-bold text-white/70",
							children: "Skip to offers"
						})
					]
				})
			]
		})
	});
}
function OffersScreen() {
	const s = useVimbiso();
	const [why, setWhy] = (0, import_react.useState)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "vn-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
				src: IMG.trader,
				alt: "Street food stall",
				overlay: "soft",
				className: "absolute inset-0 opacity-50"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
				left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
					onClick: () => s.go("home"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
				}),
				title: "Live offers",
				right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "live",
					children: "3 live"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pad, {
				className: "relative z-[2]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "bg-gradient-to-br from-navy to-navy-2 text-white",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-white/70",
								children: "Your bid"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-lg font-extrabold",
								children: "20kg tomatoes · Premium"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex flex-wrap gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-[9px] bg-white/12 px-2 py-1 text-[11px] font-bold text-[#cfe0f2]",
									children: "Chitungwiza"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-[9px] bg-gold/20 px-2 py-1 text-[11px] font-bold text-gold-2",
									children: "Your price: $15.00"
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3.5 mb-2 flex justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-extrabold tracking-[0.08em] text-mut uppercase",
							children: "Traders responding"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-mut",
							children: "market avg: $15.20/kg"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3",
						children: OFFERS.map((o) => {
							const fair = fairBadge(o.price);
							const sel = s.selectedOffer === o.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => s.set({ selectedOffer: o.id }),
								className: cn("w-full rounded-lg border-[1.5px] bg-white p-4 text-left shadow-[var(--shadow-card)] transition", sel ? "border-teal bg-teal/6 shadow-[0_0_0_3px_rgb(15_118_110_/_0.14)]" : "border-line"),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
												src: o.img,
												alt: o.name,
												verified: true
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-extrabold text-navy",
												children: o.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs text-mut",
												children: o.vid
											})] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
											tone: "gold",
											children: ["Trust ", o.trust]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-3 h-px bg-line" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-end justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "font-display text-2xl font-extrabold text-navy",
											children: money(o.price)
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("mt-1 inline-flex rounded-xs px-2 py-0.5 text-[10px] font-extrabold", fair.kind === "good" && "bg-ok/12 text-ok", fair.kind === "low" && "bg-teal/12 text-teal", fair.kind === "high" && "bg-warn/15 text-warn"),
											children: fair.label
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "text-right",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "text-xs text-mut",
												children: o.dist
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "mt-1 rounded-[9px] bg-navy/5 px-2 py-1 text-[11px] font-bold text-mut",
												children: o.ful
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, { value: o.rating }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs text-mut",
												children: o.rating
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
												tone: "teal",
												children: o.quality
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "mt-2 text-xs font-bold text-teal",
										onClick: (e) => {
											e.stopPropagation();
											setWhy(why === o.id ? null : o.id);
										},
										children: [
											"Why trust ",
											o.name.split(" ")[0],
											"?"
										]
									}),
									why === o.id ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 space-y-1 text-xs text-mut",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Identity verified" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
													className: "text-ok",
													children: "+10"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "186 completed trades" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
													className: "text-ok",
													children: "clean"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "0 disputes in 90 days" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
													className: "text-ok",
													children: "clean"
												})]
											})
										]
									}) : null
								]
							}, o.id);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						variant: "teal",
						className: "sticky bottom-[84px] mt-3.5",
						disabled: !s.selectedOffer,
						onClick: () => s.go("order"),
						children: "Choose trader"
					})
				]
			})
		]
	});
}
function OrderScreen() {
	const s = useVimbiso();
	const o = OFFERS.find((x) => x.id === s.selectedOffer) ?? OFFERS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "vn-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
			left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
				onClick: () => s.go("offers"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
			}),
			title: "Confirm order"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pad, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
							src: o.img,
							alt: o.name,
							verified: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-extrabold text-navy",
							children: o.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-mut",
							children: o.vid
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						tone: "gold",
						children: ["Trust ", o.trust]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-3 h-px bg-line" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "20kg tomatoes · Premium" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: money(o.price) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-mut",
						children: "Delivery fee"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "$1.00" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-2 h-px bg-line" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-extrabold text-navy",
						children: "Total"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-[22px] font-extrabold text-navy",
						children: money(o.price + 1)
					})]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "mt-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-extrabold tracking-[0.08em] text-mut uppercase",
						children: "Payment"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2.5 grid gap-2",
						children: [
							["cash", "Cash on handover"],
							["ecocash", "EcoCash"],
							["onemoney", "OneMoney"]
						].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
							active: s.payMethod === id,
							onClick: () => s.set({ payMethod: id }),
							children: label
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2.5 text-xs text-mut",
						children: "Vimbiso verifies payment with the provider before any order is marked paid."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
				className: "mt-3.5",
				onClick: () => {
					s.toastMsg("Order placed");
					s.set({ orderStep: 2 });
					s.go("status");
				},
				children: "Place order"
			})
		] })]
	});
}
function StatusScreen() {
	const s = useVimbiso();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "vn-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
				src: IMG.road,
				alt: "",
				overlay: "soft",
				className: "absolute inset-0 opacity-40"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
				left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
					onClick: () => s.goHome(),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
				}),
				title: "#VIM00000182",
				right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "ok",
					children: [
						"Accepted",
						"Paid",
						"Preparing",
						"Ready",
						"Delivering",
						"Completed"
					][s.orderStep - 1] ?? "Completed"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pad, {
				className: "relative z-[2]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
									src: PORTRAITS.john,
									alt: "John Vegetables",
									verified: true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-extrabold text-navy",
									children: "John Vegetables"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-mut",
									children: "Ready in ~30 min"
								})] })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "gold",
								children: "Trust 94"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-3 h-px bg-line" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-mut",
								children: "Total paid"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "$16.00" })]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "mt-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-extrabold tracking-[0.08em] text-mut uppercase",
							children: "Progress"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid gap-0.5",
							children: [
								"Order accepted",
								"Payment confirmed",
								"Preparing",
								"Ready",
								"Out for delivery",
								"Completed"
							].map((st, i) => {
								const state = i < s.orderStep ? "dn" : i === s.orderStep ? "cu" : "wt";
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-[26px_1fr] gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative grid justify-items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "absolute top-0 bottom-0 w-0.5 bg-line" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("relative z-[1] mt-0.5 grid h-[18px] w-[18px] place-items-center rounded-full border-2 text-[10px] font-black text-white", state === "dn" && "border-ok bg-ok", state === "cu" && "border-teal bg-teal", state === "wt" && "border-line bg-white"),
											children: state === "dn" ? "✓" : ""
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "pb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: cn("text-sm font-extrabold", state === "wt" ? "text-mut" : "text-navy"),
											children: st
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-xs text-mut",
											children: state === "dn" ? "Done" : state === "cu" ? "In progress" : "Waiting"
										})]
									})]
								}, st);
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						variant: "teal",
						className: "mt-3.5",
						onClick: () => {
							if (s.orderStep < 6) s.set({ orderStep: s.orderStep + 1 });
							s.toastMsg("Order updated");
						},
						children: "Simulate next update"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						className: "mt-2",
						onClick: () => s.go("review"),
						children: "Mark received & review"
					})
				]
			})
		]
	});
}
function ReviewScreen() {
	const s = useVimbiso();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "vn-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
			left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
				onClick: () => s.go("status"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
			}),
			title: "Rate trade"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pad, {
			className: "pt-6 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
					src: PORTRAITS.john,
					alt: "John",
					size: "xl"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-3.5 text-[26px] font-extrabold text-navy",
					children: "How was your trade?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-mut",
					children: "John Vegetables · VMB-004821"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "my-5 flex justify-center gap-1.5",
					children: [
						1,
						2,
						3,
						4,
						5
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => s.set({ reviewStars: i }),
						className: "text-[34px] leading-none",
						style: { color: i <= s.reviewStars ? "var(--color-gold)" : "#D9DEE6" },
						children: "★"
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					className: "min-h-[88px] w-full rounded-sm border-[1.5px] border-line bg-white p-3.5 outline-none focus:border-teal",
					placeholder: "Fast, friendly, good quality… (optional)",
					value: s.reviewNote,
					onChange: (e) => s.set({ reviewNote: e.target.value })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
					className: "mt-3.5",
					onClick: () => {
						s.toastMsg("Thanks for the review");
						s.go("home");
					},
					children: "Submit review"
				})
			]
		})]
	});
}
function TradeScreen() {
	const s = useVimbiso();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "vn-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
				src: IMG.trader,
				alt: "Busy street stall",
				overlay: "header",
				className: "mid"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-[2] -mt-[220px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-14 items-center justify-between px-4 pt-[max(env(safe-area-inset-top),8px)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { dark: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
						light: true,
						onClick: () => s.go("profile"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-[18px]" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-[18px] pt-2 pb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] font-semibold text-white/80",
						children: "Trader mode"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-[26px] font-extrabold text-white",
						children: "Ready to trade?"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pad, {
				className: "-mt-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							s.set({ online: !s.online });
							s.toastMsg(s.online ? "You are offline" : "You are now online");
						},
						className: cn("relative w-full overflow-hidden rounded-[26px] px-[18px] py-[26px] text-center text-white shadow-[var(--shadow-lift)]", s.online ? "bg-gradient-to-br from-teal to-teal-3" : "bg-gradient-to-br from-navy-2 to-navy"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative mx-auto mb-3.5 grid h-[84px] w-[84px] place-items-center rounded-full bg-white/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { className: cn("block h-[34px] w-[34px] rounded-full", s.online ? "bg-white shadow-[0_0_24px_white]" : "bg-[#7c8aa0]") })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-[26px] font-extrabold",
								children: s.online ? "ONLINE" : "GO ONLINE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-[13px] text-white/80",
								children: s.online ? "You're available for new requests" : "Tap to start receiving buyer requests"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3.5 grid grid-cols-2 gap-3",
						children: [
							["94", "Trust Score"],
							["4.8", "Rating · 126 reviews"],
							["186", "Completed trades"],
							[s.online ? "1" : "0", "Live requests"]
						].map(([v, k]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-[26px] leading-none font-extrabold text-navy",
							children: v
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-[11px] font-bold text-mut",
							children: k
						})] }, k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						className: "mt-3.5 border-[1.5px] border-teal/30 bg-gradient-to-br from-teal/6 to-white",
						onClick: () => s.go("incoming"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									tone: "live",
									children: "new"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1.5 font-extrabold text-navy",
									children: "20kg tomatoes · Premium · Chitungwiza"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-mut",
									children: "Buyer bid: $15.00 · 2.1 km away"
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-sm bg-teal px-3.5 py-2 text-[13px] font-extrabold text-white",
								children: "Offer"
							})]
						})
					})
				]
			})
		]
	});
}
function IncomingScreen() {
	const s = useVimbiso();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "vn-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
			left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
				onClick: () => s.go("trade"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
			}),
			title: "Buyer request",
			right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				tone: "live",
				children: "live"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pad, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "border-[1.5px] border-teal/30 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto grid h-8 w-8 place-items-center rounded-full bg-teal shadow-[0_0_18px_rgb(11_211_194_/_0.6)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display mt-2 text-lg font-extrabold text-teal",
						children: "Matched to you in real time"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-mut",
						children: "You're online and within range"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "mt-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-extrabold tracking-[0.08em] text-mut uppercase",
						children: "Buyer needs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display mt-1 text-[22px] font-extrabold text-navy",
						children: "20kg tomatoes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1.5 flex gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "gold",
							children: "Premium quality"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "teal",
							children: "Buyer bids $15.00"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-3 h-px bg-line" }),
					[
						["Location", "Chitungwiza"],
						["When", "Now"],
						["Distance", "2.1 km"]
					].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-mut",
							children: k
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: v })]
					}, k))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
				variant: "teal",
				className: "mt-3.5",
				onClick: () => s.go("makeoffer"),
				children: "Make offer"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
				variant: "ghost",
				className: "mt-2",
				onClick: () => s.go("trade"),
				children: "Not interested"
			})
		] })]
	});
}
function MakeOfferScreen() {
	const s = useVimbiso();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "vn-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
			left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
				onClick: () => s.go("incoming"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
			}),
			title: "Make offer"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pad, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-mut",
					children: "Responding to"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-lg font-extrabold text-navy",
					children: "20kg tomatoes · Premium · Chitungwiza"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs text-mut",
					children: "Buyer's bid: $15.00"
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] font-extrabold tracking-[0.08em] text-mut uppercase",
						children: "Respond to the bid"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
							className: "flex-1 justify-center",
							active: s.counterMode === "accept",
							onClick: () => s.set({ counterMode: "accept" }),
							children: "Accept $15.00"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
							className: "flex-1 justify-center",
							active: s.counterMode === "counter",
							onClick: () => s.set({ counterMode: "counter" }),
							children: "Counter"
						})]
					}),
					s.counterMode === "counter" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-mut",
									children: "Your counter price"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", {
									className: "font-display text-2xl text-navy",
									children: ["$", s.counterPrice.toFixed(2)]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "range",
								className: "vn-range mt-2",
								min: 15,
								max: 20,
								step: .5,
								value: s.counterPrice,
								onChange: (e) => s.set({ counterPrice: parseFloat(e.target.value) })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-xs text-mut",
								children: "Buyer can accept your counter or walk away."
							})
						]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Quantity available",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, { defaultValue: "20kg" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] font-extrabold tracking-[0.08em] text-mut uppercase",
					children: "Fulfilment"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
						active: s.offerFulfill === "delivery",
						onClick: () => s.set({ offerFulfill: "delivery" }),
						children: "Delivery available"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
						active: s.offerFulfill === "collection",
						onClick: () => s.set({ offerFulfill: "collection" }),
						children: "Collection only"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
				variant: "teal",
				className: "mt-3.5",
				onClick: () => {
					s.toastMsg("Offer sent to buyer");
					s.go("trade");
				},
				children: "Send offer"
			})
		] })]
	});
}
function DelDashScreen() {
	const s = useVimbiso();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "vn-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
				src: IMG.delivery,
				alt: "Motorcycle courier on the road",
				overlay: "header",
				className: "mid"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-[2] -mt-[220px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-14 items-center justify-between px-4 pt-[max(env(safe-area-inset-top),8px)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { dark: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
						light: true,
						onClick: () => s.go("profile"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-[18px]" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-[18px] pt-2 pb-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] font-semibold text-white/80",
						children: "Delivery mode"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-[26px] font-extrabold text-white",
						children: "Ready to ride?"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pad, {
				className: "-mt-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							s.set({ delOnline: !s.delOnline });
							s.toastMsg(s.delOnline ? "You are offline" : "You are now available");
						},
						className: cn("w-full rounded-[26px] px-[18px] py-[26px] text-center text-white shadow-[var(--shadow-lift)]", s.delOnline ? "bg-gradient-to-br from-teal to-teal-3" : "bg-gradient-to-br from-navy-2 to-navy"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto mb-3 grid h-[84px] w-[84px] place-items-center rounded-full bg-white/10",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bike, { className: "size-8" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-[26px] font-extrabold",
								children: s.delOnline ? "AVAILABLE" : "GO AVAILABLE"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-[13px] text-white/80",
								children: s.delOnline ? "You're receiving delivery jobs" : "Tap to start receiving jobs"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3.5 grid grid-cols-2 gap-3",
						children: [
							["91", "Delivery Trust"],
							["4.9", "Rating · 84 deliveries"],
							["247", "Completed jobs"],
							[s.delOnline ? "4" : "0", "Jobs nearby"]
						].map(([v, k]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-[26px] leading-none font-extrabold text-navy",
							children: v
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-[11px] font-bold text-mut",
							children: k
						})] }, k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
						className: "mt-3.5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[11px] font-extrabold tracking-[0.08em] text-mut uppercase",
									children: "Your vehicle"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-1 font-extrabold text-navy",
									children: [
										s.make,
										" · ",
										s.vehicleColor
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-mut",
									children: [
										s.plate,
										" · ",
										s.insurance,
										" insured"
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								tone: "ok",
								children: "Verified"
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						className: "mt-3.5",
						onClick: () => s.go("delRadar"),
						children: "Find delivery jobs nearby"
					}),
					s.delStep > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "mt-3 border-[1.5px] border-gold/30 bg-gradient-to-br from-gold/6 to-white",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
										tone: "warn",
										children: "active"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1.5 font-extrabold text-navy",
										children: "20kg tomatoes → 47 Chiremba Ave"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-mut",
										children: "Pickup: Mbare Musika · Drop: Avondale"
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-right",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-[22px] font-extrabold text-ok",
										children: "$3.50"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-mut",
										children: "4.2 km"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 grid gap-1",
								children: [
									"Accepted",
									"At pickup",
									"Picked up",
									"In transit",
									"Delivered"
								].map((st, i) => {
									const state = i < s.delStep ? "dn" : i === s.delStep ? "cu" : "wt";
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-sm",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: cn("grid h-4 w-4 place-items-center rounded-full text-[9px] font-black text-white", state === "dn" && "bg-ok", state === "cu" && "bg-teal", state === "wt" && "bg-line"),
											children: state === "dn" ? "✓" : ""
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: state === "wt" ? "text-mut" : "font-bold text-navy",
											children: st
										})]
									}, st);
								})
							}),
							s.jobPhotos.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center gap-2 rounded-sm bg-paper p-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative grid h-[52px] w-[52px] place-items-center overflow-hidden rounded-[10px] bg-navy-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: IMG.tomatoes,
										alt: "",
										className: "h-full w-full object-cover opacity-80"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute right-1 bottom-1 rounded bg-black/60 px-1 text-[7px] text-white",
										children: p.time
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-[13px] font-extrabold text-navy",
									children: [p.type === "pickup" ? "Pickup" : "Drop-off", " photo captured"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-mut",
									children: "GPS -17.8292, 31.0522 · timestamped"
								})] })]
							}, i)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
								variant: "teal",
								className: "mt-3",
								onClick: () => {
									if (s.delStep < 5) s.set({ delStep: s.delStep + 1 });
									if (s.delStep >= 4) s.toastMsg("Delivery completed · $3.50 earned");
								},
								children: "Advance delivery"
							})
						]
					}) : null
				]
			})
		]
	});
}
function DelRadarScreen() {
	const s = useVimbiso();
	const [st, setSt] = (0, import_react.useState)("Searching nearby deliveries…");
	const [km, setKm] = (0, import_react.useState)(.5);
	const [found, setFound] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		const seq = [
			[.5, "Searching nearby…"],
			[1, "1 km radius…"],
			[2, "2 km…"],
			[3, "3 km…"],
			[5, "5 km…"],
			[8, "8 km — wide scan…"]
		];
		const jobs = [
			{
				a: 40,
				r: .55,
				n: "$3.50"
			},
			{
				a: 160,
				r: .65,
				n: "$5.00"
			},
			{
				a: 280,
				r: .45,
				n: "$2.50"
			},
			{
				a: 200,
				r: .78,
				n: "$4.00"
			}
		];
		const timers = [];
		seq.forEach(([k, label], i) => timers.push(window.setTimeout(() => {
			setKm(k);
			setSt(label);
		}, i * 550)));
		jobs.forEach((j, i) => {
			timers.push(window.setTimeout(() => {
				setFound((cur) => [...cur, {
					...j,
					lk: false
				}]);
				window.setTimeout(() => setFound((cur) => cur.map((x) => x.n === j.n ? {
					...x,
					lk: true
				} : x)), 420);
			}, 1200 + i * 800));
		});
		timers.push(window.setTimeout(() => s.go("delJobs"), 1200 + jobs.length * 800 + 1e3));
		return () => timers.forEach(clearTimeout);
	}, [s]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "vn-screen p-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "vn-radar",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "vn-radar-map",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: IMG.road,
						alt: "Road network while scanning for jobs"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vn-radar-grid" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-[max(env(safe-area-inset-top),18px)] right-0 left-0 z-[6] px-[18px] text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold text-white/70",
						children: "VMB-DEL-003217 · scanning for jobs"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display mt-1 text-[22px] font-extrabold text-white",
						children: st
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "vn-dish",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vn-ring" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vn-ring r2" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vn-ring r3" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vn-ring r4" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vn-pulse" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vn-pulse p2" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vn-pulse p3" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vn-cross absolute inset-0" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vn-sweep" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute top-1/2 left-1/2 z-[3] text-[9px] font-bold text-teal-2",
							style: { transform: `translate(-50%, -50%) scale(${.6 + km / 12})` },
							children: [km, " km"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "vn-center" }),
						found.map((f) => {
							const x = 50 + Math.cos(f.a * Math.PI / 180) * f.r * 46;
							const y = 50 + Math.sin(f.a * Math.PI / 180) * f.r * 46;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("vn-blip in", f.lk && "lk"),
								style: {
									left: `${x}%`,
									top: `${y}%`
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f.n })
							}, f.n);
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute right-0 bottom-8 left-0 z-[6] text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-display text-[30px] font-extrabold text-gold-2",
							children: [found.filter((f) => f.lk).length, " jobs"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-white/65",
							children: "looking for deliveries near you…"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => s.go("delJobs"),
							className: "mt-3.5 text-sm font-bold text-white/70",
							children: "View jobs"
						})
					]
				})
			]
		})
	});
}
function DelJobsScreen() {
	const s = useVimbiso();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "vn-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
			left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
				onClick: () => s.go("delDash"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
			}),
			title: "Jobs nearby",
			right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				tone: "live",
				children: "4 live"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pad, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3",
			children: JOBS.map((j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				onClick: () => s.go("delJob"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "live",
							children: "live"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1.5 text-[15px] font-extrabold text-navy",
							children: j.item
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "font-display text-[22px] font-extrabold text-ok",
							children: ["$", j.pay.toFixed(2)]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2.5 flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "h-2.5 w-2.5 rounded-full bg-teal" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "h-0.5 flex-1 bg-[repeating-linear-gradient(90deg,var(--color-teal)_0_6px,transparent_6px_12px)]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "h-2.5 w-2.5 rounded-full bg-gold" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1 flex justify-between text-xs text-mut",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							j.from,
							" → ",
							j.to
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: j.dist })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-wrap gap-1.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								tone: "gold",
								children: ["Buyer ", j.buyerTrust]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
								tone: "gold",
								children: ["Trader ", j.traderTrust]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: j.eta })
						]
					})
				]
			}, j.id))
		}) })]
	});
}
function DelJobScreen() {
	const s = useVimbiso();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "vn-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
				src: IMG.delivery,
				alt: "",
				overlay: "soft",
				className: "absolute inset-0 opacity-40"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
				left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
					onClick: () => s.go("delJobs"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
				}),
				title: "Delivery job",
				right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					tone: "ok",
					children: "$3.50"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pad, {
				className: "relative z-[2]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] font-extrabold tracking-[0.08em] text-mut uppercase",
							children: "Route"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2.5 flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "mt-1.5 h-2.5 w-2.5 rounded-full bg-teal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-extrabold text-navy",
								children: "Mbare Musika"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-mut",
								children: "Pickup · 09:30"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ml-1 h-6 border-l-2 border-dashed border-teal" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "mt-1.5 h-2.5 w-2.5 rounded-full bg-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-extrabold text-navy",
								children: "47 Chiremba Ave, Avondale"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-mut",
								children: "Drop · by 10:15"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-3 h-px bg-line" }),
						[
							["Item", "20kg tomatoes (Premium)"],
							["Distance", "4.2 km"],
							["Payout", "$3.50"]
						].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-mut",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: v })]
						}, k))
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "mt-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-extrabold tracking-[0.08em] text-mut uppercase",
								children: "Meet at a safe point (optional)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 flex flex-wrap gap-2",
								children: [
									"Shell station Avondale",
									"Mbare gate 4",
									"Verified police point"
								].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choice, {
									className: "w-auto",
									active: s.safePoint === p,
									onClick: () => s.set({ safePoint: p }),
									children: p
								}, p))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs text-mut",
								children: "Public, monitored handover spots reduce disputes."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "mt-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-extrabold tracking-[0.08em] text-mut uppercase",
								children: "Photo proof"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-xs text-mut",
								children: "Snap the item at pickup and drop-off. Timestamped, GPS-stamped."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
								variant: "outline",
								className: "mt-2.5",
								onClick: () => {
									const time = (/* @__PURE__ */ new Date()).toLocaleTimeString([], {
										hour: "2-digit",
										minute: "2-digit"
									});
									s.set({ jobPhotos: [{
										type: "pickup",
										time
									}, ...s.jobPhotos] });
									s.toastMsg("Photo proof saved");
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "size-4" }), " Capture pickup photo"]
								})
							}),
							s.jobPhotos.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center gap-2 rounded-sm bg-paper p-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: IMG.tomatoes,
									alt: "",
									className: "h-[52px] w-[52px] rounded-[10px] object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[13px] font-extrabold text-navy",
									children: "Pickup photo captured"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-mut",
									children: [p.time, " · GPS stamped"]
								})] })]
							}, i))
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						variant: "teal",
						className: "mt-3.5",
						onClick: () => {
							s.set({ delStep: 1 });
							s.toastMsg("Job accepted");
							s.go("delDash");
						},
						children: "Accept this job"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
						variant: "ghost",
						className: "mt-2",
						onClick: () => s.go("delJobs"),
						children: "Skip"
					})
				]
			})
		]
	});
}
function ProfileScreen() {
	const s = useVimbiso();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "vn-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
			src: IMG.profile,
			alt: "Preparing food in a working kitchen",
			overlay: "header",
			className: "hero"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-[2] -mt-12 text-center px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
					ghost: true,
					left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
						light: true,
						onClick: () => s.goHome(),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: PORTRAITS.tendai,
					alt: s.name,
					className: "mx-auto h-[84px] w-[84px] rounded-3xl border-4 border-white object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-2.5 text-[26px] font-extrabold text-navy",
					children: s.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-mut",
					children: [s.city, " · Buyer & Trader"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex justify-center gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "teal",
							children: "Verified"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone: "gold",
							children: "Trust 94"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "100-trade badge" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "vn-idcard mt-4 text-left",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] font-extrabold tracking-[0.14em] text-gold-2",
							children: "VIMBISO ID"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-mono text-[28px] font-extrabold",
							children: "VMB-004821"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-extrabold",
								children: "186 transactions"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-white/70",
								children: "4.8 avg rating"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/qr-id.png",
								alt: "ID QR",
								className: "h-16 w-16 rounded-xs bg-white p-1"
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3.5 grid grid-cols-2 gap-3 text-left",
					children: [
						["94", "Trust Score"],
						["4.8", "Rating"],
						["186", "Completed"],
						["Online", "Status"]
					].map(([v, k]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-[26px] leading-none font-extrabold text-navy",
						children: v
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-[11px] font-bold text-mut",
						children: k
					})] }, k))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
					variant: "outline",
					className: "mt-3.5",
					onClick: () => s.go("welcome"),
					children: "Sign out"
				})
			]
		})]
	});
}
function AdminScreen() {
	const s = useVimbiso();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "vn-screen",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {
			left: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {}),
			right: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
				onClick: () => s.go("welcome"),
				children: "×"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pad, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-[28px] font-extrabold text-navy",
				children: "Operations"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid grid-cols-2 gap-3",
				children: [
					["1284", "Users"],
					["312", "Traders"],
					["47", "Online now"],
					["18", "Active requests"],
					["9431", "Transactions"],
					["$142k", "Volume"]
				].map(([v, k]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-[26px] leading-none font-extrabold text-navy",
					children: v
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 text-[11px] font-bold text-mut",
					children: k
				})] }, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "mt-3.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] font-extrabold tracking-[0.08em] text-mut uppercase",
					children: "Live feed"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2.5 grid gap-2",
					children: [
						[
							"Group buy pooled · 45kg tomatoes",
							"matched",
							"teal"
						],
						[
							"Delivery job accepted · Avondale",
							"in transit",
							"ok"
						],
						[
							"USSD request · *123# · Bindura",
							"queued",
							"navy"
						],
						[
							"Dispute #VIM00000174",
							"review",
							"err"
						]
					].map(([t, b, tone]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-mut",
							children: t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							tone,
							children: b
						})]
					}, t))
				})]
			})
		] })]
	});
}
var SCREENS = {
	splash: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SplashScreen, {}),
	onboard: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OnboardScreen, {}),
	welcome: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WelcomeScreen, {}),
	ussd: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UssdScreen, {}),
	signin: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignInScreen, {}),
	otp: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OtpScreen, {}),
	signup: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SignupScreen, {}),
	identity: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdentityScreen, {}),
	delreg: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DelRegScreen, {}),
	delid: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DelIdScreen, {}),
	home: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeScreen, {}),
	bid: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BidScreen, {}),
	basket: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BasketScreen, {}),
	radar: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadarScreen, {}),
	offers: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OffersScreen, {}),
	order: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderScreen, {}),
	status: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusScreen, {}),
	review: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewScreen, {}),
	trade: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TradeScreen, {}),
	incoming: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IncomingScreen, {}),
	makeoffer: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MakeOfferScreen, {}),
	delDash: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DelDashScreen, {}),
	delRadar: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DelRadarScreen, {}),
	delJobs: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DelJobsScreen, {}),
	delJob: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DelJobScreen, {}),
	profile: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileScreen, {}),
	admin: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminScreen, {})
};
var NAV = {
	buyer: [
		[
			"home",
			"Home",
			House
		],
		[
			"bid",
			"Bid",
			ShoppingBag
		],
		[
			"status",
			"Orders",
			Package
		],
		[
			"profile",
			"Profile",
			User
		]
	],
	trader: [
		[
			"trade",
			"Trade",
			Zap
		],
		[
			"incoming",
			"Requests",
			Inbox
		],
		[
			"status",
			"Orders",
			Package
		],
		[
			"profile",
			"Profile",
			User
		]
	],
	delivery: [
		[
			"delDash",
			"Drive",
			Bike
		],
		[
			"delJobs",
			"Jobs",
			ClipboardList
		],
		[
			"status",
			"History",
			Package
		],
		[
			"profile",
			"Profile",
			User
		]
	]
};
function VimbisoApp() {
	const screen = useVimbiso((s) => s.screen);
	const role = useVimbiso((s) => s.role);
	const lite = useVimbiso((s) => s.lite);
	const toast = useVimbiso((s) => s.toast);
	const voiceOn = useVimbiso((s) => s.voiceOn);
	const poolOpen = useVimbiso((s) => s.poolOpen);
	const go = useVimbiso((s) => s.go);
	(0, import_react.useEffect)(() => {
		document.body.classList.toggle("lite", lite);
		return () => document.body.classList.remove("lite");
	}, [lite]);
	const Screen = SCREENS[screen];
	const hideNav = HIDE_NAV.includes(screen) || role === "admin";
	const nav = NAV[role === "trader" ? "trader" : role === "delivery" ? "delivery" : "buyer"];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "vn-root",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "vn-phone",
			id: "app",
			children: [
				lite ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lite-pill",
					children: "LITE MODE — data saver on"
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Screen, {}),
				!hideNav ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "vn-nav",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-4 px-2 pt-2 pb-1",
						children: nav.map(([id, label, Icon]) => {
							const active = screen === id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => go(id),
								className: cn("grid place-items-center gap-0.5 rounded-[14px] py-2 text-[10.5px] font-bold transition", active ? "text-teal" : "text-mut hover:text-navy"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-[22px]",
									strokeWidth: active ? 2.4 : 2
								}), label]
							}, id);
						})
					})
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("vn-toast", toast && "on"),
					children: toast?.message
				}),
				voiceOn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoiceOverlay, {}) : null,
				poolOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PoolSheet, {}) : null
			]
		})
	});
}
function VoiceOverlay() {
	const s = useVimbiso();
	(0, import_react.useEffect)(() => {
		const phrases = [
			"20kg tomatoes",
			"maize meal 10kg",
			"phone charger",
			"plumber near me"
		];
		let i = 0;
		const t = window.setInterval(() => {
			const el = document.getElementById("voiceTxt");
			if (el) el.textContent = phrases[i % phrases.length] + "…";
			i += 1;
		}, 450);
		const done = window.setTimeout(() => {
			s.set({
				voiceOn: false,
				search: "20kg tomatoes"
			});
			s.toastMsg("Heard: 20kg tomatoes");
		}, 2200);
		return () => {
			clearInterval(t);
			clearTimeout(done);
		};
	}, [s]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[80] flex flex-col items-center justify-center bg-navy-3/92 px-6 text-center text-white backdrop-blur-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid h-16 w-16 place-items-center rounded-full bg-teal",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					width: "28",
					height: "28",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "white",
					strokeWidth: "2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19 10v2a7 7 0 0 1-14 0v-2" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "12",
							x2: "12",
							y1: "19",
							y2: "22"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-3.5 text-xl font-extrabold",
				children: "Listening…"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-white/70",
				children: "Say what you need in English, Shona or Ndebele"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex h-[60px] items-end gap-1.5",
				children: Array.from({ length: 7 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
					className: "w-1.5 rounded-full bg-teal-3",
					style: {
						animation: "vn-wv 1s ease-in-out infinite",
						animationDelay: `${i * .1}s`,
						height: 12
					}
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: "voiceTxt",
				className: "font-display mt-4 text-[22px] font-extrabold text-teal-3",
				children: "…"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `@keyframes vn-wv{0%,100%{height:12px}50%{height:54px}}` })
		]
	});
}
function PoolSheet() {
	const s = useVimbiso();
	const pct = Math.min(100, 25 + (s.poolJoined - 3) * 18);
	const price = (15 - (s.poolJoined - 3) * .8).toFixed(2);
	const faces = [
		PORTRAITS.rudo,
		PORTRAITS.farai,
		PORTRAITS.chipo,
		PORTRAITS.john,
		PORTRAITS.mary,
		PORTRAITS.tinashe,
		PORTRAITS.tendai
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[85] flex items-end justify-center bg-navy-3/60 backdrop-blur-sm",
		onClick: (e) => {
			if (e.target === e.currentTarget) s.set({ poolOpen: false });
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-[430px] rounded-t-[28px] bg-white px-5 pt-6 pb-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-extrabold text-navy",
						children: "Pool this bid"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "text-xl",
						onClick: () => s.set({ poolOpen: false }),
						children: "×"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 text-sm text-mut",
					children: "Invite neighbours to buy together. Bigger order = lower price. This is how mukando already works — now on Vimbiso."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto mt-4 grid h-[120px] w-[120px] place-items-center rounded-full",
					style: { background: `conic-gradient(var(--color-teal) ${pct}%, rgb(14 42 71 / 0.08) 0)` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-2.5 rounded-full bg-white" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative font-display text-[26px] font-extrabold text-navy",
						children: [pct, "%"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "my-3 flex justify-center",
					children: faces.slice(0, s.poolJoined).map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src,
						alt: "",
						className: "-ml-2.5 h-[38px] w-[38px] rounded-full border-2 border-white object-cover first:ml-0"
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-mut",
								children: "You"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "20kg @ $15.00" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-mut",
								children: "Neighbours joined"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: s.poolJoined - 1 })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-line" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-extrabold text-navy",
								children: "New price / kg"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("b", {
								className: "font-display text-xl text-ok",
								children: ["$", price]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
					variant: "teal",
					className: "mt-4",
					onClick: () => {
						if (s.poolJoined < 7) {
							s.set({ poolJoined: s.poolJoined + 1 });
							s.toastMsg("Another neighbour joined");
						} else s.toastMsg("Pool is full — great bulk price");
					},
					children: "Invite more neighbours"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
					className: "mt-2",
					onClick: () => {
						s.set({ poolOpen: false });
						s.go("radar");
					},
					children: "Find traders at pooled price"
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VimbisoApp, {});
}
//#endregion
export { Home as component };
