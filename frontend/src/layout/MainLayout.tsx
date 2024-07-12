import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import { useAppSelector } from '../app/hooks'

const MainLayout = () => {
    const {isCollapse} = useAppSelector((state)=> state.nav)
    return (
        <div className='max-w-[1440px] flex mx-auto text-gray-200'>
            <div className={`${isCollapse ? 'w-16': 'w-64'} bg-[#101C2C]`}>
                <Sidebar/>
            </div>
            <div className="flex-1 p-6 bg-[#122033]">
                <Outlet/>
            </div>
        </div>
    )
}

export default MainLayout