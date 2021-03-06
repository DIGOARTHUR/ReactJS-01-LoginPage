import React from 'react';
import './login.css';
import { MdEmail, MdLockOutline } from "react-icons/md";
const Login = () => {
    return (
        <div className="login">
            <div className="login-logo">
                <img
                    src="https://www.iconpacks.net/icons/1/free-user-login-icon-305-thumb.png"
                    alt="Login App"
                />


            </div>

            <div className="login-right">
                <h1>Acessar App</h1>

                <div className="login-loginInputEmail">
                    <MdEmail/>
                    <input type="text"
                        placeholder="Digite um e-mail" />
                </div>

                <div className="login-loginInputPassword">
                <MdLockOutline/>
                <input type="text"
                        placeholder="Digite a sua senha" />

                 </div>


                    <button type="submit">
                        Entrar
                    </button>

                    <h4>
                        Não tenho conta!
                    </h4>
                    <button type="submit">
                       Cadastrar
                    </button>
            </div>
               


        </div>


    )
}

export default Login;