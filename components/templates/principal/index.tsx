import MainContent from "@components/organism/main_content";
import RightMenu from "@components/organism/rigth_menu";
import LeftMenu from "@components/organism/left_menu";

// Componente principal que organiza la estructura general de la página
export default function Principal() {
  return (
    // Contenedor principal con fondo y centrado horizontal
    <div className="h-full flex justify-center items-start bg-color-fondo">
      {/* Contenedor interno que distribuye los tres menús */}
      <div className="flex flex-grow">
        {/* Menú izquierdo con información del usuario */}
        <LeftMenu />

        {/* Contenido central: menú principal, portafolio, experiencia, educación y footer */}
        <MainContent />

        {/* Menú derecho con iconos sociales */}
        <RightMenu />
      </div>
    </div> 
  );
}