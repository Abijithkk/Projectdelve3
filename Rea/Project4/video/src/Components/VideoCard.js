import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { addHistory, deleteVideo } from '../services/allapis';
import uniqid from 'uniqid';
import {format} from 'date-fns';


function VideoCard({video,deleteFunc}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow =async() => {
      setShow(true);
      // body

      // id
      var id=uniqid()
      // title
      var video_title=video.caption
      // url
      var url=video.video_url
      // date
      var date=format(new Date(),'dd-MM-yyyy h:mm:ss a')

      const body={id,video_title,url,date}
      if(body){
        // api call
        const result=await addHistory(body)
      }
    }
    

  const handleDelete=async(id) =>{
    const result=await deleteVideo(id)
    // if(result.status>200 && result.status<300){
      deleteFunc(result.data)
    // }
   } 
  const dragStart=(e,id)=>{
    console.log("drag started"+id);

    // store dragged data
    e.dataTransfer.setData("cardId",id)
  }
    
  return (
    <div id='Videocardn'> 
        <Card draggable onDragStart={(e)=>dragStart(e,video.id)} className='border-info mt-5' style={{ width: '18rem' }}>
    <Card.Img style={{width:'100%',height:'300px'}}  onClick={handleShow} variant="top" src={video.cover_image} /> < hr className="text-black w-100 m-2" />
    <Card.Body>
      <Card.Title>{video.caption} <Link onClick={()=>handleDelete(video.id)}><i class=" ms-5 text-info fa-solid fa-trash-can  " ></i></Link></Card.Title>
     
      
      
    </Card.Body>
  </Card>
  

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body><iframe width="100%" height="300" src={video.video_url} allowfullscreen></iframe></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</div>
   
    
  )
}

export default VideoCard