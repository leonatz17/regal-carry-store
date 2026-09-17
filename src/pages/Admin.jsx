import { useEffect, useState } from "react"
import { API } from "../config"

export default function Admin() {
  const [categories, setCategories] = useState([])
  const [cat, setCat] = useState("")
  const [p, setP] = useState({ name: "", description: "", price: "", image: "", badge: "", category_id: "" })
  const [msg, setMsg] = useState("")

  useEffect(() => {
    fetch(`${API}/api/categories`).then(r => r.json()).then(setCategories).catch(() => {})
  }, [])

  async function addCategory(e) {
    e.preventDefault()
    const r = await fetch(`${API}/api/categories`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: cat }),
    })
    setMsg(r.ok ? `Category "${cat}" added` : "Error adding category")
    setCat("")
    fetch(`${API}/api/categories`).then(r => r.json()).then(setCategories)
  }

  async function addProduct(e) {
    e.preventDefault()
    const r = await fetch(`${API}/api/products`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...p, price: Number(p.price), category_id: p.category_id ? Number(p.category_id) : null }),
    })
    setMsg(r.ok ? `Product "${p.name}" added` : "Error: name and price required")
    setP({ name: "", description: "", price: "", image: "", badge: "", category_id: "" })
  }

  const input = "w-full mt-1 p-3 rounded-lg border border-[#E2852E] bg-white text-gray-800"

  return (
    <section className="bg-[#0A2947] min-h-screen py-16 px-6">
      <div className="text-center mb-12 mt-20">
        <h1 className="text-2xl md:text-5xl font-bold font-serif text-[#F69D39]">Manage Store</h1>
      </div>
      <div className="container mx-auto max-w-screen-lg grid md:grid-cols-2 gap-8">
        <form onSubmit={addCategory} className="bg-white rounded shadow p-8">
          <h2 className="text-xl font-bold font-serif text-[#F69D39] mb-4">Add Category</h2>
          <label className="block font-serif text-[#0A2947]">Name</label>
          <input className={input} value={cat} onChange={e => setCat(e.target.value)} required />
          <button className="mt-6 w-full bg-[#112E81] text-[#F69D39] py-3 rounded-lg font-bold">Add Category</button>
        </form>

        <form onSubmit={addProduct} className="bg-white rounded shadow p-8">
          <h2 className="text-xl font-bold font-serif text-[#F69D39] mb-4">Add Product</h2>
          <label className="block font-serif text-[#0A2947]">Name</label>
          <input className={input} value={p.name} onChange={e => setP({ ...p, name: e.target.value })} required />
          <label className="block font-serif text-[#0A2947] mt-3">Description</label>
          <input className={input} value={p.description} onChange={e => setP({ ...p, description: e.target.value })} />
          <label className="block font-serif text-[#0A2947] mt-3">Price</label>
          <input type="number" step="0.01" className={input} value={p.price} onChange={e => setP({ ...p, price: e.target.value })} required />
          <label className="block font-serif text-[#0A2947] mt-3">Image URL</label>
          <input className={input} value={p.image} onChange={e => setP({ ...p, image: e.target.value })} />
          <label className="block font-serif text-[#0A2947] mt-3">Badge (NEW / SALE, optional)</label>
          <input className={input} value={p.badge} onChange={e => setP({ ...p, badge: e.target.value })} />
          <label className="block font-serif text-[#0A2947] mt-3">Category</label>
          <select className={input} value={p.category_id} onChange={e => setP({ ...p, category_id: e.target.value })}>
            <option value="">Select category</option>
            {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
          <button className="mt-6 w-full bg-[#112E81] text-[#F69D39] py-3 rounded-lg font-bold">Add Product</button>
        </form>
      </div>
      {msg && <p className="text-center mt-6 font-serif text-[#F69D39]">{msg}</p>}
    </section>
  )
}