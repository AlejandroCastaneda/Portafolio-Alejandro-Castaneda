import { ImageBlog } from "@components/atoms/images";
import { Text, PrincipalText } from "@components/atoms/text";

export default function BlogPost({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string; 
}) {
  return (
    <div
      className="
        flex flex-col            /* Layout vertical de todo el card */
        w-[30%]                  /* Cada card ocupa el 30% del contenedor padre */
        pb-4                     /* Padding inferior */
        bg-color-primario        /* Fondo según clase personalizada */
        rounded-xl               /* Bordes redondeados */
        shadow-md                /* Sombra ligera */
      "
    >
      {/* Imagen superior del blog/proyecto */}
      <ImageBlog url="Image.png" />

      {/* Contenedor del texto y botón */}
      <div className="flex flex-col px-7 mt-8">
        
        {/* Título del post o proyecto */}
        <Text text={title} />

        {/* Descripción corta debajo del título */}
        <div className="mt-3.5 text-color-texto-principal">
          <PrincipalText text={description} />
        </div>

        {/* Link hacia el proyecto externo */}
        <a
          href={url}
          target="_blank"              /* Abre el enlace en una pestaña nueva */
          rel="noopener noreferrer"    /* Seguridad para enlaces externos */
          className="
            flex gap-1 mt-5 
            text-primary-dark          /* Texto azul oscuro */
            font-semibold 
            hover:underline            /* Subrayado en hover */
          "
        >
          Ver proyecto →
        </a>
      </div>
    </div>
  );
}
