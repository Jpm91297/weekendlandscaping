import React from "react";
import { GalleryPageStyles } from "./GalleryPageStyles";
import ResponsiveGallery from "react-responsive-gallery";


const GalleryPage = () =>  {
    const data = [
        {
            src: "./images/img2.jpg",
        },
        {
            src: "./images/img3.jpg",
        },
        {
            src: "./images/img3.jpg",
        },
        {
            src: "./images/img4.jpg",
        },
        {
            src: "./images/img5.jpg"
        },
        {
            src: "./images/img6.jpg"
        },
        {
            src: "./images/img7.jpg"
        },
        {
            src: "./images/img8.jpg"
        },
        {
            src: "./images/img9.jpg"
        },
        {
            src: "./images/img10.jpg"
        },
        {
            src: "./images/img11.jpg"
        },
        {
            src: "./images/img12.jpg"
        },
        {
            src: "./images/img13.jpg"
        },
        {
            src: "./images/img14.jpg"
        }
    ]
    
    return (
        <GalleryPageStyles>
            <div className="intro">
                <h1>
                    Check out our Gallery Below!
                </h1>
                <h2>
                    This is some more filler text explaining what we do.
                </h2>
                <a href="/#contactme">
                    <button>Let's Talk</button>
                </a>            
            </div>
            <div className="photo-section">
                <ResponsiveGallery images={data} useLightBox={true} />
            </div>
        </GalleryPageStyles>
    )
}


export default GalleryPage;