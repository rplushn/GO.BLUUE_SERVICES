export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* LOGO */}
          <div className="text-lg font-semibold tracking-wide">GOBLUUE</div>

          {/* NAV */}
          <nav className="flex items-center space-x-8 text-sm">
            <a href="#" className="hover:text-blue-300 transition">Home</a>
            <a href="mailto:hello@gobluue.com" className="hover:text-blue-300 transition">Contact Us</a>
            <a
              href="https://instagram.com/go.bluue"
              target="_blank"
              className="hover:text-blue-300 transition"
            >
              Instagram
            </a>
          </nav>
        </div>
      </header>

      {/* HERO DRAMÁTICO */}
      <section className="relative w-full h-screen overflow-hidden">

        {/* IMAGEN DE FONDO */}
        <img
          src="/laundry_hero.jpg"
          alt="Laundry Machine"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY DRAMÁTICO ESTILO VERCEL */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90" />

        {/* CONTENIDO */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-[0_4px_10px_rgba(255,255,255,0.2)]">
            Premium Laundry Pickup<br />& Delivery in 24 Hours
          </h1>

          <p className="text-lg md:text-xl font-light text-white/80 mb-10 max-w-2xl">
            Professional wash & fold service for busy families and professionals in Wesley Chapel.
          </p>

          {/* BOTONES */}
          <div className="flex space-x-4">
            <a
              href="https://wa.me/18137614272"
              className="px-6 py-3 rounded-full font-medium bg-white text-black hover:bg-gray-200 transition"
            >
              Schedule Pickup
            </a>

            <a
              href="tel:+18137614272"
              className="px-6 py-3 rounded-full font-medium border border-white/40 hover:bg-white hover:text-black transition"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 — BENEFICIO GRANDE + SUBTEXTO */}
      <section className="bg-black py-28 px-6 text-center">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
            Save hours every week.  
            <span className="text-blue-400">Focus on what actually matters.</span>
          </h2>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            We pick up, wash, fold and deliver your laundry in 24 hours —  
            giving busy professionals and families their time back.
          </p>
        </div>
      </section>

      {/* SECCIÓN 3 — GRID DE 6 BENEFICIOS PREMIUM */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

          <div className="border border-white/10 rounded-xl p-8 hover:bg-white/[0.03] transition">
            <h3 className="text-xl font-semibold mb-3">Pickup on Your Schedule</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Choose the time that works best for you. Morning, noon, or evening — 
              we adapt to your routine, not the other way around.
            </p>
          </div>

          <div className="border border-white/10 rounded-xl p-8 hover:bg-white/[0.03] transition">
            <h3 className="text-xl font-semibold mb-3">24-Hour Delivery</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Your laundry is returned the next day — fresh, folded, and ready to put away.
            </p>
          </div>

          <div className="border border-white/10 rounded-xl p-8 hover:bg-white/[0.03] transition">
            <h3 className="text-xl font-semibold mb-3">Premium Wash & Fold</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Professional cleaning, delicate handling, and perfectly folded clothes every time.
            </p>
          </div>

          <div className="border border-white/10 rounded-xl p-8 hover:bg-white/[0.03] transition">
            <h3 className="text-xl font-semibold mb-3">Save 3–5 Hours Weekly</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Let us take care of the most time-consuming chore — 
              so you can focus on work, family, or simply living.
            </p>
          </div>

          <div className="border border-white/10 rounded-xl p-8 hover:bg-white/[0.03] transition">
            <h3 className="text-xl font-semibold mb-3">Phone & Text Support</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Real human help anytime you need it. Fast, friendly, and always available.
            </p>
          </div>

          <div className="border border-white/10 rounded-xl p-8 hover:bg-white/[0.03] transition">
            <h3 className="text-xl font-semibold mb-3">No Contracts. Cancel Anytime.</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Simple, transparent pricing with zero long-term commitments.
            </p>
          </div>

        </div>
      </section>

      {/* SECCIÓN 4 — SOCIAL PROOF */}
      <section className="bg-neutral-950 py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Trusted by busy professionals across Wesley Chapel
          </h2>

          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
            Parents, business owners, healthcare workers, students — everyone who values their time  
            chooses <span className="text-white font-medium">GOBLUUE Laundry</span> to handle the most demanding weekly chore.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="border border-white/10 rounded-xl p-7 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] transition">
              <p className="text-white/80 text-sm leading-relaxed mb-5">
                “I get hours of my week back. Their next-day delivery is insanely reliable.”
              </p>
              <p className="text-white font-semibold text-sm">— Sarah M.</p>
              <p className="text-white/50 text-xs">Nurse • Wesley Chapel</p>
            </div>

            <div className="border border-white/10 rounded-xl p-7 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] transition">
              <p className="text-white/80 text-sm leading-relaxed mb-5">
                “Our family of five produces SO MUCH laundry. GOBLUUE has been a lifesaver.”
              </p>
              <p className="text-white font-semibold text-sm">— Brandon & Kelly</p>
              <p className="text-white/50 text-xs">Parents • North Tampa</p>
            </div>

            <div className="border border-white/10 rounded-xl p-7 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] transition">
              <p className="text-white/80 text-sm leading-relaxed mb-5">
                “For the price? Unreal. Clothes always come back perfect. Highly recommend.”
              </p>
              <p className="text-white font-semibold text-sm">— Marcus T.</p>
              <p className="text-white/50 text-xs">Small Business Owner</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECCIÓN 5 — PRICING PREMIUM */}
      <section className="bg-black py-24 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            One Simple Monthly Plan
          </h2>

          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-14">
            No confusing tiers. No hidden fees. Just a premium laundry service designed  
            to give busy families & professionals their time back.
          </p>

          <div className="border border-white/10 bg-white/[0.03] backdrop-blur-sm p-12 rounded-2xl max-w-lg mx-auto hover:bg-white/[0.07] transition">
            <h3 className="text-2xl font-semibold text-white mb-2">GOBLUUE Monthly Plan</h3>

            <div className="flex justify-center items-end space-x-2 my-4">
              <span className="text-5xl font-bold text-blue-400">$129</span>
              <span className="text-white/60 mb-2">/ month</span>
            </div>

            <ul className="text-white/70 text-sm leading-relaxed space y-2 mb-10 text-left max-w-xs mx-auto">
              <li>• 20 lbs per week</li>
              <li>• 1 weekly pickup</li>
              <li>• Wash, dry & fold</li>
              <li>• Next-day delivery</li>
              <li>• Service notifications</li>
              <li>• Phone/text support</li>
              <li>• Cancel anytime</li>
            </ul>

            <a
              href="https://wa.me/18137614272"
              className="block text-center bg-blue-500 hover:bg-blue-600 transition text-white font-medium py-3 rounded-xl"
            >
              Get Started Today
            </a>
          </div>

        </div>
      </section>

      {/* SECCIÓN 6 — CTA FINAL */}
      <section className="bg-neutral-950 py-28 px-6 text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to never do laundry again?
          </h2>

          <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
            Join busy families and professionals across Wesley Chapel who trust 
            <span className="text-white font-medium"> GOBLUUE </span>
            to take laundry off their plate — permanently.
          </p>

          <a
            href="https://wa.me/18137614272"
            className="inline-block bg-blue-500 hover:bg-blue-600 transition text-white font-medium px-10 py-4 rounded-2xl text-lg"
          >
            Schedule Your First Pickup
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-white/10 py-12 px-6 text-center text-white/50 text-sm">
        <div className="max-w-5xl mx-auto">

          <p className="mb-2">
            © {new Date().getFullYear()} GOBLUUE SERVICES LLC • Wesley Chapel, FL
          </p>

          <p className="mb-4">
            Contact: <a href="mailto:hello@gobluue.com" className="underline">hello@gobluue.com</a> • (813) 761-4272
          </p>

          <div className="space-x-6">
            <a href="/" className="hover:text-white transition">Home</a>
            <a href="https://instagram.com/go.bluue" target="_blank" className="hover:text-white transition">Instagram</a>
            <a href="mailto:hello@gobluue.com" className="hover:text-white transition">Support</a>
          </div>
        </div>
      </footer>

    </main>
  );
}
