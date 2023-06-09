import React, {useState} from "react";
import Axios from 'axios';
import Hashes from 'jshashes'
import {redirect} from "react-router-dom";



function LoginPage() {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [hash, setHash] = useState('')


    const logIn = () =>{
        Axios.post('http://localhost:3001/login', {login:login, password:password}).then((res)=>{
            let sha256 = new Hashes.SHA256();
            sha256 = sha256.hex(password);
            if(res.data.hasz == sha256.toString()){
                window.location.replace('/welcome')
            }
        })
    }
    return(
        <>  <div>
            <h1>Zaloguj się</h1>
            <label>Login
                <input type={"text"} name={"login"} onInput={event => {
                    setLogin(event.target.value)
                }}/>
            </label>
            <label>Hasło
                <input type={"password"} name={"password"} onInput={event => {
                    setPassword(event.target.value)
                }}/>
            </label>
            <button onClick={logIn}>Zaloguj</button>
            </div>
        </>
    )
}
export default LoginPage;