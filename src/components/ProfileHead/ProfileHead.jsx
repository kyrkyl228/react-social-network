import Button from "../Button/Button";
import PHeMod from "./ProfileHead.module.css";

const ProfileHead = () => {
    return(
        <div className={PHeMod.head}>
            <div className={PHeMod.aboutCard}>
                <div className={PHeMod.imageWrapper}>
                    <img src="https://www.kindpng.com/picc/m/346-3464560_himebot-the-only-music-profile-pictures-for-discord.png" alt="" className={PHeMod.avatar}/>
                </div>
                <div className={PHeMod.fillCard}>
                    <p className={PHeMod.FName}>Vladislav Ilinsky</p>
                    {/* <p className={PHeMod.SName}>Ilinsky</p> */}
                    <p className={PHeMod.loc}>Surgut, Russian Federation</p>
                </div>
            </div>
            <div className={PHeMod.Buttons}>
                <Button typeBut="Сообщение" sty={{margin: "auto 5px 5px 0"}}/>
                <Button typeBut="Подписаться" sty={{margin: "auto 0 5px 0"}}/>                
            </div>
        </div>
    );
}

export default ProfileHead;