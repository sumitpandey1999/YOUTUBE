import { useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../App";
import { useContext } from "react";

const SideBar = () => {

    const {setfilter} = useContext(MyContext);

    const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);

    if(!isMenuOpen) return null;

    return (
        <div className="shadow-lg m-2 p-2 w-44">
            <ul>
                <li onClick={()=> setfilter("")}> <Link to ="/">Home</Link></li>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>

            <h1 className="text-lg font-bold my-2">Subscriptions</h1>
            <ul className="-my-2">
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>

            <h1 className="text-lg font-bold my-4">WatchLater</h1>
            <ul className="-my-4">
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
    )
}

export default SideBar;