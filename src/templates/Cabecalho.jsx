import { Alert } from "react-bootstrap"

export default function Cabecalho(props){
    return(
        <div>
            <Alert variant="dark  " className="text-center">
                <h1>
                    {props.titulo || 'Informe um texto para o Cabeçalho'} 
                </h1>
            </Alert>
        </div>
    )
}