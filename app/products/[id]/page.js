export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  

  const res = await fetch(`http://localhost:3000/api/products/${id}`, { cache: 'no-store' });
  const product = await res.json();

  if (product.error) {
    return <div className="p-8 text-red-500">Бараа олдсонгүй (404)</div>;
  }

  return (
    <div className="p-8 border m-4 rounded shadow">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <p className="text-xl text-green-600 mt-2">${product.price}</p>
      <p className="mt-4 text-gray-700">{product.description}</p>
      <hr className="my-6" />
      <p className="text-sm text-gray-400">ID: {id}</p>
      <a href="/products" className="text-blue-500 underline mt-4 block">← Буцах</a>
    </div>
  );
}