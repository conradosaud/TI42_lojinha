'use client'

import { useState } from "react";

function Cadastro() {

    //const [ nome, alteraNome ] = useState("");
    //const [ senha, alteraSenha ] = useState("");
    // [ idade, alteraIdade ] = useState(0);
    //const [ altura, alteraAltura ] = useState(1.5);

    const [ usuario, alteraUsuario] = useState({
        nome: "",
        senha: "",
        idade: 0,
        altura: 1.5
    }); //objeto anonimo vazio

    function alteraNome(pnome){//os ... faz isso pra você
        const u = {
            nome: pnome,
            senha: usuario.senha,
            idade: usuario.idade,
            altura: usuario.altura
        }

        alteraUsuario(u)
    }


    

    const [ erroNome, alteraErroNome ] = useState(false);    
    const [ erroSenha, alteraErroSenha ] = useState(false);

    const [ confirma, alteraConfirma ] = useState("");

    function salvar(){
        console.log("O nome cadastrado é: "+usuario.nome);
        alteraUsuario( usuario.nome.toUpperCase() )

        if( usuario.nome.length < 5 ){
            alteraErroNome(true);
        }else{
            alteraErroNome(false);
        }

        if( usuario.senha != confirma ){
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
            <input onChange={ (e)=> alteraUsuario({ ...usuario, nome: e.target.value }) } value={usuario.nome} className="outline" />
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
            <input onChange={ (e)=> alteraSenha( e.target.value ) } value={usuario.senha} className="outline" />
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