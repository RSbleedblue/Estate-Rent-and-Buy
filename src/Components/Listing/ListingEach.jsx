import { FaBath, FaChartArea, FaHeart } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { MdBed } from "react-icons/md";
const ListingEach = ({data}) => {
    return (
        <>
            <div className="w-[30%] rounded-lg flex flex-col bg-white gap-4 hover:shadow-xl transition-all mb-2 cursor-pointer">
                <div className="w-full rounded-lg h-[200px]">
                    <img src={data.image} className="w-full h-full object-cover rounded-t-lg" />
                </div>
                <div className="w-full p-3 flex flex-col">
                    <div className="w-full flex justify-between">
                        {/* PRICE */}
                        <p className="text-purple font-bold flex items-center gap-1">${data.price}<span className="text-xs text-gray-500 font-normal">/month</span></p>
                        <div className="rounded-full border border-solid border-opacity-15 border-purple w-8 h-8 flex items-center justify-center cursor-pointer bg-white">
                            <CiHeart className="text-purple text-lg font-semibold "/>
                        </div>
                    </div>
                    {/* PROPERTY NAME */}
                    <p className="text-xl font-semibold text-gray-700">{data.propertyName}</p>
                    {/* ADDRESS */}
                    <p className="text-xs text-gray-400 font-semibold mt-1">{data.address}</p>
                    <hr className="border mt-2 border-opacity-5 border-solid border-black"></hr>
                    {/* ACCOMODITIES */}
                    <div className="flex w-full gap-2 mt-2 justify-between items-center">
                        <div className="flex items-center gap-1">
                            <MdBed className="text-xl text-ShadePurple"/>
                            <p className="text-xs font-normal text-gray-500">{data.beds} Beds</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaBath className="text-sm text-ShadePurple"/>
                            <p className="text-xs font-normal text-gray-500">{data.bathrooms} Bathrooms</p>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaChartArea className="text-sm text-ShadePurple"/>
                            <p className="text-xs font-normal text-gray-500"> {data.area}</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default ListingEach; 