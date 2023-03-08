import React, { useContext , useState } from 'react';
import DictionaryContext from '../context/DictionaryContext';

function Dictionary() {
    const { word, setWord, data, search } = useContext(DictionaryContext);
    console.log(data);


    const [isPlaying, setIsPlaying] = useState(false);
    const phoneticResult = []
    const toggleAudio = () => {
        const audio = document.getElementById('myAudio');
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };



    return (
        <div className='bg-white dark:bg-black'>
            <div className=' mx-auto max-w-7xl p-4 '>
                {data && (
                    <div className=' dark:text-white'>
                        <div className=' flex justify-between items-center '>
                            <h2 className='md:text-6xl text-4xl '> {data[0].word}</h2>
                            
                            <button onClick={toggleAudio} className='p-2 bg-purple-200 rounded-full items-center'>

                                {/* play icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-12 md:h-12 h-8 w-8 text-purple-500 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                </svg>

                                {/* Audio */}

                                <audio id='myAudio' src={ data.phonetics ? data.phonetics[0].audio : '' } />

                            </button>
                        </div>

                        <h1 className=' text-purple-700 mb-4'>
                            {data[0].phonetic}
                        </h1>



                        {data[0].meanings.map((meaning, index) => (
                            <div className='mt-4' key={index}>
                                <div className=' flex items-center '>
                                    <h3 className=' text-xl flex-grow-0'>{meaning.partOfSpeech} </h3>
                                    <hr className=' ml-2  flex-grow w-full' />
                                </div>
                                <ul className='list-disc text-xl  md:text-2xl ml-4'>
                                    {meaning.definitions.map((definition, index) => (

                                        <li className=' text-purple-600' key={index}><p className=' text-black dark:text-white'>{definition.definition}</p></li>

                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Dictionary;
