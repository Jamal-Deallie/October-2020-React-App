import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';
import AppButton from '../components/AppButton';
import { LinearGradient } from 'expo-linear-gradient';
import {AppLoading} from 'expo';
import { 
	useFonts,
  Merriweather_400Regular,
  Merriweather_700Bold,
  Merriweather_900Black
} from '@expo-google-fonts/merriweather';
import {BungeeShade_400Regular} from '@expo-google-fonts/bungee-shade';

const Splashpage = () => {

	let [fontsLoaded] = useFonts({
		Merriweather_400Regular,
		Merriweather_700Bold,
		Merriweather_900Black,
		BungeeShade_400Regular
	});
	
  if (!fontsLoaded) {
    return <AppLoading />;
	} 
	
	return (
		<LinearGradient
			colors={['#accbee', '#e7f0fd', '#accbee']}
			style={styles.container}>
			<Animatable.View
				animation='zoomIn'
				duration={2000}
				delay={1000}
				style={styles.headercontainer}>
				<Image
					source={{
						uri:
							'https://res.cloudinary.com/dtwk4dm3g/image/upload/v1604630250/React%20Native%20Lockin%20App/Lock_Logo_wvvka3.png',
					}}
					style={styles.logo}
				/>
			<View>
				<Text style={styles.header}>LOCKIN FITNESS</Text>
			</View>
			</Animatable.View>

			<Animatable.View
				animation='bounceInUp'
				duration={2000}
				delay={1000}
				style={styles.footer}>
				<View>
					<Text style={styles.text}>LOCK INTO YOUR FITNESS GOALS</Text>
					<AppButton
						title='Login'
						size='sm'
						backgroundColor='#B0D1ED'
						borderColor='black'
					/>
					<AppButton
						title='Sign Up'
						size='sm'
						backgroundColor='#d3d3d3'
						borderColor='black'
					/>
				</View>
			</Animatable.View>
		</LinearGradient>
	);
};


const styles = StyleSheet.create({
	container: {
		flex: 2,
	},
	headercontainer: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	footer: {
		flex: 1,
		borderTopRightRadius: 30,
		borderTopLeftRadius: 30,
		backgroundColor: '#fff',
	},
	logo: {
		height: 175,
		width: 130,
		justifyContent: 'center',
	},
	text: {
		paddingVertical: 30,
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold'
	},
	button: {
		width: '75%',
		alignSelf: 'center',
		backgroundColor: '#B0D1ED',
		marginBottom: 20,
	},
	header: {
		textAlign: 'center',
		fontSize: 35,
		fontWeight: 'bold',
		fontFamily: 'BungeeShade_400Regular',
		paddingVertical: 20,
		color: '#3D4849'
	},
});

export default Splashpage;
