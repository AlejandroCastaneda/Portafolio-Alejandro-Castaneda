import { Subtitle} from "@components/atoms/text";
import Course from "@components/molecules/course";
import Line from "@components/atoms/line";

// Componente principal que muestra la sección de Educación
export default function Education() {
    return (
        <div className="w-[91%] flex flex-col items-center mx-8">
            
            {/* Título principal de la sección */}
            <div className="mt-12 text-color-texto">
                <Subtitle subtitle="Educación" />
            </div>

            {/* Contenedor de la lista de cursos y formaciones */}
            <div className="bg-color-primario w-full relative px-8 mt-12 py-5 rounded-xl shadow-md">
                {/* Ingeniería de Sistemas */}
                <Course
                    title="Ingeniería de sistemas"
                    institution="Universidad de Antioquia"
                    date="2026"
                    description="Programa orientado a la investigación y a la solución de problemas mediante un modelo pedagógico centrado en el ser, el saber y el hacer. La formación integra ciencia y tecnología para el diseño, modelación e implementación de sistemas, preparando profesionales capaces de abordar retos de la Cuarta Revolución Industrial. Incluye competencias en desarrollo de software, análisis de datos, inteligencia artificial, arquitecturas empresariales, DevOps y gestión de proyectos tecnológicos."
                />
                <Line />

                {/* Análisis de Datos */}
                <Course
                    title="Análisis de datos innovador"
                    institution="Talento Tech"
                    date="2025"
                    description="Formación enfocada en técnicas avanzadas de análisis, modelado y visualización de datos. Incluye análisis predictivo, optimización de modelos, validación cruzada y manipulación de grandes volúmenes de información. Se fortalecen competencias prácticas en herramientas modernas para transformar datos en conocimiento accionable."                />
                <Line />

                {/* Linux Fundamentals */}
                <Course
                    title="Getting Started with Linux Fundamentals"
                    institution="Red Hat"
                    date="2024"
                    description="Curso introductorio al entorno Linux enfocado en usuarios sin experiencia previa. Incluye navegación del sistema, uso de la terminal, gestión básica de archivos, permisos, conexión remota y verificación de la configuración del sistema. Brinda los fundamentos necesarios para trabajar en entornos Linux y comprender su funcionamiento sin requerir administración avanzada."                />
                <Line />

                {/* Inteligencia Artificial */}
                <Course
                    title="Inteligencia Artificial para las Ingenierías y Ciencias"
                    institution="Universidad de Antioquia"
                    date="2024"
                    description="Curso enfocado en la aplicación práctica de técnicas de Inteligencia Artificial y Machine Learning. Incluye programación en Python, uso de notebooks ejecutables en Google Colab, experimentación con datos, construcción y evaluación de modelos, y resolución de laboratorios guiados. Proporciona una base técnica sólida para diseñar, implementar y comprender soluciones basadas en IA." />
                <Line />

                {/* Tecnología en Mantenimiento */}
                <Course
                    title="Tecnología en Mantenimiento de equipos de computo, diseño e instalación de cableado estructurado"
                    institution="Servicio Nacional de Aprendizaje"
                    date="2016"
                    description="Formación orientada a la implementación, mantenimiento y administración de infraestructuras de TI. Incluye instalación de cableado estructurado bajo normas internacionales, configuración de redes internas, diagnóstico y mantenimiento preventivo y correctivo de equipos de cómputo, y gestión de hardware y software según requerimientos técnicos. Desarrolla habilidades en soporte técnico, redes, documentación técnica y comprensión de textos en inglés aplicados al entorno tecnológico." />    
            </div>
        </div>
    );
}