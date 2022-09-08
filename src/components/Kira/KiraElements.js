
import styled from "styled-components"

export const VideoContainer = styled.div`
width: 100%;
height: 100vh;
margin: 0;
padding: 0;
position: relative;
background-color: aquamarine;

`
export const VideoAnimationWrapper = styled.div`
position: relative;
overflow: hidden;
z-index: 4;
`

export const VideoWrapper = styled.div`
width: 100%;
height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    z-index: 5;
`
export const KiraFrame = styled.div`
position: absolute;
width: 300px;
height: 500px;
background-color: red;
z-index: 7;
`


export const VideoBg = styled.div`
width: 100%;
height: 100%;
position: relative;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
background: transparent;
z-index: 6;
`

export const KiraVideo = styled.video`
width: 275px;
height: 475px;

border-radius: 25%;
z-index: 8;

-o-object-fit: cover;
object-fit: cover;
background: #232a34;
`