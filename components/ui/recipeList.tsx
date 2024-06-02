import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export interface recipeListProps {
  recipeList: {
    id: number;
    name: string;
    ingredients: [string];
    instructions: [string];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
  }[];
}

const recipeList = ({ recipeList }: recipeListProps) => {
  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h2 className="text-[90px] text-center mt-8 font-bold text-gray-800 mb-10">
          Recipes
        </h2>
        <Link
          href={"/"}
          className="text-center block mb-16 bg-orange-400 mx-auto w-fit font-semibold rounded-lg py-3 px-8 hover:bg-orange-500 transition duration-300  text-white"
        >
          Go Home
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {recipeList && recipeList.length > 0
            ? recipeList.map((recipe) => (
                <Link href={`/recipe-list/${recipe.id}`}>
                  <Card className="rounded-[20px] ">
                    <CardContent className="bg-white p-0 rounded-[16px] overflow-hidden drop-shadow-xl shadow-orange-50 cursor-pointer hover:scale-[1.03] transition-all">
                      <div className="w-full p-0 aspect-w-16 aspect-h-8 lg:h-80">
                        <img
                          src={recipe.image}
                          alt={recipe.name}
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                      {/* <div className="p-6"> */}
                      <h3 className="text-lg p-6 pb-2 text-center  mb-3 font-bold text-gray-900">
                        {recipe.name}
                      </h3>
                      <div className="mt-4 p-4 flex items-center  bg-orange-200 text-orange-900 flex-wrap gap-2">
                        <p className="text-md ">Rating: {recipe.rating}</p>
                        <div className="ml-auto">
                          <p className="text-md  font-bold">{recipe.cuisine}</p>
                        </div>
                      </div>
                      {/* </div> */}
                    </CardContent>
                  </Card>
                </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default recipeList;
