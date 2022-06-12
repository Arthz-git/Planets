//Bibliotecas
import React from 'react'
import {
	StyleSheet,
	View,
	Image
} from 'react-native'

//assets
import mercuryImg from '../assets/images/mercury/mercury.png'
import mercuryInternal from '../assets/images/mercury/mercury-internal.png'
import mercuryDetails from '../assets/images/mercury/mercury-details.png'

import venusImg from '../assets/images/venus/venus.png'
import venusInternal from '../assets/images/venus/venus-internal.png'
import venusDetails from '../assets/images/venus/venus-details.png'

import earthImg from '../assets/images/earth/earth.png'
import earthInternal from '../assets/images/earth/earth-internal.png'
import earthDetails from '../assets/images/earth/earth-details.png'

import marsImg from '../assets/images/mars/mars.png'
import marsInternal from '../assets/images/mars/mars-internal.png'
import marsDetails from '../assets/images/mars/mars-details.png'

import jupiterImg from '../assets/images/jupiter/jupiter.png'
import jupiterInternal from '../assets/images/jupiter/jupiter-internal.png'
import jupiterDetails from '../assets/images/jupiter/jupiter-details.png'

import saturnImg from '../assets/images/saturn/saturn.png'
import saturnInternal from '../assets/images/saturn/saturn-internal.png'
import saturnDetails from '../assets/images/saturn/saturn-details.png'

import uranusImg from '../assets/images/uranus/uranus.png'
import uranusInternal from '../assets/images/uranus/uranus-internal.png'
import uranusDetails from '../assets/images/uranus/uranus-details.png'

import neptuneImg from '../assets/images/neptune/neptune.png'
import neptuneInternal from '../assets/images/neptune/neptune-internal.png'
import neptuneDetails from '../assets/images/neptune/neptune-details.png'

//components

//hooks

//services

//databases

//utils
import { normalize } from '../global/utils/normalize'

//interfaces
import { SubmenuModes } from './Submenus'
import { PlanetsList } from '../global/models/planets'

interface PlanetImageProps {
	planet: PlanetsList
	submenuSelected: SubmenuModes
}

//contants

//PlanetImage
export function PlanetImage({ planet, submenuSelected }: PlanetImageProps) {

	function selectPlanetImage() {
		switch (planet) {
			case 'mercury':
				return [
					mercuryImg,
					mercuryInternal,
					mercuryDetails
				]

			case 'venus':
				return [
					venusImg,
					venusInternal,
					venusDetails
				]
			case 'earth':
				return [
					earthImg,
					earthInternal,
					earthDetails
				]

			case 'mars':
				return [
					marsImg,
					marsInternal,
					marsDetails
				]

			case 'jupiter':
				return [
					jupiterImg,
					jupiterInternal,
					jupiterDetails
				]

			case 'saturn':
				return [
					saturnImg,
					saturnInternal,
					saturnDetails
				]

			case 'uranus':
				return [
					uranusImg,
					uranusInternal,
					uranusDetails
				]

			case 'neptune':
				return [
					neptuneImg,
					neptuneInternal,
					neptuneDetails
				]

			default:
				return []
		}
	}

	const planetImg = selectPlanetImage()

	switch (submenuSelected) {
		case 'overview':
			return (
				<Image
					source={planetImg[0]}
					resizeMode='contain'
					style={styles.image}
				/>
			)

		case 'structure':
			return (
				<Image
					source={planetImg[1]}
					resizeMode='contain'
					style={styles.image}
				/>
			)

		case 'surface':
			return (
				<View style={styles.coupleImageWrapper}>
					<Image
						source={planetImg[0]}
						resizeMode='contain'
						style={styles.specialImageStyle}
					/>

					<Image
						source={planetImg[2]}
						resizeMode='contain'
						style={styles.innerImage}
					/>
				</View>
			)

		default:
			return <View />
	}
}

const styles = StyleSheet.create({
	image: {
		height: normalize(150)
	},
	coupleImageWrapper: {
		justifyContent: 'center',
		alignItems: 'center'
	},
	specialImageStyle: {
		height: normalize(75)
	},
	innerImage: {
		height: normalize(210)
	}
})