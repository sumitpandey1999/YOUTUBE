
import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from '../utils/chatSlice';
import generateRandomName, { makeRandomMessage } from '../utils/helper';
import { LIVE_Chat_COUNT } from '../utils/constent';
import { useState } from 'react';

function LiveChat() {
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages)

    const [liveMessage, setLiveMessage] = useState("");

    useEffect(() => {
        const i = setInterval(() => {
            //Api polling

            // console.log("API POLLING")

            dispatch(addMessages(
                {
                    name: generateRandomName(),
                    message: makeRandomMessage(LIVE_Chat_COUNT),
                }
            ))
        }, 2000)


        return () => {
            clearInterval(i)
        }
    }, [])
    return (
        <>
            <div className='ml-2 p-2 border border-black w-full h-[600px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
                {chatMessages.map((c, index) => (
                    <ChatMessage name={c.name} message={c.message} key={index} />
                ))}
            </div>
            <form className='w-full m-2 p-2 border-2 border-bl' onSubmit={(e) => {
                e.preventDefault();
                setLiveMessage("")
                // console.log("On Form Submit", liveMessage)
                dispatch(addMessages({
                    name: 'Sumit Pandey',
                    message: liveMessage
                }))
            }}>
                <input className='w-[17rem] px-2'
                    type="text"
                    value={liveMessage}
                    onChange={(e) => { setLiveMessage(e.target.value) }} />
                <button className='px-2 mx-2 bg-green-100'>Submit</button>
            </form>
        </>
    )
}

export default LiveChat
