import MainContent from "@components/organism/main_content";
import RightMenu from "@components/organism/rigth_menu";
import LeftMenu from "@components/organism/left_menu";

export default function Principal() {
  return (
    <div className="h-full flex justify-center items-start bg-color-fondo">
      <div className="flex flex-grow">
        <LeftMenu />
        <MainContent />
        <RightMenu />
      </div>
    </div> 
  );
}
