import {Alert, Button, Container, Table}from 'react-bootstrap';
export default function TabelaVeiculos(props){

    function excluirVeiculo(veiculo){
        const novaLista = props.listaDeVeiculos.filter(v => v.placa != veiculo.placa)
        props.setListaDeVeiculos(novaLista)
    }

    function selecionarVeiculo(veiculo){
        props.setVeiculoSelecionado(veiculo)
        props.setModoEdicao(true)
        props.setMostrarTabela(false)

    }

    return(
        <Container>
            <Alert className='text-center'><h2>Tabela de Veículos</h2></Alert>
            <Button onClick={()=> {
                props.setMostrarTabela(false)}} 
                className='mb-3' variant="primary">Novo Veículo</Button>
            <Table striped bordered hover className='mt-4'>
            <thead>
                <tr>
                    <th>Placa</th>
                    <th>Cidade</th>
                    <th>Marca</th>
                    <th>Ano</th>
                    <th>Combustível</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    props?.listaDeVeiculos?.map((veiculo) => {
                        return <tr key={veiculo.placa}>
                                <td>{veiculo.placa}</td>
                                <td>{veiculo.cidade?.nome +" - " + veiculo.cidade?.estado}</td>
                                <td>{veiculo.marca}</td>
                                <td>{veiculo.ano}</td>
                                <td>{veiculo.combustivel}</td>
                                <td>
                                    <Button onClick={()=>{
                                        selecionarVeiculo(veiculo)
                                    }} variant="warning">Editar</Button>{' '}
                                    <Button onClick={()=>{ 
                                        if(window.confirm ("Tem certeza que deseja excluir esse veículo?")){
                                            excluirVeiculo(veiculo)}
                                        
                                    }}  variant="danger">Excluir</Button>{' '}
                                </td>
                            </tr>
                    })
                }
            </tbody>
        </Table>
        </Container>
        
    )
}