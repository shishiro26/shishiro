'use client'
import React from 'react'
import { audioIcon } from "@/constants";

const PlayAudio = () => {
    const [isPlaying, setIsPlaying] = React.useState(true);
    const audioRef = React.useRef<HTMLAudioElement>(null);

    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    React.useEffect(() => {
        audioRef.current?.play();
    }, []);

    return (
        <li onClick={togglePlayPause} className='cursor-pointer'>
            {
                audioIcon.map((icon, index) => {
                    return (
                        <span key={index}>
                            {icon.icon}
                        </span>
                    );
                })
            }
            <audio ref={audioRef} src="/audio/gang_leader.mp3" ></audio>

        </li>
    )
}

export default PlayAudio