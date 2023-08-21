import React from "react";
import "./Login.css";

export default function Login() {
    return (
        <div className="flex w-full h-screen">
        <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className="bg-white px-10 py-10 rounded-3xl border-2 border-gray-100">
            <h1 className="text-5xl font-semibold">Seja Bem-Vindo</h1>
            <p className="font-medium text-lg text-gray-500 mt-4">Insira seus dados para acessar o PetShop.</p>

            <div className="mt-8">
                <div>
                    <label className="text-lg font-medium">Email</label>
                    <input
                        className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                        placeholder="Digite seu e-mail"
                    />
                </div>

                <div>
                    <label className="text-lg font-medium">Senha</label>
                    <input
                        className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
                        placeholder="Digite sua senha"
                        type="password"
                    />
                </div>

                <div className="mt-8 flex justify-between items-center">
                    <div>
                        <input 
                            type="checkbox"
                            id="remember"
                        />
                        <label className="ml-2 font-medium text-base" for="remember">Lembre-se por 30 dias</label>
                    </div>
                    
                    <button className="font-medium text-base text-blue-500">Esqueci a senha</button>
                </div>

                <div className="mt-8 flex flex-col gap-y-4">
                    <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-dark-purple text-white font-bold">Entrar</button>
                </div>

                <div className="mt-8 flex justify-center items-center">
                    <p className="font-medium text-base">Não tem uma conta?</p>
                    <button className="text-blue-500 text-base font-medium ml-2">Inscreva-se</button>
                </div>
            </div>
        </div>
        </div>
        <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
          <img src="../assets/cachorro.png"></img>
        </div>
      </div>
        
    )
}