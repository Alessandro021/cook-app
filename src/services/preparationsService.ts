import { supabase } from "./supabase";

async function findByRecipeIdPreparations(id: string) {
	const { data } = await supabase
		.from("preparations")
		.select()
		.eq("recipe_id", id)
		.returns<PreparationsResponse[]>();

	return data ?? [];
}

export { findByRecipeIdPreparations };
