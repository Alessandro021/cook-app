/* eslint-disable @typescript-eslint/no-unused-vars */
import { Text, View } from "react-native";
import { styles } from "./styles";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { theme } from "@/theme";
import Animated, {SlideInDown, BounceOutDown} from "react-native-reanimated";
import { Button } from "../Button";

/* eslint-disable @typescript-eslint/no-unused-vars */
interface Props {
    quantity: number
    onClear: () => void
    onSearch: () => void
}

export const Selected = ({quantity, onClear, onSearch}:Props) => {
	return(
		<Animated.View style={styles.container} entering={SlideInDown.duration(500)} exiting={BounceOutDown}>
			<View style={styles.header}>
				<Text style={styles.label}>{quantity} ingeredientes selecionados</Text>
				<MaterialCommunityIcons name="close" size={24} onPress={onClear} color={theme.colors.gray_400}/>
			</View>
			<Button title="Encontrar" onPress={onSearch} />
		</Animated.View>
	);
};