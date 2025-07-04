import { useState } from "react";

type Tab = "reservas" | "veiculos" | "informacoes" | "conta";

const AccountPage = () => {
  const [tabSelecionada, setTabSelecionada] = useState<Tab>("reservas");

  return (
    <div className="min-h-screen pt-20 mb-10 transition-all duration-300">
      <div className="flex flex-col bg-[#ff854c] h-30 md:h-40 max-w-screen -mx-5 md:-mx-20 justify-center">
        <div className="mx-5 md:mx-20">
          <h2 className="text-black text-5xl font-bold">João</h2>
          <h3>Bem-vindo, {tabSelecionada === "reservas" && (<span>veja suas reservas</span> )}{tabSelecionada === "veiculos" && (<span>veja seus veículos</span> )}
          {tabSelecionada === "informacoes" && (<span> gerencie informações da sua conta</span> )}</h3>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-around mt-5">
        <div className="flex-1/8 flex-col flex text-lg p-5 gap-3 md:gap-2 bg-[#cecece] h-full">
          <button
            onClick={() => setTabSelecionada("reservas")}
            className={`cursor-pointer ${
              tabSelecionada === "reservas" ? "font-bold" : "font-normal"
            }`}
          >
            Reservas
          </button>

          <button
            onClick={() => setTabSelecionada("veiculos")}
            className={`cursor-pointer ${
              tabSelecionada === "veiculos" ? "font-bold" : "font-normal"
            }`}
          >
            Veículos
          </button>
          <button
            onClick={() => setTabSelecionada("informacoes")}
            className={`cursor-pointer ${
              tabSelecionada === "informacoes" ? "font-bold" : "font-normal"
            }`}
          >
            Informações
          </button>
          <button className="cursor-pointer">Sair</button>
        </div>
        {/* Reservas */}
        {tabSelecionada === "reservas" && (
          <div className="flex-3/4 border-1 border-gray-400 rounded-xl my-6 md:mx-6 md:my-0 p-4 md:p-6 flex-col text-center md:text-left ">
            <h2 className="font-bold text-xl md:flex">Reservas</h2>
            <h3>Aqui estarão suas reservas</h3>
            <div className="flex flex-col gap-5 mt-5 ">
              <div className="flex flex-row justify-between items-center  bg-gray-200 border-gray-400 p-3 rounded-lg">
                <div className="flex flex-col text-left ">
                  <h2 className="font-bold">Rock Legends Festival</h2>
                  <h2>17/05/2025</h2>
                </div>

                <button className="mx-2 bg-blue-600 text-white p-2 rounded whitespace-nowrap cursor-pointer">
                  Ver mais
                </button>
              </div>
              <div className="flex flex-row justify-between items-center border-1 border-gray-400 p-3 rounded-lg">
                <div className="flex flex-col text-left">
                  <h2 className="font-bold">Rock in Rio</h2>
                  <h2>20/03/2025</h2>
                </div>

                <button className="mx-2 bg-blue-600 text-white p-2 rounded whitespace-nowrap cursor-pointer">
                  Ver mais
                </button>
              </div>
            </div>
          </div>
        )}
        {/* Veículos */}

        {tabSelecionada === "veiculos" && (
          <div className="flex-3/4 border-1 border-gray-400 rounded-xl my-6 md:mx-6 md:my-0 p-4 md:p-6 flex-col text-center md:text-left ">
            <h2 className="font-bold text-xl md:flex">Veículos</h2>
            <h3>Aqui estarão seus veículos</h3>
            <div className="flex flex-col gap-5 mt-5 ">
              <div className="flex flex-row justify-between items-center border-1 border-gray-400 p-3 rounded-lg">
                <div className="flex flex-col text-left">
                  <h2 className="font-bold">Wolksvagen Gol - 1993</h2>
                  <h2>Placa ABC-1234</h2>
                </div>

                <button className="mx-2 bg-blue-600 text-white p-2 rounded whitespace-nowrap cursor-pointer">
                  Ver mais
                </button>
              </div>
              <div className="flex flex-row justify-between items-center border-1 border-gray-400 p-3 rounded-lg">
                <div className="flex flex-col text-left">
                  <h2 className="font-bold">Yamaha Fazer - 2018</h2>
                  <h2>Placa BBB-4321</h2>
                </div>

                <button className="mx-2 bg-blue-600 text-white p-2 rounded whitespace-nowrap cursor-pointer">
                  Ver mais
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Informações */}

        {tabSelecionada === "informacoes" && (
          <div className="flex-3/4 border-1 border-gray-400 rounded-xl my-6 md:mx-6 md:my-0 p-4 md:p-6 flex-col text-center md:text-left">
            <h2 className="font-bold text-xl md:flex">Informações</h2>
            <h3>Aqui você pode gerenciar as informações de sua conta</h3>
            {/* Div das informações */}
            <div className="flex flex-col gap-5 mt-5 md:items-center">
                {/* Div do nome */}
              <div className="flex flex-row justify-between md:w-100 items-center border-1 border-gray-400 p-3 rounded-lg">
                <div className="flex flex-col text-left">
                  <h2 className="font-bold">Nome</h2>
                  <h2>João da Silva</h2>
                </div>
                <button className="mx-2 bg-blue-600 text-white p-2 rounded whitespace-nowrap cursor-pointer">
                  Editar
                </button>
              </div>
              {/* Div do e-mail */}
              <div className="flex flex-row justify-between md:w-100 items-center border-1 border-gray-400 p-3 rounded-lg">
                <div className="flex flex-col text-left min-w-20">
                  <h2 className="font-bold">E-mail</h2>
                  <h2 className="">joão10***@gmail.com</h2>
                </div>
                <button className="mx-2 bg-blue-600 text-white p-2 rounded whitespace-nowrap cursor-pointer">
                  Editar
                </button>
              </div>
              {/* Div senha */}
              <div className="flex flex-row justify-between md:w-100 items-center border-1 border-gray-400 p-3 rounded-lg">
                <div className="flex flex-col text-left">
                  <h2 className="font-bold">Senha</h2>
                  <h2>********</h2>
                </div>
                <button className="mx-2 bg-blue-600 text-white p-2 rounded whitespace-nowrap cursor-pointer">
                  Editar
                </button>
              </div>
              {/* Div telefone */}
              <div className="flex flex-row justify-between md:w-100 items-center border-1 border-gray-400 p-3 rounded-lg">
                <div className="flex flex-col text-left">
                  <h2 className="font-bold">Telefone</h2>
                  <h2>(43) 9 1234-5678</h2>
                </div>
                <button className="mx-2 bg-blue-600 text-white p-2 rounded whitespace-nowrap cursor-pointer">
                  Editar
                </button>
              </div>
              <div className="flex flex-row justify-between md:w-100 items-center border-1 border-gray-400 p-3 rounded-lg">
                <div className="flex flex-col text-left">
                  <h2 className="font-bold">Endereços</h2>
                  
                </div>
                <button className="mx-2 bg-blue-600 text-white p-2 rounded whitespace-nowrap cursor-pointer">
                  Editar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountPage;
