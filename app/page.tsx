export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* LOGO / BRAND */}
          <div className="text-lg font-semibold tracking-wide text-slate-900">
            GOBLUUE
          </div>

          {/* NAV */}
          <nav className="flex items-center space-x-8 text-sm">
            <a href="#" className="hover:text-blue-600 transition-colors">
              Home
            </a>
            <a
              href="mailto:hello@gobluue.com"
              className="hover:text-blue-600 transition-colors"
            >
              Contact Us
            </a>
            <a
              href="https://instagram.com/go.bluue"
              target="_blank"
              className="hover:text-blue-600 transition-colors"
            >
              Instagram
            </a>
          </nav>
        </div>
      </header>

      {/* HERO CLARO CON FOTO */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* IMAGEN DE FONDO */}
        <img
          src="/laundry_hero.jpg"
          alt="Laundry Machine"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY CLARO */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/80 to-white/95" />

        {/* CONTENIDO */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-slate-900">
            Premium Laundry Pickup
            <br />
            <span className="text-blue-600">&amp; Delivery in 24 Hours</span>
          </h1>

          <p className="text-lg md:text-xl font-light text-slate-700 mb-10 max-w-2xl">
            We pick up, wash, fold, and deliver your laundry in 24 hours —
            so you can focus on work, family, and what actually matters.
          </p>

          {/* BOTONES */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/18137614272"
              className="px-8 py-3 rounded-full font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Schedule Pickup
            </a>

            <a
              href="tel:+18137614272"
              className="px-8 py-3 rounded-full font-medium border border-slate-300 text-slate-900 hover:bg-slate-100 transition-colors"
            >
              Call Us
            </a>
          </div>

          <div className="mt-4 text-sm text-slate-600">
            Service area: Wesley Chapel, FL • Next-day delivery
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 — BENEFICIO GRANDE + SUBTEXTO */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight text-slate-900">
            Save hours every week.{" "}
            <span className="text-blue-600">Focus on what actually matters.</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto">
            GOBLUUE Laundry removes laundry from your to-do list entirely. No more
            sorting, washing, drying, folding, or rushing to the laundromat.
          </p>
        </div>
      </section>

      {/* SECCIÓN 3 — GRID DE 6 BENEFICIOS PREMIUM */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* 1 */}
          <div className="border border-slate-200 rounded-xl p-8 bg-white hover:shadow-md hover:border-blue-200 transition">
            <h3 className="text-xl font-semibold mb-3 text-slate-900">
              Pickup on Your Schedule
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Choose the time that works best for you — mornings, evenings, or
              weekends. We adapt to your routine, not the other way around.
            </p>
          </div>

          {/* 2 */}
          <div className="border border-slate-200 rounded-xl p-8 bg-white hover:shadow-md hover:border-blue-200 transition">
            <h3 className="text-xl font-semibold mb-3 text-slate-900">
              24-Hour Delivery
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Laundry picked up today is back tomorrow — fresh, folded, and ready
              to put away. No waiting days for your clothes.
            </p>
          </div>

          {/* 3 */}
          <div className="border border-slate-200 rounded-xl p-8 bg-white hover:shadow-md hover:border-blue-200 transition">
            <h3 className="text-xl font-semibold mb-3 text-slate-900">
              Premium Wash &amp; Fold
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Professional wash, dry, and fold with consistent quality. Clothes
              neatly organized so you can drop them straight into drawers.
            </p>
          </div>

          {/* 4 */}
          <div className="border border-slate-200 rounded-xl p-8 bg-white hover:shadow-md hover:border-blue-200 transition">
            <h3 className="text-xl font-semibold mb-3 text-slate-900">
              Save 3–5 Hours Weekly
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Most families spend hours on laundry every week. We give that time
              back so you can invest it in work, family, or rest.
            </p>
          </div>

          {/* 5 */}
          <div className="border border-slate-200 rounded-xl p-8 bg-white hover:shadow-md hover:border-blue-200 transition">
            <h3 className="text-xl font-semibold mb-3 text-slate-900">
              Simple Communication
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Phone and text support for quick questions, special instructions,
              or last-minute changes. Real people, not bots.
            </p>
          </div>

          {/* 6 */}
          <div className="border border-slate-200 rounded-xl p-8 bg-white hover:shadow-md hover:border-blue-200 transition">
            <h3 className="text-xl font-semibold mb-3 text-slate-900">
              No Contracts. Cancel Anytime.
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Transparent, contract-free service. Stay because you love the
              service, not because of fine print.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4 — SOCIAL PROOF */}
      <section className="bg-white py-24 px-6 border-t border-slate-200">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-slate-900">
            Trusted by busy families &amp; professionals
          </h2>

          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
            Parents, business owners, healthcare workers, and students across
            Wesley Chapel trust{" "}
            <span className="text-slate-900 font-medium">GOBLUUE Laundry</span>{" "}
            to handle the most demanding weekly chore.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="border border-slate-200 rounded-xl p-7 bg-slate-50 hover:bg-white hover:shadow-md transition">
              <p className="text-slate-700 text-sm leading-relaxed mb-5">
                “I get hours of my week back. Their next-day delivery is
                incredibly reliable.”
              </p>
              <p className="text-slate-900 font-semibold text-sm">— Sarah M.</p>
              <p className="text-slate-500 text-xs">Nurse • Wesley Chapel</p>
            </div>

            <div className="border border-slate-200 rounded-xl p-7 bg-slate-50 hover:bg-white hover:shadow-md transition">
              <p className="text-slate-700 text-sm leading-relaxed mb-5">
                “Our family of five produces SO MUCH laundry. GOBLUUE has been a
                lifesaver.”
              </p>
              <p className="text-slate-900 font-semibold text-sm">
                — Brandon &amp; Kelly
              </p>
              <p className="text-slate-500 text-xs">Parents • North Tampa</p>
            </div>

            <div className="border border-slate-200 rounded-xl p-7 bg-slate-50 hover:bg-white hover:shadow-md transition">
              <p className="text-slate-700 text-sm leading-relaxed mb-5">
                “For the price? Unreal. Clothes always come back perfect.
                Highly recommend.”
              </p>
              <p className="text-slate-900 font-semibold text-sm">— Marcus T.</p>
              <p className="text-slate-500 text-xs">Small Business Owner</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5 — PRICING PREMIUM */}
      <section className="bg-slate-50 py-24 px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-slate-900">
            One Simple Monthly Plan
          </h2>

          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-14">
            No confusing tiers. No hidden fees. Just a premium laundry service
            designed to give busy families &amp; professionals their time back.
          </p>

          <div className="border border-slate-200 bg-white p-12 rounded-2xl max-w-lg mx-auto hover:shadow-lg hover:border-blue-200 transition">
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">
              GOBLUUE Monthly Plan
            </h3>

            <div className="flex justify-center items-end space-x-2 my-4">
              <span className="text-5xl font-bold text-blue-600">$129</span>
              <span className="text-slate-500 mb-2">/ month</span>
            </div>

            <ul className="text-slate-700 text-sm leading-relaxed space-y-2 mb-10 text-left max-w-xs mx-auto">
              <li>• 20 lbs per week</li>
              <li>• 1 weekly pickup</li>
              <li>• Wash, dry &amp; fold</li>
              <li>• Next-day delivery</li>
              <li>• Service notifications</li>
              <li>• Phone/text support</li>
              <li>• Cancel anytime</li>
            </ul>

            <a
              href="https://wa.me/18137614272"
              className="block text-center bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-3 rounded-xl"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6 — CTA FINAL */}
      <section className="bg-white py-28 px-6 text-center border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-slate-900">
            Ready to never do laundry again?
          </h2>

          <p className="text-slate-600 text-lg max-w-xl mx-auto mb-10">
            Join busy families and professionals across Wesley Chapel who trust
            <span className="text-slate-900 font-medium"> GOBLUUE </span>
            to take laundry off their plate — permanently.
          </p>

          <a
            href="https://wa.me/18137614272"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white font-medium px-10 py-4 rounded-2xl text-lg"
          >
            Schedule Your First Pickup
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-12 px-6 text-center text-slate-500 text-sm">
        <div className="max-w-5xl mx-auto">
          <p className="mb-2">
            © {new Date().getFullYear()} GOBLUUE SERVICES LLC • Wesley Chapel, FL
          </p>

          <p className="mb-4">
            Contact:{" "}
            <a href="mailto:hello@gobluue.com" className="underline">
              hello@gobluue.com
            </a>{" "}
            • (813) 761-4272
          </p>

          <div className="space-x-6">
            <a href="/" className="hover:text-slate-900 transition">
              Home
            </a>
            <a
              href="https://instagram.com/go.bluue"
              target="_blank"
              className="hover:text-slate-900 transition"
            >
              Instagram
            </a>
            <a
              href="mailto:hello@gobluue.com"
              className="hover:text-slate-900 transition"
            >
              Support
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
