//Bibliotecas
import React, { useState } from 'react'
import {
	StyleSheet,
	View,
	Text,
	ImageBackground,
	ScrollView,
	TouchableOpacity
} from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import * as Linking from 'expo-linking'

//assets
import stars from '../assets/images/stars/stars.png'

//components
import { Submenu, SubmenuModes } from '../components/Submenus'
import { PlanetImage } from '../components/PlanetImage'

//hooks

//services

//databases

//utils
import { normalize } from '../global/utils/normalize'
import { theme } from '../global/theme'

//interfaces

//contants
const numbersInfo = [
	{ key: 'rotation', name: 'Rotation time' },
	{ key: 'revolution', name: 'Revolution time' },
	{ key: 'radius', name: 'Radius' },
	{ key: 'temperature', name: 'Average temperature' }
]
import planetInfo from '../global/constants/planets.json'
const planet = 'mercury'

//Mercury
export function Mercury() {

	const info = planetInfo.find(item => item.name === planet)

	const [submenuSelected, setSubmenuSelected] = useState<SubmenuModes>('overview')

	function changeSubmenu(submenu: SubmenuModes) {
		setSubmenuSelected(submenu)
	}

	function handleLinkPress() {
		Linking.openURL(info.link)
	}

	return (
		<ImageBackground
			style={styles.main}
			source={stars}
			resizeMode='repeat'
		>
			<Submenu
				planet={planet}
				selected={submenuSelected}
				onSubmenuSelect={changeSubmenu}
			/>

			<ScrollView>
				<View style={styles.body}>
					<PlanetImage
						planet={planet}
						submenuSelected={submenuSelected}
					/>

					<Text style={styles.title}>
						{planet}
					</Text>

					<Text style={styles.subtitle}>
						{info[submenuSelected]}
					</Text>

					<TouchableOpacity
						style={styles.linkWrapper}
						onPress={handleLinkPress}
					>
						<Text style={styles.linkText}>
							Source:

							<Text style={styles.linkTextHighlight}>
								{' Wikipedia '}
							</Text>
						</Text>

						<Icon
							name='external-link'
							style={styles.linkIcon}
						/>
					</TouchableOpacity>

					{numbersInfo.map(item => (
						<View
							key={item.key}
							style={styles.numbersInfoBox}
						>
							<Text style={styles.infoBoxLabel}>
								{item.name}
							</Text>

							<Text style={styles.infoBoxValue}>
								{info.numbers[item.key]}
							</Text>
						</View>
					))}
				</View>
			</ScrollView>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	main: {
		flex: 1,

		backgroundColor: theme.colors.background
	},
	body: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',

		paddingTop: normalize(40),
		paddingHorizontal: 24
	},
	image: {
		height: normalize(200),

		marginBottom: normalize(24)
	},
	title: {
		fontFamily: theme.fonts.antonio_500,
		color: theme.colors.branco,
		fontSize: normalize(40),
		textTransform: 'uppercase',

		marginVertical: normalize(24)
	},
	subtitle: {
		fontFamily: theme.fonts.spartan_400,
		color: theme.colors.branco,
		fontSize: normalize(14),
		textAlign: 'center',
		lineHeight: normalize(22),

		marginBottom: normalize(24)
	},
	linkWrapper: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',

		marginBottom: normalize(24)
	},
	linkText: {
		fontFamily: theme.fonts.spartan_400,
		color: theme.colors.branco,
		fontSize: normalize(14)
	},
	linkTextHighlight: {
		fontFamily: theme.fonts.spartan_700,
		color: theme.colors.branco,
		fontSize: normalize(14),
	},
	linkIcon: {
		fontSize: normalize(16),
		color: theme.colors.branco
	},
	numbersInfoBox: {
		height: normalize(48),
		width: '100%',

		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',

		paddingHorizontal: 24,
		marginBottom: 12,

		borderWidth: 1,
		borderColor: theme.colors.branco_20
	},
	infoBoxLabel: {
		fontFamily: theme.fonts.spartan_700,
		color: theme.colors.branco_20,
		fontSize: normalize(10),
		textTransform: 'uppercase'
	},
	infoBoxValue: {
		fontFamily: theme.fonts.antonio_500,
		color: theme.colors.branco,
		fontSize: normalize(20),
		textTransform: 'uppercase'
	}
})