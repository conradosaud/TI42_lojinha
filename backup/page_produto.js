"use client"
import { useState } from "react";

function Produto() {

    const [ nome, alteraNome ] = useState("")
    const [ preco, alteraPreco ] = useState("")

    const [ produto, alteraProduto ] = useState({})

    const [ mostraListagem, alteraMostraListagem ] = useState(true)
    const [ mostraCadastro, alteraMostraCadastro ] = useState(false)

    function salvar(e){
        e.preventDefault();

        const objeto = {
            nome: nome,
            preco: preco
        }

        alteraProduto(objeto);

    }

    function alteraExibicao(tela){
        if(tela == "listagem"){
            alteraMostraCadastro(false)
            alteraMostraListagem(true)
        }
        if(tela == "cadastro"){
            alteraMostraCadastro(true)
            alteraMostraListagem(false)
        }
    }

    return (
        <div className="p-5">
            <h1 className="text-lg mb-5">Administração de Produtos</h1>

            <div className="flex gap-10">

          
                <ul className="border">
                    <li onClick={()=>alteraExibicao("listagem")} className="bg-gray-200 p-2 mb-2" >Listagem</li>
                    <li onClick={()=>alteraExibicao("cadastro")} className="bg-gray-200 p-2 mb-2">Cadastro</li>
                </ul>

                {
                    mostraListagem == true &&
                    <div className="border">
                        <h2 className="text-md font-bold mb-2"> Listagem </h2>
                        <ul>
                            <li >{produto.nome} - R$ {produto.preco}</li>
                            <li>Produto 2</li>
                            <li>Produto 3</li>
                        </ul>
                    </div>
                }

                {
                    mostraCadastro == true &&
                    <div className="border">
                        <h2 className="text-md"> Cadastro </h2>

                        <form onSubmit={(e)=>salvar(e)} >
                            <label>
                                Nome:
                                <br/>
                                <input onChange={(e)=>alteraNome(e.target.value)} className="outline" />
                            </label>
                            <br/>
                            <label>
                                Preço:
                                <br/>
                                <input onChange={(e)=>alteraPreco(e.target.value)} className="outline" />
                            </label>
                            <button>Salvar</button>
                        </form>

                    </div>
                }

            </div>

        </div>
    );
}

export default Produto;