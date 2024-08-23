"use server";
import { PrismaClient } from "@prisma/client";
import type { Produto } from "@prisma/client";
import type { SubmitHandler } from "react-hook-form";

const prisma = new PrismaClient();

export async function insertItem(formData: FormData) {
  const obj = {
    id: formData.get("id"),
    description: formData.get("nome"),
    quantity: formData.get("quantity"),
  };
  // prisma.produto.create({ data: {} });
}

export const insertProduto: SubmitHandler<Produto> = async function (
  data,
): Promise<Produto | undefined> {
  try {
    const produto = await prisma.produto.create({ data });
    return produto;
  } catch (error) {
    return undefined;
  }
};
