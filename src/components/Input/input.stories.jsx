import { Input } from "./input"

export default{
    title: 'Input',
    component: Input,
}

export const Default = () => (
    <Input label="Nome" placeholder="Digite o seu nome" />
)

export const Error = () => (
    <Input
    label="Email"
    placeholder="email@exemplo.com"
    error = "Email inválido"
    />
)

export const Disabled = () => (
    <Input label="Usuário" disabled />
)
