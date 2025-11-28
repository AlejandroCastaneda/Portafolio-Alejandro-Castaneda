// Componente para títulos principales grandes
export function Title({ title }: { title: string }) {
    return (
        <h1
            className="
                font-bold        /* Texto en negrita */
                text-[37px]      /* Tamaño de fuente personalizado */
            "
        >
            {title}
        </h1>
    );
}

// Componente para subtítulos centrados
export function Subtitle({ subtitle }: { subtitle: string }) {
    return (
        <h2
            className="
                font-bold        /* Negrita */
                text-center      /* Centrado horizontal */
                text-[32px]      /* Tamaño de fuente */
            "
        >
            {subtitle}
        </h2>
    );
}

// Componente para textos principales (párrafos o descripciones)
export function PrincipalText({ text }: { text: string }) {
    return (
        <h3
            className="
                font-regular     /* Peso de fuente regular */
                text-[15px]      /* Tamaño de texto más pequeño */
            "
        >
            {text}
        </h3>
    );
}

// Componente para textos secundarios o destacados
export function Text({ text }: { text: string }) {
    return (
        <h3
            className="
                font-medium      /* Peso medio (más fuerte que regular) */
                text-[18px]      /* Tamaño de fuente ligeramente mayor */
            "
        >
            {text}
        </h3>
    );
}