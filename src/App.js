import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import SingleCard from './components/SingleCard';

const cardImages = [
  { "src": "/public/asl-words/Father.png" ,matched: false,num:1},
  { "src": "/public/asl-words/Good.png" ,matched: false,num:2},
  { "src": "/public/asl-words/Mother.png" ,matched: false,num:3},
  { "src": "/public/asl-words/Night.png" ,matched: false,num:4},
  { "src": "/public/asl-words/No.png" ,matched: false,num:5},
  { "src": "/public/asl-words/Yes.png",matched: false,num:6}
]

const cardVideos = [
  { "src": "/public/asl-videos/Father in ASL.gif" ,matched: false,num:1},
  { "src": "/public/asl-videos/Good in ASL.gif" ,matched: false,num:2},
  { "src": "/public/asl-videos/Mother in ASL.gif" ,matched: false,num:3},
  { "src": "/public/asl-videos/Night in ASL.gif" ,matched: false,num:4},
  { "src": "/public/asl-videos/No in ASL.gif" ,matched: false,num:5},
  { "src": "/public/asl-videos/Yes in ASL.gif",matched: false,num:6}
]



function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [matching, setMatching] = useState(false)
  

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardVideos]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random() }))
      
    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setTurns(0)
  }
  console.log(cards)
  //handle a choice
  const handleChoice = (card) => {
    
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)

  }

  // compare 2 selected cards
  useEffect(() => {

    if(choiceOne && choiceTwo){
      setDisabled(true)
    
      if(choiceOne.num === choiceTwo.num)
      {
        console.log('Those cards match')
        setMatching(true)
        console.log("Matched set to true")
        setCards(prevCards => {

          return prevCards.map(card => {
            if(card.num === choiceOne.num){
              
              return{...card,matched: true}

            }

            else{
              return card
            }
          })

        })

        resetTurn()
      }

      else
      {
        console.log("Those cards do not match")
        setMatching(false)
        setTimeout(() => resetTurn(), 3000)
      }
    }

  },[choiceOne,choiceTwo])

  console.log(cards)
  // reset choices and increase turn
  const resetTurn = () => {

    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
    

  }


  // start new game automatically

  useEffect(() => {

    shuffleCards()
  },[])



  return (
    <div className="App">
      <h1>Sign & Remember</h1>
      <button onClick = { shuffleCards }>New Game</button>

      <div className='card-grid'>
        {cards.map(card => (
          <SingleCard key = { card.id } card = { card } handleChoice = {handleChoice} flipped = {card === choiceOne || card === choiceTwo || card.matched} disabled = {disabled} matching = {card.matched}/>
        ))}
      </div>
      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;
