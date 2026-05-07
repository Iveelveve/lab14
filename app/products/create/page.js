"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createProduct } from "@/services/productsClient";

export default function CreateProductPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createProduct({ title, price: Number(price) });
    
    if (result.id) {
      alert("Амжилттай нэмэгдлээ!");
      router.push("/products"); // Жагсаалт руу буцах
      router.refresh(); // Шинэ датаг харуулахын тулд refresh хийх
    }
  };

  return (
    <div className="p-8 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Шинэ бараа бүртгэх</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Барааны нэр"
          className="border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Үнэ"
          className="border p-2 rounded"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit" className="bg-green-500 text-white p-2 rounded">
          Хадгалах
        </button>
      </form>
    </div>
  );
}