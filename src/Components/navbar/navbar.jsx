import { FaAngleDown, FaEnvelopeOpen, FaSortDown } from "react-icons/fa6";
const NavBar = () => {
    return (
        <>
            <div className="flex w-full bg-white justify-center">
                <div className="flex w-[95%] p-4 justify-between border-opacity-10 bg-white">
                    <div className="flex justify-between gap-24 items-center">
                        <div className="flex items-center gap-2 ">
                            <FaEnvelopeOpen className="text-2xl text-purple" />
                            <p className="text-2xl font-bold text-violet-900">Estates</p>
                        </div>
                        <div className="flex gap-8 items-center">
                            <p className="p-4 text-gray-500 font-semibold text-sm hover:bg-violet-200 hover:text-violet-700 rounded-lg transition-all cursor-pointer">Rent</p>
                            <p className="p-4 text-gray-500 font-semibold text-sm hover:bg-violet-200 hover:text-violet-700 rounded-lg transition-all cursor-pointer">Buy</p>
                            <p className="p-4 text-gray-500 font-semibold text-sm hover:bg-violet-200 hover:text-violet-700 rounded-lg transition-all cursor-pointer">Sell</p>
                            <p className="p-4 text-gray-500 font-semibold text-sm flex items-center gap-2 hover:bg-violet-200 hover:text-violet-700 rounded-lg transition-all cursor-pointer">Manage Property <span><FaAngleDown /></span></p>
                            <p className="p-4 text-gray-500 font-semibold text-sm flex items-center gap-2 hover:bg-violet-200 hover:text-violet-700 rounded-lg transition-all cursor-pointer">Resources <span><FaAngleDown /></span></p>
                        </div>
                    </div>
                    <div className="flex gap-4 items-center">
                        <button className="p-2 text-sm text-purple font-semibold border border-solid border-ShadePurple rounded-lg">
                            Login
                        </button>
                        <button className="p-2 text-sm text-white bg-purple font-semibold border border-solid border-ShadePurple rounded-lg">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NavBar;