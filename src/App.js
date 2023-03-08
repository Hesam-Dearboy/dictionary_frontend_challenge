import React  from 'react'
import axios from 'axios'
import Dictionary from './component/Dic'
import Navbar from './component/Navbar'
import DictionaryContext from './context/DictionaryContext'
import { useState } from 'react'


function App() {
  const [word, setWord] = useState('');
  const [data, setData] = useState(null);

  const search = async () => {
    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`);
    setData(response.data);
  };

  return (
    <>
    <div className=' dark:bg-black min-h-screen '>
      
      <DictionaryContext.Provider value={{ word, setWord, data, search }}>
        <Navbar/>
        <Dictionary/>
      </DictionaryContext.Provider>
      
    </div>
    </>
  )
}

export default App