import type { LucideIcon } from "lucide-react";

type ChildProps = {
  icon: LucideIcon;
  text: string;
  link:string;
};


const MiniCard = ({text, link, icon: Icon}: ChildProps) => {
  return (
    <a href={link} >
    <div className="bg-[#FF6900] w-45 h-20 flex justify-center group items-center rounded-xl mx-auto  font-bold  select-none hover:bg-[#ff3c00]  transition-all  duration-200">
      <div id="minicardcontent" className="items-center justify-center flex flex-col group-hover:scale-120 transition-all duration-200 text-center">
        <div id="minicardicon" className=""><Icon size={24} /></div>
        <div id="minicardtext" className="px-5">{text}</div>
        </div>
    </div></a>
  )
}

export default MiniCard