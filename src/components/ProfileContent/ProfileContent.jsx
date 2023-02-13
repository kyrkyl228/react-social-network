import Button from "../Button/Button";
import Photo from "../Photo/Photo";
import Post from "../Post/Post";
import ProfCont from "./ProfileContent.module.css";

const ProfileContent = () => {
    return(
        <div className={ProfCont.content}>
            <div className={ProfCont.interests}>
                <Photo />
            </div>
            <div className={ProfCont.posts}>
                <form action="" className={ProfCont.for}>
                    <textarea name="" id="" placeholder="Как ваши дела?" className={ProfCont.texta}></textarea>
                    <Button typeBut="Отправить" sty={{margin: "5px 0 0 auto", backgroundColor: "rgb(218, 218, 218)"}}/>
                </form>
                <Post img='https://download-cs.net/steam/avatars/3405.jpg' name="Тестовое имя" message="Тестовое сообщение в котором говорится всякая чушь лишь бы не работать"/>
                <Post img='https://www.kindpng.com/picc/m/346-3464560_himebot-the-only-music-profile-pictures-for-discord.png' name="Vladislav Ilinsky" message="Самый красивый мальчик в мире по мнению бабушек. А еще в кампуктерах лазиет!"/>
                <Post img='https://cspromogame.ru//storage/upload_images/avatars/4085.jpg' name="Василий Тореро" message="Разнообразный и богатый опыт укрепление и развитие структуры играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития."/>
                <Post img='https://cspromogame.ru//storage/upload_images/avatars/2023.jpg' name="Алиса Худая" message="Привет! Давно не виделись! Как дела? Может сходим куда-нибудь?"/>
            </div>
        </div>
    );
}

export default ProfileContent;