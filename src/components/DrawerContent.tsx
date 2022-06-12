//Bibliotecas
import React from 'react'
import {
	StyleSheet,
	View,
	Text,
	FlatList
} from 'react-native'
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'

//components

//hooks

//services

//databases

//utils
import { normalize } from '../global/utils/normalize'
import { theme } from '../global/theme'
import { capitalize } from '../global/utils/capitalize'

//interfaces

//contants
const menus = [
	'mercury',
	'venus',
	'earth',
	'mars',
	'jupiter',
	'saturn',
	'uranus',
	'neptune'
]

//DrawerContent
export function DrawerContent({ ...rest }: DrawerContentComponentProps) {

	//state

	//hooks
	const navigation = useNavigation()

	//functions
	function handleDrawerButtonPress(planet: string) {
		navigation.navigate(capitalize(planet))
		navigation.dispatch(DrawerActions.closeDrawer())
	}

	return (
		<View style={{ flex: 1 }}>
			<DrawerContentScrollView {...rest}>
				{menus.map(item => (
					<RectButton
						key={item}
						style={[styles.main, styles.row]}
						rippleColor={theme.colors.branco}
						onPress={() => handleDrawerButtonPress(item)}
					>
						<View style={styles.row}>
							<View style={[
								styles.sphere,
								{ backgroundColor: theme.colors[item] }
							]} />

							<Text style={styles.buttonText}>
								{item}
							</Text>
						</View>

						<Icon
							name='chevron-right'
							style={styles.arrowIcon}
						/>
					</RectButton>
				))}
			</DrawerContentScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	main: {
		height: normalize(68),

		paddingHorizontal: 24
	},
	buttonText: {
		fontFamily: theme.fonts.spartan_700,
		color: theme.colors.branco,
		fontSize: normalize(16),
		textTransform: 'uppercase'
	},
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	sphere: {
		height: normalize(20),
		width: normalize(20),

		marginRight: 20,

		borderRadius: normalize(10)
	},
	arrowIcon: {
		fontSize: normalize(24),
		color: theme.colors.branco_20
	},
	buttonsSeparator: {
		marginHorizontal: 24,

		borderBottomWidth: 1,
		borderColor: theme.colors.branco_20
	}
})