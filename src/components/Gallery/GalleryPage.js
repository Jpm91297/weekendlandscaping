import React from "react";
import { GalleryPageStyles } from "./GalleryPageStyles";
import ResponsiveGallery from "react-responsive-gallery";
import { useState } from "react";

const GalleryPage = () => {
  const [showMore, setShowMore] = useState(false);

  const data = [
    {
      src: require("../../assets/images/Image1-min.jpeg"),
    },
    {
      src: require("../../assets/images/Image2-min.jpeg"),
    },
    {
      src: require("../../assets/images/Image3-min.jpeg"),
    },
    {
      src: require("../../assets/images/Image4-min.jpeg"),
    },
    {
      src: require("../../assets/images/Image5-min.jpeg"),
    },
    {
      src: require("../../assets/images/Image6-min.jpeg"),
    },
    {
      src: require("../../assets/images/Image7-min.jpeg"),
    },
    {
      src: require("../../assets/images/Image8-min.jpeg"),
    },
    {
      src: require("../../assets/images/Image9-min.jpeg"),
    },
  ];

  const data2 = [
    {
      src: require("../../assets/images/Image10-min.jpeg"),
    },
    {
      src: require("../../assets/images/Image11-min.jpeg"),
    },
    {
      src: require("../../assets/images/Image12-min.jpeg"),
    },
    {
      src: require("../../assets/images/Image13-min.jpeg"),
    },
    {
      src: require("../../assets/images/Image14-min.jpeg"),
    },
    {
      src: require("../../assets/images/Image15-min.jpeg"),
    },
    {
      src: require("../../assets/images/Image16-min.jpeg"),
    },
    {
      src: require("../../assets/images/Image17-min.jpeg"),
    },
  ];

  const [imgArr, setImgArr] = useState(data);

  const handleShowMore = () => {
    setShowMore(true);
    console.log([...data, data2]);
    setImgArr([...data, ...data2]);
  };

  return (
    <GalleryPageStyles>
      <div className="intro">
        <h1>Check out some of our work below!</h1>
        <h2>Our craftmanship speaks for itself!</h2>
        <a href="/#contactme">
          <button>Let's Talk</button>
        </a>
      </div>
      <div className="photo-section">
        <div>
          <ResponsiveGallery
            images={imgArr}
            useLightBox={true}
            colsPadding={{ xs: 4, s: 4, m: 4, l: 4, xl: 4, xxl: 4 }}
            numOfImagesPerRow={{ xs: 2, s: 3, m: 3, xl: 4, xxl: 4 }}
          />
        </div>
        {!showMore && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "10px",
            }}
          >
            <span onClick={() => handleShowMore()}>Show more...</span>
          </div>
        )}
      </div>
    </GalleryPageStyles>
  );
};

export default GalleryPage;
