import React from "react";
import styles from "./Pricing.module.scss";
import Container from "../Container";

class ReelPricing extends React.Component {
  state = {
    priceInputValue: "1",
    priceInput: {
      0: "3",
      1: "6",
      2: "12",
      3: "13+",
    },
    priceOutput: {
      plan1: {
        0: ["$", "3,750", ""],
        1: ["$", "7,200", ""],
        2: ["$", "11,400", ""],
        3: ["", "Contact Us", ""],
      },
    },
  };

  slider = React.createRef();

  componentDidMount() {
    this.slider.current.setAttribute("min", 0);
    this.slider.current.setAttribute(
      "max",
      Object.keys(this.state.priceInput).length - 1
    );
  }

  handlePricingSlide = (e) => {
    this.setState({ priceInputValue: e.target.value });
  };

  getPricingData = (obj, pos) => {
    return pos !== undefined
      ? obj[this.state.priceInputValue][pos]
      : obj[this.state.priceInputValue];
  };

  render() {
    return (
      <div className={styles.pricing__items}>
        <div className={styles.pricing__item}>
          <div className={styles.pricing__item__inner}>
            <div className={styles.pricing__item__content}>
              <div className={styles.pricing__slider}>
                <label className={styles.form__slider}>
                  <span>HD Video Reels base price:</span>
                  <input
                    className={styles.range}
                    type="range"
                    ref={this.slider}
                    defaultValue={this.state.priceInputValue}
                    onChange={this.handlePricingSlide}
                  />
                </label>
                <div
                  ref={this.sliderValue}
                  className={styles.pricing__slider__value}
                >
                  {this.getPricingData(this.state.priceInput)} reels
                </div>
              </div>
              <div className={styles.pricing__item__header}>
                <div className={styles.pricing__item__price}>
                  <span className={styles.pricing__item__price__currency}>
                    {this.getPricingData(this.state.priceOutput.plan1, 0)}
                  </span>
                  <span className={styles.pricing__item__price__amount}>
                    {this.getPricingData(this.state.priceOutput.plan1, 1)}
                  </span>
                  {this.getPricingData(this.state.priceOutput.plan1, 2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReelPricing;
