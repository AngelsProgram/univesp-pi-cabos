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
                    Descrição: <input type="text" name="nome" />
                </label>
            </div>
            <div>
                <label>
                    Cor: <input type="color" name="cor" />
                </label>
            </div>
            <div>
                <label>
                    Raio mínimo de dobra dentro do conduite: <input type="number" step='any' name="raio" />
                </label>
            </div>
            <div>
                <label>
                    Tipo comercial: <input type="text" name="tipo" />
                </label>
            </div>
            <div>
                <label>
                    Unidade da medida da bitola: <input type="number" step='any' name="bitola" />
                </label>
            </div>
            <div>
                <label>
                    Preço de compra sem os impostos: <input type="number" step='any' name="price_buy" />
                </label>
            </div>
            <div>
                <label>
                    Preço de venda sem os impostos <input type="number" step='any' name="price_liquid_sell" disabled />
                </label>
            </div>
            <div>
                Preço de venda com os impostos: <input type="number" step='any' name="price_brute_sell" disabled />
            </div>
            <div>
                <label>
                    Quantidade: <input type="number" name="quantity" /> (metros)
                </label>
            </div>
            <div>
                <label>
                    Valor do item em estoque: <input type="number" step='any' name="" />
                </label>
            </div>
            <div>
                Acumulado do estoque: <input type="number" step='any' name="acumulado" disabled />
            </div>
            <input type="reset" value="Limpar" />
            <input type="submit" value="Cadastrar" />
        </form>
    )
}
