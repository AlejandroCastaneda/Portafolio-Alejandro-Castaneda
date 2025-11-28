"use client"; 
// Esta directiva indica a Next.js que este componente debe renderizarse
// completamente del lado del cliente (Client Component). Es necesario cuando
// se utilizan eventos como onClick, estados o efectos.

type ButtonProps = {
  // Contenido que va dentro del botón (puede ser texto, íconos, etc.)
  children: React.ReactNode;

  // Función opcional que se ejecuta cuando se hace clic en el botón.
  onClick?: () => void;

  // Clases adicionales opcionales que el usuario puede pasar para personalizar el botón.
  className?: string;
};

// Componente de botón reutilizable.
// Recibe children, onClick y className como props.
export default function Button({ children, onClick, className = "" }: ButtonProps) {
  return (
    <button
      // Se ejecuta la función recibida cuando se hace clic en el botón.
      onClick={onClick}

      // Aquí se combinan las clases base del botón con las clases personalizadas.
      className={`
        color-primary            /* Aplica el gradiente personalizado definido en globals.css */
        text-white font-bold     /* Texto blanco y negrita */
        rounded-md               /* Bordes redondeados */
        py-2 w-[164px] h-11      /* Padding vertical y dimensiones fijas */
        shadow-md                /* Sombra ligera debajo del botón */
        hover:opacity-90         /* Reduce opacidad al pasar el mouse */
        transition               /* Suaviza la transición al hover */
        ${className}             /* Clases extra que puede añadir quien use el componente */
      `}
    >
      {children} 
      {/* Se renderiza el contenido que se pasa dentro del botón */}
    </button>
  );
}