import { Text, PrincipalText } from "@components/atoms/text";
import Percentage from "@components/atoms/percentage";

export default function Skills() {
    return (
        <div>
            <div className="mt-7 text-color-texto">
                <Text text="Habilidades Técnicas"/>
            </div>
            <div className="flex gap-5 justify-between mt-5 whitespace-nowrap text-color-texto-principal">
                <PrincipalText text="Python"/>
                <PrincipalText text="85%"/>
            </div>
            <Percentage classExtra="w-[85%]"/>
            <div className="flex gap-5 justify-between mt-4 whitespace-nowrap text-color-texto-principal">
                <PrincipalText text="SQL"/>
                <PrincipalText text="75%"/>
            </div>
            <Percentage classExtra="w-[75%]"/>
            <div className="flex gap-5 justify-between mt-4 whitespace-nowrap text-color-texto-principal">
                <PrincipalText text="Power BI"/>
                <PrincipalText text="70%"/>
            </div>
            <Percentage classExtra="w-[70%]"/>
            <div className="flex gap-5 justify-between mt-4 whitespace-nowrap text-color-texto-principal">
                <PrincipalText text="Power Automate"/>
                <PrincipalText text="55%"/>
            </div>
            <Percentage classExtra="w-[55%]"/>
            <div className="flex gap-5 justify-between mt-4 whitespace-nowrap text-color-texto-principal">
                <PrincipalText text="Control de versiones"/>
                <PrincipalText text="80%"/>
            </div>
            <Percentage classExtra="w-[80%]"/>
        </div>
    );
}