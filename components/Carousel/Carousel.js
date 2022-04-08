import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Image from "next/image";
import styles from "../../styles/Home.module.scss";
import { BsTextCenter } from "react-icons/bs";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const CarouselStyle = {
  root: {
    padding: "0 30px",
  },
  slideContainer: {
    padding: "0 10px",
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff",
  },
  slide1: {
    backgroundColor: "#FEA900",
  },
  slide2: {
    backgroundColor: "#B3DC4A",
  },
  slide3: {
    backgroundColor: "#6AC0FF",
  },
};

class DemoAutoPlay extends React.Component {
  state = {
    index: 0,
  };

  handleChangeIndex = (index) => {
    this.setState({
      index,
    });
  };

  render() {
    const { index } = this.state;

    return (
      <div style={CarouselStyle.root}>
        <AutoPlaySwipeableViews
          index={index}
          onChangeIndex={this.handleChangeIndex}
          slideStyle={CarouselStyle.slideContainer}
        >
          <div
            style={Object.assign({}, CarouselStyle.slide, CarouselStyle.slide1)}
          >
            <Image
              src="https://res.cloudinary.com/burke-creative/image/upload/v1646974751/Hexonic%20Studios/Photos/DSC_9656_pr9iww.jpg"
              width={500}
              height={334}
            />
          </div>
          <div
            style={Object.assign({}, CarouselStyle.slide, CarouselStyle.slide2)}
          >
            slide n°2
          </div>
          <div
            style={Object.assign({}, CarouselStyle.slide, CarouselStyle.slide3)}
          >
            slide n°3
          </div>
        </AutoPlaySwipeableViews>
      </div>
    );
  }
}

export default DemoAutoPlay;
