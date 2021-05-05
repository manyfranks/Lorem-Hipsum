import React from 'react'

function Message() {
    return (
        <div class="p-6 max-w-md mx-auto bg-white rounded-x1 shadow-md flex items-center space-x-4">
            <div class="flex-shrink-0">
                <img class="h-12 w-12" src="/src/logo.svg" alt="ChitChat Logo"/>
            </div>
            <div>
                <div class="text-xl font-medium text-black">ChitChat</div>
                <p class="text-gray-500">You have a new message!</p>
            </div>
        </div>
    )
}

export default Message
