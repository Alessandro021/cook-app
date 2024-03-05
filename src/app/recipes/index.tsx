/* eslint-disable @typescript-eslint/no-unused-vars */
import { Text, View, FlatList} from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Recipe } from "@/components/Recipe";

const OMELETE = "https://assets.delirec.com/images%2F1QRI7iBh88MPai4NRfsxGcMaAPD2%2Frecipe%2F27a7b42c-7c2b-4f13-931a-9505e4f82144-Omelete-Simples-gallery-0";

const Recipes = () => {
	return(
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<MaterialIcons name="arrow-back" size={32}  onPress={() => router.back()}/>
				<Text style={styles.title}>Ingredientes</Text>
			</View>

			<FlatList 
				data={["1"]}
				keyExtractor={ item => item}
				renderItem={({item}) => <Recipe recipe={{name: "Omelete", minutes: 36, image: OMELETE}} />}
			/>
		</SafeAreaView>
	);
};

export default Recipes;