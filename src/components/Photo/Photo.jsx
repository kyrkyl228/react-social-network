import PhMod from "./Photo.module.css";

const Photo = (props) => {
    return(
        <div className={PhMod.photoBlock}>
            <p className={PhMod.Name}>Яркие моменты жизни:</p>
            <div className={PhMod.wrapper}>
                <img src="https://www.kindpng.com/picc/m/346-3464560_himebot-the-only-music-profile-pictures-for-discord.png" alt="" className={PhMod.image}/>
                <img src="https://cspromogame.ru//storage/upload_images/avatars/272.jpg" alt="" className={PhMod.image}/>
                <img src="https://cspromogame.ru//storage/upload_images/avatars/3055.jpg" alt="" className={PhMod.image}/>
                <img src="https://cspromogame.ru//storage/upload_images/avatars/775.jpg" alt="" className={PhMod.image}/>
                <img src="https://cspromogame.ru//storage/upload_images/avatars/3838.jpg" alt="" className={PhMod.image}/>
                <img src="https://cspromogame.ru//storage/upload_images/avatars/3088.jpg" alt="" className={PhMod.image}/>                
            </div>
        </div>
    );
}

export default Photo;