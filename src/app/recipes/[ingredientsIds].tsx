/* eslint-disable @typescript-eslint/no-unused-vars */
import { Text, View, FlatList} from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Recipe } from "@/components/Recipe";
import { useEffect, useState } from "react";
import { findByIds } from "@/services/ingredientsService";
import { Ingredients } from "@/components/Ingredients";
import { findByIngredientsIds } from "@/services/recipesService";

const OMELETE = "https://assets.delirec.com/images%2F1QRI7iBh88MPai4NRfsxGcMaAPD2%2Frecipe%2F27a7b42c-7c2b-4f13-931a-9505e4f82144-Omelete-Simples-gallery-0";

const Recipes = () => {
	const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);
	const [recipes, setRecipes] = useState<RecipeResponse[]>([]);
	const params = useLocalSearchParams<{ingredientsIds: string}>();
	const ingredientesIds = params.ingredientsIds.split(",");

	useEffect(() => {
		findByIds(ingredientesIds).then(setIngredients);
	},[]);

	useEffect(() => {
		findByIngredientsIds(ingredientesIds).then(setRecipes);
	},[]);

	
	const IMAGE_PATH = process.env.EXPO_PUBLIC_IMAGE_PATH_STORAGE;

	return(
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<MaterialIcons name="arrow-back" size={32}  onPress={() => router.back()}/>
				<Text style={styles.title}>Ingredientes</Text>
			</View>

			<Ingredients ingredients={ingredients} />

			<FlatList 
				style={styles.recipes}
				contentContainerStyle={styles.recipesContent}
				data={recipes}
				keyExtractor={ item => String(item.id)}
				renderItem={({item}) => <Recipe recipe={item} onPress={() => router.navigate("/recipe/" + item.id)} />}
				showsVerticalScrollIndicator={false}
				columnWrapperStyle={{gap: 16}}
				numColumns={2}
			/>
		</SafeAreaView>
	);
};

export default Recipes;