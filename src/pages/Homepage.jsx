import { useEffect, useRef, useState } from "react"
import BagLogo from '../images/bags.png'

export default function Home({ onAddToCart }) {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [active, setActive] = useState("All")
  const productsRef = useRef(null)

  useEffect(() => {
    fetch("/api/categories").then(r => r.json()).then(setCategories).catch(() => {})
    fetch("/api/products").then(r => r.json()).then(setProducts).catch(() => {})
  }, [])

  const shown = active === "All"
    ? products
    : active === "New"
      ? [...products].sort((a, b) => b.id - a.id)
      : products.filter(p => p.category_id === categories.find(c => c.name === active)?.id)

  function goSection(filter) {
    setActive(filter)
    productsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div>
      <div className="h-screen">
        <div className="h-full w-full bg-cover bg-center bg-no-repeat flex items-center px-6 sm:px-12 md:pl-[137px]"
          style={{ backgroundImage: `url(${BagLogo})` }}>
          <div className="flex flex-col w-full max-w-[397px]">
            <div className="text-3xl sm:text-[34px] leading-9 sm:leading-8 text-[#F69D39] font-bold font-serif">Carry your World,</div>
            <div className="text-4xl sm:text-[56px] sm:leading-none font-medium mb-4 text-[#F69D39] font-bold font-serif">With timeless Style.</div>
            <p className="w-full mb-[40px] text-[#F69D39] font-bold font-serif">
              Premium backpacks, versatile totes and sleek sling bags - crafted for every journey, designed for everyone.
            </p>
            <div className="flex flex-wrap gap-[16px]">
              <button
                className={"rounded-[4px] p-[12px] font-medium " + (active === "All" ? "bg-[#F69D39] text-black" : "bg-white text-black")}
                onClick={() => goSection("All")}>Shop Now</button>
              <button
                className={"rounded-[4px] p-[12px] border-2 font-medium " + (active === "New" ? "border-[#F69D39] text-[#F69D39]" : "border-white text-white")}
                onClick={() => goSection("New")}>New Items</button>
            </div>
          </div>
        </div>
      </div>

      <section ref={productsRef} className="bg-[#0A2947] min-h-screen py-16 px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#F69D39] font-serif">Quality & Style, All in One Place</h1>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <button
            className={"px-4 py-2 rounded-full " + (active === "All" ? "bg-[#F69D39] text-[#0A2947]" : "bg-gray-200 text-gray-700 hover:bg-gray-300")}
            onClick={() => setActive("All")}>All</button>
          {categories.map(c => (
            <button
              key={c.id}
              className={"px-4 py-2 rounded-full " + (active === c.name ? "bg-[#F69D39] text-[#0A2947]" : "bg-gray-200 text-gray-700 hover:bg-gray-300")}
              onClick={() => setActive(c.name)}>{c.name}</button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {shown.map(p => (
            <div key={p.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden group">
              <div className="relative">
                <img src={p.image} alt={p.name} className="w-full h-60 object-cover group-hover:scale-105 transition-transform" />
                {p.badge && <span className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 rounded">{p.badge}</span>}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{p.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{p.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-semibold text-green-600">${p.price.toFixed(2)}</span>
                  <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800" onClick={() => onAddToCart(p)}>Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}