import { ImagePrincipal } from "@components/atoms/images";
import { Text, PrincipalText } from "@components/atoms/text";

export default function Profile() {
    return (
        <div className="flex flex-col items-center relative">
            <div className="overflow-hidden relative px-16 pt-20 pb-5 max-w-full rounded-full aspect-square w-[150px]">
                <ImagePrincipal url="foto_2.jpg" />
            </div>
            <div className="mt-9 w-full flex justify-center text-center whitespace-nowrap leading-6 text-color-texto">
                <Text text="Alejandro Castañeda" />
            </div>
            <div className="mt-5 mb-8 text-color-texto-principal text-center">
                <PrincipalText text="Analista de datos" />
            </div>
        </div>
    );
}