import { useEffect, useState } from "react";
import ListingEach from "./ListingEach";
import { useSelector } from "react-redux";

const ListingLoader = () => {
    const filteredProperties = useSelector((state) => state.estate.filteredProperties);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setData(filteredProperties);
            setLoading(false);
        }, 1000); 
    }, [filteredProperties]);

    return (
        <div className="flex flex-wrap w-full md:w-[70%] gap-4 items-center justify-center md:justify-between transition-all">
            {loading ? (
                <div className="loader flex justify-center items-center w-full">
                    <div className="loader-circle"></div>
                    <div className="loader-circle-bg"></div>
                </div>
            ) : (
                data.map((each) => (
                    <ListingEach key={each.id} data={each} />
                ))
            )}
        </div>
    );
};

export default ListingLoader;
