import Profile from "@components/molecules/profile";
import Line from "@components/atoms/line";
import About from "@components/molecules/about";
import Skills from "@components/molecules/skills";
import ExtraSkills from "@components/molecules/extra_skills";

// Componente que representa el menú lateral izquierdo del portafolio
export default function LeftMenu() {
    return (
        // Contenedor principal del menú izquierdo, con fondo y tamaño fijo
        <div className="bg-color-primario w-[22%] h-full sticky top-0 pt-12 pb-12">

            {/* Contenedor interno que agrupa los componentes con padding */}
            <div className="bg-color-primario px-10">

                {/* Sección de perfil del usuario */}
                <Profile />
                <Line />

                {/* Información personal y presentación */}
                <About />
                <Line />

                {/* Habilidades técnicas con porcentajes */}
                <Skills />
                <Line />

                {/* Habilidades blandas adicionales */}
                <ExtraSkills />
            </div>
        </div>
    );
}