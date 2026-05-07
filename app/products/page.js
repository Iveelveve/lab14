// Хуучин байсан: import { getProducts } from "@/services/productsClient";
// Шинэ (зассан):
import { getProducts } from "../../services/productsClient";
import Link from "next/link";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Манай бараанууд</h1>
      <Link href="/products/create" className="bg-blue-500 text-white p-2 rounded mb-4 inline-block">
        + Шинэ бараа нэмэх
      </Link>
      <div className="grid gap-4 mt-4">
        {products.map((p) => (
          <div key={p.id} className="border p-4 rounded shadow-sm">
            <h2 className="font-semibold text-xl">{p.title}</h2>
            <p className="text-gray-600">${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}