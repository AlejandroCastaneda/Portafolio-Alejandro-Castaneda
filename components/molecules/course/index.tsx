import { Text, PrincipalText } from "@components/atoms/text";

export default function Course({
    title,
    institution,
    date,
    description,
}: {
    title: string;
    institution: string;
    date: string;
    description: string;
}) {
    return (
        <div
            className="
                flex gap-5 mt-5
                /* Contenedor principal del bloque del curso.
                   Usa flex para colocar dos columnas (izquierda y derecha).
                   gap-5 agrega espacio horizontal entre columnas.
                   mt-5 separa este bloque del anterior. */
            "
        >
            {/* Columna izquierda */}
            <div
                className="
                    flex flex-col
                    w-[35%]
                    /* Columna izquierda con ancho fijo del 35%.
                       Contiene el título del curso y la institución + fecha. */
                "
            >
                {/* Título del curso (ej. Ingeniería de Sistemas) */}
                <Text text={title} />

                <div
                    className="
                        flex gap-5 justify-between mt-7
                        /* Fila que contiene institución (a la izquierda)
                           y la fecha (alineada a la derecha).
                           justify-between empuja ambos extremos. */
                    "
                >
                    {/* Nombre de la institución — puede ocupar varias líneas si es largo */}
                    <PrincipalText text={institution} />

                    {/* Contenedor de la fecha — mantiene tamaño fijo gracias a whitespace-nowrap */}
                    <div
                        className="
                            flex items-center justify-center
                            px-2 py-1.5
                            text-xs leading-3 text-white
                            color-primary
                            rounded-sm
                            whitespace-nowrap
                            /* La fecha queda visualmente como un badge.
                               whitespace-nowrap evita que se parta en dos líneas
                               incluso cuando la institución ocupa varias líneas. */
                        "
                    >
                        {date}
                    </div>
                </div>
            </div>

            {/* Columna derecha */}
            <div
                className="
                    flex flex-col ml-5 w-[65%] grow
                    /* Columna derecha con ancho del 65%.
                       grow permite que adapte su tamaño dentro del flex container. */
                "
            >
                {/* Título de la sección de descripción */}
                <Text text="Descripción" />

                {/* Descripción detallada del curso */}
                <div
                    className="
                        mt-9 text-color-texto-principal
                        /* Espaciado superior y color de texto más suave. */
                    "
                >
                    <PrincipalText text={description} />
                </div>
            </div>
        </div>
    );
}