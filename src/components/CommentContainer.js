
import React from "react";

const commentsData = [
    {
        name:"Sumit Pandey",
        text:"Jai Ho BajrangBali Sanatan Ki vijay Ho",
        replies:[
            {
                name:"Sumit Pandey",
                text:"Jai Ho BajrangBali Sanatan Ki vijay Ho",
                replies:[ {
                    name:"Sumit Pandey",
                    text:"Jai Ho BajrangBali Sanatan Ki vijay Ho",
                    replies:[ {
                        name:"Sumit Pandey",
                        text:"Jai Ho BajrangBali Sanatan Ki vijay Ho",
                        replies:[ {
                            name:"Sumit Pandey",
                            text:"Jai Ho BajrangBali Sanatan Ki vijay Ho",
                            replies:[]
                        }]
                    }]
                }]
            }
        ]
    },
    {
        name:"Sumit Pandey",
        text:"Jai Ho BajrangBali Sanatan Ki vijay Ho",
        replies:[]
    },
    {
        name:"Sumit Pandey",
        text:"Jai Ho BajrangBali Sanatan Ki vijay Ho",
        replies:[]
    },
    {
        name:"Sumit Pandey",
        text:"Jai Ho BajrangBali Sanatan Ki vijay Ho",
        replies:[]
    },
]


const Comment = ({data})=>{
    const {name, text, replies} = data;
    return(
        <div className="flex shadow-sm p-2 rounded-md">
            <img 
            className="w-12 h-12"
            src="https://cdn-icons-png.freepik.com/512/1144/1144760.png" alt="User" />
            <div className="px-3">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
}

const CommentList =({comments})=>{
    return comments.map((comment, index)=>(
        <div>
            <Comment key= {index} data={comment}/>
            <div className="pl-5 border border-l-black ml-5">
                <CommentList comments={comment.replies}/>
            </div>
        </div>
    ))
    
}

const CommentContainer = ()=>{
    return(
        <div className="m-5 p-2">
<h1 className="font-bold text-2xl">Comments</h1>
<CommentList comments={commentsData}/>
        </div>
    )
}

export default CommentContainer;
