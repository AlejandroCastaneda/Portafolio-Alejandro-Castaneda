// Componente encargado de renderizar la imagen principal del encabezado o fondo
export function ImagePrincipal({ url }: { url: string }) {
    return (
        <img
            loading="lazy"                           // Carga diferida para optimizar rendimiento
            src={url}                                // URL de la imagen recibida por props
            className="object-cover absolute inset-0 size-full" 
            /* 
              object-cover → La imagen llena el contenedor sin deformarse  
              absolute + inset-0 → Ocupa toda el área del contenedor padre  
              size-full → Altura y ancho 100%  
            */
        />
    );
}

// Imagen que ocupa todo el espacio disponible (usada en secciones más amplias)
export function ImageMain({ url }: { url: string }) {
    return (
        <img
            loading="lazy"         // Carga diferida
            src={url}              // URL recibida
            className="w-full h-full" 
            /*  
                w-full / h-full → La imagen se ajusta al contenedor completamente  
            */
        />
    );
}

// Imagen usada para íconos de habilidades (usar siempre el mismo archivo Icons.png)
export function ImageSkill() {
    return (
        <img
            loading="lazy"                                  // Carga diferida
            src="Icons.png"                                 // Imagen fija utilizada para skills
            className="shrink-0 self-start aspect-square w-[15px]"
            /*
              shrink-0 → Evita que la imagen se reduzca más de lo permitido  
              self-start → Alinea la imagen al inicio del contenedor  
              aspect-square → Mantiene proporción 1:1  
              w-[15px] → Ancho fijo de 15px  
            */
        />
    );
}

// Imagen utilizada dentro de tarjetas (ej. portafolio, servicios, etc.)
export function ImageCard({ url }: { url: string }) {
    return (
        <img
            loading="lazy"          // Optimiza carga
            src={url}               // URL dinámica
            className="aspect-square w-[68px]"
            /*
              aspect-square → Mantiene proporción cuadrada  
              w-[68px] → Ancho fijo para consistencia visual  
            */
        />
    );
}

// Imagen utilizada en tarjetas o secciones de blog
export function ImageBlog({ url }: { url: string }) {
    return (
        <img
            loading="lazy"          // Carga diferida
            src={url}               // URL dinámica del artículo
            className="w-full aspect-[1.03]"
            /*
              w-full → Abarca todo el ancho disponible  
              aspect-[1.03] → Mantiene una proporción casi cuadrada (ligero rectángulo)  
            */
        />
    );
}