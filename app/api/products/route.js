import { NextResponse } from "next/server";
import { products } from "../../../lib/data";

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request) {
  try {
    const body = await request.json();
    if (!body.title || !body.price) {
      return NextResponse.json(
        { error: { message: "Title and Price are required" } },
        { status: 400 }
      );
    }
    const newProduct = { id: products.length + 1, ...body };
    products.push(newProduct);
    return NextResponse.json(newProduct, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { error: { message: "Invalid request format" } },
      { status: 500 }
    );
  }
}
