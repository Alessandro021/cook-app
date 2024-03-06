import { supabase } from "./supabase";

export const findAll = async () => {
	const {data} = await supabase.from("ingredients").select().order("name").returns<IngredientResponse[]>();

	return data ?? [];
};

export const findByIds = async(ids: string[]) => {
	const { data } = await supabase
		.from("ingredients")
		.select()
		.in("id", ids)
		.order("name")
		.returns<IngredientResponse[]>();
  
	return data ?? [];
};
  
export const findByRecipeId = async (id: string) => {
	const { data } = await supabase
		.from("recipes_ingredients")
		.select("ingredients (id, name, image)")
		.eq("recipe_id", id)
		.returns<{ ingredients: IngredientResponse }[]>();
  
	return data ? data.map((item) => item.ingredients) : [];
};