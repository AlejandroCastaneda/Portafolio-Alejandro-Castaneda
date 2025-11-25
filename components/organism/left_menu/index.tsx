import Profile from "@components/molecules/profile";
import Line from "@components/atoms/line";
import About from "@components/molecules/about";
import Skills from "@components/molecules/skills";
import ExtraSkills from "@components/molecules/extra_skills";

export default function LeftMenu() {
    return (
        <div className="bg-color-primario w-[22%] h-full sticky top-0 pt-12 pb-12">
            <div className="bg-color-primario px-10">
                <Profile />
                <Line />
                <About />
                <Line />
                <Skills />
                <Line />
                <ExtraSkills />
            </div>
        </div>
    );
}
