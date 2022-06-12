//bibliotecas
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

//components
import { AppRoutes } from './AppRoutes'
import { Header } from '../components/Header'

export function Routes() {
	return (
		<NavigationContainer>
			<Header />
			<AppRoutes />
		</NavigationContainer>
	)
}