import { openDatabase } from "../lib/db.js"

export default function handler(req, res) {
  const db = openDatabase()

  if (req.method === "GET") {
    return res.json(db.prepare("SELECT * FROM categories ORDER BY id").all())
  }

  if (req.method === "POST") {
    const { name } = req.body ?? {}
    if (!name) return res.status(400).json({ error: "name is required" })
    const r = db.prepare("INSERT INTO categories (name) VALUES (?)").run(name)
    return res.status(201).json({ id: r.lastInsertRowid })
  }

  res.status(405).json({ error: "Method not allowed" })
}