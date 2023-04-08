import React from 'react';
import Image from 'next/image';

import { ItemAboutContacts } from '@/components/items';

export const About = () => {
	return (
		<div className="mainAbout">
			<div className="topContainer">
				<div className="topContainer__info">
					<div className="topContainer__info__text">
						<h3>
							<span className="firstLinear">Dive</span> Into The Depths Of{' '}
							<span className="secondLinear">Virtual Reality</span>
						</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
							Lectus mauris eros in vitae .
						</p>
					</div>
					<div className="topContainer__info__button">
						<button>BUID YOUR WORLD</button>
						<Image
							src="/assets/arrowRight.svg"
							alt="Fleche"
							width={40}
							height={40}
						/>
					</div>
				</div>
				<div className="topContainer__image">
					<Image src="/assets/girlVr.png" alt="Image vr" fill />
				</div>
			</div>
			<div className="bottomContainer">
				<ItemAboutContacts
					title="Pay Us a Visit"
					description="Union St, Seattle, WA 98101, United States"
					pathImg="/assets/location-Icon.svg"
				/>

				<ItemAboutContacts
					title="Give Us a Call"
					description="(110) 1111-1010"
					pathImg="/assets/phone-call.svg"
				/>
				<ItemAboutContacts
					title="Send Us a Message"
					description="Contact@HydraVTech.com"
					pathImg="/assets/mail.svg"
				/>
			</div>
		</div>
	);
};
