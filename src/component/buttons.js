import { useState } from 'react'
import { Heart, HeartOff } from 'lucide-react';
export const LikeButton = () => {
    const [like, setLike] = useState("Likes")
    const handleLike = () => {
        setLike((prevLike) => (prevLike === "Likes" ? 1 : "Likes"));
    }

    return (
        <>
            <div className="cursor-pointer min-w-[30px]  ">
                <div className="flex flex-col items-center " onClick={handleLike}>
                    {like === "Likes" ? <HeartOff className="w-5 h-5 text-white" /> : <Heart className="w-5 h-5 text-white" />}
                </div>
            </div>
        </>
    )
}

