export default function Percentage({ classExtra }: { classExtra: string }) {
  return (
    <div
      className="
        flex flex-col               /* Contenedor en columna */
        justify-center              /* Centra verticalmente el contenido interno */
        px-px py-1                  /* Pequeños paddings para dar espacio alrededor */
        mt-3                        /* Margen superior */
        border border-primary       /* Borde con el color primario definido en Tailwind */
        border-solid                /* Borde sólido */
        rounded-[30px]              /* Bordes totalmente redondeados */
      "
    >
      <div
        className={`
          shrink-0                  /* Evita que el elemento se encoja */
          h-1                        /* Altura fija de 4px (barra de porcentaje) */
          color-primary              /* Gradiente desde tu clase .color-primary */
          rounded-[30px]             /* Bordes redondeados para una barra suave */
          ${classExtra}              /* Clase adicional para controlar el ancho dinámicamente */
        `}
      />
    </div>
  );
}