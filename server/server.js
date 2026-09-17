import express from "express"
import db from "./db.js"

const app = express()
app.use(express.json())

const categories = db.prepare("SELECT * FROM categories ORDER BY id")
const products = db.prepare("SELECT * FROM products ORDER BY id")

app.get("/api/categories", (req, res) => {
  res.json(categories.all())
})

app.get("/api/products", (req, res) => {
  const rows = products.all()
  if (req.query.category) {
    const cat = db.prepare("SELECT id FROM categories WHERE name = ?").get(req.query.category)
    return res.json(rows.filter(p => p.category_id === cat?.id))
  }
  res.json(rows)
})

app.get("/api/orders", (req, res) => {
  const orders = db.prepare("SELECT * FROM orders ORDER BY id DESC").all()
  const getItems = db.prepare(`
    SELECT oi.id, oi.product_id, oi.name, oi.price, oi.qty, COALESCE(oi.image, p.image) AS image
    FROM order_items oi LEFT JOIN products p ON p.id = oi.product_id
    WHERE oi.order_id = ?
  `)
  res.json(orders.map(o => ({ ...o, items: getItems.all(o.id) })))
})

app.post("/api/orders", (req, res) => {
  const { customer_name, email, address, city, state, zip, items, total } = req.body
  const r = db.prepare(
    "INSERT INTO orders (customer_name, email, address, city, state, zip, total) VALUES (?,?,?,?,?,?,?)"
  ).run(customer_name, email, address, city, state, zip, total)
  const ins = db.prepare("INSERT INTO order_items (order_id, product_id, name, price, qty, image) VALUES (?,?,?,?,?,?)")
  for (const it of items) ins.run(r.lastInsertRowid, it.id, it.name, it.price, it.qty, it.image ?? null)
  res.status(201).json({ id: r.lastInsertRowid })
})

app.delete("/api/orders", (req, res) => {
  db.exec("DELETE FROM order_items; DELETE FROM orders;")
  res.json({ ok: true })
})

app.post("/api/categories", (req, res) => {
  const { name } = req.body
  const r = db.prepare("INSERT INTO categories (name) VALUES (?)").run(name)
  res.status(201).json({ id: r.lastInsertRowid })
})

app.post("/api/products", (req, res) => {
  const { name, description, price, image, badge, category_id } = req.body
  if (!name || price == null) return res.status(400).json({ error: "name and price are required" })
  const r = db.prepare(
    "INSERT INTO products (name, description, price, image, badge, category_id) VALUES (?,?,?,?,?,?)"
  ).run(name, description, price, image ?? null, badge ?? null, category_id ?? null)
  res.status(201).json({ id: r.lastInsertRowid })
})

const port = process.env.PORT || 3001
app.listen(port, () => console.log("API on port " + port))