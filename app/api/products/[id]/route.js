import { NextResponse } from "next/server";

let products = [
  { id: 1, title: "iPhone 15", price: 1000, description: "Apple flagship" },
  { id: 2, title: "MacBook Air", price: 1200, description: "M3 chip" },
];

export async function GET(request, { params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return NextResponse.json({ error: { message: "Product not found" } }, { status: 404 });
  }

  return NextResponse.json(product);
}