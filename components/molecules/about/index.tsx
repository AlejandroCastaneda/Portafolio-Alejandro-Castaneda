import { PrincipalText, Text } from "@components/atoms/text";
export default function About() {
    return (
        <div className="flex flex-col py-1.5 pl-1.5 mt-6 text-base leading-6 whitespace-nowrap">
            <Text text="Contacto"/>
            <div className="flex gap-5 justify-between px-px">
                <div className=" flex-col self-start">
                    <div className="mt-5"><PrincipalText text="Teléfono"/></div>
                    <div className="mt-5"><PrincipalText text="Correo"/></div>
                    <div className="mt-5"><PrincipalText text="Ubicación"/></div>
                </div>
                <div className="flex flex-col text-right">
                    <div className="mt-6"><PrincipalText text="308340391"/></div>
                    <div className="mt-6"><PrincipalText text="daco1994vr@gm"/></div>
                    <div className="mt-6"><PrincipalText text="Medellín"/></div>
                </div>
            </div>
        </div>
    );
}