import { PrincipalText, Text } from "@components/atoms/text";

export default function About() {
    return (
        <div
            className="
                flex flex-col          /* Coloca los elementos en una columna */
                py-1.5 pl-1.5          /* Padding superior/inferior y padding izquierdo */
                mt-6                   /* Margen superior */
                text-base leading-6    /* Tamaño de texto base y altura de línea */
                whitespace-nowrap      /* Evita que el texto se parta en varias líneas */
            "
        >
            {/* Título de la sección */}
            <Text text="Contacto" />

            <div className="flex gap-5 justify-between px-px">
                {/* Contenedor de los datos personales */}
                <div className="flex-col self-start">
                    {/* Cada dato con margen superior para separarlos */}
                    <div className="mt-5">
                        <PrincipalText text="308340391" />
                    </div>

                    <div className="mt-5">
                        <PrincipalText text="daco1994vr@gmail" />
                    </div>

                    <div className="mt-5">
                        <PrincipalText text="Medellín" />
                    </div>
                </div>
            </div>
        </div>
    );
}