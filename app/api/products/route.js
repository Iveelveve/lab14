import { NextResponse } from "next/server";

// Түр зуурын дата (In-memory database)
let products = [
  { id: 1, title: "iPhone 15", price: 1000, description: "Apple flagship" },
  { id: 2, title: "MacBook Air", price: 1200, description: "M3 chip" },
];

// GET: Бүх барааг буцаах
export async function GET() {
  return NextResponse.json(products);
}

// POST: Шинэ бараа нэмэх
export async function POST(request) {
  try {
    const body = await request.json();
    
    if (!body.title || !body.price) {
      return NextResponse.json(
        { error: { message: "Title and Price are required" } },
        { status: 400 }
      );
    }

    const newProduct = {
      id: products.length + 1,
      ...body,
    };
    products.push(newProduct);
    
    return NextResponse.json(newProduct, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: { message: "Invalid request format" } },
      { status: 500 }
    );
  }
}