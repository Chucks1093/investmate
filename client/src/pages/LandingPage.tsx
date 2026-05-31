import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, ChevronRight } from 'lucide-react';

const fadeUp = {
	hidden: { opacity: 0, y: 20 },
	visible: (i = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
	}),
};

const FEATURES = [
	{
		label: 'Research',
		title: 'Market intelligence on demand',
		body: 'Ask about any stock, sector, or market condition. InvestMate pulls live data, explains the context, and gives you a clear recommendation based on your risk profile.',
	},
	{
		label: 'Planning',
		title: 'Risk adjusted investment plans',
		body: 'Tell InvestMate what you want to do with your money and it will build a diversified plan with expected returns, downside scenarios, and reasoning in plain language.',
	},
	{
		label: 'Approval',
		title: 'Nothing moves without your say',
		body: 'Every proposed trade requires your explicit confirmation. InvestMate shows you what it wants to do and why, then waits for your reply before anything is executed.',
	},
	{
		label: 'Tracking',
		title: 'Portfolio reports when you ask',
		body: 'Request a portfolio snapshot any time. Get your current positions, unrealised gains, performance since inception, and the next suggested action in a single message.',
	},
];

const STEPS = [
	{
		n: '1',
		title: 'Send a message',
		body: 'Open WhatsApp or Telegram and tell InvestMate what you want to do with your money, your risk appetite, or just ask what to invest in.',
	},
	{
		n: '2',
		title: 'Review your plan',
		body: 'Receive a full investment plan with reasoning, risk rating, and projected returns. Every number is explained in plain English so you understand what you are approving.',
	},
	{
		n: '3',
		title: 'Approve and track',
		body: 'Reply to confirm. InvestMate executes the trade and follows up with regular portfolio updates. Ask for a report any time with a single message.',
	},
];

const CHAT = [
	{ from: 'user', text: "I have $500 spare. What should I do with it this month?" },
	{
		from: 'bot',
		text: "Based on your moderate risk profile, here is my plan:\n\n60% VOO (S&P 500 ETF)\n30% QQQ (Nasdaq 100)\n10% held as cash reserve\n\nExpected 12 month return: 9 to 12%. Downside scenario: 8% drawdown. Want me to place this?",
	},
	{ from: 'user', text: "Yes, go ahead." },
	{ from: 'bot', text: "Done. Trade executed. I will send you a portfolio update this Sunday. Your balance is now invested." },
];

export default function LandingPage() {
	const [email, setEmail] = useState('');
	const [submitted, setSubmitted] = useState(false);

	function handleWaitlist(e: React.FormEvent) {
		e.preventDefault();
		if (!email.trim()) return;
		setSubmitted(true);
	}

	return (
		<div className="bg-white text-slate-900 font-inter antialiased selection:bg-indigo-100">

			{/* ── NAV ─────────────────────────────────────── */}
			<header className="fixed inset-x-0 top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur-sm">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
					<div className="flex items-center gap-2.5">
						<span className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900">
							<TrendingUp size={13} className="text-white" />
						</span>
						<span className="text-sm font-semibold tracking-tight">InvestMate</span>
					</div>
					<nav className="hidden items-center gap-7 text-sm text-slate-500 sm:flex">
						<a href="#features" className="transition hover:text-slate-900">Features</a>
						<a href="#how-it-works" className="transition hover:text-slate-900">How it works</a>
					</nav>
					<a
						href="#waitlist"
						className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-700"
					>
						Join waitlist
					</a>
				</div>
			</header>

			{/* ── HERO ────────────────────────────────────── */}
			<section className="relative min-h-screen overflow-hidden pt-24">
				{/* dot grid */}
				<div
					className="pointer-events-none absolute inset-0"
					style={{
						backgroundImage: `radial-gradient(circle, #cbd5e1 1px, transparent 1px)`,
						backgroundSize: '28px 28px',
						opacity: 0.45,
					}}
				/>
				{/* soft wash */}
				<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/70 to-white" />

				<div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:py-28">

					{/* left */}
					<div>
						<motion.div
							variants={fadeUp} initial="hidden" animate="visible" custom={0}
							className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
						>
							<span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
							Now accepting early access applications
						</motion.div>

						<motion.h1
							variants={fadeUp} initial="hidden" animate="visible" custom={1}
							className="text-4xl font-bold leading-[1.08] tracking-[-0.03em] text-slate-900 sm:text-5xl md:text-6xl font-grotesque"
						>
							Invest smarter<br />
							<span className="text-slate-400">by chat.</span>
						</motion.h1>

						<motion.p
							variants={fadeUp} initial="hidden" animate="visible" custom={2}
							className="mt-5 max-w-md text-base leading-relaxed text-slate-500"
						>
							InvestMate is your AI investment agent inside WhatsApp and Telegram.
							Ask what to invest in, get a clear plan, approve the move, and track
							your portfolio without leaving chat.
						</motion.p>

						<motion.div
							variants={fadeUp} initial="hidden" animate="visible" custom={3}
							className="mt-8 flex flex-wrap items-center gap-3"
						>
							<a
								href="#waitlist"
								className="flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
							>
								Get early access <ArrowRight size={14} />
							</a>
							<a
								href="#how-it-works"
								className="flex items-center gap-1 text-sm font-medium text-slate-500 transition hover:text-slate-900"
							>
								See how it works <ChevronRight size={14} />
							</a>
						</motion.div>

						<motion.div
							variants={fadeUp} initial="hidden" animate="visible" custom={4}
							className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-400"
						>
							{['No funds held', 'Approval before every trade', 'Paper trading during beta'].map(t => (
								<span key={t} className="flex items-center gap-1.5">
									<CheckCircle2 size={12} className="text-emerald-500" />
									{t}
								</span>
							))}
						</motion.div>
					</div>

					{/* right — phone mockup */}
					<motion.div
						variants={fadeUp} initial="hidden" animate="visible" custom={3}
						className="flex justify-center lg:justify-end"
					>
						<div className="relative w-72 sm:w-80">
							{/* phone shell */}
							<div className="relative rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] ring-1 ring-slate-100 overflow-hidden">
								{/* status bar */}
								<div className="flex items-center justify-between bg-slate-50 px-6 py-3 text-[10px] text-slate-400">
									<span>9:41</span>
									<div className="flex gap-1">
										<span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
										<span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
										<span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
									</div>
								</div>
								{/* chat header */}
								<div className="flex items-center gap-3 border-b border-slate-100 bg-white px-4 py-3">
									<span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-slate-900 text-[10px] font-bold text-white">IM</span>
									<div>
										<p className="text-xs font-semibold text-slate-900">InvestMate</p>
										<p className="text-[10px] text-emerald-500">Online</p>
									</div>
								</div>
								{/* messages */}
								<div className="space-y-3 bg-slate-50 px-4 py-4">
									{CHAT.map((msg, i) => (
										<motion.div
											key={i}
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.6 + i * 0.25, duration: 0.4, ease: 'easeOut' }}
											className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
										>
											<span
												className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[11px] leading-relaxed whitespace-pre-line ${
													msg.from === 'user'
														? 'rounded-tr-sm bg-slate-900 text-white'
														: 'rounded-tl-sm bg-white text-slate-800 shadow-sm ring-1 ring-slate-100'
												}`}
											>
												{msg.text}
											</span>
										</motion.div>
									))}
								</div>
								{/* input bar */}
								<div className="flex items-center gap-2 border-t border-slate-100 bg-white px-4 py-3">
									<div className="flex-1 rounded-full bg-slate-100 px-3.5 py-2 text-[10px] text-slate-400">
										Reply to InvestMate...
									</div>
									<span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900">
										<ArrowRight size={10} className="text-white" />
									</span>
								</div>
							</div>

							{/* floating tag */}
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 1.8, duration: 0.5 }}
								className="absolute -right-4 top-32 rounded-xl border border-slate-100 bg-white px-3.5 py-2.5 shadow-lg"
							>
								<p className="text-[10px] font-semibold text-slate-900">Portfolio up</p>
								<p className="text-base font-bold text-emerald-500">+11.4%</p>
								<p className="text-[9px] text-slate-400">Last 30 days</p>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 2, duration: 0.5 }}
								className="absolute -left-4 bottom-32 rounded-xl border border-slate-100 bg-white px-3.5 py-2.5 shadow-lg"
							>
								<p className="text-[9px] text-slate-400 mb-0.5">Trade approved</p>
								<p className="text-[10px] font-semibold text-slate-900">VOO · $300</p>
								<p className="text-[9px] text-emerald-500">Executed</p>
							</motion.div>
						</div>
					</motion.div>

				</div>
			</section>

			{/* ── STAT BAR ────────────────────────────────── */}
			<section className="border-y border-slate-100 bg-slate-50">
				<div className="mx-auto grid max-w-4xl grid-cols-2 divide-x divide-slate-100 px-6 sm:grid-cols-4 sm:px-10">
					{[
						{ value: '$0', label: 'Funds ever held' },
						{ value: '100%', label: 'Approval required' },
						{ value: '2', label: 'Platforms supported' },
						{ value: 'Beta', label: 'Paper trading only' },
					].map(s => (
						<div key={s.label} className="py-8 text-center">
							<p className="text-2xl font-bold tracking-tight text-slate-900 font-grotesque">{s.value}</p>
							<p className="mt-1 text-xs text-slate-400">{s.label}</p>
						</div>
					))}
				</div>
			</section>

			{/* ── FEATURES ────────────────────────────────── */}
			<section id="features" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
				<motion.div
					variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
					className="mb-14"
				>
					<p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">Features</p>
					<h2 className="max-w-lg text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-grotesque">
						Everything you need.<br />Nothing you don't.
					</h2>
				</motion.div>

				<div className="grid gap-px bg-slate-100 border border-slate-100 rounded-2xl overflow-hidden sm:grid-cols-2">
					{FEATURES.map((f, i) => (
						<motion.div
							key={f.title}
							variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.3}
							className="bg-white p-8 transition hover:bg-slate-50/80"
						>
							<span className="mb-5 inline-block rounded-md border border-slate-100 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-500">
								{f.label}
							</span>
							<h3 className="mb-2.5 text-base font-semibold text-slate-900">{f.title}</h3>
							<p className="text-sm leading-relaxed text-slate-500">{f.body}</p>
						</motion.div>
					))}
				</div>
			</section>

			{/* ── HOW IT WORKS ────────────────────────────── */}
			<section id="how-it-works" className="border-t border-slate-100 bg-slate-50 py-24">
				<div className="mx-auto max-w-6xl px-6 sm:px-10">
					<motion.div
						variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
						className="mb-14"
					>
						<p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">How it works</p>
						<h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-grotesque">
							Message to portfolio in minutes.
						</h2>
					</motion.div>

					<div className="grid gap-8 sm:grid-cols-3">
						{STEPS.map((step, i) => (
							<motion.div
								key={step.n}
								variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.2}
								className="relative"
							>
								{i < STEPS.length - 1 && (
									<div className="absolute right-0 top-4 hidden h-px w-full translate-x-1/2 border-t border-dashed border-slate-200 sm:block" style={{ width: 'calc(100% - 2.5rem)' }} />
								)}
								<div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-bold text-slate-900 shadow-sm">
									{step.n}
								</div>
								<h3 className="mb-2 text-base font-semibold text-slate-900">{step.title}</h3>
								<p className="text-sm leading-relaxed text-slate-500">{step.body}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* ── TRUST ───────────────────────────────────── */}
			<section className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
				<div className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-900 px-10 py-14 sm:px-16">
					<div className="grid gap-10 lg:grid-cols-2 lg:items-center">
						<motion.div
							variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
						>
							<p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">Trust and safety</p>
							<h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl font-grotesque">
								Your money never<br />leaves your broker.
							</h2>
							<p className="mt-5 text-slate-400 text-sm leading-relaxed max-w-sm">
								InvestMate connects to your existing broker via API and acts only
								on your explicit instruction. It never holds, moves, or custodies
								your funds at any point.
							</p>
						</motion.div>
						<motion.div
							variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0.2}
							className="grid grid-cols-2 gap-4"
						>
							{[
								{ title: 'Non custodial', body: 'InvestMate never holds your funds. All assets remain with your chosen broker at all times.' },
								{ title: 'Explicit approval', body: 'Every single trade requires your confirmation before it is executed. No exceptions.' },
								{ title: 'Transparent reasoning', body: 'Every plan comes with the full reasoning behind it so you always know why an action is suggested.' },
								{ title: 'Paper trading first', body: 'Beta users trade on paper with no real money at risk. Go live only when you are ready.' },
							].map(item => (
								<div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
									<p className="mb-1.5 text-xs font-semibold text-white">{item.title}</p>
									<p className="text-xs leading-relaxed text-slate-400">{item.body}</p>
								</div>
							))}
						</motion.div>
					</div>
				</div>
			</section>

			{/* ── WAITLIST ─────────────────────────────────── */}
			<section id="waitlist" className="border-t border-slate-100 bg-slate-50 py-24 px-6 sm:px-10">
				<motion.div
					variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
					className="mx-auto max-w-lg text-center"
				>
					<p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">Early access</p>
					<h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-grotesque">
						Be first to invest by chat.
					</h2>
					<p className="mb-8 text-slate-500 text-sm leading-relaxed">
						Join the waitlist and get access before the public launch. We will
						reach out with onboarding details as soon as a spot opens.
					</p>

					{submitted ? (
						<motion.div
							initial={{ opacity: 0, scale: 0.96 }}
							animate={{ opacity: 1, scale: 1 }}
							className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-8"
						>
							<CheckCircle2 size={28} className="text-emerald-500" />
							<p className="font-semibold text-slate-900">You are on the list.</p>
							<p className="text-sm text-slate-500">
								We will be in touch when InvestMate is ready for you.
							</p>
						</motion.div>
					) : (
						<form onSubmit={handleWaitlist} className="flex flex-col gap-3 sm:flex-row">
							<input
								type="email"
								required
								placeholder="your@email.com"
								value={email}
								onChange={e => setEmail(e.target.value)}
								className="flex-1 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-slate-400 transition"
							/>
							<button
								type="submit"
								className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 whitespace-nowrap"
							>
								Request access
							</button>
						</form>
					)}
				</motion.div>
			</section>

			{/* ── FOOTER ───────────────────────────────────── */}
			<footer className="border-t border-slate-100 py-10 px-6 sm:px-10">
				<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-slate-400 sm:flex-row">
					<div className="flex items-center gap-2">
						<span className="flex h-5 w-5 items-center justify-center rounded bg-slate-900">
							<TrendingUp size={9} className="text-white" />
						</span>
						<span className="font-semibold text-slate-600">InvestMate</span>
					</div>
					<p>InvestMate does not provide financial advice. Paper trading only during beta.</p>
					<p>&copy; {new Date().getFullYear()} InvestMate. All rights reserved.</p>
				</div>
			</footer>

		</div>
	);
}
