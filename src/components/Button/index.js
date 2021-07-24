import "./style.css"

const Button = ({onClick, type, children, className}) =>{
    return <button className={className} onClick={onClick} type={type} > {children} </button>
}
export default Button;