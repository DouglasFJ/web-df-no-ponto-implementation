import React, { ChangeEvent, useState } from "react";

interface SearchProps {
    setLinha: any
}

function SearchComponent({setLinha}: SearchProps) {
    const [inputContent, setInputContent] = useState('')
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputContent(event.target.value)
    }
    const handleClickButton = ()=>{
        setLinha(inputContent)
    }

    return (
        
        <>
            <div className="relative">
                <input value={inputContent} onChange={handleInputChange} type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Linha"/>
                <button onClick={handleClickButton} type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    <svg className="w-4 h-4 text-white-500 dark:text-white-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </button>
            </div>
        </>

    )
}

export default SearchComponent