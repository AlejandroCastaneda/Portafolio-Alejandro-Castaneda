export default function Line() {
  return (
    <div
      className="
        shrink-0          /* Evita que la línea se comprima cuando el contenedor cambia de tamaño */
        mt-8              /* Margen superior para separar visualmente del contenido */
        h-[2px]           /* Altura fija de 2px para que funcione como una línea divisoria */
        color-primary     /* Aplica el gradiente definido en Tailwind como fondo */
        rounded-full      /* Bordes redondeados para una línea visualmente más suave */
      "
    />
  );
}