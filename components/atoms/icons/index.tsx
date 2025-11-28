// Componente que renderiza un ícono SVG dentro de un enlace opcional
export default function Icon({
  icon,        // Recibe el valor del atributo "d" del SVG (la forma del ícono)
  href,        // (Opcional) URL a la que dirigirá el icono cuando se haga clic
  classExtra,  // (Opcional) Clases Tailwind adicionales para personalizar el estilo
}: {
  icon: string;       // El ícono es un string con el path SVG
  href?: string;      // El enlace es opcional
  classExtra?: string; // Clases adicionales opcionales
}) {
  return (
    // Etiqueta <a> que permite que el icono actúe como un enlace clickeable
    <a
      href={href}              // Enlace al que se dirigirá el usuario
      target="_blank"          // Abre el enlace en una nueva pestaña
      rel="noopener noreferrer"// Seguridad: evita que la página abierta pueda manipular la original
      className={`
        flex items-center justify-center 
        w-12 h-12 rounded-full color-primary
        cursor-pointer hover:opacity-90 transition
        ${classExtra}          // Si se envía classExtra, se añade al estilo
      `}
    >
      {/* Ícono SVG que se dibuja usando el valor de "icon" */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"       // Tamaño estándar del ícono
        className="w-6 h-6 text-white" // Tamaño del ícono y color blanco
      >
        {/* Path que define la forma del ícono. Usa el atributo "d" recibido en props */}
        <path fill="currentColor" d={icon} />
      </svg>
    </a>
  );
}