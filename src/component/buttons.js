import heart from "../component/Assets/heart.svg"
import { useState } from 'react'
import filledheart from "../component/Assets/like-social-heart.png"
export const LikeButton = () => {
    const [like, setLike] = useState("Likes")
    const handleLike = () => {
        setLike((prevLike) => (prevLike === "Likes" ? 1 : "Likes"));
    }

    return (
        <>
            <div className="cursor-pointer">
                <div className="flex flex-col items-center" onClick={handleLike}>
                    <img src={like === "Likes" ? heart : filledheart} width="40px" height="auto" />
                    <p className="text-[white]">{like}</p>
                </div>
            </div>
        </>
    )
}

