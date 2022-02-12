import React from "react";
import * as S from './HeroStyles';

const Hero = () =>  (
    <S.HeroWrapper>
        <div className="intro">
            <h1>
                This is some really engaging filler text.
            </h1>
            <h2>
                This is some more filler text explaining what we do.
            </h2>
            <button>Let's Talk</button>
            
        </div>
    </S.HeroWrapper>

)

export default Hero;