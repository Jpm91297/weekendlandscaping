import React from "react";
import * as S from './HeroStyles';

const Hero = () =>  (
    <S.HeroWrapper>
        <div className="intro">
            <h1>
                Landscaping With a Clean Modernized Look
            </h1>
            <h2>
                Beat the Spring Rush with Weekend Landscaping
            </h2>
            <a href="#contactme">
                <button>Let's Talk</button>
            </a>
        </div>
    </S.HeroWrapper>

)

export default Hero;