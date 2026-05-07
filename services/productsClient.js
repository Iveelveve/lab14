const API_URL = "http://localhost:3000/api/products";

export const getProducts = async () => {
  const res = await fetch(API_URL, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export const createProduct = async (productData) => {
  const res = await fetch("http://localhost:3000/api/products", {
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