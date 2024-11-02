import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../Context";

export default function Details() {

    const params = useParams();
    const { recipeDetailsData, setRecipeDetailsData, favoritesList, handleAddToFavorite } = useContext(GlobalContext);

    // console.log(params?.id);

    useEffect(() => {
        async function getRecipeDetails() {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${params?.id}`);
            const result = await response.json();
            console.log(result);
            if (result?.data) {
                setRecipeDetailsData(result?.data);
            }
        }
        getRecipeDetails();
    }, []);

    return (<div className="container mx-auto py-10 grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="row-start-2 lg:row-start-auto">
            <div className="h-96 overflow-hidden rounded-xl group">
                <img src={recipeDetailsData?.recipe?.image_url}
                    className="h-full w-full object-cover block group-hover:scale-105 duration-300"></img>
            </div>
        </div>
        <div className="flex flex-col gap-3">
            <span className="publisher mt-5">{recipeDetailsData?.recipe?.publisher}</span>
            <h3 className="font-bold text-2xl text-black truncate capitalize">{recipeDetailsData?.recipe?.title}</h3>
            <div className="flex gap-3">
                <button
                    className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 shadow-md bg-black text-white"
                    onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}>
                    {
                        favoritesList && favoritesList.length > 0 && favoritesList.findIndex(item => item.id === recipeDetailsData?.recipe?.id) !== -1 ? 'Remove from Favorites' : 'Add to Favorites'
                    }
                </button>
                <div>
                <div className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 shadow-md bg-cyan-900 text-white">
                    <a href={recipeDetailsData?.recipe?.source_url} target="_blank">
                        Preparation Method
                        </a>
                    </div>
            </div>
            </div>
            <div className="flex py-2 gap-10">
                    <div className="text-2xl font-semibold"><i className="fa-regular fa-clock text-cyan-600 text-2xl mr-2"></i>Cooking Time : {recipeDetailsData?.recipe?.cooking_time} mins</div>
                    <div className="text-2xl font-semibold"><i className="fa-regular fa-user text-cyan-600 text-2xl mr-2"></i>Serves : {recipeDetailsData?.recipe?.servings > 1 ? recipeDetailsData?.recipe?.servings +" People" : recipeDetailsData?.recipe?.servings + " Person"}</div>
            </div>
            <div>
                <span className="text-3xl font-semibold text-black">Ingredients : </span>
                <ul className="flex flex-col gap-3 mt-4">
                    {
                        recipeDetailsData?.recipe?.ingredients.map(ingredient => <li>
                            <span className="text-xl font-semibold text-black">{ingredient.quantity} {ingredient.unit} </span>
                            <span className="text-xl font-semibold text-black">{ingredient.description}</span>
                        </li>)
                    }
                </ul>
            </div>
            
        </div>
    </div>);
}