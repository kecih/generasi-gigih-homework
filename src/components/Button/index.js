import "./style.css"

const Button = (props) =>{
    return <input className={props.className} type="button" value={props.value} href={props.href} />
}
export default Button;