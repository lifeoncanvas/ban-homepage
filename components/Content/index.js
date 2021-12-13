import React from "react";
import FindPerferctExperience from "../FindPerferctExperience";
import Navbar from "../Navbar";
import { Container, Row, Col, Button } from "reactstrap";
import classes from "./styles.module.css";
import Tags from "../Tags";
import NearJaipur from "../NearJaipur";
import Tripsection from "../Tripsection";
import DiscoverJaipur from "../DiscoverJaipur";
import ResortDealscrousal from "../ResortDealscrousal";
import Highlighttour from "../Highlighttour";
import Jam from "./JAMstac-image.jpg";
import DestinationTour from "../DestinationTour";
import Video from "../Video";
import Reviews from "../Reviews";
import Traveltred from "../Traveltred";
import Presssection from "../Presssection";
import Link from "next/link";

const Content = () => {
  return (
    <>
      <section classname={classes.home_site_content}>
        <Navbar />
        <FindPerferctExperience />
        <div className={classes.offer_section}>
          <Container>
            <Tags />
          </Container>
        </div>
        <Container>
          <NearJaipur />
          <Tripsection />
          <ResortDealscrousal />
          <DiscoverJaipur />
        </Container>
        <Highlighttour />
        <div className={classes.what_about_section}>
          <Container>
            <div className={classes.what_about_wrapper}>
              <Row>
                <Col>
                  <div className={classes.what_about_image}>
                    <img src={Jam} alt="" />
                  </div>
                </Col>
                <Col>
                  <div className={classes.what_about_summery}>
                    <h3>What is JAMstack</h3>
                    <p>
                      Whether you're a foodie or a hiker, an animal lover or an
                      archaeology , there’s adventure to explore your passion.
                      Whether you're a foodie or a hiker Whether you're a foodie
                      or a hiker, an animal lover or an archaeology , there’s
                      adventure to explore your passion. Whether you're a foodie
                      or a hiker
                    </p>
                    <Button>Explore now</Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>

        <DestinationTour />
        <Container>
          <Video />
          <br />
          <Reviews />
          <br />
          <Traveltred />
          <br />
          <Presssection />
        </Container>

        <div className=" mb-5 p-5 text-center">
          <div className="link-box m-3">
            <Link href="/attraction">
              <a>Attraction</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/trip">
              <a>Trip</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/coupons">
              <a>Coupons</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/review">
              <a>Review</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/blogcategory">
              <a>Blog Category</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/banbanjaracredit">
              <a>BanBanjara Credit</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/bbjcash">
              <a>bbj_cash</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/personalinfo">
              <a>Personal Info</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/referral">
              <a>Referral</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/career">
              <a>Career</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/careerdetails">
              <a>Career Details</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/blogwriteforus">
              <a>Blog Write For Us</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/blogauthor">
              <a>Blog Author</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/alldestination">
              <a>All Destination</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/tourupdate">
              <a>Tour Update</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/tag">
              <a>Tag</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/staytour">
              <a>Stay Tour</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/offer">
              <a>Offer</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/Partner With Us">
              <a>Partner With Us</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/loginsecurity">
              <a>login Security</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/category">
              <a>Category</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/collection">
              <a>Collection</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/landingpage">
              <a>landingpage</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/contactus">
              <a>contactus</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/listactivities">
              <a>listactivities</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/alldestination">
              <a>All Destination</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/blogdetails">
              <a>Blog Details</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/login">
              <a>Login</a>
            </Link>
          </div>
          <div className="link-box m-3">
            <Link href="/tourupdate">
              <a>Tour Update</a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
