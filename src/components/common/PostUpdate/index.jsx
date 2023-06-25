import {React,useState} from 'react'
import ModalComponent from '../modal/index.jsx'
import './index.scss'

export default function PostStatus() {
    const [modalOpen, setModalOpen] = useState(false);
    const [status, setStatus] = useState('')
    const sendStatus = () =>{}
  return (
    <div className='post-status-main'>
        <div className='post-status'>
            <button className='open-post-modal' onClick={setModalOpen}>Start a post</button>
        </div>
        <ModalComponent setStatus={setStatus} status ={status} modalOpen={modalOpen} setModalOpen={setModalOpen
        } sendStatus={sendStatus}/>
    </div>
  )
}
