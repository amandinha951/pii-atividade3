import {Alert,Form, Row, Col, InputGroup, Button} from 'react-bootstrap'
import { useState } from 'react';


export default function FormCadastroVeiculos(props){
        const [validated, setValidated] = useState(false);
        const [veiculo, setVeiculo] = useState(props.veiculoSelecionado)

        const handleSubmit = (event) => {
            event.preventDefault();
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
                event.stopPropagation();
            
            } else {
                if(!props.modoEdicao){
                    props.setListaDeVeiculos([...props.listaDeVeiculos,veiculo])
                }else{
                    const novaLista = props.listaDeVeiculos
                    const indice = props.listaDeVeiculos.findIndex (v => v.placa == veiculo.placa)
                    novaLista[indice] = veiculo
                    props.setListaDeVeiculos(novaLista)
                }
                props.setModoEdicao(false)
                props.setVeiculoSelecionado({ placa:"",
                    cidade:{ id:1, nome:"São Paulo", estado:"SP"},
                    marca:"",
                    ano:"",
                    cor:"",
                    chassi:"",
                    renavam:"",
                    combustivel:""})
                props.setMostrarTabela(true)
            }

            setValidated(true);
        };


        function atualizarVeiculo(evento){
            setVeiculo({...veiculo,[evento.target.name]:evento.target.value})
        }

        function selecionarCidade(evento){
            const id_cidade= evento.target.value
            const indice = props.listaDeCidade.findIndex(cidade=> cidade.id == id_cidade)
            setVeiculo ({...veiculo, cidade:props.listaDeCidade[indice]})
        }

    return(
        <>
        <Alert className='text-center'><h2>Formulário de Cadastro de Veículos</h2></Alert>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} className='mt-4'  >
                    <Form.Label>Placa do Veículo</Form.Label>
                    <Form.Control
                        required
                        id="placa"
                        name="placa"
                        type="text"
                        placeholder="Ex: ABC1D23"
                        value={veiculo.placa}
                        onChange = {atualizarVeiculo}
                    />
                    <Form.Control.Feedback type="invalid">Informe a placa do veículo</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className='mt-4' >
                <Form.Label>Cidade</Form.Label>
                    <Form.Select aria-label="Default select example" value = {veiculo.cidade.id || ""}
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
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} className='mt-2'  >
                    <Form.Label>Marca do veículo</Form.Label>
                    <Form.Control
                        required
                        id="marca"
                        name="marca"
                        type="text"
                        placeholder="Marca do veículo"
                        value={veiculo.marca}
                        onChange = {atualizarVeiculo}
                    />
                    <Form.Control.Feedback type="invalid">Informe a marca do veículo</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className='mt-2' >
                    <Form.Label>Ano de Fabricação</Form.Label>
                    <Form.Control
                        required
                        id="ano"
                        name="ano"
                        type="text"
                        placeholder="Ex: 2002"
                        value={veiculo.ano}
                        onChange = {atualizarVeiculo}
                    />
                <Form.Control.Feedback type="invalid" >Informe o ano de fabricação</Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} className='mt-2'  >
                    <Form.Label>Cor do veículo</Form.Label>
                    <Form.Control
                        required
                        id="cor"
                        name="cor"
                        type="text"
                        placeholder="Cor do veículo"
                        value={veiculo.cor}
                        onChange = {atualizarVeiculo}
                    />
                    <Form.Control.Feedback type="invalid">Informe a cor do veículo</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} className='mt-2' >
                    <Form.Label>Chassi do veículo</Form.Label>
                    <Form.Control
                        required
                        id="chassi"
                        name="chassi"
                        type="text"
                        placeholder="Ex: 1ABC23DE45678912"
                        value={veiculo.chassi}
                        onChange = {atualizarVeiculo}
                    />
                <Form.Control.Feedback type="invalid" >Informe o Chassi do veículo</Form.Control.Feedback>
                </Form.Group>
            </Row>

            <Row className="mb-3">
            <Form.Group as={Col} className='mt-2' >
                    <Form.Label>Renavam do veículo</Form.Label>
                    <Form.Control
                        required
                        id="renavam"
                        name="renavam"
                        type="text"
                        placeholder="Ex: 12345678912"
                        value={veiculo.renavam}
                        onChange = {atualizarVeiculo}
                    />
                <Form.Control.Feedback type="invalid" >Informe o Renavam do veículo</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} className='mt-2' >
                    <Form.Label>Tipo de combustível</Form.Label>
                    <Form.Control
                        required
                        id="combustivel"
                        name="combustivel"
                        type="text"
                        placeholder="Tipo de combustível"
                        value={veiculo.combustivel}
                        onChange = {atualizarVeiculo}
                    />
                <Form.Control.Feedback type="invalid" >Informe o tipo de combustível</Form.Control.Feedback>
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