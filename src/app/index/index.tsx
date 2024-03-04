/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text } from "react-native";
import { styles } from "./styles";

const Index = () => {
	return(
		<View style={styles.container}>
			<Text style={styles.title}>
                Escolha {"\n"}
				<Text style={styles.subtitle}>os produtos</Text></Text>
			<Text style={styles.message}>Descubrta receitas baseadas nos produtos que você escolheu.</Text>
		</View>
	);
    
};

export default Index;