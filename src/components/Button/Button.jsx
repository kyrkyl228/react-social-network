import ButMod from "./Button.module.css";

const Button = (props) => {
    // const s = {height: props.ter}
    return(
        <button className={`${ButMod.subBut}`} style={props.sty}>{props.typeBut}</button>
        // <a href="" className={`${ButMod.btn} ${ButMod.btn4}`}>Hover Me</a>
    );
}

export default Button;