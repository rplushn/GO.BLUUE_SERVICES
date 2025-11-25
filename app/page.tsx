import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GOBLUUE Laundry — Premium Laundry Pickup & Delivery in Wesley Chapel",
  description:
    "Laundry pickup & delivery in Wesley Chapel with 24-hour turnaround. We pick up, wash, fold and deliver your laundry so you get 3–5 hours back every week.",
};

export default function Home() {
  return (
    <main className="bg-white text-slate-900 min-h-screen">
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          {/* LOGO / BRAND */}
          <a href="#home" className="flex items-center space-x-2">
            <span className="text-sm tracking-[0.35em] font-semibold text-slate-900">
              GOBLUUE
            </span>
          </a>

          {/* NAV */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#home" className="hover:text-blue-600 transition">
              Home
            </a>
            <a href="#how" className="hover:text-blue-600 transition">
              How it works
            </a>
            <a href="#benefits" className="hover:text-blue-600 transition">
              Benefits
            </a>
            <a href="#pricing" className="hover:text-blue-600 transition">
              Pricing
            </a>
            <a href="#faq" className="hover:text-blue-600 transition">
              FAQ
            </a>
            
              href="https://instagram.com/go.bluue"
              target="_blank"
              className="hover:text-blue-600 transition"
            >
              Instagram
            </a>
            
              href="mailto:hello@gobluue.com"
              className="inline-flex items-center rounded-full border border-slate-900 px-4 py-1.5 text-xs font-semibold tracking-wide hover:bg-slate-900 hover:text-white transition"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      {/* HERO OSCURO (80% ALTURA) */}
      <section
        id="home"
        className="relative w-full min-h-[80vh] bg-black text-white overflow-hidden"
      >
        {/* Offset for fixed header */}
        <div className="h-[56px]" aria-hidden />

        {/* IMAGEN DE FONDO */}
        <img
          src="/laundry_hero.jpg"
          alt="Fresh laundry inside a modern washing machine"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/95" />

        {/* LÍNEAS ESTILO VERCEL */}
        <div
          className="absolute inset-0 opacity-25 mix-blend-soft-light pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.18) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            backgroundPosition: "center",
          }}
        />

        {/* CONTENIDO HERO */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col justify-center items-start md:items-center min-h-[calc(80vh-56px)]">
          <div className="max-w-2xl text-left md:text-center space-y-6">
            <p className="inline-flex items-center rounded-full border border-white/25 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.22em]">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Next-day laundry pickup & delivery
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
              Premium laundry service
              <span className="block text-blue-300">
                so you never do laundry again.
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-100/85">
              We pick up, wash, fold and deliver your laundry in 24 hours —
              giving busy families and professionals in Wesley Chapel{" "}
              <span className="font-semibold">3–5 hours back every week.</span>
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 sm:justify-center pt-2">
              
                href="https://wa.me/18137614272"
                className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-7 py-2.5 text-sm font-semibold shadow-sm hover:bg-slate-100 transition"
              >
                Schedule pickup on WhatsApp
              </a>
              
                href="tel:+18137614272"
                className="inline-flex items-center justify-center rounded-full border border-white/60 px-7 py-2.5 text-sm font-semibold hover:bg-white/10 transition"
              >
                Call (813) 761-4272
              </a>
            </div>

            {/* QUICK STATS */}
            <div className="pt-3 flex flex-wrap gap-4 text-xs text-slate-200/80">
              <div className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                <span>24-hour turnaround</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                <span>No contracts. Cancel anytime.</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                <span>Serving Wesley Chapel, FL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 — BIG PROMISE EN FONDO BLANCO */}
      <section
        id="benefits"
        className="bg-white text-slate-900 border-b border-slate-100"
      >
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Save hours every week.
              <span className="block text-blue-600">
                Focus on what actually matters.
              </span>
            </h2>

            <p className="text-base md:text-lg text-slate-600">
              Laundry is one of the most time-consuming weekly chores. GOBLUUE
              takes it off your plate completely — so you can put that time into
              your work, your family, or simply resting.
            </p>
          </div>

          {/* 3 BENEFICIOS PRINCIPALES */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/40 p-6">
              <h3 className="text-lg font-semibold mb-2">
                Pickup on your schedule
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Choose the pickup window that fits your day. Morning, afternoon
                or evening — we adapt to your routine, not the other way around.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/40 p-6">
              <h3 className="text-lg font-semibold mb-2">
                24-hour delivery, every time
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Your laundry is washed, dried, folded and delivered back the
                very next day. No waiting a week. No chasing lost items.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/40 p-6">
              <h3 className="text-lg font-semibold mb-2">
                3–5 hours of life back per week
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Between sorting, washing, drying, folding and putting away,
                laundry eats entire evenings. We give that time back to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 3 — HOW IT WORKS / PASOS */}
      <section
        id="how"
        className="bg-slate-50 text-slate-900 border-b border-slate-100"
      >
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              How GOBLUUE Laundry works
            </h2>
            <p className="text-sm md:text-base text-slate-600">
              A clean, simple system designed so you never have to think about
              laundry again.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {/* STEP 1 */}
            <div className="flex flex-col space-y-3">
              <span className="text-xs font-semibold tracking-[0.25em] text-blue-600">
                STEP 1
              </span>
              <h3 className="text-lg font-semibold">Schedule pickup</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Message us on WhatsApp or call to choose your weekly pickup
                slot. We confirm the time and send you a quick reminder.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="flex flex-col space-y-3">
              <span className="text-xs font-semibold tracking-[0.25em] text-blue-600">
                STEP 2
              </span>
              <h3 className="text-lg font-semibold">We pick up at your door</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Place your laundry bag by the door. Our driver picks it up,
                weighs it, and transports it to our partner facilities.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="flex flex-col space-y-3">
              <span className="text-xs font-semibold tracking-[0.25em] text-blue-600">
                STEP 3
              </span>
              <h3 className="text-lg font-semibold">Wash, dry & fold</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Your clothes are professionally washed, dried and folded with
                care — separated by colors and fabric types.
              </p>
            </div>

            {/* STEP 4 */}
            <div className="flex flex-col space-y-3">
              <span className="text-xs font-semibold tracking-[0.25em] text-blue-600">
                STEP 4
              </span>
              <h3 className="text-lg font-semibold">Delivered in 24 hours</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We return everything neatly folded and ready to put away — usually
                within 24 hours of pickup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 — WHY GOBLUUE / TARGET IDEAL */}
      <section className="bg-white text-slate-900 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* COPY */}
          <div className="space-y-5">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Built for people whose time is worth more than laundry.
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              GOBLUUE is perfect for busy households, professionals, and anyone
              who is tired of losing weeknights and weekends to laundry piles.
            </p>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                • Parents juggling school, sports and work who want one less
                chore to worry about.
              </li>
              <li>
                • Professionals who value clean clothes but don&apos;t want to
                spend Saturdays doing loads.
              </li>
              <li>
                • Small business owners who need to look sharp every day without
                thinking about laundry.
              </li>
            </ul>
          </div>

          {/* STATS / HIGHLIGHTS */}
          <div className="grid grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-[0.22em] mb-2">
                  TIME SAVED
                </p>
                <p className="text-3xl font-semibold mb-1">3–5 hrs</p>
                <p className="text-xs text-slate-500">
                  Typical weekly time saved for a family of 3–4.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-[0.22em] mb-2">
                  TURNAROUND
                </p>
                <p className="text-3xl font-semibold mb-1">24 hrs</p>
                <p className="text-xs text-slate-500">
                  Standard pickup-to-delivery window in Wesley Chapel.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 col-span-2">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-[0.22em] mb-2">
                EXPERIENCE
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Imagine opening your door to perfectly folded, fresh laundry —{" "}
                <strong>every single week</strong> — without touching a washer or dryer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 — PRICING + FOTO AL LADO */}
      <section
        id="pricing"
        className="bg-slate-50 text-slate-900 border-b border-slate-100"
      >
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* PRICING CARD */}
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              One simple monthly plan.
            </h2>
            <p className="text-sm md:text-base text-slate-600 mb-8">
              No confusing tiers. No hidden fees. Just a premium laundry service
              designed to give busy families & professionals their time back.
            </p>

            <div className="max-w-md rounded-3xl border border-slate-200 bg-white shadow-sm p-8 space-y-6">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    GOBLUUE Monthly Plan
                  </h3>
                  <p className="text-xs text-slate-500">
                    Ideal for individuals, couples and small families.
                  </p>
                </div>
                <div className="flex items-baseline space-x-1">
                  <span className="text-4xl font-bold text-blue-600">$129</span>
                  <span className="text-xs text-slate-500 mb-1">/ month</span>
                </div>
              </div>

              <ul className="text-sm text-slate-600 space-y-2">
                <li>• 20 lbs per week</li>
                <li>• 1 weekly pickup</li>
                <li>• Wash, dry & fold included</li>
                <li>• Next-day delivery</li>
                <li>• Phone & text support</li>
                <li>• Service notifications</li>
                <li>• No contracts. Cancel anytime.</li>
              </ul>

              
                href="https://wa.me/18137614272"
                className="block text-center rounded-full bg-blue-600 text-white text-sm font-semibold py-3 hover:bg-blue-700 transition"
              >
                Get started today
              </a>

              <p className="text-[11px] text-slate-500">
                Have questions before starting?{" "}
                
                  href="mailto:hello@gobluue.com"
                  className="text-blue-600 hover:underline"
                >
                  Email hello@gobluue.com
                </a>{" "}
                and we&apos;ll help you decide if the service is a fit.
              </p>
            </div>
          </div>

          {/* FOTO AL LADO DEL PRECIO */}
          <div className="order-1 md:order-2">
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <img
                src="/laundry_folded.jpg"
                alt="Freshly folded laundry neatly stacked"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6 — SOCIAL PROOF / TESTIMONIOS */}
      <section
        id="proof"
        className="bg-white text-slate-900 border-b border-slate-100"
      >
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-3xl mb-12 text-center mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Trusted by busy professionals & families across Wesley Chapel.
            </h2>
            <p className="text-sm md:text-base text-slate-600">
              From healthcare workers and small business owners to families with
              kids and pets — GOBLUUE is the quiet system behind their always-
              clean laundry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                "I get hours of my week back. Their next-day delivery is
                insanely reliable — clothes are always fresh and folded
                perfectly."
              </p>
              <p className="text-sm font-semibold text-slate-900">
                — Sarah M., Nurse
              </p>
              <p className="text-xs text-slate-500">Wesley Chapel</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                "Our family of five produces SO MUCH laundry. GOBLUUE has been
                a lifesaver. We can&apos;t imagine going back."
              </p>
              <p className="text-sm font-semibold text-slate-900">
                — Brandon & Kelly
              </p>
              <p className="text-xs text-slate-500">North Tampa</p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                "For the price? Unreal. My shirts come back crisp and ready for
                client meetings. It just works."
              </p>
              <p className="text-sm font-semibold text-slate-900">
                — Marcus T., Small Business Owner
              </p>
              <p className="text-xs text-slate-500">Wesley Chapel</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 7 — FAQ SIMPLE */}
      <section
        id="faq"
        className="bg-slate-50 text-slate-900 border-b border-slate-100"
      >
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-24">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Frequently asked questions
            </h2>
            <p className="text-sm md:text-base text-slate-600">
              If you don&apos;t see your question here, send us a quick message
              on WhatsApp or email{" "}
              
                href="mailto:hello@gobluue.com"
                className="text-blue-600 hover:underline"
              >
                hello@gobluue.com
              </a>
              .
            </p>
          </div>

          <div className="space-y-6 text-sm md:text-base text-slate-700">
            <div>
              <h3 className="font-semibold mb-1">
                What areas do you currently serve?
              </h3>
              <p className="text-slate-600">
                We currently serve Wesley Chapel and nearby neighborhoods. As we
                grow, we&apos;ll expand routes to cover more of North Tampa.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">
                How do I know how many pounds I&apos;m using?
              </h3>
              <p className="text-slate-600">
                We weigh your laundry at pickup and keep a running total for the
                month. Most individuals and couples comfortably fit within the
                20 lbs / week included in the plan.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">
                What if I need to skip a week or pause?
              </h3>
              <p className="text-slate-600">
                No problem. Just let us know at least 24 hours before your
                scheduled pickup. You can skip weeks or pause your service at
                any time.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">
                Do you handle special items or delicate fabrics?
              </h3>
              <p className="text-slate-600">
                Yes. You can mark delicate items in a separate bag or leave a
                note, and we&apos;ll wash them on gentle cycles and air dry when
                needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 8 — CTA FINAL */}
      <section className="bg-white text-slate-900">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-24 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Ready to never do laundry again?
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto mb-8">
            Join busy families and professionals across Wesley Chapel who trust{" "}
            <span className="font-semibold">GOBLUUE</span> to take laundry off
            their plate — permanently.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            
              href="https://wa.me/18137614272"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold px-8 py-3 hover:bg-blue-700 transition"
            >
              Schedule your first pickup
            </a>
            
              href="tel:+18137614272"
              className="inline-flex items-center justify-center rounded-full border border-slate-900 text-sm font-semibold px-8 py-3 hover:bg-slate-900 hover:text-white transition"
            >
              Call to ask a question
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-300 text-xs md:text-sm">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-center md:text-left space-y-1">
            <p>
              © {new Date().getFullYear()} GOBLUUE SERVICES LLC • Wesley Chapel,
              FL
            </p>
            <p>
              Contact:{" "}
              
                href="mailto:hello@gobluue.com"
                className="underline underline-offset-2"
              >
                hello@gobluue.com
              </a>{" "}
              • (813) 761-4272
            </p>
          </div>

          <div className="flex items-center gap-4 text-center md:text-right">
            
              href="#home"
              className="hover:text-white transition underline-offset-2 hover:underline"
            >
              Home
            </a>
            
              href="https://instagram.com/go.bluue"
              target="_blank"
              className="hover:text-white transition underline-offset-2 hover:underline"
            >
              Instagram
            </a>
            
              href="mailto:hello@gobluue.com"
              className="hover:text-white transition underline-offset-2 hover:underline"
            >
              Support
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
