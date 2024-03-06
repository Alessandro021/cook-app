import { theme } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
	},  
	header: {
		paddingHorizontal: 32,
		marginBottom: 12,
	},
	title: {
		fontSize: theme.fonts.size.heading.md,
		fontFamily: theme.fonts.family.bold,
		marginTop: 22,
	},
	recipes: {
		padding: 32
	},
	recipesContent: {
		gap: 16
	}
});