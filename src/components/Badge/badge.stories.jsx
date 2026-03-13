import { Badge } from './badge'

export default{
    title: 'Badge',
    component: Badge,
}
export const Primary = () => <Badge>Badge</Badge>
export const Success = () => <Badge variant="success">Success</Badge>
export const Danger = () => <Badge variant="danger">Danger</Badge>
export const Small = () => <Badge size="sm">Small</Badge>