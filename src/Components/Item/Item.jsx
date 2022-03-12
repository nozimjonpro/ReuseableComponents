import "../Header/header.scss"

function Item ({children}){
    return <li className="todos_item">
        <input className="todos__check" type="checkbox" />
        <span className="todos__span">{children}</span>
        <button className="todos__item-btn">&times;</button>
    </li>
}

export default Item;                                                      
