"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getData() {
  try {
    const data = await prisma.produto.findMany({ include: { Venda: true } });
    return data;
  } catch (error) {
    console.error('Error Acessing database');
    // console.log("Error Acessing database");
    // return [{ id: 0, nome: "Error Database" }];
  }
}
