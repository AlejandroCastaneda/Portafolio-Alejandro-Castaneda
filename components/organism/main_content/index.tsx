import MainMenu from "@components/organism/main_menu";
import Education from "../education";
import Experience from "../experience";
import Portfolio from "../portfolio";
import Footer from "../footer";

export default function MainContent() {
    return (
        <div className="w-[71%] h-full relative">
            <MainMenu />
            <Portfolio />
            <Experience />
            <Education />
            <Footer />
        </div>
    );
}