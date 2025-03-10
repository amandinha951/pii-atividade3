import {Alert, Button, Container, Table}from 'react-bootstrap';
export default function TabelaConcessionarias(props){

    function excluirConcessionarias(concessionarias){
        const novaLista = props.listaDeConcessionarias.filter(f => f.cnpj != concessionarias.cnpj)
        props.setListaDeConcessionarias(novaLista)
    }

    function selecionarConcessionarias(concessionarias){
        props.setConcessionariasSelecionado(concessionarias)
        props.setModoEdicao(true)
        props.setMostrarTabela(false)

    }

    return(
        <Container>
            <Alert className='text-center'><h2>Tabela de Concessionárias</h2></Alert>
            <Button onClick={()=> {
                props.setMostrarTabela(false)}} 
                className='mb-3' variant="primary">Novo Concessionária</Button>
            <Table striped bordered hover className='mt-4'>
            <thead>
                <tr>
                    <th>Nome da concessionária</th>
                    <th>CNPJ</th>
                    <th>Telefone</th>
                    <th>Email</th>
                    <th>Cidade</th>
                    <th>Representante</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    props?.listaDeConcessionarias?.map((concessionarias) => {
                        return <tr key={concessionarias.cnpj}>
                                <td>{concessionarias.nome}</td>
                                <td>{concessionarias.cnpj}</td>
                                <td>{concessionarias.telefone}</td>
                                <td>{concessionarias.email}</td>
                                <td>{concessionarias.cidade?.nome +" - " + concessionarias.cidade?.estado}</td>
                                <td>{concessionarias.representante}</td>

                                <td>
                                    <Button onClick={()=>{
                                        selecionarConcessionarias(concessionarias)
                                    }} variant="warning">Editar</Button>{' '}
                                    <Button onClick={()=>{ 
                                        if(window.confirm ("Tem certeza que deseja excluir esse concessionária?")){
                                            excluirConcessionarias(concessionarias)}
                                        
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