import React from 'react'
import TodoContainer from './todo-container'

function Frame() {
    return (
        <div className=' flex py-10 justify-center  bg-frame h-screen'>
            <TodoContainer />
        </div>
    )
}

export default Frame