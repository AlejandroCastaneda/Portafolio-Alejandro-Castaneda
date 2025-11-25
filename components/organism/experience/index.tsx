import { Subtitle, PrincipalText } from "@components/atoms/text";
import Course from "@components/molecules/course";
import Line from "@components/atoms/line";

export default function Experience() {
    return (
        <div className="w-[93%] flex flex-col items-center mx-8">
            
            {/* Título */}
            <div className="mt-12 text-color-texto">
                <Subtitle subtitle="Experiencia Laboral" />
            </div>

            {/* Caja de contenido */}
            <div className="bg-color-primario w-full relative px-8 mt-12 py-5 rounded-xl shadow-md">
                <Course
                    title="Analista de datos"
                    institution="Grupo Éxito"
                    date="2025"
                    description="Durante las prácticas por cadena de formación en Grupo Éxito, se participó activamente en un proyecto de migración tecnológica, desarrollando scripts en Python para filtrar y transformar información relevante desde y hacia bases de datos SQL. Se llevó a cabo la automatización de un proceso crítico de negocio, enfocado en la extracción de datos clave que permiten comprender el comportamiento de consumo de recursos en la plataforma. Gracias a esta automatización, se optimizó la eficiencia del proceso, garantizando su ejecución diaria sin interrupciones. Además, se diseñaron tableros interactivos en Power BI para la visualización clara de información estratégica, facilitando la toma de decisiones tanto a gerentes como a líderes de negocio y equipos operativos. Esta solución contribuyó a la identificación de patrones y comportamientos, permitiendo realizar ajustes en los procesos para una mejor optimización."
                />
                <Line />
                <Course
                    title="Soporte Técnico"
                    institution="Edatel SA"
                    date="2016"
                    description="Práctica técnica en el área de soporte nivel 2, enfocada en la atención de incidencias que no podían ser resueltas por la mesa de ayuda de primer nivel. Las funciones incluyeron el diagnóstico y reemplazo de piezas defectuosas en equipos de cómputo, instalación de software requerido por los usuarios, desinstalación de software no autorizado, y adecuación técnica de espacios para reuniones (equipos, cableado, periféricos, etc.). También se realizó la instalación de cámaras de seguridad y otras tareas relacionadas con la implementación y mantenimiento de hardware y software. Se brindó soporte remoto a practicantes en diferentes regiones, asegurando continuidad operativa."                />
                </div>
        </div>
    );
}