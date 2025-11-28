import { Text, PrincipalText } from "@components/atoms/text";
import { ImageSkill } from "@components/atoms/images";

export default function ExtraSkills() {
    return (
        <div>
            {/* Título de la sección */}
            <div
                className="
                    mt-7 text-color-texto
                    /* Margen superior para separar del bloque anterior
                       y color de texto configurado desde Tailwind. */
                "
            >
                <Text text="Habilidades Blandas" />
            </div>

            {/* ITEM 1 - Pensamiento analítico */}
            <div
                className="
                    flex gap-4 mt-6 text-color-texto-principal
                    /* Cada habilidad está en una fila con flex,
                       un ícono a la izquierda y el texto a la derecha.
                       gap-4 separa icono y texto. */
                "
            >
                <ImageSkill /> {/* Icono pequeño decorativo */}
                <PrincipalText text="Pensamiento analítico" />
            </div>

            {/* ITEM 2 - Comunicación asertiva */}
            <div
                className="
                    flex gap-4 mt-3.5 text-color-texto-principal
                    /* mt-3.5 reduce el espacio entre habilidades sucesivas. */
                "
            >
                <ImageSkill />
                <PrincipalText text="Comunicación asertiva" />
            </div>

            {/* ITEM 3 - Curiosidad técnica */}
            <div
                className="
                    flex gap-4 mt-3.5 text-color-texto-principal
                "
            >
                <ImageSkill />
                <PrincipalText text="Curiosidad técnica" />
            </div>

            {/* ITEM 4 - Resolución de problemas */}
            <div
                className="
                    flex gap-4 mt-3.5 text-color-texto-principal
                "
            >
                <ImageSkill />
                <PrincipalText text="Resolución de problemas" />
            </div>

            {/* ITEM 5 - Proactividad */}
            <div
                className="
                    flex gap-4 mt-3.5 text-color-texto-principal
                "
            >
                <ImageSkill />
                <PrincipalText text="Proactividad" />
            </div>

            {/* ITEM 6 - Trabajo en equipo */}
            <div
                className="
                    flex gap-4 mt-3.5 text-color-texto-principal
                "
            >
                <ImageSkill />
                <PrincipalText text="Trabajo en equipo" />
            </div>
        </div>
    );
}
