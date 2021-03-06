import React from "react";
import * as S from './HeroStyles';

const Hero = () =>  (
    <S.HeroWrapper>
        <div className="intro">
            <h1>
                Design <br />
                Build <br />
                Maintain
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