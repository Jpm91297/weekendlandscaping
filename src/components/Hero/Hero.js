import React from "react";
import * as S from './HeroStyles';

const Hero = () =>  (
    <S.HeroWrapper>
        <div className="intro">
            <h1>
                Beat the spring rush with Weekend Landscaping
            </h1>
            <h2>
                We service Clermont, Butler, and Hamilton Counties in Ohio.
            </h2>
            <a href="#contactme">
                <button>Let's Talk</button>
            </a>
        </div>
    </S.HeroWrapper>

)

export default Hero;