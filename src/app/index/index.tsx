/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, ScrollView, Alert } from "react-native";
import { styles } from "./styles";
import Ingredient from "@/components/Ingredient";
import { useState } from "react";
import { Selected } from "@/components/Selected";
import { router } from "expo-router";



const Index = () => {
	const [selected, setSelected] = useState<string[]>([]);

	const handleToggleSelected = (value: string) => {
		if(selected.includes(value)){
			return setSelected(state => state.filter(item => item !== value));
		}

		setSelected(state => [...state, value]);
	};

	const handleClearSelected = () => {
		Alert.alert("Limpar", "Deseja excluir todas os ingedientes selecionados?", [
			{text: "Não", style: "cancel"},
			{text: "Sim", onPress: () => setSelected([]) }
		]);
		
	};

	const handleSearch = () => {
		router.navigate("/recipes/");
	};
	return(
		<View style={styles.container}>
			<Text style={styles.title}>
                Escolha {"\n"}
				<Text style={styles.subtitle}>os produtos</Text></Text>
			<Text style={styles.message}>Descubrta receitas baseadas nos produtos que você escolheu.</Text>

			<ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.ingredients}>
				{
					Array.from({length: 50}).map((_, index) => (
						<Ingredient key={index} name="Tomate" image="" selected={selected.includes(String(index))} onPress={() => handleToggleSelected(String(index))} />
					))
				}
			</ScrollView>
			{selected.length > 0 && (
				<Selected quantity={selected.length} onClear={handleClearSelected} onSearch={handleSearch}/>
			)}
		</View>
	);
    
};

export default Index;