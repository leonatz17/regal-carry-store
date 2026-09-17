import { useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Homepage"
import Cart from "./pages/Cart"
import About from "./pages/Aboutus"
import Contact from "./pages/Contactpage"
import Checkout from "./modal/Checkout"
import TransactionHistory from "./pages/TransactionHist"
import Footer from "./components/Footer"
import AddToCart from "./modal/AddToCart"
import Admin from "./pages/Admin"

export default function App() {
  const [activePages, setActivePages] = useState("home")
  const [cart, setCart] = useState([])
  const [showCheckout, setShowCheckout] = useState(false)
  const [orders, setOrders] = useState([])
  const [pending, setPending] = useState(null)
  const [checkoutItems, setCheckoutItems] = useState([])

  function addToCart(product) {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id)
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...product, qty: 1 }]
    })
  }
  function requestAdd(product) {
    setPending(product)
  }

  function updateQty(id, delta) {
    setCart(prev => prev
      .map(i => i.id === id ? { ...i, qty: i.qty + delta } : i)
      .filter(i => i.qty > 0))
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(i => i.id !== id))
  }

  



  return (
    <>
      <Navbar
        setActivePages={setActivePages}
        cartCount={cart.reduce((n, i) => n + i.qty, 0)}
        onOpenCart={() => setActivePages("cart")}
        onOpenOrders={() => { fetch("/api/orders").then(r => r.json()).then(setOrders); setActivePages("orders") }}
      />
      <main>
        {activePages === "home" && <Home onAddToCart={requestAdd} />}
        {activePages === "cart" &&
          <Cart
            cart={cart}
            onUpdateQty={updateQty}
            onRemove={removeFromCart}
           onCheckout={(items) => { if (items.length === 0) return; setCheckoutItems(items); setShowCheckout(true) }}
          />}
        {activePages === "about" && <About />}
        {activePages === "contact" && <Contact />}
        {activePages === "orders" && <TransactionHistory orders={orders} />}
        {activePages === "admin" && <Admin />}
      </main>
      {showCheckout && (
        <Checkout
          cart={checkoutItems}
          onClose={() => setShowCheckout(false)}
          onSuccess={(ids) => { setCart(prev => prev.filter(i => !ids.includes(i.id))); setShowCheckout(false) }}
        />
      )}

      {pending && (
        <AddToCart
          product={pending}
          onAdd={() => addToCart(pending)}
          onClose={() => setPending(null)}
          onViewCart={() => { setPending(null); setActivePages("cart") }}
        />
      )}
      <Footer
        onHome={() => setActivePages("home")}
        onAbout={() => setActivePages("about")}
        onContact={() => setActivePages("contact")}
      />
    </>
  )
}