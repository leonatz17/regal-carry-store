import { openDatabase } from "../lib/db.js"

export default function handler(req, res) {
  const db = openDatabase()

  if (req.method === "GET") {
    const orders = db.prepare("SELECT * FROM orders ORDER BY id DESC").all()
    const getItems = db.prepare(`
      SELECT oi.id, oi.product_id, oi.name, oi.price, oi.qty, COALESCE(oi.image, p.image) AS image
      FROM order_items oi LEFT JOIN products p ON p.id = oi.product_id
      WHERE oi.order_id = ?
    `)
    return res.json(orders.map(o => ({ ...o, items: getItems.all(o.id) })))
  }

  if (req.method === "POST") {
    const { customer_name, email, address, city, state, zip, items, total } = req.body ?? {}
    const r = db.prepare(
      "INSERT INTO orders (customer_name, email, address, city, state, zip, total) VALUES (?,?,?,?,?,?,?)"
    ).run(customer_name ?? null, email ?? null, address ?? null, city ?? null, state ?? null, zip ?? null, total ?? 0)
    const ins = db.prepare(
      "INSERT INTO order_items (order_id, product_id, name, price, qty, image) VALUES (?,?,?,?,?,?)"
    )
    for (const it of items ?? []) {
      ins.run(r.lastInsertRowid, it.id ?? null, it.name ?? null, it.price ?? 0, it.qty ?? 1, it.image ?? null)
    }
    return res.status(201).json({ id: r.lastInsertRowid })
  }

  if (req.method === "DELETE") {
    db.exec("DELETE FROM order_items; DELETE FROM orders;")
    return res.json({ ok: true })
  }

  res.status(405).json({ error: "Method not allowed" })
}