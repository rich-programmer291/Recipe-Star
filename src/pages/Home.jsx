import { useContext } from "react";
import { GlobalContext } from "../Context";
import RecipeItem from "../components/RecipeItem";

export default function Home(){

    const {recipeList, loading} = useContext(GlobalContext);

    if(loading) return <div className="font-bold text-black-400">Loading... Please Wait</div>
    return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {
            recipeList && recipeList.length > 0 ? 
            recipeList.map(item => <RecipeItem item={item}/>)
            : <div><p className="lg-text-4xl text-xl text-center font-extrabold text-black">Nothing To Show ... Please Search Something</p></div>
        }
    </div>
    );
}