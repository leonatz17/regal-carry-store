

import { useState } from "react"

export default function Cart({ cart, onUpdateQty, onRemove, onCheckout }) {
  const [selected, setSelected] = useState(cart.map(i => i.id))

  const items = cart.filter(i => selected.includes(i.id))
  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)

  function toggle(id) {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  return (
    <section className="bg-[#0A2947] min-h-screen py-16 px-6">
      <div className="text-center mb-12 mt-20">
        <h1 className="text-2xl md:text-5xl font-bold font-serif text-[#F69D39]">Your Shopping Cart</h1>
      </div>

      <div className="min-h-screen bg-[#456882]/50">
        <div className="container mx-auto p-10 max-w-screen-lg">
          <div className="bg-white rounded shadow p-8">
            <h3 className="text-xl mt-4 font-bold text-[#F69D39] font-serif">Order Summary</h3>

            {cart.length === 0 && (
              <p className="text-lg text-gray-500 font-serif mt-6">Your cart is empty.</p>
            )}

            {cart.map(i => (
              <div key={i.id} className="border border-[#F69D39] w-full rounded mt-5 flex p-4 justify-between items-center flex-wrap">
                <input type="checkbox" checked={selected.includes(i.id)} onChange={() => toggle(i.id)} className="w-5 h-5" />
                <img src={i.image} className="w-12" alt={i.name} />
                <div className="w-2/3">
                  <h3 className="text-lg font-medium font-serif text-[#F69D39]">{i.name}</h3>
                  <p className="font-serif text-[#F69D39] text-xs">{i.description}</p>
                </div>
                <div>
                  <h4 className="text-3xl font-medium"><sup className="text-lg font-serif text-[#F69D39]">$</sup> {(i.price * i.qty).toFixed(2)}</h4>
                </div>
                <div className="w-full flex justify-between mt-4">
                  <button className="font-serif text-[#F69D39] hover:bg-red-100 px-2" onClick={() => onRemove(i.id)}>DELETE</button>
                  <label className="block uppercase tracking-wide font-serif text-[#F69D39]">
                    QTY
                    <button className="ml-3 text-sm bg-[#112E81] text-white p-2 rounded-l leading-tight" onClick={() => onUpdateQty(i.id, -1)}>-</button>
                    <span className="text-sm bg-[#112E81] text-white p-2">{i.qty}</span>
                    <button className="text-sm bg-[#112E81] text-white p-2 rounded-r leading-tight" onClick={() => onUpdateQty(i.id, 1)}>+</button>
                  </label>
                </div>
              </div>
            ))}

            {cart.length > 0 && (
              <>
                <div className="flex justify-between items-center mt-6 font-serif text-[#0A2947]">
                  <span className="text-lg font-bold">Selected Total:</span>
                  <span className="text-2xl font-bold">${total.toFixed(2)}</span>
                </div>
                <button
                  className="px-4 py-4 bg-[#112E81] font-serif text-[#F69D39] w-full mt-3 rounded shadow font-bold hover:bg-[#112E81]/80"
                  onClick={() => onCheckout(items)}>PROCEED TO CHECKOUT</button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}