import MainMenu from "@components/organism/main_menu";
import Education from "../education";
import Experience from "../experience";
import Portfolio from "../portfolio";
import Footer from "../footer";

export default function MainContent() {
    return (
        <div className="w-[71%] h-full relative"> {/* Contenedor principal del contenido */}
            <MainMenu /> {/* Menú principal en la parte superior */}
            <Portfolio /> {/* Sección del portafolio */}
            <Experience /> {/* Sección de experiencia laboral */}
            <Education /> {/* Sección de educación */}
            <Footer /> {/* Pie de página */}
        </div>
    );
}