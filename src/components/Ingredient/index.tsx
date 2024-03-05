/* eslint-disable @typescript-eslint/no-unused-vars */
import { Image, Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles"; 

export interface IngredientsProps extends PressableProps{
	name: string
	image: string
	selected?: boolean
}

const IMAGE_PATH = process.env.EXPO_PUBLIC_IMAGE_PATH_STORAGE;

const Ingredient = ({image, name, selected = false, ...rest}: IngredientsProps) => {
	return(
		<Pressable style={[styles.container, selected && styles.selected]} {...rest}>
			<Image style={styles.image}  source={{uri: `${IMAGE_PATH}/${image}`}}/>
			<Text style={styles.title}>{name}</Text>
		</Pressable>
	);
};

export default Ingredient;