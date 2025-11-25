// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
      {/* HEADER */}
      <header className="w-full bg-black text-white py-3 px-6 flex items-center justify-between">
        <div className="text-lg font-semibold tracking-wide">GOBLUUE</div>

        <nav className="flex items-center gap-6 text-sm">
          <a href="/" className="hover:text-gray-300 transition">Home</a>

          <a
            href="https://wa.me/18137614272"
            target="_blank"
            className="hover:text-gray-300 transition"
          >
            Contact Us
          </a>

          <a
            href="https://instagram.com/go.bluue"
            target="_blank"
            className="hover:text-gray-300 transition"
          >
            Instagram
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden flex items-center justify-center">
        <Image
          src="/laundry_hero.jpg"
          alt="Laundry machine"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-white text-3xl md:text-4xl font-semibold drop-shadow-lg mb-3">
            Premium Laundry Pickup <br /> & Delivery in 24 Hours
          </h1>

          <p className="text-white text-sm md:text-base opacity-90 mb-6">
            Serving Wesley Chapel — simple, fast, contract-free.
          </p>

          <a
            href="https://wa.me/18137614272"
            className="inline-block bg-white text-black px-6 py-3 rounded-md font-medium text-sm hover:bg-gray-200 transition border border-black"
          >
            SCHEDULE PICKUP NOW
          </a>

          <div className="mt-3 text-white text-sm opacity-90">
            <a href="tel:+18137614272" className="hover:underline">(813) 761-4272</a> ·{" "}
            <a href="mailto:hello@gobluue.com" className="hover:underline">
              hello@gobluue.com
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="text-center mt-20 px-6">
        <h2 className="text-xl font-semibold mb-2">How GOBLUUE Laundry Works</h2>
        <p className="text-slate-600 mb-10">
          A modern, effortless system designed so you never have to worry about laundry again.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          <div>
            <h3 className="text-sm font-semibold text-slate-700 mb-1">STEP 1</h3>
            <p className="font-medium">Schedule Pickup</p>
            <p className="text-slate-600 text-sm mt-1">
              Choose the pickup time that works best for you.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-700 mb-1">STEP 2</h3>
            <p className="font-medium">We Wash & Fold</p>
            <p className="text-slate-600 text-sm mt-1">
              Professionally washed, dried, and folded.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-700 mb-1">STEP 3</h3>
            <p className="font-medium">24-Hour Delivery</p>
            <p className="text-slate-600 text-sm mt-1">
              Your laundry is delivered next day.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="text-center mt-20 px-6 mb-20">
        <h2 className="text-xl font-semibold mb-2">One Plan. One Price.</h2>
        <p className="text-slate-600 mb-10">Simple monthly pricing — no contracts, no hidden fees.</p>

        <div className="border border-slate-300 rounded-lg p-8 w-full max-w-md mx-auto">
          <h3 className="font-semibold text-lg mb-4">GOBLUUE Plan — $129 / month</h3>

          <ul className="text-left text-sm text-slate-700 space-y-1 mb-6 max-w-xs mx-auto">
            <li>• 20 lbs per week</li>
            <li>• 1 weekly pickup</li>
            <li>• Wash, dry & fold</li>
            <li>• 24-hour delivery</li>
            <li>• Phone/text support</li>
            <li>• Cancel anytime</li>
          </ul>

          <a
            href="https://wa.me/18137614272"
            className="inline-block bg-black text-white px-6 py-3 rounded-md font-medium text-sm hover:bg-gray-800 transition"
          >
            GET STARTED
          </a>
        </div>
      </section>
    </main>
  );
}
