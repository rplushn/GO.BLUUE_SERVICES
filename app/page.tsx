import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "GOBLUUE Laundry — Premium Laundry Pickup & Delivery in Wesley Chapel",
  description:
    "Laundry pickup & delivery in Wesley Chapel with 24-hour turnaround. Simple monthly pricing, no contracts, and a premium modern experience.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="max-w-4xl mx-auto px-4 py-16 md:py-24">

       {/* HERO */}
<section
  className="relative h-[90vh] w-full flex items-center justify-center text-center"
  style={{
    backgroundImage: "url('/laundry_hero.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay oscuro suave */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Contenido */}
  <div className="relative z-10 max-w-2xl px-6">
    <h1 className="text-4xl md:text-6xl font-medium text-white">
      Premium Laundry Pickup & Delivery in 24 Hours
    </h1>

    <p className="mt-4 text-lg md:text-xl text-white/90">
      Serving Wesley Chapel — simple, fast, contract-free.
    </p>

    <a
      href="https://wa.me/18137614272"
      className="inline-flex items-center justify-center mt-8 rounded-lg border border-black bg-white px-8 py-3 text-base md:text-lg font-normal text-black transition-colors hover:bg-neutral-200"
    >
      SCHEDULE PICKUP NOW
    </a>

    <div className="mt-4">
      <a href="tel:8137614272" className="text-white underline underline-offset-2">
        (813) 761-4272
      </a>
      <span className="text-white mx-2">·</span>
      <a href="mailto:hello@gobluue.com" className="text-white underline underline-offset-2">
        hello@gobluue.com
      </a>
    </div>
  </div>
</section>

        {/* HOW IT WORKS */}
        <section className="mt-16 md:mt-24">
          <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-center">
            How GOBLUUE Laundry Works
          </h2>
          <p className="mt-4 text-base md:text-lg font-light text-slate-700 text-center max-w-2xl mx-auto">
            A modern, effortless system designed so you never have to worry about laundry again.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">STEP 1</p>
              <h3 className="mt-2 text-lg font-medium">Schedule Pickup</h3>
              <p className="mt-2 text-sm md:text-base font-light text-slate-700">
                Choose the pickup time that works best for you.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">STEP 2</p>
              <h3 className="mt-2 text-lg font-medium">We Wash & Fold</h3>
              <p className="mt-2 text-sm md:text-base font-light text-slate-700">
                Professionally washed, dried, and folded.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-500">STEP 3</p>
              <h3 className="mt-2 text-lg font-medium">24-Hour Delivery</h3>
              <p className="mt-2 text-sm md:text-base font-light text-slate-700">
                Your laundry is delivered next day.
              </p>
            </div>
          </div>
        </section>

        <hr className="mt-16 border-slate-200" />

        {/* VISUAL SECTION */}
        <section className="mt-16 md:mt-24 grid gap-10 md:grid-cols-2 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-normal tracking-tight">
              Perfectly folded, ready to put away.
            </h2>
            <p className="mt-4 text-base md:text-lg font-light text-slate-700">
              Your clothes come back neatly folded and organized — ready to go straight into your
              closet. No chaos, no laundry piles, just a clean, fresh reset every week.
            </p>
            <p className="mt-4 text-sm md:text-base font-light text-slate-700">
              Designed for busy professionals, couples and families who want hotel-level quality at
              home, without lifting a finger.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden border border-slate-200">
              <Image
                src="/laundry-folded.jpg"
                alt="Stack of neatly folded clothes on a clean surface"
                width={900}
                height={900}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <hr className="mt-16 border-slate-200" />

        {/* PRICING */}
        <section className="mt-16 md:mt-24 text-center">
          <h2 className="text-2xl md:text-3xl font-normal tracking-tight">
            One Plan. One Price.
          </h2>
          <p className="mt-4 text-base md:text-lg font-light text-slate-700 max-w-2xl mx-auto">
            Simple monthly pricing — no contracts, no hidden fees.
          </p>

          <div className="mt-10 inline-block border border-slate-200 rounded-2xl px-8 py-8 text-left max-w-xl bg-white/60 backdrop-blur">
            <h3 className="text-xl md:text-2xl font-medium">GOBLUUE Plan — $129 / month</h3>
            <p className="mt-3 text-sm md:text-base font-light text-slate-700 leading-relaxed">
              • 20 lbs per week <br />
              • 1 weekly pickup <br />
              • Wash, dry & fold <br />
              • 24-hour delivery <br />
              • Phone/text support <br />
              • Cancel anytime
            </p>

            <div className="mt-6">
              <a
                href="https://wa.me/18137614272"
                className="inline-flex items-center justify-center rounded-lg border border-black bg-black px-6 py-2.5 text-sm md:text-base font-normal text-white transition-colors hover:bg-white hover:text-black"
              >
                GET STARTED
              </a>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="mt-20 md:mt-28 text-center">
          <h2 className="text-2xl md:text-3xl font-normal tracking-tight">
            Ready to never do laundry again?
          </h2>
          <p className="mt-4 text-base md:text-lg font-light text-slate-700 max-w-2xl mx-auto">
            Schedule your first pickup today.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href="https://wa.me/18137614272"
              className="inline-flex items-center justify-center rounded-lg border border-black bg-black px-8 py-3 text-base md:text-lg font-normal text-white transition-colors hover:bg-white hover:text-black"
            >
              SCHEDULE NOW
            </a>
          </div>
        </section>

        <footer className="mt-16 md:mt-24 border-t border-slate-200 pt-6 pb-10 text-center text-xs md:text-sm font-light text-slate-500">
          <div>© {new Date().getFullYear()} GOBLUUE SERVICES LLC — Wesley Chapel, FL</div>
          <div className="mt-1">Operated by GOBLUUE Laundry</div>
        </footer>

      </div>
    </main>
  );
}
