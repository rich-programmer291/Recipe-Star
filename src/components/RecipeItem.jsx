import { Link } from "react-router-dom";

export default function RecipeItem({item}){
    return (
        <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 rounded-2xl border-2 border-white">
            <div className="h-60 flex justify-center overflow-hidden items-center rounded-xl">
                <img src={item?.image_url} alt="recipe item" className="block w-full h-fit"></img>
            </div>
            <div>
                <span className="publisher">{item?.publisher}</span>
                <h3 className="font-bold text-2xl text-black truncate capitalize">{item?.title}</h3>
                <Link to={`/recipe-item/${item?.id}`} target='_blank'
                className="text-sm p-3 mt-5 px-5 rounded-lg uppercase font-medium tracking-wider inline-block bg-black text-white"
                >Recipe Details</Link>
            </div>
        </div>
    );
}