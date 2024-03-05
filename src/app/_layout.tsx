/* eslint-disable @typescript-eslint/no-unused-vars */
import { Slot } from "expo-router";
import {
	useFonts,
	Poppins_400Regular,
	Poppins_700Bold,
	Poppins_500Medium,
} from "@expo-google-fonts/poppins";
import { StatusBar } from "expo-status-bar";

const Layout = () => {
	const [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_700Bold,
		Poppins_500Medium,
	});

	if(!fontsLoaded){
		return;
	} 
	return fontsLoaded ? 
		<>
			<StatusBar style="dark" />
			<Slot />
		</> : null;
};

export default Layout;