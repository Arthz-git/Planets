import 'react-native-gesture-handler'
import React from 'react'
import {
	StatusBar,
	View
} from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { setBackgroundColorAsync } from 'expo-navigation-bar'

//assets
import {
	useFonts,
	Spartan_400Regular,
	Spartan_700Bold
} from '@expo-google-fonts/spartan'
import {
	Antonio_500Medium
} from '@expo-google-fonts/antonio'

//components
import { Routes } from './src/routes'

//utils
import { theme } from './src/global/theme'

export default function App() {

	const [fontsLoaded] = useFonts({
		Spartan_400Regular,
		Spartan_700Bold,
		Antonio_500Medium
	})

	setBackgroundColorAsync(theme.colors.background)

	if (!fontsLoaded) {
		return <View />
	}

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<StatusBar
				translucent
				barStyle='light-content'
				backgroundColor={theme.colors.background}
			/>

			<Routes />
		</GestureHandlerRootView>
	)
}