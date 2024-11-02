import React, { useContext } from "react";
import {NavLink} from "react-router-dom";
import { GlobalContext } from "../Context";

export default function Navbar(){
    const {searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext);
    
    return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap:0 ">
        <h2 className="text-4xl font-semibold"><NavLink to={'/'} className="text-black hover:text-gray-700 duration-300"><i className="fa-solid fa-utensils text-cyan-700 mr-5"></i>RecipeStar</NavLink></h2>
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          name="search" 
          value={searchParam}
          onChange={(event) => setSearchParam(event.target.value)}
          placeholder="Enter items ..." 
          className="bg-white/75 p-3 px-10 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-100 text-black capitalize"  ></input>
        </form>
        <ul className="flex gap-5">
            <li><NavLink to={'/'} className="text-black hover:text-gray-700 duration-300"><i className="fa-solid fa-house text-cyan-700 mr-1"></i>Home</NavLink></li>
            <li><NavLink to={'/favorites'} className="text-black hover:text-gray-700 duration-300"> <i className="fa-solid fa-heart text-pink-500 mr-1" ></i>Favorites</NavLink></li>
        </ul>
    </nav>);
}