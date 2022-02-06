
import './App.css';

import api from './api/api'
import { useEffect, useState } from 'react'
import { Main } from './Main/Main';



function App() {

  const [searchWord, setSearchWord] = useState('welcome');
  const [cards, setCards] = useState([])
  const [value, setValue] = useState('')
  const [isLoading, setIsLoadiing] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSearchWord(value)


  }



  useEffect(() => {
    (async () => {
      try {
        setIsLoadiing(true)

        const cardsData = await api.search(searchWord)
        if (cardsData) {
          setCards(cardsData.results)
          setIsLoadiing(false)
        }
      }
      catch (e) {
        console.log('something went wrong with the images', e)
        alert('Error')
      }


    })();
  }, [searchWord])




  return (
    <div className="App">
      <Main cards={cards} isLoading={isLoading} value={value} onChange={setValue} onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
