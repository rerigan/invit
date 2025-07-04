interface MapProps {
    local: string,
    descricao: string,
    organizador: string,
    titulomapa: string,
   
}
const MapaDescricaoLateral = ({local, descricao, organizador}: MapProps) => {


    return (
  <div className="mt-5 md:mt-10 lg:mx-35">
    
    <div className=" flex justify-around md:flex-row gap-10 items-center flex-col-reverse">
        

    {/* Div Mapa */}
    <div className="w-500 h-100 max-w-[100%] rounded-2xl overflow-hidden max-h-50 md:max-h-100 border-1 border-gray-300 shadow-md">
      <iframe
      className="w-full h-full"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.7454308099173!2d-51.22742052379605!3d-23.28869795163335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb5a5365603c23%3A0x307d2b254a380ef6!2sParque%20Ney%20Braga%20Eventos!5e0!3m2!1spt-BR!2sbr!4v1747849459829!5m2!1spt-BR!2sbr"
        
      ></iframe>
      </div>
    {/* Div Informações laterais */}
    <div className="">
      {/* Div titulodescrição */}
      <div className="[&>div>h2]:text-xl [&>div>h2]:font-bold justify-center flex md:flex-col flex-col-reverse gap-6">
        <div>
        <h2>Local</h2>
        <div className="">
          {local}
        </div>
        </div>
        <div>
        <h2>Descrição</h2>
        <div className="">
          {descricao}
        </div>
        </div>
        <div>
        <h2>Organizador</h2>
        <div className="">{organizador}</div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default MapaDescricaoLateral;