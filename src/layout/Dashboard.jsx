import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaImages, FaLightbulb, FaChartBar, FaRocketchat, FaShoppingBag, FaRegUserCircle } from "react-icons/fa";



const Dashboard = () => {
    return (
        <div className="">
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden menu-icon z-10">☰</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full lg:fixed bg-cyan-50 text-base-content text-lg">
                        {/* Sidebar content here */}
                        <img className="w-[120px]" src="https://app.predis.ai/predis_logo.png" alt="" />
                        <div className="divider"></div>

                        <li><NavLink to='/'><FaHome />Home</NavLink></li>
                        <li><NavLink to='/dashboard/category'><FaImages />Category</NavLink></li>
                        <li><NavLink to='/dashboard/sub-category'><FaCalendarAlt></FaCalendarAlt>Sub Category</NavLink></li>
                        <li><NavLink to='/dashboard/products'><FaLightbulb />Products</NavLink></li>
                        <li><NavLink to='/dashboard/sliders'><FaChartBar />Sliders</NavLink></li>
                        <div className="divider"></div>
                        <li><NavLink to='/'><FaRocketchat />Help?</NavLink></li>
                        <li><NavLink to='/'><FaShoppingBag />Manage Brand</NavLink></li>
                        <li><NavLink to='/'><FaRegUserCircle />My Account</NavLink></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;