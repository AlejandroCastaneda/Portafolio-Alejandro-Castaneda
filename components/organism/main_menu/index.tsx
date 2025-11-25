"use client";
import { Title, PrincipalText } from "@components/atoms/text";
import Button from "@components/atoms/buttons";
import { ImageMain } from "@components/atoms/images";

export default function MainMenu() {
    return (
        <div className="flex justify-between bg-color-primario mx-8">
            <div className="flex flex-col items-start justify-center w-[66.66%] h-[467px] px-14">
                <div className="text-primary-dark"><Title title="Alejandro Castañeda" /></div>
                <div className="flex justify-between">
                    <div className="text-primary-dark pr-1"><Title title="Analista de datos" /></div>
                </div>
                <div className="mt-7 text-color-texto-principal">
                    <PrincipalText text="Estudiante de último semestre de Ingeniería de Sistemas, con una profunda pasión por la ciencia de datos y la automatización de procesos. Me motiva transformar datos en conocimiento y optimizar tareas a través de soluciones innovadoras. He trabajado con herramientas como Python, SQL, Power BI y Power Automate, que me han permitido desarrollar proyectos con impacto real y seguir explorando nuevas formas de mejorar la eficiencia y la toma de decisiones." />
                </div>
                <div className="mt-7">
                    <a href="/CV_Alejandro.pdf" download>
                        <Button>
                            Descargar HdV
                        </Button>
                    </a>
                </div>

            </div>
            <div className="flex flex-col justify-end">
                <ImageMain url="foto_1.png" />
            </div>
        </div>
    );
}
