"use server";
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

export async function insertItem(formData: FormData) {
  const obj = {
    id: formData.get("id"),
    description: formData.get("nome"),
    quantity: formData.get("quantity"),
  };
  // prisma.produto.create({ data: {} });
}
