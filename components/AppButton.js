import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AppButton = ({ onPress, title, size, backgroundColor, borderColor }) => (
	<TouchableOpacity
		onPress={onPress}
		style={[
			styles.appButtonContainer,
			size === 'sm' && {
				paddingHorizontal: 8,
				paddingVertical: 6,
				elevation: 6,
				borderWidth: 2,
				marginBottom: 20,
			},
			backgroundColor && { backgroundColor },
			borderColor && { borderColor },
		]}>
		<Text style={[styles.appButtonText, size === 'sm' && { fontSize: 16 }]}>
			{title}
		</Text>
	</TouchableOpacity>
);

export default AppButton;

const styles = StyleSheet.create({
	appButtonContainer: {
		width: 200,
		height: 50,
		alignSelf: 'center',
		justifyContent: 'center',
	},
	appButtonText: {
		fontSize: 18,
		color: 'black',
		fontWeight: 'bold',
		alignSelf: 'center',
		textTransform: 'uppercase',
	},
});
