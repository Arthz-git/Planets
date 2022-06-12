//bibliotecas
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
const { Navigator, Screen } = createDrawerNavigator()

//components
import { Mercury } from '../screens/Mercury'
import { Venus } from '../screens/Venus'
import { Earth } from '../screens/Earth'
import { Mars } from '../screens/Mars'
import { Jupiter } from '../screens/Jupiter'
import { Saturn } from '../screens/Saturn'
import { Uranus } from '../screens/Uranus'
import { Neptune } from '../screens/Neptune'
import { DrawerContent } from '../components/DrawerContent'

//utils
import { theme } from '../global/theme'

export function AppRoutes() {
	return (
		<Navigator
			initialRouteName='Mercury'
			screenOptions={{
				headerShown: false,
				drawerPosition: 'right',
				drawerType: 'front',
				drawerStyle: {
					width: '100%',
					backgroundColor: theme.colors.background_50
				}
			}}
			defaultStatus='open'
			backBehavior='history'
			drawerContent={props => <DrawerContent {...props} />}
		>
			<Screen
				name='Mercury'
				component={Mercury}
			/>

			<Screen
				name='Venus'
				component={Venus}
			/>

			<Screen
				name='Earth'
				component={Earth}
			/>

			<Screen
				name='Mars'
				component={Mars}
			/>

			<Screen
				name='Jupiter'
				component={Jupiter}
			/>

			<Screen
				name='Saturn'
				component={Saturn}
			/>

			<Screen
				name='Uranus'
				component={Uranus}
			/>

			<Screen
				name='Neptune'
				component={Neptune}
			/>
		</Navigator>
	)
}