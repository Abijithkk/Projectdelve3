import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import uniqid from 'uniqid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCat, getAllCats, getVideo, updateCategory } from '../services/allapis';
import {  Link, Trash2 } from 'react-feather';







function Categories() {
  //state to hold input,id and video array
  const [catInputs,setCatInputs]=useState({
    id: "",
    name: "",
    videos: []
  })

  const  [categories,setCategories]=useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const setInputs=(e)=>{
    const {value,name}=e.target
    setCatInputs({...catInputs,[name]:value})
  }
  const addData=async()=>{
    let id=uniqid()
    setCatInputs({...catInputs,["id"]:id})

    const {name}=catInputs
    if(name==""){
      toast.error("provide caption", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
    else{
      //api call
      const result=await addCategory(catInputs)
      // if(result.status)
      setShow(false);

      getAllCategories()
      
      toast.success(`${result.data.name} added`, {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  }

const getAllCategories =async()=> {
  const result=await getAllCats()
  setCategories(result.data);
}
console.log(Categories);
const removeCategory=async(id)=>{
  const result=await deleteCat(id)
  //refresh category list
  getAllCategories()
}



useEffect(()=> {
  getAllCategories()
},[])

const dragOver=(e)=>{
  e.preventDefault()
  console.log("dragged over the category");
}

const dropped=async(e,id)=>{
  console.log("dropped cat id"+id);

  // video id access
  const videoId=e.dataTransfer.getData("cardId")
  console.log(videoId);

  // access video data from backend
  const {data}=await getVideo(videoId)
  console.log(data);

  // ṣelect dropped category from all category
  const selectedCategory=categories.find(i=>i.id==id)
  console.log(selectedCategory);

  // update category object with video data
  selectedCategory.videos.push(data)
  console.log(selectedCategory);

  // api call to update the changed category in the backend
  await updateCategory(id,selectedCategory)
  getAllCategories()
}
  return (
    <div id='Categor'>
        <div  className="d-grid gap-1 me-3">
      <Button id='Categoriesn' variant="primary" size="lg" onClick={handleShow}>
        Categories
      </Button>
       {  
     categories.length>0?(
      categories.map(i=>(
        <div droppable
        onDragOver={(e)=>dragOver(e)}
        onDrop={(e)=>dropped(e,i?.id)}
        className='border mt-3 p-3 bg-white'>
         
          <p className='fs-3 text-dark'>{i.name}</p>
          <div className='text-end'>
        
          <Trash2 size={50} className='text-info btn ' onClick={()=>{removeCategory(i.id)}}></Trash2>


          </div>
          {i.videos.map(j=>(
            
            <a  style={{textDecoration:'none'}} href="./Category"> <img  style={{height:'70px',width:'50px',padding:'5px'}} src={j.cover_image} alt="" /></a>
))}
        </div>
      ))
     ):<h1>No categories added yet</h1>
     
     }
     
   
      </div>
        <>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Categories</Modal.Title>
        </Modal.Header>
        <Modal.Body> <form    action=""> <input onChange={(e)=>setInputs(e)} name="name" className='w-100' type="text" /></form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addData}>
            Add Category
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    <ToastContainer />
    </div>
  )
}

export default Categories