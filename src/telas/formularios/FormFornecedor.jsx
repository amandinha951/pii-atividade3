import {Alert,Form, Row, Col, InputGroup, Button} from 'react-bootstrap'
import { useState } from 'react';


export default function FormFornecedor(props){
    const [validated, setValidated] = useState(false);
    const [fornecedor, setFornecedor] = useState(props.fornecedorSelecionado)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        
        } else {
            if(!props.modoEdicao){
                props.setListaDeFornecedores([...props.listaDeFornecedores,fornecedor])
            }else{
                const novaLista = props.listaDeFornecedores
                const indice = props.listaDeFornecedores.findIndex (f => f.cnpj == fornecedor.cnpj)
                novaLista[indice] = fornecedor
                props.setListaDeFornecedores(novaLista)
            }
            props.setModoEdicao(false)
            props.setFornecedorSelecionado({ nome:"",
                cnpj:"",
                telefone:"",
                email:"",
                cidade:{ id:1, nome:"São Paulo", estado:"SP"},
                representante:""})
            props.setMostrarTabela(true)
        }

        setValidated(true);
    };


    function atualizarFornecedor(evento){
        setFornecedor({...fornecedor,[evento.target.name]:evento.target.value})
    }

    function selecionarCidade(evento){
        const id_cidade= evento.target.value
        const indice = props.listaDeCidade.findIndex(cidade=> cidade.id == id_cidade)
        setFornecedor ({...fornecedor, cidade:props.listaDeCidade[indice]})
    }

    return(
        <>
        <Alert className='text-center'><h2>Formulário de Cadastro de Fornecedores</h2></Alert>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} className='mt-4'  >
                    <Form.Label>Nome da empresa</Form.Label>
                    <Form.Control
                        required
                        id="nome"
                        name="nome"
                        type="text"
                        placeholder="Informe o nome da empresa"
                        value={fornecedor.nome}
                        onChange = {atualizarFornecedor}
                    />
                    <Form.Control.Feedback type="invalid">Informe o nome da empresa</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className='mt-4' >
                    <Form.Label>CNPJ</Form.Label>
                    <Form.Control
                        required
                        id="cnpj"
                        name="cnpj"
                        type="text"
                        placeholder="00.000.000/0000-00"
                        value={fornecedor.cnpj}
                        onChange = {atualizarFornecedor}
                    />
                <Form.Control.Feedback type="invalid" >Informe um CNPJ válido</Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} className='mt-2'  >
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control
                        required
                        id="telefone"
                        name="telefone"
                        type="text"
                        placeholder="(00) 0000-0000"
                        value={fornecedor.telefone}
                        onChange = {atualizarFornecedor}
                    />
                    <Form.Control.Feedback type="invalid">Informe um número de telefone</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className='mt-2' >
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control
                        required
                        id="email"
                        name="email"
                        type="email"
                        placeholder="empresa@gmail.com"
                        value={fornecedor.email}
                        onChange = {atualizarFornecedor}
                    />
                <Form.Control.Feedback type="invalid" >Informe um e-mail válido</Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} className='mt-2' >
                <Form.Label>Cidade</Form.Label>
                    <Form.Select aria-label="Default select example" value = {fornecedor.cidade.id || ""}
                        onChange={selecionarCidade} >
                        <option  disabled value="" >Selecione uma cidade...</option>
                        {
                            props?.listaDeCidade.map((cidade) =>{
                                return <option key={cidade.id} value={cidade.id}> 
                                {cidade.nome + " - " + cidade.estado}
                                </option>
                            })
                        }
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} className='mt-2'  >
                    <Form.Label>Representante</Form.Label>
                    <Form.Control
                        required
                        id="representante"
                        name="representante"
                        type="text"
                        placeholder="Nome do representante"
                        value={fornecedor.representante}
                        onChange = {atualizarFornecedor}
                    />
                    <Form.Control.Feedback type="invalid">Informe o nome do representante</Form.Control.Feedback>
                </Form.Group>
            </Row>
            
            <div>
                <Button variant="primary" size="lg" type='submit'>
                    {props.modoEdicao ? "Atualizar":"Cadastrar"}</Button>{' '}
                <Button onClick={()=> {
                    props.setModoEdicao(false)
                    props.setMostrarTabela(true)
                    }} variant="secondary" size="lg" type='button'>Voltar</Button>
            </div>
            </Form>
        </>
    )
}