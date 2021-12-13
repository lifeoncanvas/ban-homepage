import React from 'react'
import FindPerferctExperience from '../FindPerferctExperience'
import Navbar from '../Navbar'
import { Container,Row,Col } from 'reactstrap'
import classes from './styles.module.css'
import Tags from '../Tags'
import NearJaipur from '../NearJaipur'
import Tripsection from '../Tripsection'
import DiscoverJaipur from '../DiscoverJaipur'
import ResortDealscrousal from '../ResortDealscrousal'
import Highlighttour from '../Highlighttour'

const Content = () => {
	return (
		<>
			<section classname={classes.home_site_content}>
				<Navbar/>
				<FindPerferctExperience/>
				<div className={classes.offer_section }>
					<Container>
						<Tags/>
					</Container>
                </div>
				    <Container>
						<NearJaipur/>
						<Tripsection/>
						<ResortDealscrousal/>
						<DiscoverJaipur/>
					</Container>
				    <Highlighttour/>
					<div className={classes.what_about_section}>
						<Container>
						<div className={classes.what_about_wrapper}>
							<Row>
								<Col>
								   <div className={classes.what_about_image}>
								     {/* <img src={Jam} alt=''/> */}
								   </div>	
								</Col>
							</Row>
						</div>
						</Container>
					</div>
			</section>
		</>
	)
}

export default Content
