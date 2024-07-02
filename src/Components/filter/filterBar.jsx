import { useDispatch } from "react-redux";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { setFilters } from "../../Redux/Slices/EstateSlice";
import { toast } from "react-toastify";

const FilterBar = () => {
    const dispatch = useDispatch();
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [price, setPrice] = useState("");
    const [propertyType, setPropertyType] = useState("");

    const handleSearch = () => {
        const [minPrice, maxPrice] = price.split('-').map(Number);
        if (!location || !date || !price || !propertyType) {
            toast.dark("Missing Fields!");
            return;
        }
        dispatch(setFilters({
            location,
            price: { min: minPrice, max: maxPrice },
        }));
    };

    return (
        <div className="w-full md:w-[70%] p-6 flex flex-wrap md:flex-nowrap justify-between gap-5 items-center rounded-lg bg-white mb-2">
            <div className="flex flex-col w-full md:w-[20%] gap-2 md:border-r-2 justify-center">
                <p className="text-sm font-semibold text-gray-500">Location</p>
                <input
                    className="focus:outline-none text-lg font-semibold w-full"
                    placeholder="New York, USA"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>
            <div className="flex flex-col w-full md:w-[20%] gap-2 md:border-r-2 justify-center">
                <p className="text-sm font-semibold text-gray-500">When</p>
                <input
                    className="focus:outline-none text-lg font-semibold w-full"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div className="flex flex-col w-full md:w-[20%] gap-2 md:border-r-2 justify-center">
                <p className="text-sm font-semibold text-gray-500">Price</p>
                <div className="flex items-center w-full relative">
                    <select
                        className="focus:outline-none text-lg font-semibold w-full appearance-none pr-6"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    >
                        <option value="">Select price range</option>
                        <option value="0-1000">$0 - $1,000</option>
                        <option value="1000-2000">$1,000 - $2,000</option>
                        <option value="2000-3000">$2,000 - $3,000</option>
                        <option value="3000-4000">$3,000 - $4,000</option>
                        <option value="4000-5000">$4,000 - $5,000</option>
                    </select>
                    <FaAngleDown className="absolute right-2 text-xl text-gray-500 pointer-events-none" />
                </div>
            </div>
            <div className="flex flex-col w-full md:w-[20%] gap-2 md:border-r-2 justify-center">
                <p className="text-sm font-semibold text-gray-500">Property type</p>
                <div className="flex items-center w-full relative">
                    <select
                        className="focus:outline-none text-lg font-semibold w-full appearance-none pr-6"
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                    >
                        <option value="">Select type</option>
                        <option>Houses</option>
                        <option>Apartments</option>
                        <option>Condos</option>
                        <option>Townhouses</option>
                        <option>Villas</option>
                    </select>
                    <FaAngleDown className="absolute right-2 text-xl text-gray-500 pointer-events-none" />
                </div>
            </div>
            <button
                className="p-4 text-xs bg-purple rounded-xl text-white w-full md:w-[10%] font-semibold"
                onClick={handleSearch}
            >
                SEARCH
            </button>
        </div>
    );
};

export default FilterBar;
