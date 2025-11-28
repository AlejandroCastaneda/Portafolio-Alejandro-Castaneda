import SocialIcon from "@components/molecules/social_icon";

// Componente que representa el menú lateral derecho fijo en pantalla
export default function RightMenu(){
    return (
        // Contenedor fijo en la parte derecha de la pantalla
        <div className="fixed top-0 right-0 w-[7%] h-screen bg-color-primario">
            {/* Componente que agrupa y muestra los iconos sociales */}
            <SocialIcon />
        </div>
    );
}