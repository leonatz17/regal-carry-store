
import { useState } from "react"
import { API } from "../config"

export default function Checkout({ cart, onClose, onSuccess }) {
  const [form, setForm] = useState({ customer_name: "", email: "", address: "", city: "", state: "", zip: "" })
  const [placed, setPlaced] = useState(false)
  const [error, setError] = useState("")

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0)

  function set(field, value) {
    setForm(f => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const res = await fetch(`${API}/api/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, items: cart.map(i => ({ id: i.id, name: i.name, price: i.price, qty: i.qty, image: i.image })), total }),
    })
    if (res.ok) setPlaced(true)
    else setError("Something went wrong. Please try again.")
  }

  const input = "w-full rounded-lg border py-2 px-3 bg-[#E2852E] text-sm"
  const label = "block font-serif text-[#E2852E] text-sm mb-1"

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={onClose}>
      <div className="bg-gray-700 w-full max-w-sm rounded-lg shadow-md relative p-6" onClick={e => e.stopPropagation()}>
        <button className="absolute top-2 right-3 text-white text-xl font-bold" onClick={onClose}>×</button>

        {placed ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full bg-green-600 text-white text-3xl flex items-center justify-center mx-auto">✓</div>
            <h1 className="text-xl font-bold font-serif text-[#E2852E] mt-4">Order has been placed!</h1>
            <p className="font-serif text-[#E2852E] text-sm mt-2">Thank you for your purchase.</p>
            <button className="mt-6 w-full bg-[#E2852E] text-gray-700 py-3 rounded-lg font-bold" onClick={() => onSuccess(cart.map(i => i.id))}>Done</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <h1 className="text-lg font-bold font-serif text-[#E2852E] mb-3">Checkout</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className={label}>Full Name</label>
                <input type="text" required className={input} value={form.customer_name} onChange={e => set("customer_name", e.target.value)} />
              </div>
              <div>
                <label className={label}>Email</label>
                <input type="email" required className={input} value={form.email} onChange={e => set("email", e.target.value)} />
              </div>
            </div>

            <div className="mt-3">
              <label className={label}>Address</label>
              <input type="text" required className={input} value={form.address} onChange={e => set("address", e.target.value)} />
            </div>

            <div className="grid grid-cols-2 gap-3 mt-3">
              <div>
                <label className={label}>City</label>
                <input type="text" className={input} value={form.city} onChange={e => set("city", e.target.value)} />
              </div>
              <div>
                <label className={label}>State / ZIP</label>
                <input type="text" className={input} value={form.state + " " + form.zip} onChange={e => { const [s, z] = e.target.value.split(" "); set("state", s || ""); set("zip", z || "") }} />
              </div>
            </div>

            <div className="border-t border-gray-500 mt-4 pt-3">
              {cart.map(i => (
                <p key={i.id} className="font-serif text-[#E2852E] text-sm"> {i.name} × {i.qty} — ${(i.price * i.qty).toFixed(2)}</p>
              ))}
              <p className="font-serif text-[#E2852E] font-bold mt-2">Total: ${total.toFixed(2)}</p>
            </div>

            {error && <p className="text-red-400 text-sm font-serif mt-2">{error}</p>}

            <button className="mt-4 w-full bg-[#E2852E] text-gray-700 py-3 rounded-lg font-bold">Place Order</button>
          </form>
        )}
      </div>
    </div>
  )
}