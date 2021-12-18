import React from "react";
import classes from "./styles.module.css";
import slider3 from "./images/slide-3.jpg";
import slider1 from "./images/slide-1.jpg";
import Icon1 from "./images/icon1.png";
import Icon2 from "./images/icon2.png";
import Icon3 from "./images/icon3.png";
import Icon4 from "./images/icon4.png";
import Image from "next/image";
import { Row, Col } from "reactstrap";
import { TiLocation } from "react-icons/ti";
import Carosal from "./carosal";
import Slider from "react-slick";
const Navbar = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className={classes.slider_section}>
        <div className={classes.wrapper}>
          <Slider {...settings}>
            <div className={classes.slider_item}>
              <div className={classes.slider_images}>
                
                  <Image src={slider1} alt="Slider" />
                
              </div>
            </div>

            <div className={classes.slider_item}>
              <div className={classes.slider_images}>
                <Image src={slider3} alt="Slider" />
              </div>
            </div>
          </Slider>
        
        </div>
      </div>

      <div className={classes.slider_content}>
        <div className={classes.slider_content_container.hidden_mobile}>
          <div className={classes.slider_content_wrap}>
            <h1 style={{ fontSize: "4vw" }}>
              One World, <br /> Infinite Experiences{" "}
            </h1>
            <p style={{ fontSize: "3vw" }}>To Bring Out the Nomad in You!</p>
          </div>

          <div className={classes.slider_map}>
            <a href="#">
              {" "}
              <TiLocation />{" "}
            </a>{" "}
            <span>Explore Jaipur</span>
          </div>

          <div className={classes.slider_usp_item}>
            <div className={classes.slider_usp_wrap}>
              <div className={classes.slider_usp_icons}>
                <Image src={Icon1} alt="" />
              </div>
              <div className={classes.slider_usp_content}>
                <p className={classes.slider_usp_title}>12,000+</p>
                <p>Travel Experiences</p>
              </div>
            </div>
          </div>

          <div className={classes.slider_usp_item}>
            <div className={classes.slider_usp_wrap}>
              <div className={classes.slider_usp_icons}>
                <Image src={Icon3} alt="" />
              </div>
              <div className={classes.slider_usp_content}>
                <p className={classes.slider_usp_title}>12,000+</p>
                <p>Travel Experiences</p>
              </div>
            </div>
          </div>

          <div className={classes.slider_usp_item}>
            <div className={classes.slider_usp_wrap}>
              <div className={classes.slider_usp_icons}>
                <Image src={Icon4} alt="" />
              </div>
              <div className={classes.slider_usp_content}>
                <p className={classes.slider_usp_title}>12,000+</p>
                <p>Travel Experiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={classes.slider_content_container}
        style={{ marginTop: "-150px" }}
      >
        <div
          className={classes.slider_content_wrap}
          style={{ textAlign: "center" }}
        >
          <h2 style={{ fontSize: "8vw", color: "white" }}>Its time for New</h2>

          <h1 style={{ fontSize: "9vw" }}>Adventures</h1>
        </div>
      </div>
      <br />
      <Row>
        <Col>
          <input
            class="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
            style={{ width: "100%", paddingRight: "200px" }}
          />
        </Col>
      </Row>

      <div className={classes.slider_usp1}>
        <div className={classes.slider_usp1_item}>
          <div className={classes.slider_usp_icon}>
            <Image src={Icon1} alt="" />
          </div>
          <div className={classes.slider_usp_content}>
            <p className={classes.slider_usp_title}>12,000+</p>
            <p>Travel Experiences</p>
          </div>
        </div>
      </div>

      <div className={classes.slider_usp1_item}>
        <div className={classes.slider_usp_wrap}>
          <div className={classes.slider_usp_icon}>
            <img src={Icon2} alt="" />
          </div>
          <div className={classes.slider_usp_content}>
            <p className={classes.slider_usp_title}>25+</p>
            <p>Countries</p>
          </div>
        </div>
      </div>

      <div className={classes.slider_usp2}>
        <div className={classes.slider_usp2_item}>
          <div className={classes.slider_usp_wrap}>
            <div className={classes.slider_usp_icon}>
              <img src={Icon3} alt="" />
            </div>
            <div className={classes.slider_usp_content}>
              <p className={classes.slider_usp_title}>Best Price</p>
              <p>Guaranteed</p>
            </div>
          </div>
        </div>

        <div className={classes.slider_usp2_item}>
          <div className={classes.slider_usp_wrap}>
            <div className={classes.slider_usp_icon}>
              <img src={Icon3} alt="" />
            </div>
            <div className={classes.slider_usp_content}>
              <p className={classes.slider_usp_title}>Best Price</p>
              <p>Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
