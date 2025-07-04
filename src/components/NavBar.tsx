import {
  ChevronDown,
  MapPin,
  Menu,
  Puzzle,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useState, useEffect, useRef } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [localIsOpen, setLocalIsOpen] = useState(false);
  const toggleLocalMenu = () => setLocalIsOpen((prev) => !prev);
  const toggleMenu = () => setIsOpen((prev) => !prev);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    

    
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  // Fechar menu ao clicar fora
  const menuRef = useRef<HTMLDivElement>(null);

  const localMenuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      // Delay to allow toggleMenu to run first
      setTimeout(() => {
        if (
          isOpen &&
          menuRef.current &&
          !menuRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }

          
    if (
        localIsOpen &&
        localMenuRef.current &&
        !localMenuRef.current.contains(event.target as Node)
      ) {
        setLocalIsOpen(false);
      }
    }, 0);
  };
    

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen, localIsOpen]);

  return (
    <header
      className={`bg-white pb-2 fixed top-0 left-0 outline-gray-300 w-full z-50 select-none transition-all duration-300 ${
        isScrolled ? "shadow-md  outline-1 " : " "
      }`}
    >
      <div
        id="navbar"
        className="flex justify-center md:justify-between items-center w-full h-[3.5rem] mx-auto bg-white relative px-4 pt-3"
      >
        {/* Mobile Hamburguer Menu Botao */}
        <div
          className="navicons md:hidden absolute left-4 cursor-pointer"
          onClick={toggleMenu}
        >
          <Menu />
        </div>
        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute transition-all duration-300   overflow-hidden shadow-xl outline-gray-400  bg-white top-20 left-5 rounded-xl  ${
            isOpen ? "max-h-[600px] outline-1" : "max-h-0 outline-0"
          }`}  ref={menuRef}
        >
          <nav className="flex flex-col gap-0 text-gray-700 text-lg " onClick={toggleMenu}>
            <a href="#" className="hover:bg-gray-100  p-3">
              Home
            </a>
            <a href="#" className="hover:bg-gray-100  p-3">
              Meus eventos
            </a>
            <a href="#" className="hover:bg-gray-100  p-3">
              Buscar eventos
            </a>
            <Link to={"/conta"} className="hover:bg-gray-100  p-3">
              Conta
            </Link>
            <Link to={"/login"} className="hover:bg-gray-100  p-3">
              Entrar/Registrar
            </Link>
          </nav>
        </div>
        {/* Menu Localização Botao */}
        <div
          className="navicons md:hidden absolute right-4 cursor-pointer"
          onClick={toggleLocalMenu}
          ref={localMenuRef}
        >
          <MapPin className="" />
        </div>
        {/* Menu localização Mobile */}
        <div
          className={` md:hidden absolute transition-all duration-300  overflow-hidden shadow-xl  bg-white right-0 top-20 rounded-xl mx-4 outline-gray-400   ${
            localIsOpen ? "max-h-[600px] outline-1" : "max-h-0 outline-0 "
          }`}
        >
          <nav className="flex flex-col text-gray-700 text-md">
            <a href="#" className="bg-gray-200 hover:bg-gray-200  p-3">
              Localização Atual: Rua das Bananas Verdes, 123
            </a>
            <a href="#" className="hover:bg-gray-100  p-3">
              Mudar localização
            </a>
          </nav>
        </div>
       
        <div className="flex items-center md:ml-5 cursor-pointer">
          <Link to="/" className="flex" onClick={scrollToTop}>
          <Puzzle size={38}/>
            <h1 className="text-4xl font-normal ">
              <span className="font-bold">In</span>vit!
            </h1>
          </Link>
        </div>

        {/* Middle */}
        <div className="middlenav hidden md:flex items-center gap-6 select-none cursor-pointer">
          {/* Div Eventos */}
          <div className="group relative ">
            <span className="navlinks inline-flex">
              Eventos
              <ChevronDown size={20} strokeWidth={1.5} className="mt-1" />
            </span>
            {/* Menu Hover Eventos */}
            <div className="absolute max-h-0  group-hover:max-h-[200px] bg-white outline-gray-400 outline-0 group-hover:outline-1 rounded-md shadow-lg z-10 w-40 flex-col overflow-hidden transition-all duration-200">
              <div className="block hover:bg-gray-100 p-4 ">Meus Eventos</div>
              <div className="block border-t-1 border-gray-400 hover:bg-gray-100 p-4">
                Explorar
              </div>
            </div>
          </div>
          {/* Div localização */}
          <div className="group relative">
            <span className="navlinks inline-flex">
              <MapPin className="inline mr-1" />
              Localização
              <ChevronDown size={20} strokeWidth={1.5} className="mt-1" />
            </span>
            {/* Menu Hover Localização */}
            <div className="absolute max-h-0 group-hover:max-h-[200px] transition-all duration-200 bg-white outline-gray-400 outline-0 group-hover:outline-1 rounded-md shadow-lg z-10 flex-col overflow-hidden -left-34">
              <div className="block bg-gray-200 hover:bg-gray-200 p-4">
                Localização Atual: Rua das Bananas Verdes, 123
              </div>
              <div className="block border-t-1 border-gray-400 hover:bg-gray-100 p-4">
                Alterar Localização
              </div>
            </div>
          </div>
        </div>

        {/* Right PC */}
        <div className="md:flex items-center gap-1  hidden ">
          <span className="navicons cursor-pointer relative" id="botãobusca">
            <Search />
          </span>
          <span className="navicons cursor-pointer group">
            <ShoppingCart className="fill-white group-hover:fill-black duration-200" />
          </span>
          <Link to={"/conta"} className="navicons cursor-pointer group relative">
            <User className="group-hover:fill-black duration-300 fill-white" />
            <div className="absolute max-h-0  group-hover:max-h-[230px] bg-white outline-gray-400 outline-0 group-hover:outline-1 rounded-md shadow-lg z-10 w-40 flex-col overflow-hidden transition-all duration-200 left-[-120px] top-[50px]">
              <div className="block hover:bg-gray-100 p-4 ">Reservas</div>
              <div className="block border-t-1 border-gray-400 hover:bg-gray-100 p-4">
                Veículos
              </div>
              <Link to={"/conta"} className="block border-t-1 border-gray-400 hover:bg-gray-100 p-4">
                Minha conta
              </Link>
              <Link to={"/login"} className="block border-t-1 border-gray-400 hover:bg-gray-100 p-4">
                Login
              </Link>
             
            </div>
          </Link>
     
        </div>
      </div>
    </header>
  );
};

export default NavBar;
