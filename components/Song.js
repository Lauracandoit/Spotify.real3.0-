import useSpotify from '@/hooks/useSpotify';
import React from 'react';
import {millisToMinutesAndSeconds} from "@/lib/time"
import { useRecoilState } from 'recoil';
import { currentTrackIdState, isPlayingState } from '@/atoms/songAtom';

function Song({ order, track }) {
    const spotifyApi = useSpotify();
    const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

    const playSong = () => {
        setCurrentTrackId(track.track.id);
        setIsPlaying(true);
        spotifyApi.play({
            uris: [track.track.uri],
        });
    };
    


    // Check if track and album exist before accessing images
        return (
            <div className='grid grid-cols-2 text-gray-500 py-3 px-4 hover:bg-gray-900 rounded-lg cursor-pointer'>
                <div className='flex items-center space-x-4'>
                    <p> {order + 1}</p>
                    {track?.track?.album?.images?.length > 0 && (
                        <img className='h-10 w-10' src={track.track.album.images[0].url} alt="" />
                        )}         

                    <div>
                        <p className='w-36 lg:w-64 text-white overflow-hidden whitespace-nowrap overflow-ellipsis'> {track.track.name} </p>
                        <p className='w-48'>{track.track.artists[0].name} </p>
                    </div>   
                </div>   

                <div className='flex items-center justify-between ml-auto md:ml-8 mr-4'>
                    <p className=' hidden md:inline'> {track.track.album.name} </p>
                    <p> {millisToMinutesAndSeconds(track.track.duration_ms)} </p>
                </div>
            </div>
        );
}

export default Song;
