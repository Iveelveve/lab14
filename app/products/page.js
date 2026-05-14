import Link from "next/link";
import { products } from "../../lib/data";

export const dynamic = "force-dynamic";

export default function ProductsPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Манай бараанууд</h1>
      <Link href="/products/create" className="bg-blue-500 text-white p-2 rounded mb-4 inline-block">
        + Шинэ бараа нэмэх
      </Link>
      <div className="grid gap-4 mt-4">
        {products.map((p) => (
          <div key={p.id} className="border p-4 rounded shadow-sm">
            <h2 className="font-semibold text-xl">{p.title}</h2>
            <p className="text-gray-800">${p.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
