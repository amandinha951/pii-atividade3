import { useContext } from 'react'
import {Nav, Navbar, NavDropdown, Container, NavItem} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ContextoLogin } from '../App'

export default function Menu(props){
    //const contextoLogin = useContext(ContextoLogin)
    const { dadosLogin, setDadosLogin } = useContext(ContextoLogin);

    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary mb-4">
            <Container>
                <Navbar.Brand as = {Link} to="/">Menu</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavDropdown title="Cadastros básicos" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/veiculo">Veículos</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/fornecedor">Fornecedor</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/concessionarias">Concessionárias</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>

                {dadosLogin.logado && (
                    <Navbar.Text className="ms-auto me-3">
                    Bem-vindo, {dadosLogin.usuario}
                    </Navbar.Text>
                )}
                <Navbar.Brand onClick={
                    ()=>{
                        setDadosLogin({usuario:"", logado: false})
                    }
                }>
                    Logout
                </Navbar.Brand>
            </Container>
        </Navbar>
    </>
    )
}