import { DatabaseSync } from "node:sqlite"
import path from "node:path"

export function openDatabase() {
  const db = new DatabaseSync(path.join("/tmp", "regal.db"))

  db.exec(`
    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      price REAL NOT NULL,
      image TEXT,
      badge TEXT,
      category_id INTEGER REFERENCES categories(id)
    );

    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      created_at TEXT DEFAULT (datetime('now')),
      customer_name TEXT, email TEXT, address TEXT,
      city TEXT, state TEXT, zip TEXT, total REAL
    );

    CREATE TABLE IF NOT EXISTS order_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_id INTEGER NOT NULL,
      product_id INTEGER,
      name TEXT, price REAL, qty INTEGER,
      image TEXT
    );
  `)
  try { db.exec("ALTER TABLE order_items ADD COLUMN image TEXT") } catch {}

  if (db.prepare("SELECT COUNT(*) c FROM categories").get().c === 0) {
    const addCat = db.prepare("INSERT INTO categories (name) VALUES (?)")
    const catId = {}
    for (const name of ["Backpacks", "Totes", "Sling Bags"]) {
      catId[name] = addCat.run(name).lastInsertRowid
    }

    const addProd = db.prepare(
      "INSERT INTO products (name, description, price, image, badge, category_id) VALUES (?,?,?,?,?,?)"
    )
    addProd.run("Urban Daypack", "Sleek, lightweight, city-ready; fits laptop + daily essentials", 79.99, "https://www.mopak.com/cdn/shop/files/MP0005-Natural-06.jpg?v=1772425043", "NEW", catId.Backpacks)
    addProd.run("Metro Pack", "Slim, professional; clean lines, ideal for work/school", 90.99, "https://www.carryology.com/wp-content/uploads/2019/10/00100lPORTRAIT_00100_BURST20191026162906945_COVER.jpg", "NEW", catId.Backpacks)
    addProd.run("Classic Canvas", "Timeless look, durable cotton; casual, rugged charm", 50.00, "https://cdn.shopify.com/s/files/1/0183/7917/products/Large-Canvas-Rucksack-Backpack-Women-1_grande.jpg", "NEW", catId.Backpacks)
    addProd.run("Trek Pro", "Spacious, weather-resistant; padded back + hip support", 70.95, "https://gppro.in/wp-content/uploads/2024/11/Lowepro-Flipside-Trek-BP-450-AW-Backpack-GrayDark-Green-1.jpg", "NEW", catId.Backpacks)
    addProd.run("Daily Carryall", "Roomy open top; fits books, lunch & daily essentials", 129.00, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvphH9MdhI9VAKcMuGrdEm9OL3suOPmUSk1uqbTtEfICdA7xfmC1GBn0tL&s=10", null, catId.Totes)
    addProd.run("Metro Shopper", "Long comfortable handles; sturdy base for errands & shopping", 150.55, "https://typo.com/dw/image/v2/BBDS_PRD/on/demandware.static/-/Sites-catalog-master-typo/default/dw33fa9884/1687285/1687285-02-2.jpg?sw=640&sh=960&sm=fit", null, catId.Totes)
    addProd.run("Executive Leather", "Premium leather; sleek silhouette, professional finish", 170.25, "https://veloisse.com/cdn/shop/files/O1CN01F2puUU290LcWmshyM__952538005-0-cib.jpg?v=1773998547", null, catId.Totes)
    addProd.run("Urban Sling Bag", "Crossbody, 10L", 49.99, "https://urbanize.com.ph/cdn/shop/files/Pacsafe__X_Anti-Theft_Urban_Sling_Bag_-_Urbanize_Philippines-7315138.jpg?v=1767668637", "SALE", catId["Sling Bags"])
    addProd.run("CitySling", "Lightweight, all-day carry for commutes & errands", 45.99, "https://canvelle.com/cdn/shop/files/CTSLG-BLK-LG-LIFESTYLE-1.jpg?v=1778539684&width=3840", "SALE", catId["Sling Bags"])
    addProd.run("NeoTote", "Modern shape, subtle accents; trendy yet practical", 93.99, "https://www.stee-atelier.com/cdn/shop/products/Neo-TOTE-0900-01_1200x1200.jpg?v=1604310522", "SALE", catId["Sling Bags"])
  }

  return db
}