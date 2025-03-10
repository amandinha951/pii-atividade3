import Pagina from "../templates/Pagina";
import FormCadastroVeiculos from "./formularios/FormCadastroVeiculos";
import TabelaVeiculos from "./tabelas/TabelaVeiculos";
import { useState } from "react";
import veiculos from "../dados/veiculos"
import cidade from "../dados/cidade"


export default function TelaCadastroVeiculo(props){
    const [mostrarTabela, setMostrarTabela] = useState(true)
    const [listaDeVeiculos,setListaDeVeiculos] = useState(veiculos)
    const [veiculoSelecionado, setVeiculoSelecionado] = useState({
        placa:"",
        cidade:{ id:0, nome:"", estado:""},
        marca:"",
        ano:"",
        cor:"",
        chassi:"",
        renavam:"",
        combustivel:""
    })

    const [modoEdicao, setModoEdicao] = useState(false)

    return(
        <Pagina titulo='Tela de Cadastro de Veículos' >
            {
                mostrarTabela ? <TabelaVeiculos mostrarTabela= {mostrarTabela}
                                                setMostrarTabela= {setMostrarTabela}
                                                listaDeVeiculos = {listaDeVeiculos}
                                                setListaDeVeiculos={setListaDeVeiculos}
                                                setVeiculoSelecionado = {setVeiculoSelecionado}
                                                setModoEdicao={setModoEdicao}/>:
                                <FormCadastroVeiculos mostrarTabela={mostrarTabela}
                                                        setMostrarTabela={setMostrarTabela}
                                                        listaDeVeiculos = {listaDeVeiculos}
                                                        setListaDeVeiculos={setListaDeVeiculos}
                                                        listaDeCidade ={cidade}
                                                        veiculoSelecionado ={veiculoSelecionado}
                                                        setVeiculoSelecionado={setVeiculoSelecionado}
                                                        modoEdicao = {modoEdicao}
                                                        setModoEdicao = {setModoEdicao}/>
                                }
        </Pagina>
    )
}