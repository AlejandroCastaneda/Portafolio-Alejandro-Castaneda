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
        <div className="flex gap-5 mt-5">
            {/* Columna izquierda */}
            <div className="flex flex-col w-[35%]">
                <Text text={title} /> {/* Ej: Ingeniería de Sistemas */}

                <div className="flex gap-5 justify-between mt-7">
                    <PrincipalText text={institution} /> {/* Ej: Universidad de Antioquia */}

                    <div className="flex items-center justify-center px-2 py-1.5 text-xs leading-3 text-white color-primary rounded-sm whitespace-nowrap">
                        {date}
                    </div>
                </div>
            </div>

            {/* Columna derecha */}
            <div className="flex flex-col ml-5 w-[65%] grow">
                <Text text="Descripción" />

                <div className="mt-9 text-color-texto-principal">
                    <PrincipalText text={description} /> {/* Ej: Enfoque en análisis de datos */}
                </div>
            </div>
        </div>
    );
}