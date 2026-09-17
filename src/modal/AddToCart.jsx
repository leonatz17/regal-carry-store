import { useState } from "react"

export default function AddToCart({ product, onAdd, onClose, onViewCart }) {
  const [added, setAdded] = useState(false)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <div className="bg-gray-700 w-full max-w-sm rounded-lg shadow-md relative p-6" onClick={e => e.stopPropagation()}>

        {added ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-green-600 text-white text-3xl flex items-center justify-center mx-auto">✓</div>
            <h1 className="text-xl font-bold font-serif text-[#E2852E] mt-4">Item added to cart!</h1>
            <p className="font-serif text-[#E2852E] text-sm mt-2">{product.name}</p>
            <button className="mt-6 w-full bg-[#E2852E] text-gray-700 py-3 rounded-lg font-bold" onClick={onViewCart}>View Cart</button>
            <button className="mt-2 w-full bg-gray-500 text-white py-3 rounded-lg font-bold" onClick={onClose}>Keep Shopping</button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-start">
              <h1 className="text-xl font-bold font-serif text-[#E2852E]">Add to cart?</h1>
              <button className="text-white text-2xl font-bold" onClick={onClose}>×</button>
            </div>

            <img src={product.image} alt={product.name}
              className="w-full h-36 object-cover rounded-lg mt-3" onError={e => { e.target.style.display = "none" }} />

            <p className="font-serif text-[#E2852E] mt-3">{product.name}</p>
            <p className="font-serif text-[#E2852E] text-2xl font-bold mt-1">${product.price.toFixed(2)}</p>

            <div className="flex gap-3 mt-6">
              <button className="flex-1 bg-gray-500 text-white py-3 rounded-lg font-bold" onClick={onClose}>Cancel</button>
              <button className="flex-1 bg-[#E2852E] text-gray-700 py-3 rounded-lg font-bold" onClick={() => { onAdd(); setAdded(true) }}>Add to Cart</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}