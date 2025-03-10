import { createContext, useState } from "react";
import TelaMenu from "./telas/formularios/TelaMenu";
import TelaCadastroVeiculo from "./telas/TelaCadastroVeiculo";
import TelaLogin from "./telas/TelaLogin";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import TelaCadastroFornecedor from "./telas/TelaCadastroFornecedor";
import TelaCadastroConcessionarias from "./telas/TelaCadastroConcessionarias";

export const ContextoLogin= createContext()

function App() {
  const[dadosLogin, setDadosLogin ] = useState({usuario: "", logado: false})

  if (dadosLogin.logado){
    return (
      <div className="App">
        <ContextoLogin.Provider value={{dadosLogin,setDadosLogin}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<TelaMenu/>}></Route>
              <Route path="/veiculo" element={<TelaCadastroVeiculo/>}></Route>
              <Route path="/fornecedor" element={<TelaCadastroFornecedor/>}></Route>
              <Route path="/concessionarias" element={<TelaCadastroConcessionarias/>}></Route>
            </Routes>
          </BrowserRouter>
        </ContextoLogin.Provider>
      </div>
  );
  }else{
    return(
      <div className="App">
        <ContextoLogin.Provider value={{dadosLogin,setDadosLogin}}>
          <TelaLogin/>
        </ContextoLogin.Provider>
      </div>
    )
  }
}

export default App;
