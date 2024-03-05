/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import Ingredient from "@/components/Ingredient";
import { useState } from "react";



const Index = () => {
	const [selected, setSelected] = useState<string[]>([]);

	const handleToggleSelected = (value: string) => {
		if(selected.includes(value)){
			return setSelected(state => state.filter(item => item !== value));
		}

		setSelected(state => [...state, value]);
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
		</View>
	);
    
};

export default Index;