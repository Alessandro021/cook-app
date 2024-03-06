/* eslint-disable @typescript-eslint/no-unused-vars */
import { ScrollView } from "react-native";
import { styles } from "./styles";
import Ingredient, { IngredientsProps } from "../Ingredient";

type Props = {
  ingredients: IngredientsProps[]
}

export function Ingredients({ ingredients }: Props) {
	return (
		<ScrollView
			horizontal
			style={styles.container}
			contentContainerStyle={styles.ingredientsContent}
			showsHorizontalScrollIndicator={false}
		>
			{ingredients.map(({image, name, id}) => (
				<Ingredient
					key={id}
					name={name}
					image={image}
				/>
			))}
		</ScrollView>
	);
}
