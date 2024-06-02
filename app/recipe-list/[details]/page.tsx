import RecipeDetailsItem from "@/components/ui/RecipeDetailsItem";

interface RecipeDetailsProps {
  params?: {
    details?: string;
  };
}

async function fetchRecipeDetails(currentRecipeId: string | undefined) {
  try {
    const apiResponce = await fetch(
      `https://dummyjson.com/recipes/${currentRecipeId}`
    );

    const data = await apiResponce.json();

    return data;
  } catch (e) {
    throw new Error(e instanceof Error ? e.message : String(e));
  }
}

const RecipeDetails: React.FC<RecipeDetailsProps> = async ({ params }) => {
  const getRecipeDetails = await fetchRecipeDetails(params?.details);

  return <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />;
};

export default RecipeDetails;
