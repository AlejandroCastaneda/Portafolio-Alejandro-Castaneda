import { PrincipalText } from "@components/atoms/text";

// Componente que renderiza el pie de página del sitio
export default function Footer() {
    return (
        // Contenedor principal del footer, centrado y con estilos de fondo
        <footer className="flex justify-center items-center bg-color-primario h-[60px] mt-8 mx-8 rounded-xl">
            {/* Texto del footer */}
            <div className="text-primary-dark">
                {/* Texto mostrado en el pie de página */}
                <PrincipalText text="2026 All Rights Reserved" />
            </div>
        </footer>
    );
}