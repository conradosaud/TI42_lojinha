'use client'

import { useState } from "react";

export default function Home() {

    // Aqui entra o Javascript normal
    // let carrinho = 0;
    let [ carrinho, alteraCarrinho ] = useState(0);
    let [ precoProduto, alteraPrecoProduto ] = useState(25);
    let [ valorTotal, alteraValorTotal ]  = useState(0);

    function manipulaCarrinho( adicionar ){

        let novoCarrinho = carrinho;

        if(adicionar == true){
            alteraCarrinho( carrinho + 1 )
            novoCarrinho++
        }else{
            alteraCarrinho( carrinho - 1 )
            novoCarrinho--
        }

        alteraValorTotal( novoCarrinho * precoProduto )

    }

    function limpaCarrinho(){
        alteraCarrinho( 0 )
    }

    function aplicaCupom(){
        alteraPrecoProduto(19)
    }

    return (
        <div className="p-5">

            <h1 className="bg-sky-500 text-white p-3" >Lojinha do Next</h1>
            <p className="p-3 text-lg">
                Carrinho: <strong> {carrinho} </strong> itens
            </p>

            { 
                carrinho > 0 ? 
                    <button onClick={()=>limpaCarrinho()} className="bg-yellow-400 text-black p-3 mb-5">Limpar</button> 
                :
                    <div></div> 
            }
            
            <button onClick={()=>aplicaCupom()} className="ml-3 bg-black text-white p-3 mb-5">Adicionar cupom</button>

            <hr/>

            <p className="p-3 text-lg text-red-900">
                Valor total: R$ <strong> { valorTotal } </strong>
            </p>

            <hr/>

            <h2>Produtos</h2>

            <div className="border bg-sky-700 w-fit p-2 text-center text-white">
                <img src="https://placehold.co/200"/>
                <h3 className="text-lg text-lime-200 font-bold">Produto modelo</h3>
                <p>R$ {precoProduto},00</p>
                <button onClick={()=>manipulaCarrinho(true)} className="bg-lime-400 text-black mt-5 p-3">Adicionar ao carrinho</button>
                <br/>

                {
                    carrinho > 0 ? 
                        <button onClick={()=>manipulaCarrinho(false)} className="bg-red-400 text-black mt-5 p-3">Remover do carrinho</button>
                    :
                        <div></div>
                }

            </div>

        </div>
    );
}
