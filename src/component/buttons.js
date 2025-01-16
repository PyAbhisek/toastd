import { useState } from 'react'
import { Heart, HeartOff } from 'lucide-react';
export const LikeButton = () => {
    const [like, setLike] = useState("Likes")
    const handleLike = () => {
        setLike((prevLike) => (prevLike === "Likes" ? 1 : "Likes"));
    }

    return (
        <>
            <div className="cursor-pointer  ">
                <div className="flex flex-col items-center" onClick={handleLike}>
                    {like === "Likes" ? <HeartOff className="w-7 h-7 text-white" /> : <Heart className="w-7 h-7 text-white" />}
                    <p className="text-[white]">{like}</p>
                </div>
            </div>
        </>
    )
}

