import React, { useState,useEffect,useContext} from 'react'
import { Switch } from '@headlessui/react'
import useDarkSide from "../Hooks/useDarkSide";
import DictionaryContext from '../context/DictionaryContext';


function Navbar() {

  const { word, setWord, data, search } = useContext(DictionaryContext);

    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    useEffect(() => {
      console.log(`keyword : ${word}`)
      search()
    }, [word ])
    


    return (
        <div className='bg-white  dark:bg-black'>
            <div className=' max-w-7xl mx-auto'>
            <div className='flex-col '>
                <div className=' p-4 border-0 flex w-full dark:bg-black justify-between items-center  ' >

                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                        </svg>

                    </div>

                    <div className=' flex justify-center items-center'>
                        <span className=' mx-2 inline-block'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-10 w-6 h-6 md:h-10 text-yellow-400 dark:text-gray-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                            </svg>
                        </span>

                        <Switch
                            checked={darkSide}
                            onChange={toggleDarkMode}
                            className={`${darkSide ? 'bg-purple-600' : 'bg-gray-600'}
          relative inline-flex md:h-[38px] md:w-[74px] h-[20px] w-[34px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                        >
                            <span className="sr-only">Use setting</span>
                            <span
                                aria-hidden="true"
                                className={`${darkSide ? 'md:translate-x-9 translate-x-4' : 'translate-x-0'}
            pointer-events-none inline-block md:h-[34px] h-[17px] w-[17px] md:w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                            />
                        </Switch>
                        <span className=' mx-2 inline-block'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:w-10 w-6 h-6 md:h-10 text-gray-500 dark:text-purple-700">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg>

                        </span>

                    </div>
                </div>

                <div className=' bg-white border-0 dark:bg-black' >
                    <form className="  px-4 py-2 " >
                        <div className='w-full  max-w-full flex justify-center mt-8 mb-4'>

                            <input 
                                type="text"
                                value={word}
                                onChange={(e) =>{setWord(e.target.value)}}
                
                                className='w-full p-2 focus:border-0 focus:ring-0 text-left  group  rounded-2xl max-w-7xl text-base bg-gray-200 border-r-0 rounded-r-none border-gray-600'
                            />
                            <div className=' float-right p-2 rounded-2xl rounded-l-none border-transparent bg-gray-200 py-3 md:px-8 px-3 text-sm font-medium text-white focus:outline-none disabled:bg-gray-500 focus:ring-2 focus:ring-gray-300 '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 text-purple-600 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </div>
                        </div>
                    </form>
                </div>






            
            </div>
            </div>
        </div>
    )
}

export default Navbar