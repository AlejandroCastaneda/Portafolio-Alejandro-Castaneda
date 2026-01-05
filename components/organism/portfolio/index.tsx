import { Subtitle, PrincipalText } from "@components/atoms/text"; // Importa componentes de texto para títulos y subtítulos
import BlogPost from "@components/molecules/blog_post"; // Importa el componente que representa una tarjeta de proyecto

export default function Portfolio() {
    return (
        // Contenedor principal del portafolio
        <div className="flex flex-col items-center">

            {/* Título principal del portafolio */}
            <div className=" flex items-center justify-center self-center mt-11 text-3xl font-bold leading-10 capitalize text-color-texto max-md:mt-10">
                <Subtitle subtitle="Portafolio" />
            </div>

            {/* Primera fila de proyectos */}
            <div className="flex justify-between mt-8 px-8">
                <BlogPost
                    title="Genealogía"
                    description="Aplicación interactiva para explorar mi árbol genealógico mediante visualizaciones dinámicas."
                    url="https://genealogia.onrender.com/"
                />
                <BlogPost
                    title="Modelo de prueba"
                    description="Página de ejemplo mientras subo el modelo."
                    url="https://example.com"
                />
                <BlogPost
                    title="Modelo de prueba"
                    description="Página de ejemplo mientras subo el modelo."
                    url="https://example.com"
                />  
            </div>

            {/* Segunda fila de proyectos */}
            <div className="flex justify-between mt-8 px-8">
                <BlogPost
                    title="Modelo de prueba"
                    description="Página de ejemplo mientras subo el modelo."
                    url="https://example.com"
                />
                <BlogPost
                    title="Modelo de prueba"
                    description="Página de ejemplo mientras subo el modelo."
                    url="https://example.com"
                />
                <BlogPost
                    title="Modelo de prueba"
                    description="Página de ejemplo mientras subo el modelo."
                    url="https://example.com"
                />  
            </div>
        </div>
    );
}