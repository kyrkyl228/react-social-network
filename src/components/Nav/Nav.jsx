import NavMod from "./Nav.module.css"

const Nav = () => {
    return(
        <nav className={NavMod.navigation}>
            <a href="#" className={NavMod.link}>Профиль</a>
            <a href="#" className={NavMod.link}>Сообщение</a>
            <a href="#" className={NavMod.link}>Новости</a>
            <a href="#" className={NavMod.link}>Группы</a>
            <a href="#" className={NavMod.link}>Настройки</a>
        </nav>
    );
}

export default Nav;
