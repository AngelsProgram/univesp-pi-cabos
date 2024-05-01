"use client";

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import { insertItem } from './action';

export default function Page() {
    return (
        <Container>
            <Form action={insertItem}>
                <Form.Group>
                    <Form.Label>
                        ID: <Form.Control type="number" name="id" min={0} />
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Descrição: <Form.Control type="text" name="nome" />
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Cor: <Form.Control type="color" name="cor" />
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Raio mínimo de dobra dentro do conduite: <Form.Control type="number" step='any' name="raio" />
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Tipo comercial: <Form.Control type="text" name="tipo" />
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Unidade da medida da bitola: <Form.Control type="number" step='any' name="bitola" />
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Preço de compra sem os impostos: <Form.Control type="number" step='any' name="price_buy" />
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Preço de venda sem os impostos
                        <InputGroup>
                            <InputGroup.Text>R$</InputGroup.Text><Form.Control type="number" step='any' name="price_liquid_sell" disabled />
                        </InputGroup>
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Preço de venda com os impostos:
                        <InputGroup>
                            <InputGroup.Text>R$</InputGroup.Text><Form.Control type="number" step='any' name="price_brute_sell" disabled />
                        </InputGroup>
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Quantidade:
                        <InputGroup>
                            <Form.Control type="number" name="quantity" /> <InputGroup.Text>metros</InputGroup.Text>
                        </InputGroup>
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Valor do item em estoque:
                        <InputGroup>
                            <InputGroup.Text>R$</InputGroup.Text><Form.Control type="number" step='any' name="" />
                        </InputGroup>
                    </Form.Label>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Acumulado do estoque: <Form.Control type="number" step='any' name="acumulado" disabled />
                    </Form.Label>
                </Form.Group>
                <Button variant='danger' type='reset'>Limpar</Button>
                <Button variant='warning'>Editar</Button>
                <Button variant='primary' type='submit'>Cadastrar</Button>
            </Form>
        </Container>
    )
}
