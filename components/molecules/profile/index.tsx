import { ImagePrincipal } from "@components/atoms/images";
import { Text, PrincipalText } from "@components/atoms/text";

export default function Profile() {
    return (
        // Contenedor principal del perfil:
        // - flex-col: organiza todo en columna
        // - items-center: centra horizontalmente todos los elementos
        // - relative: permite posicionamientos absolutos dentro si se necesitan
        <div className="flex flex-col items-center relative">

            {/* Contenedor de la imagen del perfil:
                - overflow-hidden: recorta todo lo que sobresalga del borde
                - rounded-full: lo convierte en un círculo
                - aspect-square + w-[150px]: asegura un contenedor perfectamente cuadrado de 150px
                - px-16 / pt-20 / pb-5: ajustan internamente la posición de la imagen
            */}
            <div className="overflow-hidden relative px-16 pt-20 pb-5 max-w-full rounded-full aspect-square w-[150px]">
                {/* Componente que muestra la imagen principal del perfil */}
                <ImagePrincipal url="foto_2.jpg" />
            </div>

            {/* Nombre del usuario:
                - mt-9: margen superior para separar la foto
                - w-full + flex + justify-center: asegura que el texto quede centrado
                - text-center: alinea el contenido dentro del contenedor
                - whitespace-nowrap: evita que el nombre se corte en dos líneas
                - leading-6: altura de línea para estética
                - text-color-texto: color del texto según Tailwind custom
            */}
            <div className="mt-9 w-full flex justify-center text-center whitespace-nowrap leading-6 text-color-texto">
                <Text text="Alejandro Castañeda" />
            </div>

            {/* Cargo o profesión:
                - mt-5 / mb-8: márgenes superior e inferior
                - text-center: centrado del texto
                - whitespace-nowrap: evita saltos de línea
                - text-color-texto-principal: color heredado del tema
            */}
            <div className="mt-5 mb-8 text-color-texto-principal text-center whitespace-nowrap">
                <PrincipalText text="Analista de datos" />
            </div>
        </div>
    );
}