
import './App.css';

import api from '../utils/api/api'
import { useEffect, useState } from 'react'
import { Main } from './Main/Main';
import { Routes, Route, HashRouter } from 'react-router-dom'
import { Photo } from './Photo/Photo'
import { NotFound } from './NotFound/NotFound'




function App() {

  const [searchWord, setSearchWord] = useState('welcome');
  const [cards, setCards] = useState([])
  const [value, setValue] = useState('')
  const [isLoading, setIsLoadiing] = useState(false);
  const [isCardsEmpty, setIsCardsEmpty] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();
    setSearchWord(value)


  }



  useEffect(() => {
    (async () => {
      try {
        setIsCardsEmpty(false)
        setIsLoadiing(true)

        const cardsData = await api.search(searchWord)
        if (cardsData) {

          setCards(cardsData.results)
          setIsLoadiing(false)

        }
        if (cardsData.results.length === 0) {
          setIsCardsEmpty(true)
          alert("there are no such photos")
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
      <HashRouter basename='/'>
        <Routes>
          <Route path='/' element={<Main cards={cards} isLoading={isLoading} value={value} onChange={setValue} onSubmit={handleSubmit} isCardsEmpty={isCardsEmpty} />} />
          <Route path='/photos/:id' element={<Photo photos={cards} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
