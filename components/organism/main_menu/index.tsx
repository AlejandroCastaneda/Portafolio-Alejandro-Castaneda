"use client"; // Indica que este componente debe renderizarse en el lado del cliente (Next.js)

import { Title, PrincipalText } from "@components/atoms/text"; // Importa componentes de texto reutilizables
import Button from "@components/atoms/buttons"; // Importa el componente de botón
import { ImageMain } from "@components/atoms/images"; // Importa el componente para mostrar la imagen principal

export default function MainMenu() {
    return (
        // Contenedor principal del menú, con diseño horizontal y fondo personalizado
        <div className="flex justify-between bg-color-primario mx-8">
            
            {/* Sección izquierda: texto, descripción y botón */}
            <div className="flex flex-col items-start justify-center w-[66.66%] h-[467px] px-14 mt-10">
                
                {/* Nombre principal */}
                <div className="text-primary-dark whitespace-nowrap">
                    <Title title="Alejandro Castañeda" />
                </div>

                {/* Cargo o título profesional */}
                <div className="flex justify-between">
                    <div className="pr-1">
                        <Title title="Analista de datos" />
                    </div>
                </div>

                {/* Descripción principal */}
                <div className="mt-7 text-color-texto-principal">
                    <PrincipalText text="Estudiante de último semestre de Ingeniería de Sistemas, con una profunda pasión por la ciencia de datos y la automatización de procesos. Me motiva transformar datos en conocimiento y optimizar tareas a través de soluciones innovadoras. He trabajado con herramientas como Python, SQL, Power BI y Power Automate, que me han permitido desarrollar proyectos con impacto real y seguir explorando nuevas formas de mejorar la eficiencia y la toma de decisiones." />
                </div>

                {/* Botón de descarga del CV */}
                <div className="mt-7">
                    <a href="/CV_Alejandro.pdf" download>
                        <Button>
                            Descargar HdV
                        </Button>
                    </a>
                </div>

            </div>

            {/* Sección derecha: imagen principal */}
            <div className="flex flex-col justify-end">
                <ImageMain url="foto_1.png" />
            </div>
        </div>
    );
}