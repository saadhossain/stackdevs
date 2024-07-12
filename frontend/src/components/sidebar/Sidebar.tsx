import { FaBriefcase, FaUsers, FaTasks, FaCog } from "react-icons/fa";
import { GoPlusCircle } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import logo from '../../assets/stackdevs-logo.png';
import { setIsCollapse } from '../../features/navSlice';
import { LuLayoutDashboard } from "react-icons/lu";

const Sidebar = () => {
  const { isCollapse } = useAppSelector((state) => state.nav);
  const dispatch = useAppDispatch();
  return (
    <div className={`${isCollapse ? 'px-1 py-6' : 'p-6'} sticky top-0 min-h-screen`}>
      <Link to='/' className={`text-2xl font-semibold flex gap-2 items-center ${isCollapse ? 'justify-center' : 'justify-start'}`}>
        <img src={logo} alt='Logo' className='w-10' />
        <p className={`${isCollapse && 'hidden'}`}>StackDevs</p>
      </Link>
      <button
        className='flex gap-2 items-center justify-center py-2 px-4 rounded-full mt-5 font-semibold bg-[#0F1622]'
      ><GoPlusCircle className='w-5 h-5' /><span className={`${isCollapse && 'hidden'}`}>Create New Project</span></button>
      {/* navigation section */}
      <nav className={`mt-8 flex flex-col ${isCollapse ? 'items-center' : 'items-start'} justify-between min-h-[70vh]`}>
        <div className={`flex flex-col gap-5 ${isCollapse ? 'items-center' : 'items-start'}`}>
          <NavLink to='/dashboard' className='flex gap-2 items-center'>
            <LuLayoutDashboard className='w-5 h-5' />
            <span className={`font-semibold  ${isCollapse && 'hidden'}`}>Dashboard</span>
          </NavLink>
          <NavLink to='/projects' className='flex gap-2 items-center'>
            <FaBriefcase className='w-5 h-5' />
            <span className={`font-semibold  ${isCollapse && 'hidden'}`}>Projects</span>
          </NavLink>
          <NavLink to='/tasks' className='flex gap-2 items-center'>
            <FaTasks className='w-5 h-5' />
            <span className={`font-semibold  ${isCollapse && 'hidden'}`}>Tasks</span>
          </NavLink>
          <NavLink to='/members' className='flex gap-2 items-center'>
            <FaUsers className='w-5 h-5' />
            <span className={`font-semibold  ${isCollapse && 'hidden'}`}>Members</span>
          </NavLink>
          <NavLink to='/settings' className='flex gap-2 items-center'>
            <FaCog className='w-5 h-5' />
            <span className={`font-semibold  ${isCollapse && 'hidden'}`}>Settings</span>
          </NavLink>
        </div>
        {/* Collapse/Expand Button */}
        <div onClick={() => dispatch(setIsCollapse())} className='cursor-pointer'>
          {
            isCollapse ? <IoIosArrowForward className='w-8 h-8' /> : <IoIosArrowBack className='w-8 h-8' />
          }
        </div>
      </nav>
    </div>
  )
}

export default Sidebar