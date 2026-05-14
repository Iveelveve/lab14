const getBaseUrl = () => {
  if (typeof window !== "undefined") return "";
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
};

export const getProducts = async () => {
  const res = await fetch(`${getBaseUrl()}/api/products`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export const createProduct = async (productData) => {
  const res = await fetch(`${getBaseUrl()}/api/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(productData),
  });
  if (!res.ok) {
    const errorData = await res.json();
    return errorData;
  }
  return res.json();
};
