import ListingLoader from "../Components/Listing/ListingLoader";
import FilterBar from "../Components/filter/filterBar";
import NavBar from "../Components/navbar/navbar";
import Searchbar from "../Components/searchBar/searchBar";

const LandingPage  = () =>{
    return (
        <>
            <div className="flex flex-col w-full h-screen items-center">
                <NavBar/>
                <hr className="border border-solid w-full"></hr>
                <Searchbar/>
                <FilterBar/>
                <ListingLoader/>
            </div>
        </>
    )
}
export default LandingPage;