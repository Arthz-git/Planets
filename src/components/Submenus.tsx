//Bibliotecas
import React from 'react'
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity
} from 'react-native'

//assets

//components

//hooks

//services

//databases

//utils
import { normalize } from '../global/utils/normalize'
import { theme } from '../global/theme'

//interfaces
import { PlanetsList } from '../global/models/planets'

interface SubmenuProps {
	planet: PlanetsList
	selected: SubmenuModes
	onSubmenuSelect: (submenu: SubmenuModes) => void
}

export type SubmenuModes = 'overview' | 'structure' | 'surface'

//contants
const submenus = [
	'overview',
	'structure',
	'surface'
]

//Submenu
export function Submenu({ planet, selected, onSubmenuSelect }: SubmenuProps) {

	function handleSubmenuPress(submenu: SubmenuModes) {
		onSubmenuSelect(submenu)
	}

	return (
		<View style={styles.main}>
			{submenus.map((item: SubmenuModes) => (
				<TouchableOpacity
					key={item}
					style={[
						styles.submenuTextWrapper,
						selected === item && { borderColor: theme.colors[planet] }
					]}
					activeOpacity={0.6}
					onPress={() => handleSubmenuPress(item)}
				>
					<Text style={styles.submenuText}>
						{item}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	main: {
		height: normalize(55),
		width: '100%',

		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',

		paddingHorizontal: 24,

		borderBottomWidth: 1,
		borderColor: theme.colors.branco_20
	},
	submenuTextWrapper: {
		height: '100%',
		width: '25%',

		justifyContent: 'center',
		alignItems: 'center',

		borderBottomWidth: 3
	},
	submenuText: {
		fontFamily: theme.fonts.spartan_700,
		color: theme.colors.branco,
		fontSize: normalize(12),
		textTransform: 'uppercase'
	}
})