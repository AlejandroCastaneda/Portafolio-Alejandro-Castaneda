// Importa el componente Principal desde la carpeta de templates.
// Este componente es el layout o vista principal de la página de inicio.
import Principal from "@components/templates/principal";

// Componente que representa la página raíz ("/") de la aplicación Next.js.
// Next.js detecta automáticamente este archivo como la página principal.
export default function Home() {
  return (
    // Renderiza el componente Principal como único contenido de la página.
    <Principal />   
  );
}