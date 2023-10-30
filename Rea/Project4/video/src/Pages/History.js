import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import {   Trash2 } from 'react-feather';
import { deletehistory, getAllHistory } from '../services/allapis';
import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';
 






function History() {
    const [historie,setHistories]=useState([])
    const getHistories=async()=>{
        const {data}=await getAllHistory()
        setHistories(data);
    }

    const historyDelete=async(id) =>{
      const result=await deletehistory(id)
      // if(result.status>200 && result.status<300){
        // refresh category list
        getHistories()
        // deletehistory(result.data)
      // }
     } 
    
    useEffect(()=>{
    getHistories()
    },[])
    // console.log(historie);

   
  return (
    <div>
        
        <h1 className='text-center p-5 text-white'>Watch History</h1>

        <div className='text-end pe-5 pb-3'>
          <Link to={'/home'}>
          <button className='btn btn-info rounded'>Go back</button>
          </Link>
        </div>
 
    { 
     historie.length>0?(
       <Table className='w-75 container ' striped bordered hover variant="light">
      <thead className='text-center fs-5'>
        <tr>
          <th>SI NO</th>
          <th>Date</th>
          <th>Title</th>
          <th>video URL</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      { historie?.map((i,index)=>(
            <tr>
          <td>{index+1}</td>
          <td>{i.date}</td>
          <td>{i.video_title}</td>
          <td>{i.url}</td>
          <th> <Trash2 onClick={()=>historyDelete(i.id)} size={55} className='btn text-info'></Trash2> </th>
        </tr>
        ))}
      </tbody>
    </Table> ):
 <h1 className='text-center p-5 text-warning'>No Watch Histories</h1>
    }
    
   
    </div>
  )
}

export default History