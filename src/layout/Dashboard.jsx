import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaImages, FaLightbulb, FaChartBar, FaRocketchat, FaShoppingBag, FaRegUserCircle } from "react-icons/fa";



const Dashboard = () => {
    return (
        <div className="">
            <div className="drawer lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content lg:ml-80">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden menu-icon z-10">☰</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full lg:fixed bg-cyan-50 text-base-content text-lg">
                        {/* Sidebar content here */}
                    <div className="flex  items-center gap-5">
                        <p className="font-bold gradient">agriculture</p>
                    <img className="w-[50px] rounded-lg" src="https://img.freepik.com/premium-photo/pesticidespraying-tractor_410516-14598.jpg" alt="" />
                    </div>
                        <div className="divider"></div>

                        <li><NavLink to='/'><FaHome />Home</NavLink></li>
                        <li><NavLink to='/dashboard/category'><FaImages />Category</NavLink></li>
    
    <li>
    <div className="dropdown dropdown-right ">
        <li className="w-[250px]">

    <NavLink to='' tabIndex={0}><FaCalendarAlt></FaCalendarAlt>Sub Category</NavLink>
        </li>

  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li>    <NavLink to='/dashboard/sub-category' tabIndex={0}><FaCalendarAlt></FaCalendarAlt>Create Sub Category</NavLink></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
    </li>
                       
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