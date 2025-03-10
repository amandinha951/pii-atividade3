import Pagina from "../templates/Pagina";
import FormConcessionarias from "./formularios/FormConcessionarias";
import TabelaConcessionarias from "./tabelas/TabelaConcessionarias";
import { useState } from "react";
import concessionarias from "../dados/concessionarias"
import cidade from "../dados/cidade"


export default function TelaCadastroConcessionarias(props){
    const [mostrarTabela, setMostrarTabela] = useState(true)
    const [listaDeConcessionarias,setListaDeConcessionarias] = useState(concessionarias)
    const [concessionariasSelecionado, setConcessionariasSelecionado] = useState({
        nome:"",
        cnpj:"",
        telefone:"",
        email:"",
        cidade:{ id:0, nome:"", estado:""},
        representante:""
    })

    const [modoEdicao, setModoEdicao] = useState(false)

    return(
        <Pagina titulo='Tela de Cadastro de Concessionárias' >
            {
                mostrarTabela ? <TabelaConcessionarias mostrarTabela= {mostrarTabela}
                                                setMostrarTabela= {setMostrarTabela}
                                                listaDeConcessionarias = {listaDeConcessionarias}
                                                setListaDeConcessionarias={setListaDeConcessionarias}
                                                setConcessionariasSelecionado = {setConcessionariasSelecionado}
                                                setModoEdicao={setModoEdicao}/>:
                                <FormConcessionarias mostrarTabela={mostrarTabela}
                                                        setMostrarTabela={setMostrarTabela}
                                                        listaDeConcessionarias = {listaDeConcessionarias}
                                                        setListaDeConcessionarias={setListaDeConcessionarias}
                                                        listaDeCidade ={cidade}
                                                        concessionariasSelecionado ={concessionariasSelecionado}
                                                        setConcessionariasSelecionado={setConcessionariasSelecionado}
                                                        modoEdicao = {modoEdicao}
                                                        setModoEdicao = {setModoEdicao}/>
                                }
        </Pagina>
    )
}