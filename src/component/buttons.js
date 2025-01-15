import heart from "../component/Assets/heart.svg"
import { useState } from 'react'
import filledheart from "../component/Assets/like-social-heart.png"
import mute from "../component/Assets/no-sound.png"
import unmute from "../component/Assets/audio.png"
export const LikeButton = () => {
    const [like, setLike] = useState("Likes")
    const handleLike = () => {
        setLike((prevLike) => (prevLike === "Likes" ? 1 : "Likes"));
    }

    return (
        <>
            <div className="">
                <div className="flex flex-col items-center" onClick={handleLike}>
                    <img src={like === "Likes" ? heart : filledheart} width="40px" height="auto" />
                    <p className="">{like}</p>
                </div>
            </div>
        </>
    )
}

export const MuteButton = () => {
    const [audioMute, setAudioMute] = useState(false)

    const handleAudio = () => {
        setAudioMute((audioMute) => !audioMute)
    }
    return (
        <img
            onClick={handleAudio}
            src={audioMute ? mute : unmute}
            className="w-[45px] h-auto absolute right-0"
        />
    )
}
