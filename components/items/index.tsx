import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { ItemInfoProps } from '@/types';

export const ItemCardsBuild: React.FC<ItemInfoProps> = (props) => {
	const { title, description, pathImg } = props;

	return (
		<div className="mainCardsInfo">
			<div className="mainCardsInfo__img">
				<Image src={pathImg} alt="Image vr" fill />
			</div>
			<h5>{title}</h5>
			<hr />
			<p>{description}</p>
			<button>TRY IT NOW</button>
		</div>
	);
};

export const ItemAboutContacts: React.FC<ItemInfoProps> = (props) => {
	const { title, description, pathImg } = props;

	return (
		<div className="mainItemInfo">
			<Image src={pathImg} alt="Icon" width={50} height={50} />
			<div className="mainItemInfo__text">
				<h5>{title}</h5>
				<p>{description}</p>
			</div>
		</div>
	);
};

export const ItemCircleNumbers: React.FC<ItemInfoProps> = (props) => {
	const { title, description } = props;

	return (
		<div className="circleNumber">
			<div className="circleNumber__circle">
				<h5>{title}</h5>
			</div>
			<div className="circleNumber__info">
				<p>{description}</p>
			</div>
		</div>
	);
};
