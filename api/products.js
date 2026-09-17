import { openDatabase } from "../lib/db.js"

export default function handler(req, res) {
  const db = openDatabase()

  if (req.method === "GET") {
    const rows = db.prepare("SELECT * FROM products ORDER BY id").all()
    if (req.query.category) {
      const cat = db.prepare("SELECT id FROM categories WHERE name = ?").get(req.query.category)
      return res.json(rows.filter(p => p.category_id === cat?.id))
    }
    return res.json(rows)
  }

  if (req.method === "POST") {
    const { name, description, price, image, badge, category_id } = req.body ?? {}
    if (!name || price == null) return res.status(400).json({ error: "name and price are required" })
    const r = db.prepare(
      "INSERT INTO products (name, description, price, image, badge, category_id) VALUES (?,?,?,?,?,?)"
    ).run(name, description ?? null, price, image ?? null, badge ?? null, category_id ?? null)
    return res.status(201).json({ id: r.lastInsertRowid })
  }

  res.status(405).json({ error: "Method not allowed" })
}