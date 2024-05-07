import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/appSlice";
import React from "react";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";



const VideoWatch = () => {

    const [searchParams] = useSearchParams();
    // console.log(searchParams.get("v"))
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu())
    }, [])
    return (
        <div className="flex flex-col w-full">
            <div className="flex p-5 w-full">
            <div className="">
                <iframe width="1100" height="600" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <div className="w-full">
<LiveChat/>
            </div>
            </div>
<CommentContainer/>
        </div>
    )
}

export default VideoWatch
