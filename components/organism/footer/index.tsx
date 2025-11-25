import { PrincipalText } from "@components/atoms/text";

export default function Footer() {
    return (
        <footer className="flex justify-center items-center bg-color-primario h-[60px] mt-8 mx-8 rounded-xl">
            <div className="text-primary-dark">
                <PrincipalText text="2026 All Rights Reserved" />
            </div>
        </footer>
    );
}
