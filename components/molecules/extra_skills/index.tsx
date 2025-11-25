import { Text, PrincipalText } from "@components/atoms/text";
import { ImageSkill } from "@components/atoms/images";

export default function ExtraSkills() {
    return (
        <div>
            <div className="mt-7 text-color-texto">
                <Text text="Habilidades Blandas" />
            </div>
            <div className="flex gap-4 mt-6 text-color-texto-principal">
                <ImageSkill />
                <PrincipalText text="Pensamiento analítico" />
            </div>
            <div className="flex gap-4 mt-3.5  text-color-texto-principal">
                <ImageSkill />
                <PrincipalText text="Comunicación asertiva" />
            </div>
            <div className="flex gap-4 mt-3.5 text-color-texto-principal">
                <ImageSkill />
                <PrincipalText text="Curiosidad técnica" />
            </div>
            <div className="flex gap-4 mt-3.5 text-color-texto-principal">
                <ImageSkill />
                <PrincipalText text="Resolución de problemas" />
            </div>
            <div className="flex gap-4 mt-3.5 text-color-texto-principal">
                <ImageSkill />
                <PrincipalText text="Proactividad" />
            </div>
            <div className="flex gap-4 mt-3.5 text-color-texto-principal">
                <ImageSkill />
                <PrincipalText text="Trabajo en equipo" />
            </div>
        </div>
    );
}