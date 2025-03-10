import {Alert, Button, Container, Table}from 'react-bootstrap';
export default function TabelaFornecedor(props){

    function excluirFornecedor(fornecedor){
        const novaLista = props.listaDeFornecedores.filter(f => f.cnpj != fornecedor.cnpj)
        props.setListaDeFornecedores(novaLista)
    }

    function selecionarFornecedor(fornecedor){
        props.setFornecedorSelecionado(fornecedor)
        props.setModoEdicao(true)
        props.setMostrarTabela(false)

    }

    return(
        <Container>
            <Alert className='text-center'><h2>Tabela de Fornecedores</h2></Alert>
            <Button onClick={()=> {
                props.setMostrarTabela(false)}} 
                className='mb-3' variant="primary">Novo Fornecedor</Button>
            <Table striped bordered hover className='mt-4'>
            <thead>
                <tr>
                    <th>Nome da empresa</th>
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
                    props?.listaDeFornecedores?.map((fornecedor) => {
                        return <tr key={fornecedor.cnpj}>
                                <td>{fornecedor.nome}</td>
                                <td>{fornecedor.cnpj}</td>
                                <td>{fornecedor.telefone}</td>
                                <td>{fornecedor.email}</td>
                                <td>{fornecedor.cidade?.nome +" - " + fornecedor.cidade?.estado}</td>
                                <td>{fornecedor.representante}</td>

                                <td>
                                    <Button onClick={()=>{
                                        selecionarFornecedor(fornecedor)
                                    }} variant="warning">Editar</Button>{' '}
                                    <Button onClick={()=>{ 
                                        if(window.confirm ("Tem certeza que deseja excluir esse fornecedor?")){
                                            excluirFornecedor(fornecedor)}
                                        
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