import "./card.css"

interface CardProps {
    price: number,
    title: string,
    image: string

}

export function Card( {}: CardProps){
    return(
        <div className="card">
            <img/>
            <h2></h2>
            <p><b>valor:</b></p>
        </div>
    )
}