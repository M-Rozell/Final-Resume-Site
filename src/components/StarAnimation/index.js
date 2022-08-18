import React, {useState, useEffect} from "react";
import { AnimationContainer, AnimationOneWrapper, AnimationTwoWrapper, AnimationThreeWrapper } from "./animationElements";
import { motion} from "framer-motion";

import FirstStyle from "./FirstStyle/FirstStyle";
import FirstStyleList from './FirstStyle/FirstStyleList';
import SecondStyleList from "./SecondStyle/SecondStyleList";
import ThirdStyleList from './ThirdStyle/ThirdStyleList';




const Animation = () => {

    

    return (

        <AnimationContainer>


            <AnimationOneWrapper>
                 <FirstStyleList />
            </AnimationOneWrapper>

            <AnimationTwoWrapper>
                <SecondStyleList />
            </AnimationTwoWrapper>

            <AnimationThreeWrapper>
                <ThirdStyleList />
            </AnimationThreeWrapper>





        </AnimationContainer>

    )


}

export default Animation;