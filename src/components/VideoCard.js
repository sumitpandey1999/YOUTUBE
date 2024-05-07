

const VideoCard = ({ info }) => {
    // console.log(info)

    // const {snippet, statistics} = info;
    // const {channelTitle, title, thumbnails } = snippet;
    return (
        <div className="p-2 m-2 w-72 shadow-lg">
            <img className="rounded-lg " src={info?.snippet?.thumbnails?.medium?.url} alt="videoCard" />
            <ul>
                <li className="font-bold py-2">
                    {info?.snippet?.title}
                </li>
                <li className="font-normal">
                    {info?.snippet?.channelTitle}
                </li>
                <li>{info?.statistics?.viewCount} views</li>
            </ul>
        </div>

    )
}

// Higher order Component

export const AddVideoCard = ({info})=>{
    return(
        <div className="border-4">
              <VideoCard info={info}/>
        </div>
      
    )
}

export default VideoCard;