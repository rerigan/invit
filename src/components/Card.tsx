import { CalendarDays, CircleDollarSign, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

interface CardProps {
        nome: string,
        local: string,
        preco:string,
        imagem:string,
        data:string,
}

const Card = ({nome, local, preco, data}: CardProps) => {
  return (
        <div className="border border-gray-400 rounded-xl overflow-hidden w-full md:w-auto md:min-w-[200px] md:max-w-full select-none relative z-10">
        
        {/* Imagem */}
        <div className="">
            <img id="imagemcard" src="/placeholder.png"
            onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/placeholder.png";
                
              }}
            className="w-full h-55 object-contain scale-50 -z-10 relative" ></img>
        </div>
        {/* Título */}
        <div className="border-t-1 border-gray-400 rounded-lg z-10 translate-y-[-13px] relative bg-white">
<h2 className="font-bold mt-2 mb-4 text-lg ml-4">{nome}</h2>
        </div>
        {/* Info (data,local,preço) */}
        <div className="text-sm ml-4  flex-col flex h-15">
               <div className="inline-flex items-center">
<CalendarDays size={15} className="mr-1"/><h3>{data}</h3>
</div>
<div className="inline-flex items-center">
<MapPin size={15} className="mr-1"/><h3>{local}</h3></div>
<div className="inline-flex items-center">
<CircleDollarSign size={15} className="mr-1"/><h3>A partir de {preco}</h3></div>
        </div>
        {/* Ver detalhes */}
        <div className="text-center mt-8 text-sm underline mb-1 ">
<Link to="/evento/1"><h3 className="#topproductpage">Ver detalhes</h3></Link>
        </div>
    </div>
  )
}

export default Card