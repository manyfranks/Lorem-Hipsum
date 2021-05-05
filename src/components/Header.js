import React from 'react'

const Header = () => {
    return (
        <div className='flex p-4 text-gray-100 font-semibold'>
            <div className="left float-left">
                <h1>Logo</h1>
            </div>
            <div className="right flex">
                <h5>Github</h5>
                <h5>Twitter</h5>
                <h5>API</h5>
            </div>
        </div>
    )
}

export default Header
