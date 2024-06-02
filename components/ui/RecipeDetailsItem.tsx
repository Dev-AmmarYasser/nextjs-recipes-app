import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

interface RecipeDetailsItemProps {
  getRecipeDetails: {
    image: string;
    name: string;
    mealType: string[];
    cuisine: string;
    ingredients: string[];
  };
}

const RecipeDetailsItem = ({ getRecipeDetails }: RecipeDetailsItemProps) => {
  return (
    <div>
      <div className="p-6 mt-[100px] lg:max-w-6xl max-w-2xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-full lg:sticky top-0 sm:flex gap-2">
            <img
              src={getRecipeDetails?.image}
              alt={getRecipeDetails?.name}
              className="w-4/5 rounded-2xl shadow-xl shadow-orange-100 object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-extrabold text-gray-950">
              {getRecipeDetails?.name}
            </h2>

            <div className="mt-8 ">
              <div className="gap-2 flex">
                <p className="text-lg font-semibold text-orange-700 mb-4">
                  <span className="text-gray-700 font-normal">Type : </span>
                  {getRecipeDetails?.mealType[0]}
                </p>
              </div>
              <div>
                <p className="text-lg  font-semibold text-orange-700 ">
                  <span className="text-gray-700 font-normal">Cuisine : </span>
                  {getRecipeDetails?.cuisine}
                </p>
              </div>
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                {getRecipeDetails?.ingredients.map((item: String) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Link
        href={"/recipe-list"}
        className=" block mt-16  bg-orange-400 mx-auto w-fit font-semibold rounded-lg py-3 px-8 hover:bg-orange-500 transition duration-300  text-white"
      >
        Go to recipe list
      </Link>
    </div>
  );
};

export default RecipeDetailsItem;
