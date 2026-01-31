import { IconButton } from "./iconbutton"
import { BellIcon} from '@heroicons/react/24/outline'

export default {
    title: 'IconButton',
    component: IconButton,
}

export const Primary = () => (
    <IconButton icon={<BellIcon className="w-5 h-5" />} />
)

export const Ghost = () => (
    <IconButton variant="ghost" icon={<BellIcon className="w-5 h-5" />} />
)

export const Danger = () => (
    <IconButton variant="danger" icon={<BellIcon className="w-5 h-5" />} />
)