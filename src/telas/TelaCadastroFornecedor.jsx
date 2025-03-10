import Pagina from "../templates/Pagina";
import FormFornecedor from "./formularios/FormFornecedor";
import TabelaFornecedor from "./tabelas/TabelaFornecedor";
import { useState } from "react";
import fornecedor from "../dados/fornecedor"
import cidade from "../dados/cidade"


export default function TelaCadastroFornecedor(props){
    const [mostrarTabela, setMostrarTabela] = useState(true)
    const [listaDeFornecedores,setListaDeFornecedores] = useState(fornecedor)
    const [fornecedorSelecionado, setFornecedorSelecionado] = useState({
        nome:"",
        cnpj:"",
        telefone:"",
        email:"",
        cidade:{ id:0, nome:"", estado:""},
        representante:""
    })

    const [modoEdicao, setModoEdicao] = useState(false)

    return(
        <Pagina titulo='Tela de Cadastro de Fornecedores' >
            {
                mostrarTabela ? <TabelaFornecedor mostrarTabela= {mostrarTabela}
                                                setMostrarTabela= {setMostrarTabela}
                                                listaDeFornecedores = {listaDeFornecedores}
                                                setListaDeFornecedores={setListaDeFornecedores}
                                                setFornecedorSelecionado = {setFornecedorSelecionado}
                                                setModoEdicao={setModoEdicao}/>:
                                <FormFornecedor mostrarTabela={mostrarTabela}
                                                        setMostrarTabela={setMostrarTabela}
                                                        listaDeFornecedores = {listaDeFornecedores}
                                                        setListaDeFornecedores={setListaDeFornecedores}
                                                        listaDeCidade ={cidade}
                                                        fornecedorSelecionado ={fornecedorSelecionado}
                                                        setFornecedorSelecionado={setFornecedorSelecionado}
                                                        modoEdicao = {modoEdicao}
                                                        setModoEdicao = {setModoEdicao}/>
                                }
        </Pagina>
    )
}