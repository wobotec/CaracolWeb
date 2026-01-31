import { Modal } from './modal'
import { useState } from 'react'

export default {
  title: 'Modal',
  component: Modal,
}

export const Default = () => {
  const [open, setOpen] = useState(true)

  return (
    <Modal
      open={open}
      title="Modal de exemplo"
      onClose={() => setOpen(false)}
      footer={<button>Ok</button>}
    >
      Conteúdo do modal
    </Modal>
  )
}
