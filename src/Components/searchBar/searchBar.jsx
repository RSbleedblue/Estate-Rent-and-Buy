import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setSearchProperties } from "../../Redux/Slices/EstateSlice";

const Searchbar = () => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    const handleSearch = (e) => {
        setSearch(e.target.value);
        dispatch(setSearchProperties(e.target.value));
    };

    return (
        <div className="w-full md:w-[70%] p-4 flex flex-col md:flex-row md:justify-between md:items-center mt-10">
            <p className="text-3xl md:text-4xl font-semibold text-gray-700 mb-4 md:mb-0">Search Properties to Rent</p>
            <div className="flex flex-grow md:flex-none md:w-[30%] md:max-w-xs ml-0 md:ml-4">
                <div className="relative flex items-center w-full border-purple border bg-white rounded-lg border-opacity-30">
                    <input
                        className="focus:outline-none py-2 pl-4 pr-10 w-full rounded-lg bg-transparent"
                        value={search}
                        onChange={handleSearch}
                        placeholder="Search with search bar"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <FaAngleDown className="text-ShadePurple" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Searchbar;
