import './TodoCard.css'

export function TodoCard(props){
    return <section className="todoCard">
        <p className="todoCard__name">text des todos</p>
        <button className="todoCard__firstButton">zurück</button>
        <button className="todoCard__secondButton">nach vorne</button>
    </section>
}
