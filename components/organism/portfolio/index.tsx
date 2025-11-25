import { Subtitle, PrincipalText } from "@components/atoms/text";
import BlogPost from "@components/molecules/blog_post";

export default function Portfolio() {
    return (
        <div className="flex flex-col items-center">
            <div className=" flex items-center justify-center self-center mt-11 text-3xl font-bold leading-10 capitalize text-color-texto max-md:mt-10">
                <Subtitle subtitle="Portafolio" />
            </div>
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