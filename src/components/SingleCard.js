import './SingleCard.css'

export default function SingleCard({ card, handleChoice,flipped,disabled,matching }) {
    
    const handleClick = () => {

        if (!disabled) {
            handleChoice(card)
   
        }
    }

    return (
        <div className = "card">
        <div className = {flipped ? "flipped":""}>
          <div className = {matching ? "matching":""}>
          <img class = "front" src = {card.src} alt = "card front"/>
          <img class = "back" src = "/title_image.png" onClick = {handleClick} alt = "card back"/>
          </div>
        </div>
      </div>
    )
}