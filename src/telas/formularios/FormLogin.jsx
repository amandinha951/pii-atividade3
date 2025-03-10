import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { useContext, useRef } from 'react';
import { ContextoLogin } from '../../App';


export default function FormLogin(props){

    const contextoLogin = useContext(ContextoLogin)
    const usuario = useRef()
    const senha = useRef()

    function verificaCredenciais(evento){
        const usuarioInformado = usuario.current.value
        const senhaInformada = senha.current.value

        if(usuarioInformado === 'admin' && senhaInformada ==='123'){
            contextoLogin.setDadosLogin({
                usuario: usuarioInformado,
                logado: true
            })
        }else{
            window.alert("Usuário e/ou senha inválidos!")
        }

        evento.preventDefault()
        evento.stopPropagation()
    }

    return(
        <Container  className='w-25 p-4 '>
            <Form className='mt-3 border p-4' onSubmit={verificaCredenciais}>
                <Form.Group className="mb-3">
                    <Form.Label>Usuário</Form.Label>
                    <Form.Control 
                        type="text"
                        id="usuario"
                        name="usuario"
                        placeholder="Informe o seu Usuário"
                        ref={usuario} />
                    <Form.Text className="text-muted">
                    Nunca compartilhe suas credenciais de acesso.
                    </Form.Text>
                </Form.Group>
        
                <Form.Group className="mb-3">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control 
                        type="password" 
                        id="senha"
                        name="senha"
                        ref={senha}
                        placeholder="Informe a senha" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
        
    )
}