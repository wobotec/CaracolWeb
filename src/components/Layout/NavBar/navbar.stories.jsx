import { Navbar } from './navbar'
import { BellIcon } from '@heroicons/react/24/outline'

export default {
  title: 'Layout/Navbar',
  component: Navbar,
}

export const Default = () => (
  <Navbar
    title="Página inicial"
    actions={
      <button>
        <BellIcon className="w-5 h-5" />
      </button>
    }
  />
)
