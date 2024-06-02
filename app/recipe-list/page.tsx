import RecipeList from "@/components/ui/recipeList";

async function fetchListOfRecipes() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/recipes");

    const data = await apiResponse.json();

    return data?.recipes;
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : String(e));
  }
}

const page = async () => {
  const recipeList = await fetchListOfRecipes();
  console.log(recipeList);
  return (
    <div>
      <RecipeList recipeList={recipeList} />
    </div>
  );
};

export default page;
