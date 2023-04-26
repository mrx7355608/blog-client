import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Searchbar() {
    const inputRef = React.useRef<HTMLInputElement>(null)

    return (
        <form onSubmit={
            (e: React.ChangeEvent<HTMLFormElement>) => {
                e.preventDefault()
                alert(`You are searching for ${inputRef.current?.value}`)
            }
        } className='relative'>
            <input ref={inputRef} placeholder='Search blogs' className='text-gray-700 mt-10 flex items-center justify-between p-2 px-5 rounded-full bg-gray-100 w-full font-medium outline-0' />
            <FaSearch color='grey' size={13} style={{
                position: 'absolute',
                top: '50%',
                translate: '0% -50%',
                right: '3%',
            }} />
        </form>
    )
}
