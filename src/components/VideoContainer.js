
import { useContext, useEffect , useState} from "react";
import YOUTUBE_API from "../utils/constent";
import VideoCard, { AddVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import { MyContext } from "../App";



const VideoContainer = () => {

    const [video, setVideo] = useState([])
    
    const {filter} = useContext(MyContext)

    console.log(filter)


    const getVideo = async () => {
        const data = await fetch(YOUTUBE_API);
        const json = await data.json();
        console.log(json.items)
        setVideo(json.items)
    }

    useEffect(() => {
        getVideo();
    },[]);



    if(filter.length===0){
        return (
                    <div className="flex flex-wrap justify-evenly">
                        {video[0] && <AddVideoCard info={video[0]}/>}
                       {video.map((video)=> (<Link key = {video?.id}  to = {"/watch?v="+video?.id}><VideoCard info ={video}/></Link>
                       ))}
                    </div>
                )
    }else{
    return (
        <div className="flex flex-wrap justify-evenly">
           {filter[0] && <AddVideoCard info={filter[0]}/>}
            {filter.map((video)=> (<Link key = {video?.id?.videoId}  to = {"/watch?v="+video?.id?.videoId}><VideoCard info ={video}/></Link>
           ))}
        </div>
    )
}
}

export default VideoContainer;


// ******************************************************************************************************************************



// import { useEffect, useState } from "react";
// import YOUTUBE_API from "../utils/constent";

// import VideoCard, { AddVideoCard } from "./VideoCard";
// import { Link } from "react-router-dom";
// const VideoContainer = () => {

//     const [video, setVideo] = useState([])

//     const getVideo = async () => {
//         const data = await fetch(YOUTUBE_API);
//         const json = await data.json();
//         // console.log(json.items)
//         setVideo(json.items)
//     }

//     useEffect(() => {
//         getVideo();
//     },[]);


//     return (
//         <div className="flex flex-wrap justify-evenly">
//             {video[0] && <AddVideoCard info={video[0]}/>}
//            {video.map((video)=> (<Link key = {video?.id}  to = {"/watch?v="+video?.id}><VideoCard info ={video}/></Link>
//            ))}
//         </div>
//     )
// }

// export default VideoContainer;