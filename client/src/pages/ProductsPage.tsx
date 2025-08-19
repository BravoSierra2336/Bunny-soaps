import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export type Product = {
  _id?: string
  name: string
  slug: string
  description?: string
  price: number
  image?: string
  category?: string
  ingredients?: string[]
  rating?: number
  stock?: number
  featured?: boolean
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const url = import.meta.env.VITE_API_BASE_URL || '/api'
    fetch(`${url}/products`)
      .then((r) => r.json())
      .then(setProducts)
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">Loading…</div>

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-charcoal">Shop products</h1>
          <p className="text-charcoal/70 mt-1">Browse soaps, scrubs, and bundles.</p>
        </div>
      </div>

  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {products.map((p) => (
          <Link key={p.slug} to={`/products/${p.slug}`} className="group rounded-2xl border border-viridian/20 p-4 hover:shadow-md transition bg-ivory">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-viridian/10 to-goldenrod/10 mb-4" />
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-charcoal group-hover:text-viridian transition">{p.name}</h3>
              <span className="text-sienna font-semibold">${p.price.toFixed(2)}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
