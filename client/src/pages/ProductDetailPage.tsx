import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { Product } from './ProductsPage'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    if (!slug) return
    const url = import.meta.env.VITE_API_BASE_URL || '/api'
    fetch(`${url}/products/${slug}`)
      .then((r) => r.json())
      .then(setProduct)
      .catch(() => {})
  }, [slug])

  if (!product) return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">Loading…</div>

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-viridian/10 to-goldenrod/10" />
        <div>
          <h1 className="text-3xl font-bold text-charcoal">{product.name}</h1>
          <p className="mt-2 text-charcoal/80">{product.description}</p>
          <div className="mt-4 text-sienna text-2xl font-semibold">${product.price.toFixed(2)}</div>

          <button className="mt-6 inline-flex items-center rounded-full bg-viridian px-6 py-3 text-white font-medium shadow-sm hover:brightness-105 transition">
            Add to cart
          </button>

          {product.ingredients && product.ingredients.length > 0 && (
            <div className="mt-8">
              <h2 className="font-semibold text-charcoal">Ingredients</h2>
              <ul className="mt-2 list-disc list-inside text-charcoal/80">
                {product.ingredients.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
