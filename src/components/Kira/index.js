
import React, { useState } from 'react';
import Video from '../../video/KiraTrim.mp4'
import { VideoContainer, VideoWrapper, VideoBg, KiraVideo } from './KiraElements';


const Kira = () => {

   

    return (
        <>
             <VideoContainer id="KV" >

                <VideoWrapper>
                </VideoWrapper>

                <VideoBg>
                    <KiraVideo autoPlay loop muted src={Video} type='video/mp4' />
                </VideoBg>

            </VideoContainer>
        </>
    )
};

export default Kira;

