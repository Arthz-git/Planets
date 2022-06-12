//Bibliotecas
import React from 'react'
import {
	StyleSheet,
	Text,
	ImageBackground
} from 'react-native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { Feather as Icon } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'
import {
	useNavigation,
	DrawerActions
} from '@react-navigation/native'

//assets
import stars from '../assets/images/stars/stars.png'

//components

//hooks

//services

//databases

//utils
import { theme } from '../global/theme'
import { normalize } from '../global/utils/normalize'

//interfaces

//contants

//Header
export function Header() {

	const navigation = useNavigation()

	function handleMenuButtonPress() {
		navigation.dispatch(DrawerActions.toggleDrawer())
	}

	return (
		<ImageBackground
			source={stars}
			style={styles.main}
		>
			<Text style={styles.title}>
				THE PLANETS
			</Text>

			<BorderlessButton
				style={styles.menuButton}
				rippleColor={theme.colors.branco_50}
				onPress={handleMenuButtonPress}
			>
				<Icon
					name='menu'
					style={styles.menuIcon}
				/>
			</BorderlessButton>
		</ImageBackground>
	)
}

const styles = StyleSheet.create({
	main: {
		height: normalize(68),
		width: '100%',

		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',

		backgroundColor: theme.colors.background,

		marginTop: getStatusBarHeight(),
		paddingHorizontal: 24,

		borderBottomWidth: 1,
		borderColor: theme.colors.branco_20
	},
	title: {
		fontFamily: theme.fonts.antonio_500,
		color: theme.colors.branco,
		fontSize: normalize(28)
	},
	menuButton: {
		height: normalize(42),
		width: normalize(42),

		justifyContent: 'center',
		alignItems: 'flex-end'
	},
	menuIcon: {
		color: theme.colors.branco,
		fontSize: normalize(28)
	}
})