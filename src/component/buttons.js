import heart from "../component/Assets/heart.svg"
import {useState} from 'react'
import filledheart from "../component/Assets/like-social-heart.png"
const Buttons = ()=>{
const [like, setLike] = useState("Likes")
const handleLike = ()=>{
    console.log(like)
    setLike((prevLike) => (prevLike === "Likes" ? 1 : "Likes"));
}

    return (
        <>
            <div className="absolute  right-0">
                <div className="flex flex-col items-center" onClick={handleLike}>
                <img src={like === "Likes" ? heart : filledheart}  width="40px" height="auto" />
                <p className="">{like}</p>
                </div>
            </div>
        </>
    )
}
export default Buttons