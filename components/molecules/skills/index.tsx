import { Text, PrincipalText } from "@components/atoms/text";
import Percentage from "@components/atoms/percentage";

// Componente que muestra habilidades técnicas con sus porcentajes visuales
export default function Skills() {
    return (
        <div>
            {/* Título de la sección */}
            <div className="mt-7 text-color-texto">
                <Text text="Habilidades Técnicas"/>
            </div>

            {/* Habilidad: Python */}
            <div className="flex gap-5 justify-between mt-5 whitespace-nowrap text-color-texto-principal">
                {/* Nombre de la habilidad */}
                <PrincipalText text="Python"/>
                {/* Porcentaje numérico */}
                <PrincipalText text="85%"/>
            </div>
            {/* Barra de porcentaje visual */}
            <Percentage classExtra="w-[85%]"/>

            {/* Habilidad: SQL */}
            <div className="flex gap-5 justify-between mt-4 whitespace-nowrap text-color-texto-principal">
                <PrincipalText text="SQL"/>
                <PrincipalText text="75%"/>
            </div>
            <Percentage classExtra="w-[75%]"/>

            {/* Habilidad: Power BI */}
            <div className="flex gap-5 justify-between mt-4 whitespace-nowrap text-color-texto-principal">
                <PrincipalText text="Power BI"/>
                <PrincipalText text="70%"/>
            </div>
            <Percentage classExtra="w-[70%]"/>

            {/* Habilidad: Power Automate */}
            <div className="flex gap-5 justify-between mt-4 whitespace-nowrap text-color-texto-principal">
                <PrincipalText text="P. Automate"/>
                <PrincipalText text="55%"/>
            </div>
            <Percentage classExtra="w-[55%]"/>

            {/* Habilidad: GitHub */}
            <div className="flex gap-5 justify-between mt-4 whitespace-nowrap text-color-texto-principal">
                <PrincipalText text="GitHub"/>
                <PrincipalText text="80%"/>
            </div>
            <Percentage classExtra="w-[80%]"/>
        </div>
    );
}