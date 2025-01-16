import React, { useState, useRef, useEffect } from 'react';
import { LikeButton } from "./buttons";
import VideoControls from './videoControls';
import { Play, Pause, Volume2, VolumeOff } from 'lucide-react';
const Feed = () => {
    const [posts, setPosts] = useState(
        [
            {
                "id": "1",
                "title": "Big Buck Bunny",
                "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
                "duration": "8:18",
                "uploadTime": "May 9, 2011",
                "views": "24,969,123",
                "author": "Vlc Media Player",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
                "subscriber": "25254545 Subscribers",
                "isLive": true
            },
            {
                "id": "2",
                "title": "The first Blender Open Movie from 2006",
                "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
                "duration": "12:18",
                "uploadTime": "May 9, 2011",
                "views": "24,969,123",
                "author": "Blender Inc.",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
                "subscriber": "25254545 Subscribers",
                "isLive": true
            },
            {
                "id": "3",
                "title": "For Bigger Blazes",
                "thumbnailUrl": "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
                "duration": "8:18",
                "uploadTime": "May 9, 2011",
                "views": "24,969,123",
                "author": "T-Series Regional",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
                "subscriber": "25254545 Subscribers",
                "isLive": true
            },
            {
                "id": "4",
                "title": "For Bigger Escape",
                "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
                "duration": "8:18",
                "uploadTime": "May 9, 2011",
                "views": "24,969,123",
                "author": "T-Series Regional",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                "description": " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
                "subscriber": "25254545 Subscribers",
                "isLive": false
            },
            {
                "id": "5",
                "title": "Big Buck Bunny",
                "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png",
                "duration": "8:18",
                "uploadTime": "May 9, 2011",
                "views": "24,969,123",
                "author": "Vlc Media Player",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                "description": "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
                "subscriber": "25254545 Subscribers",
                "isLive": true
            },
            {
                "id": "6",
                "title": "For Bigger Blazes",
                "thumbnailUrl": "https://i.ytimg.com/vi/Dr9C2oswZfA/maxresdefault.jpg",
                "duration": "8:18",
                "uploadTime": "May 9, 2011",
                "views": "24,969,123",
                "author": "T-Series Regional",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
                "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
                "subscriber": "25254545 Subscribers",
                "isLive": false
            },
            {
                "id": "7",
                "title": "For Bigger Escape",
                "thumbnailUrl": "https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg",
                "duration": "8:18",
                "uploadTime": "May 9, 2011",
                "views": "24,969,123",
                "author": "T-Series Regional",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
                "description": " Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren't quite big enough. For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
                "subscriber": "25254545 Subscribers",
                "isLive": true
            },
            {
                "id": "8",
                "title": "The first Blender Open Movie from 2006",
                "thumbnailUrl": "https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp",
                "duration": "12:18",
                "uploadTime": "May 9, 2011",
                "views": "24,969,123",
                "author": "Blender Inc.",
                "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
                "description": "Song : Raja Raja Kareja Mein Samaja\nAlbum : Raja Kareja Mein Samaja\nArtist : Radhe Shyam Rasia\nSinger : Radhe Shyam Rasia\nMusic Director : Sohan Lal, Dinesh Kumar\nLyricist : Vinay Bihari, Shailesh Sagar, Parmeshwar Premi\nMusic Label : T-Series",
                "subscriber": "25254545 Subscribers",
                "isLive": false
            }
        ]
    )

    const [videoStates, setVideoStates] = useState({});
    const [showPlayButton, setShowPlayButton] = useState({});
    const [followStates, setFollowStates] = useState({});
    const videoRefs = useRef({});
    const buttonTimeouts = useRef({});


    useEffect(() => {
        // Initialize video states for each post
        const initialStates = posts.reduce((acc, post) => {
            acc[post.id] = {
                isMuted: true,
                isPlaying: false
            };
            return acc;
        }, {});
        setVideoStates(initialStates);
        const initialFollowStates = posts.reduce((acc, post) => {
            acc[post.id] = false;
            return acc;
        }, {});
        setFollowStates(initialFollowStates);

        // Set up Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const videoId = entry.target.dataset.videoid;
                    if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                        if (videoRefs.current[videoId]) {
                            videoRefs.current[videoId].play();
                            setVideoStates(prev => ({
                                ...prev,
                                [videoId]: { ...prev[videoId], isPlaying: true }
                            }));
                        }
                    } else {
                        if (videoRefs.current[videoId]) {
                            videoRefs.current[videoId].pause();
                            setVideoStates(prev => ({
                                ...prev,
                                [videoId]: { ...prev[videoId], isPlaying: false }
                            }));
                        }
                    }
                });
            },
            {
                threshold: 0.5
            }
        );

        // Observe all videos
        posts.forEach((post) => {
            const videoElement = videoRefs.current[post.id];
            if (videoElement) {
                observer.observe(videoElement);
            }
        });

        return () => {
            observer.disconnect();
            Object.values(buttonTimeouts.current).forEach(timeout => clearTimeout(timeout));
        };
    }, [posts]);

    const handleVideoClick = (postId) => {
        setShowPlayButton(true);
        const video = videoRefs.current[postId];
        if (video) {
            if (video.paused) {
                video.play();
                setVideoStates(prev => ({
                    ...prev,
                    [postId]: { ...prev[postId], isPlaying: true }
                }));
            } else {
                video.pause();
                setVideoStates(prev => ({
                    ...prev,
                    [postId]: { ...prev[postId], isPlaying: false }
                }));
            }
        }
        setShowPlayButton(prev => ({ ...prev, [postId]: true }));


        if (buttonTimeouts.current[postId]) {
            clearTimeout(buttonTimeouts.current[postId]);
        }


        buttonTimeouts.current[postId] = setTimeout(() => {
            setShowPlayButton(prev => ({ ...prev, [postId]: false }));
        }, 300);
    };

    const toggleMute = (postId) => {
        const video = videoRefs.current[postId];
        console.log(`toggleMute`)
        if (video) {
            video.muted = !video.muted;
            setVideoStates(prev => ({
                ...prev,
                [postId]: { ...prev[postId], isMuted: video.muted }
            }));
        }
    };
    const toggleFollow = (postId) => {
        setFollowStates(prev => ({
            ...prev,
            [postId]: !prev[postId]
        }));
    };
    return (
        <div className="w-full flex justify-center">
            <div className="w-full sm:max-w-[45%] md:max-w-[45%]">
                <div className="w-full">
                    {posts.map((post) => (

                        <div key={post.id} className="relative h-[90vh] bg-[black] mt-3">

                            <div className='absolute bottom-10 left-2 '>
                                <div className='flex justify-start items-center gap-3 ml-[.3rem]'>
                                    <img src={post?.thumbnailUrl} alt={post.id} className='h-[40px] w-[40px] object-cover rounded-full' />
                                    <p className='text-white max-w-[5rem] truncate text-[1rem]'>{post?.title}</p>
                                    <button className='text-white bg-gray-800/50 border border-white px-[1rem] rounded-[5px] z-10' onClick={() => toggleFollow(post.id)}>{followStates[post.id] ? "Following" : "Follow"}</button>
                                </div>

                                <div>
                                    <p className='text-white max-w-[15rem] truncate text-[0.8rem] ml-[.3rem] mt-[0.3rem]'>  {post?.description}</p>
                                </div>

                            </div>

                            <video
                                ref={el => videoRefs.current[post.id] = el}
                                src={post.videoUrl}
                                className="h-full w-full object-contain"
                                muted={videoStates[post.id]?.isMuted}
                                playsInline
                                data-videoid={post.id}
                                loop
                                onClick={() => handleVideoClick(post.id)}
                            />
                            {showPlayButton[post.id] && (
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 rounded-full p-4 animate-fade">
                                    {videoStates[post.id]?.isPlaying ? (
                                        <Pause className="w-12 h-12 text-white" />
                                    ) : (
                                        <Play className="w-12 h-12 text-white" />
                                    )}
                                </div>
                            )}
                            <div className="absolute top-2 right-2">
                                <VideoControls
                                    postId={post.id}
                                    videoState={videoStates[post.id]}
                                    onMuteToggle={toggleMute}
                                />


                            </div>
                            <div className=" absolute flex items-center justify-center bg-gray-800/50 hover:bg-gray-800/75 bottom-[10rem] right-2 rounded-full  h-[2.5rem] w-[2.5rem]  p-2">
                                <LikeButton />
                            </div>


                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feed;