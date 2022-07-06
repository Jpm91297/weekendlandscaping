import React from "react";
import { GalleryPageStyles } from "./GalleryPageStyles";
import ResponsiveGallery from "react-responsive-gallery";


const GalleryPage = () =>  {
    const data = [
        {
            src: "../images/jpg1.jpg"
        },
        {
            src: "../images/jpg2.jpg"
        },
        {
            src: "../images/jpg3.jpg"
        },
        {
            src: "../images/jpg4.jpg"
        },
        {
            src: "../images/jpg5.jpg"
        },
        {
            src: "../images/jpg6.jpg"
        },
        {
            src: "../images/jpg7.jpg"
        },
        {
            src: "../images/jpg8.jpg"
        },
        {
            src: "../images/jpg9.jpg"
        },
        {
            src: "../images/jpg10.jpg"
        },
        {
            src: "../images/jpg11.jpg"
        },
        {
            src: "../images/jpg12.jpg"
        },
        {
            src: "../images/jpg13.jpg"
        },
        {
            src: "../images/jpg14.jpg"
        },
        {
            src: "../images/jpg15.jpg"
        },
        {
            src: "../images/jpg16.jpg"
        },
        {
            src: "../images/jpg17.jpg"
        },
        {
            src: "../images/jpg18.jpg"
        },
        {
            src: "../images/jpg19.jpg"
        },
        {
            src: "../images/jpg20.jpg"
        },
        {
            src: "../images/jpg21.jpg"
        },
        {
            src: "../images/jpg22.jpg"
        },
        {
            src: "../images/jpg23.jpg"
        },
        {
            src: "../images/jpg24.jpg"
        },
        {
            src: "../images/jpg25.jpg"
        },
        {
            src: "../images/jpg26.jpg"
        },
        {
            src: "../images/jpg27.jpg"
        },
        {
            src: "../images/jpg28.jpg"
        },
        {
            src: "../images/jpg29.jpg"
        },
        {
            src: "../images/jpg30.jpg"
        },
        {
            src: "../images/jpg31.jpg"
        },
        {
            src: "../images/jpg32.jpg"
        },
        {
            src: "../images/jpg33.jpg"
        },
        {
            src: "../images/jpg34.jpg"
        },
        {
            src: "../images/jpg35.jpg"
        },
        {
            src: "../images/jpg36.jpg"
        },
        {
            src: "../images/jpg37.jpg"
        },
        {
            src: "../images/jpg38.jpg"
        },
        {
            src: "../images/jpg39.jpg"
        },
        {
            src: "../images/jpg40.jpg"
        },
        {
            src: "../images/jpg41.jpg"
        },
        {
            src: "../images/jpg42.jpg"
        },
        {
            src: "../images/jpg43.jpg"
        },
        {
            src: "../images/jpg44.jpg"
        },
        {
            src: "../images/jpg45.jpg"
        },
        {
            src: "../images/jpg46.jpg"
        },
        {
            src: "../images/jpg47.jpg"
        },
        {
            src: "../images/jpg48.jpg"
        },
        {
            src: "../images/jpg49.jpg"
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
                <ResponsiveGallery images={data} useLightBox={true} numOfImagesPerRow={{xs: 2,s: 3, m: 3, xl: 4, xxl: 4}} />
            </div>
        </GalleryPageStyles>
    )
}


export default GalleryPage;