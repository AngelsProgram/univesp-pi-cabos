"use server";

export async function insertItem(formData: FormData) {
  const obj = {
    id: formData.get("id"),
    description: formData.get("nome"),
    quantity: formData.get("quantity"),
  };
  console.log(obj);
}
