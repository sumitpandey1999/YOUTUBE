import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useContext, useEffect, useState } from "react";
import { cacheResult } from "../utils/searchSlice";
import { MyContext } from "../App";


const Header = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [serachSuggestion, setSearchSuggestion] = useState([]);
    const [displaySerachSuggestion, setDisplaySerachSuggestion] = useState(false);




    const { setfilter } = useContext(MyContext);
    // console.log(filter)

    const searchCache = useSelector((store) => store.search);

    const dispatch = useDispatch();

    const toggleHandler = () => {
        dispatch(toggleMenu())

    }
    const getSearchsuggestion = async () => {
        const data = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + searchQuery);
        const json = await data.json()
        // console.log(json[1])
        setSearchSuggestion(json[1])
        dispatch(cacheResult(
            {
                [searchQuery]: json[1],
            }
        ))
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSearchSuggestion(searchCache[searchQuery])
            } else {
                getSearchsuggestion()
            }
        }, 200)

        return () => {
            clearTimeout(timer)
        }

    }, [searchQuery])


    const handleSerach = async () => {
        const data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}regionCode=in&key=AIzaSyAlaEWZaGoo1GZhT_nI3BBW199ahqs5M-0`)
        const json = await data.json();
        setfilter(json.items)
        setSearchQuery("")
        //   console.log(json.items)
    }


    return (
        <div className="header grid grid-flow-col  justify-between border-2 p-2 bg-gray-100 shadow-sm items-center">
            <div className="flex col-span-1">

                <img onClick={toggleHandler} className="h-10 my-1 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/3388/3388823.png" alt="Menu" />
                <a href="/">
                    <img className="h-12 ml-3" src="https://t3.ftcdn.net/jpg/04/03/98/64/360_F_403986499_hB7zfgOXezReA0sKkxl34RoT9TbNkbpH.jpg" alt="youTubelogo" />
                </a>
            </div>
            <div className="col-span-10 my-3">
                <div>
                    <input className="w-1/2 border-2 h-10 ml-56 p-5 rounded-l-full"
                        type="text"
                        placeholder="Search Here"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setDisplaySerachSuggestion(true)}
                        onBlur={() => setDisplaySerachSuggestion(false)}
                    />
                    {/* <button className="border-2 h-11 rounded-r-full w-20" onClick={handleSerach}>🔍</button> */}

                    <button className="border-2 h-11 rounded-r-full w-20" onClick={searchQuery.length !== 0 ? handleSerach : null}>🔍</button>

                </div>

                {displaySerachSuggestion && (
                    <div className="fixed bg-slate-100 w-[36rem] ml-[14.5rem] rounded-lg">
                        <ul className="px-5">
                            {serachSuggestion.map((s, index) => <li key={index} onMouseDown={() => setSearchQuery(s)} className="m-1 p-1 font-medium hover:bg-gray-200 rounded-md">🔍{s}</li>)}

                            
                        </ul>
                    </div>)}

            </div>
            <div className="col-span-1">
                <img className="h-10" src="https://iconape.com/wp-content/png_logo_vector/user-circle.png" alt="user" />
            </div>
        </div>

    )
}

export default Header;