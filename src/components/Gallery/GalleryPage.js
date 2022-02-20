import React from "react";
import { GalleryPageStyles } from "./GalleryPageStyles";
import ResponsiveGallery from "react-responsive-gallery";


const GalleryPage = () =>  {
    const data = [
        {
            src: "./images/img2.jpg",
        },
        {
            src: "./images/img1.jpg",
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
                    Check out some of our work below!
                </h1>
                <h2>
                    Our craftmanship speaks for itself!
                </h2>
                <a href="/#contactme">
                    <button>Let's Talk</button>
                </a>            
            </div>
            <div className="photo-section">
                <ResponsiveGallery images={data} useLightBox={true} numOfImagesPerRow={{xs: 2,s: 3, m: 3, xl: 5, xxl: 5}} />
            </div>
        </GalleryPageStyles>
    )
}


export default GalleryPage;