import PageMod from "./Page.module.css"
import ProfileHead from "../ProfileHead/ProfileHead";
import ProfileContent from "../ProfileContent/ProfileContent";

const Page = () => {
    return(
        <div className={PageMod.content}>
            <ProfileHead />
            <ProfileContent />
        </div>
    );
}

export default Page;