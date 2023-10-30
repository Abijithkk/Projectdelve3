import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allapis'
import { Col, Row } from 'react-bootstrap'
// import { Video } from 'react-feather'



function View(updatedstate) {


  const [allVideos,setAllVideos]=useState([])

   //state to update delete
const [deleteUpdate,setDeleteUpdate]=useState({})

const accessAllVideos=async()=>{
  const result=await getAllVideos()

  // if(result.status>200 && result.status<300){
    // console.log(result);
    setAllVideos(result.data)
  // }
}
console.log(allVideos);
   useEffect(()=>{
    accessAllVideos()
   },[updatedstate,deleteUpdate])
  return (
    <Row>
      {
        allVideos.length>0?(
          allVideos.map(i=>
         <Col >  <VideoCard deleteFunc={setDeleteUpdate} video={i}></VideoCard></Col> 
            )
        ): <h1>No Videos in Your Collection</h1>
      }
 
       
    </Row>
  )
    }
// ?autoplay=1

export default View