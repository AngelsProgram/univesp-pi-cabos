export default function Page() {

    async function insertItem(formData: FormData) {
        "use server"
        const obj = {
            id: formData.get("id"),
            description: formData.get("description"),
            quantity: formData.get("quantity"),
        }
        console.log(obj);
    }

    return (
        <form action={insertItem}>
            <div>
                <label>
                    ID: <input type="number" name="id" min={0} />
                </label>
            </div>
            <div>
                <label>
                    Descrição: <input type="text" name="description" />
                </label>
            </div>
            <div>
                <label>
                    Quantidade: <input type="number" name="quantity" /> (metros)
                </label>
            </div>
            <input type="reset" value="Limpar" />
            <input type="submit" value="Cadastrar" />
        </form>
    )
}
