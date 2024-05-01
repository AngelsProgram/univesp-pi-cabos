"use client";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import { useForm, SubmitHandler } from "react-hook-form";

import { insertItem } from "./action";

type Inputs = {
  id: number;
  nome: string;
  color: string;
  raio: number;
  tipo: string;
  bitola: number;
  price_buy: number;
  price_sell_liquid: number;
  price_sell_brute: number;
  quantity: number;
  value: number;
  acumulado: number;
};

export default function Page() {
  const { register } = useForm<Inputs>();
  return (
    <Container>
      <Form action={insertItem}>
        <Form.Group>
          <Form.Label>
            ID: <Form.Control type="number" {...register("id")} min={0} />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Descrição: <Form.Control type="text" {...register("nome")} />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Cor: <Form.Control type="text" {...register("color")} />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Raio mínimo de dobra dentro do conduite:{" "}
            <Form.Control type="number" step="any" {...register("raio")} />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Tipo comercial: <Form.Control type="text" {...register("tipo")} />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Unidade da medida da bitola:{" "}
            <Form.Control type="number" step="any" {...register("bitola")} />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Preço de compra sem os impostos:{" "}
            <Form.Control type="number" step="any" {...register("price_buy")} />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Preço de venda sem os impostos
            <InputGroup>
              <InputGroup.Text>R$</InputGroup.Text>
              <Form.Control
                type="number"
                step="any"
                {...register("price_sell_liquid")}
                disabled
              />
            </InputGroup>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Preço de venda com os impostos:
            <InputGroup>
              <InputGroup.Text>R$</InputGroup.Text>
              <Form.Control
                type="number"
                step="any"
                {...register("price_sell_brute")}
                disabled
              />
            </InputGroup>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Quantidade:
            <InputGroup>
              <Form.Control type="number" name="quantity" />{" "}
              <InputGroup.Text>metros</InputGroup.Text>
            </InputGroup>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Valor do item em estoque:
            <InputGroup>
              <InputGroup.Text>R$</InputGroup.Text>
              <Form.Control type="number" step="any" {...register("value")} />
            </InputGroup>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Acumulado do estoque:{" "}
            <Form.Control
              type="number"
              step="any"
              {...register("acumulado")}
              disabled
            />
          </Form.Label>
        </Form.Group>
        <Button variant="danger" type="reset">
          Limpar
        </Button>
        <Button variant="warning">Editar</Button>
        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
    </Container>
  );
}
