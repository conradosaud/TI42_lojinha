'use client'

import { useState } from "react";

function Cadastro() {

    const [ nome, alteraNome ] = useState("");
    const [ erroNome, alteraErroNome ] = useState(false);

    const [ senha, alteraSenha ] = useState("")
    const [ confirma, alteraConfirma ] = useState("")
    const [ erroSenha, alteraErroSenha ] = useState(false)

    function salvar(){
        console.log("O nome cadastrado é: "+nome);
        alteraNome( nome.toUpperCase() )

        if( nome.length < 5 ){
            alteraErroNome(true);
        }else{
            alteraErroNome(false);
        }

        if( senha != confirma ){
            alteraErroSenha(true);
        }else{
            alteraErroSenha(false);
        }

    }

    return (
        <div className="p-10">

            <h1 className="text-lg">Cadastro</h1>

            <hr/>

            <p>Digite seu nome:</p>
            <input onChange={ (e)=> alteraNome( e.target.value ) } value={nome} className="outline" />
            <br/>
            {
                erroNome == true ?
                    <div className="bg-red-500 text-white">
                        <p>O nome deve conter pelo menos 5 caracteres</p>
                    </div>            
                :
                    <div></div>
            }

            <p>Digite sua senha:</p>
            <input onChange={ (e)=> alteraSenha( e.target.value ) } value={senha} className="outline" />
            <br/>
            <p>Confirme a senha:</p>
            <input onChange={ (e)=> alteraConfirma( e.target.value ) } value={confirma} className="outline" />
            <br/>
            {
                erroSenha == true ?
                    <div className="bg-red-500 text-white">
                        <p>As senhas digitadas não coincidem...</p>
                    </div>            
                :
                    <div></div>
            }

            <button onClick={()=> salvar() } className="p-3 mt-5 bg-lime-500 text-white">Salvar</button>
        
        </div>
    );
}

export default Cadastro;