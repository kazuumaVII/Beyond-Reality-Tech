import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { ItemInfoProps, CarrouselProps } from '@/types';
import { useMediaQuery } from '@/hooks';
import { dataCarouselBuild } from '@/static';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ItemCardsBuild } from './items';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Carousel: React.FC<CarrouselProps> = (props) => {
	const small = useMediaQuery('(min-width: 950px) and (max-width: 1200px)');
	const small2 = useMediaQuery('(min-width: 701px) and (max-width: 950px)');
	const small3 = useMediaQuery('(min-width: 0px) and (max-width: 700px)');

	const [numberItem, setNumberItem] = useState(4);

	useEffect(() => {
		if (small) {
			setNumberItem(3);
		} else if (small2) {
			setNumberItem(2);
		} else if (small3) {
			setNumberItem(1);
		} else {
			setNumberItem(4);
		}
	}, [small, small2, small3]);

	return (
		<div className="containerCarousel">
			<Swiper
				className="carousel"
				slidesPerView={numberItem}
				spaceBetween={20}
				pagination={{
					clickable: false,
				}}
				navigation={{
					prevEl: '.swiper-button-prev',
					nextEl: '.swiper-button-next',
				}}
				modules={[Pagination, Navigation]}
			>
				{dataCarouselBuild.map((item, index) => {
					return (
						<SwiperSlide key={index}>
							<ItemCardsBuild
								title={item.title}
								description={item.description}
								pathImg={item.pathImg}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>

			<button
				className={`swiper-button-next ${
					numberItem === dataCarouselBuild.length ? 'disable' : ''
				} `}
			>
				<div className="wrapper">
					<Image
						src="/assets/shortArrowRight.svg"
						alt="Fleche"
						width={30}
						height={30}
					/>
				</div>
			</button>
			<button
				className={`swiper-button-prev ${
					numberItem === dataCarouselBuild.length ? 'disable' : ''
				} `}
			>
				<div className="wrapper">
					<Image
						src="/assets/shortArrowLeft.svg"
						alt="Fleche"
						width={30}
						height={30}
					/>
				</div>
			</button>
		</div>
	);
};
