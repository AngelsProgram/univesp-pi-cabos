"use client";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

import { useForm, SubmitHandler } from "react-hook-form";

import { PrismaClient } from "@prisma/client";
import { Produto } from "@prisma/client";
import { insertItem } from "./action";

const prisma = new PrismaClient();

export default function Page() {
  const { register, handleSubmit } = useForm<Produto>();

  const onSubmit: SubmitHandler<Produto> = async function (data) {
    const produto = await prisma.produto.create({ data });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group>
          <Form.Label>
            ID: <Form.Control type="number" {...register("id")} min={0} />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Tipo comercial: <Form.Control type="text" {...register("tipo")} />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Descrição: <Form.Control type="text" {...register("nome")} />
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Cor: <Form.Control type="text" {...register("cor")} />
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
            Unidade da medida da bitola:{" "}
            <Form.Control type="number" step="any" {...register("isolacao")} />
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
            <Form.Control
              type="number"
              step="any"
              {...register("precoCompra")}
            />
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
                {...register("precoVendaLiquido")}
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
                {...register("precoVendaImposto")}
                disabled
              />
            </InputGroup>
          </Form.Label>
        </Form.Group>
        <Form.Group>
          <Form.Label>
            Quantidade:
            <InputGroup>
              <Form.Control type="number" {...register("quantidade")} />{" "}
              <InputGroup.Text>metros</InputGroup.Text>
            </InputGroup>
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
