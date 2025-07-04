import { Facebook, Instagram, Puzzle, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTopFunction";

const Footer = () => {
  return (
    <footer className="footer mt-10 pb-10 md:pb-20">
      <div className="flex justify-between  mb-10  md:mx-10 lg:mx-30 flex-col md:flex-row text-center md:text-left">
        <div className="flex flex-col max-w-80 mx-auto md:mx-0 items-center md:items-baseline">
          <div className=" max-w-40">
          <div className="flex items-center md:ml-5 cursor-pointer">
          <Link to="/" className="flex" onClick={ScrollToTop}>
          <Puzzle size={38}/>
            <h1 className="text-4xl font-normal ">
              <span className="font-bold">In</span>vit!
            </h1>
          </Link>
        </div>
          </div>

          <div className="mt-2">
            Sua plataforma de busca para os melhores eventos.
          </div>
        </div>

        <div className="flex flex-col">
          <h2 className="font-bold text-xl mb-4 mt-4 md:mt-0">Links Rápidos</h2>
         
            <h3> <a href="/">Início</a></h3>
          
          
            <h3><a href="/eventos">Eventos </a></h3>
         
          
            <h3><a href="/sobre">Sobre</a></h3>
          
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-xl mb-4 mt-4 md:mt-0">Suporte</h2>
         
            <h3> <a href="/faq">FAQ</a></h3>
          
         
            <h3> <a href="/termos">Termos de Uso</a></h3>
          
         
            <Link to="/privacidade"> <h3>Política de Privacidade</h3></Link>
            <Link to="/seguranca"> <h3>Política de Segurança</h3></Link>
         
          
            <h3><a href="/reembolso">Política de Reembolso</a></h3>
          
        </div>
        <div className="flex flex-col">
          <h2 className="font-bold text-xl mb-4 mt-4 md:mt-0">Contato</h2>
          
            <h3><a href="/">contato@invit.com </a></h3>
         
          
            <h3><a href="/">+55 (43) 99999-9999</a></h3>
          
          {/* Seletor [&>*] seleciona os links children desse div */}
          <div
            id="footersocialicons"
            className="[&>*]:scale-120 md:scale-100 justify-center inline-flex [&>*]:p-1.5  mt-2"
          >
            <a href="/">
              <Facebook size={20} />
            </a>

            <a href="/">
              <Instagram size={20} />{" "}
            </a>

            <a href="/">
              <Twitter size={20} />
            </a>

            <a href="/">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-between md:mx-20  flex-col md:flex-row gap-4 text-sm items-center border-t-1 border-gray-300 pt-4">
        <h3>@2025 Invit - Todos os direitos reservados.</h3>
        <h3>Desenvolvido com ❤️ por Rerigan</h3>
      </div>
    </footer>
  );
};

export default Footer;
