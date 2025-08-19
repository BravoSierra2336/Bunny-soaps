import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
  <section className="relative isolate overflow-hidden bg-gradient-to-b from-ivory to-ivory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid lg:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-charcoal">
              Bunny&apos;s Soaps &amp; Scrubs
            </h1>
            <p className="mt-4 text-lg text-charcoal/80 max-w-prose">
              Handcrafted soaps and scrubs made with nourishing oils, gentle exfoliants, and playful scents.
              Treat your skin to something sweet—always cruelty-free.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link to="/products" className="inline-flex items-center rounded-full bg-viridian px-6 py-3 text-white font-medium shadow-sm hover:brightness-105 transition">
                Shop now
              </Link>
              <a href="#featured" className="text-sienna hover:text-goldenrod font-medium">See featured</a>
            </div>
          </div>
          <div className="aspect-square rounded-3xl bg-[radial-gradient(circle_at_30%_30%,#DAA52022,transparent_60%),radial-gradient(circle_at_70%_60%,#40826D22,transparent_60%)] shadow-inner" />
        </div>
      </section>

      <section id="featured" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
  <h2 className="text-2xl font-bold text-charcoal">Featured favorites</h2>
  <p className="text-charcoal/70 mt-1">A few bestsellers our customers love.</p>
        <FeaturedProducts />
      </section>
    </div>
  )
}

function FeaturedProducts() {
  const items = [
    { name: 'Lavender Bliss Soap', price: 7.99, slug: 'lavender-bliss-soap' },
    { name: 'Citrus Sugar Scrub', price: 12.5, slug: 'citrus-sugar-scrub' },
    { name: 'Oatmeal Honey Soap', price: 6.99, slug: 'oatmeal-honey-soap' },
  ]
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((p) => (
        <Link key={p.slug} to={`/products/${p.slug}`} className="group rounded-2xl border border-viridian/20 p-4 hover:shadow-md transition bg-ivory">
          <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-viridian/10 to-goldenrod/10 mb-4" />
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-charcoal group-hover:text-viridian transition">{p.name}</h3>
            <span className="text-sienna font-semibold">${p.price.toFixed(2)}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}
