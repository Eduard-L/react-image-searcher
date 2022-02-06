
import './App.css';

import api from '../utils/api/api'
import { useEffect, useState } from 'react'
import { Main } from './Main/Main';
import { Routes, Route } from 'react-router-dom'
import { Photo } from './Photo/Photo'
import { NotFound } from './NotFound/NotFound'



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
      <Routes>
        <Route path='https://eduard-l.github.io/react-image-searcher/' element={<Main cards={cards} isLoading={isLoading} value={value} onChange={setValue} onSubmit={handleSubmit} />} />
        <Route path='https://eduard-l.github.io/react-image-searcher/photos/:id' element={<Photo photos={cards} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
