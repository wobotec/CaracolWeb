import { SideBar, SideBarItem } from './sidebar'
import { HomeIcon, BellIcon } from '@heroicons/react/24/outline'

export default {
  title: 'Layout/SideBar',
}

export const Default = () => (
  <Sidebar>
    <SidebarItem icon={<HomeIcon className="w-6 h-6" />} active />
    <SidebarItem icon={<BellIcon className="w-6 h-6" />} badge={3} />
  </Sidebar>
)
