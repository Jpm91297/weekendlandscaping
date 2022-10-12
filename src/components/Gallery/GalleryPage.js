import React from "react";
import { GalleryPageStyles } from "./GalleryPageStyles";
import ResponsiveGallery from "react-responsive-gallery";
import { useState } from "react";


const GalleryPage = () =>  {

    const [showMore, setShowMore] = useState(false)

    const data = [
        {
            src: "../images/project1_1.jpg"
        },
        {
            src: "../images/project1_2.jpg"
        },
        {
            src: "../images/project1_3.jpg"
        },
        {
            src: "../images/project2_1.jpg"
        },
        {
            src: "../images/project2_2.jpg"
        },
        {
            src: "../images/project3_1.jpg"
        },
        {
            src: "../images/project3_2.jpg"
        },
        {
            src: "../images/project3_3.jpg"
        },
        {
            src: "../images/project4_1.jpg"
        },
        {
            src: "../images/project4_2.jpg"
        },
        {
            src: "../images/project5_1.jpg"
        },
        {
            src: "../images/project5_2.jpg"
        },
        {
            src: "../images/project7_2.jpg"
        },
        {
            src: "../images/project8_1.jpg"
        },
        {
            src: "../images/project9_1.jpg"
        },
        {
            src: "../images/project9_2.jpg"
        },
        {
            src: "../images/project10_1.jpg"
        },
        {
            src: "../images/project11_1.jpg"
        },
        {
            src: "../images/project11_2.jpg"
        },
    
    ]

    const data2 = [
        {
            src: "../images/project11_3.jpg"
        },
        {
            src: "../images/project11_4.jpg"
        },
        {
            src: "../images/project11_5.jpg"
        },
        {
            src: "../images/project11_6.jpg"
        },
        {
            src: "../images/project11_7.jpg"
        },
        {
            src: "../images/project12_4.jpg"
        },
        {
            src: "../images/project13_1.jpg"
        },
        {
            src: "../images/project13_2.jpg"
        },
        {
            src: "../images/project14_1.jpg"
        },
        {
            src: "../images/project14_2.jpg"
        },
        {
            src: "../images/project15_1.jpg"
        },
        {
            src: "../images/project15_2.jpg"
        },
        {
            src: "../images/project15_3.jpg"
        },
        {
            src: "../images/project16_1.jpg"
        },
        {
            src: "../images/project16_2.jpg"
        },
        {
            src: "../images/project16_3.jpg"
        },
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
                <div>
                    <ResponsiveGallery images={data} useLightBox={true} numOfImagesPerRow={{xs: 2,s: 3, m: 3, xl: 4, xxl: 4}} />
                    
                </div>
                <div>
                    {showMore && <ResponsiveGallery  images={data2} useLightBox={true} numOfImagesPerRow={{xs: 2,s: 3, m: 3, xl: 4, xxl: 4}} />}
                </div>
                {!showMore && <div style={{display: 'flex', justifyContent: 'center', margin: '10px'}}>
                    <span onClick={(() => setShowMore(true))}>Show more...</span>
                </div>}
                

            </div>
        </GalleryPageStyles>
    )
}


export default GalleryPage;