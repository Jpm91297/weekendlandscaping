import React from "react";
import { GalleryPageStyles } from "./GalleryPageStyles";
import ResponsiveGallery from "react-responsive-gallery";
import { useState } from "react";



const GalleryPage = () =>  {

    const [showMore, setShowMore] = useState(false)
    const [showMore2, setShowMore2] = useState(false)
    const [showMore3, setShowMore3] = useState(false)
    
    const data = [
        {
            src: require("../../assets/images/image0.jpg")
        },
        {
            src: "../../assets/images/project1_1.JPG"
        },
        {
            src: "../../assets/images/project1_2.JPG"
        },
        {
            src: "../../assets/images/project1_3.JPG"
        },
        {
            src: "../../assets/images/project2_1.JPG"
        },
        {
            src: "../../assets/images/project2_2.JPG"
        },
        {
            src: "../../assets/images/project3_1.JPG"
        },
        {
            src: "../../assets/images/project3_2.JPG"
        },
        {
            src: "../../assets/images/project3_3.jpg"
        },
        {
            src: "../../assets/images/project4_1.jpg"
        },
        {
            src: "../../assets/images/project4_2.JPG"
        },
    ]

    const data2 = [
        {
            src: "../images/project5_1.jpg"
        },
        {
            src: "../images/project5_2.JPG"
        },
        {
            src: "../images/project7_2.JPG"
        },
        {
            src: "../images/project8_1.JPG"
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
            src: "../images/project11_1.JPG"
        },
        {
            src: "../images/project11_2.JPG"
        },
    
    ]

    const data3 = [
        {
            src: "../images/project11_3.JPG"
        },
        {
            src: "../images/project11_4.JPG"
        },
        {
            src: "../images/project11_5.JPG"
        },
        {
            src: "../images/project11_6.JPG"
        },
        {
            src: "../images/project11_7.JPG"
        },
        {
            src: "../images/project12_4.JPG"
        },
        {
            src: "../images/project13_1.jpg"
        },
        {
            src: "../images/project13_2.jpg"
        },
        {
            src: "../images/project14_1.JPG"
        },
        {
            src: "../images/project14_2.JPG"
        },
    ]

    const data4 = [
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
            src: "../images/project16_1.JPG"
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
                <div>
                    {showMore2 && <ResponsiveGallery  images={data3} useLightBox={true} numOfImagesPerRow={{xs: 2,s: 3, m: 3, xl: 4, xxl: 4}} />}
                </div>
                {!showMore2 && showMore &&  <div style={{display: 'flex', justifyContent: 'center', margin: '10px'}}>
                    <span onClick={(() => setShowMore2(true))}>Show more...</span>
                </div>}
                <div>
                    {showMore3 && <ResponsiveGallery  images={data4} useLightBox={true} numOfImagesPerRow={{xs: 2,s: 3, m: 3, xl: 4, xxl: 4}} />}
                </div>
                {!showMore3 && showMore2 &&  <div style={{display: 'flex', justifyContent: 'center', margin: '10px'}}>
                    <span onClick={(() => setShowMore3(true))}>Show more...</span>
                </div>}
                

            </div>
        </GalleryPageStyles>
    )
}


export default GalleryPage;