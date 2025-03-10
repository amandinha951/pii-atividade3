import {Alert,Form, Row, Col, InputGroup, Button} from 'react-bootstrap'
import { useState } from 'react';


export default function FormConcessionarias(props){
    const [validated, setValidated] = useState(false);
    const [concessionarias, setConcessionarias] = useState(props.concessionariasSelecionado)

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        
        } else {
            if(!props.modoEdicao){
                props.setListaDeConcessionarias([...props.listaDeConcessionarias,concessionarias])
            }else{
                const novaLista = props.listaDeConcessionarias
                const indice = props.listaDeConcessionarias.findIndex (f => f.cnpj == concessionarias.cnpj)
                novaLista[indice] = concessionarias
                props.setListaDeConcessionarias(novaLista)
            }
            props.setModoEdicao(false)
            props.setConcessionariasSelecionado({ nome:"",
                cnpj:"",
                telefone:"",
                email:"",
                cidade:{ id:1, nome:"São Paulo", estado:"SP"},
                representante:""})
            props.setMostrarTabela(true)
        }

        setValidated(true);
    };


    function atualizarConcessionarias(evento){
        setConcessionarias({...concessionarias,[evento.target.name]:evento.target.value})
    }

    function selecionarCidade(evento){
        const id_cidade= evento.target.value
        const indice = props.listaDeCidade.findIndex(cidade=> cidade.id == id_cidade)
        setConcessionarias ({...concessionarias, cidade:props.listaDeCidade[indice]})
    }

    return(
        <>
        <Alert className='text-center'><h2>Formulário de Cadastro de Concessionárias</h2></Alert>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} className='mt-4'  >
                    <Form.Label>Nome da Concessionária</Form.Label>
                    <Form.Control
                        required
                        id="nome"
                        name="nome"
                        type="text"
                        placeholder="Informe o nome da empresa"
                        value={concessionarias.nome}
                        onChange = {atualizarConcessionarias}
                    />
                    <Form.Control.Feedback type="invalid">Informe o nome da concessionária</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className='mt-4' >
                    <Form.Label>CNPJ</Form.Label>
                    <Form.Control
                        required
                        id="cnpj"
                        name="cnpj"
                        type="text"
                        placeholder="00.000.000/0000-00"
                        value={concessionarias.cnpj}
                        onChange = {atualizarConcessionarias}
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
                        value={concessionarias.telefone}
                        onChange = {atualizarConcessionarias}
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
                        value={concessionarias.email}
                        onChange = {atualizarConcessionarias}
                    />
                <Form.Control.Feedback type="invalid" >Informe um e-mail válido</Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} className='mt-2' >
                <Form.Label>Cidade</Form.Label>
                    <Form.Select aria-label="Default select example" value = {concessionarias.cidade.id || ""}
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
                        value={concessionarias.representante}
                        onChange = {atualizarConcessionarias}
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