/* eslint-disable @typescript-eslint/no-unused-vars */
import { Image, Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles"; 

export interface IngredientsProps extends PressableProps{
	name: string
	image: string
	selected?: boolean
}

const Ingredient = ({image, name, selected = false, ...rest}: IngredientsProps) => {
	return(
		<Pressable style={[styles.container, selected && styles.selected]} {...rest}>
			<Image style={styles.image}  source={require("@/assets/tomato.png")}/>
			<Text style={styles.title}>Maça</Text>
		</Pressable>
	);
};

export default Ingredient;