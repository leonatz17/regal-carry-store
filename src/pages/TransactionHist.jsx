export default function TransactionHistory({ orders }) {
  return (
    <section className="bg-[#0A2947] min-h-screen py-16 px-6">
      <div className="text-center mb-12 mt-20">
        <h1 className="text-2xl md:text-5xl font-bold font-serif text-[#F69D39]">Order History</h1>
      </div>
      <div className="container mx-auto max-w-screen-lg">
        <div className="flex justify-end mb-4">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700"
            onClick={async () => {
              await fetch("/api/orders", { method: "DELETE" })
              window.location.reload()
            }}>Clear History</button>
        </div>

        {orders.length === 0 && (
          <div className="bg-white rounded shadow p-8 text-center">
            <p className="text-lg text-gray-500 font-serif">No orders yet.</p>
          </div>
        )}

        {orders.map(o => (
          <div key={o.id} className="bg-white rounded shadow p-8 mb-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold font-serif text-[#F69D39]">Order #{o.id}</h3>
              <span className="font-serif text-[#0A2947] text-sm">{o.created_at}</span>
            </div>
            <p className="font-serif text-[#0A2947] mt-2">{o.customer_name} · {o.email}</p>
            <p className="font-serif text-[#0A2947] text-sm mt-1">{o.address}, {o.city}, {o.state} {o.zip}</p>

            <div className="border-t border-gray-200 mt-4 pt-4">
              {(o.items || []).map(it => (
                <div key={it.id} className="flex items-center gap-4 mt-3">
                  {it.image && <img src={it.image} alt={it.name} className="w-16 h-16 object-cover rounded" />}
                  <div>
                    <p className="font-serif text-[#0A2947] font-bold">{it.name}</p>
                    <p className="font-serif text-[#0A2947] text-sm">Qty {it.qty} · ${(it.price * it.qty).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="font-serif text-[#0A2947] font-bold mt-4">Total: ${o.total.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}