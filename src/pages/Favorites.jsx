import { GlobalContext } from "../Context";
import { useContext } from "react";
import RecipeItem from "../components/RecipeItem";

export default function Favorites(){
    const {favoritesList} = useContext(GlobalContext);

    // if(loading) return <div className="font-bold text-black-400">Loading... Please Wait</div>
    return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
        {
            favoritesList && favoritesList.length > 0 ? 
            favoritesList.map(item => <RecipeItem item={item}/>)
            : <div><p className="lg-text-4xl text-xl text-center font-extrabold text-black">Oops!! No Favorites Added Yet</p></div>
        }
    </div>
    );
}