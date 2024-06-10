import React from 'react'

interface ModalProps {
    children: React.ReactNode
    title: string
}

const Modal = ({ children, title }: ModalProps) => {
  return (
    <>
    <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0"/>
    <div className="w-[500px] p-5 absolute rounded bg-white top-10 left-1/2 -translate-x-1/2">
        <h1 className='text-center text-2xl mb-2'>{title}</h1>
        { children }
    </div>
    </>
  )
}

export default Modal