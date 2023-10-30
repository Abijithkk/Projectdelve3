import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import uniqid from 'uniqid';
import { addVideo } from '../services/allapis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add({update}) {

  //state to hold input datas
  const [inputs,setInputs]=useState({
  id:"",
  caption:"",
  cover_image:"",
  video_url:""
  })

  //function for onchange
  const setValues=(e)=>{
    // let value=(e.target.value);
    let{value,name}=e.target
    //key
    // let{name}=e.target
console.log(value,name);
   setInputs({...inputs,[name]: value})
  }

  //function to extract video url
  const extractUrl=(e)=>{
    let videoUrl=e.target.value
    console.log(videoUrl);
  if(videoUrl.includes("v=")){

   
    let subUrl=videoUrl.split("v=")[1]
    // console.log(subUrl);
    let finalUrl=`https://www.youtube.com/embed/${subUrl}?autoplay=1`
    setInputs({...inputs, ["video_url"]: finalUrl })
  //  console.log(finalUrl);
  }

}
  //function to add button click
  const addHandle=async () => {
    let id=uniqid()
    
    setInputs({...inputs, ["id"]: id })

    const {caption,cover_image,video_url}=inputs

    if(caption=="" ||cover_image=="" ||video_url==""){


  
        //updated state of home
        // // update(result.data)
        
        toast.error("all inputs required", {
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
      const result = await addVideo(inputs)
      console.log(result);
      if(result.status >= 200 && result.status < 300){
  
        // updated state of home
        update(result.data)
        
        toast.success("video addded", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
        setShow(false)
      }
    
    
  }
}

  console.log(inputs);



    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
<>
      <Button id='addbutton' className=' mt-3 m-5' variant="primary" onClick={handleShow}>
      <i class="fa-solid fa-cloud-arrow-up fa-beat text-white  "></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
             <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Video Caption
        </InputGroup.Text>
        <Form.Control name="caption" onChange={(e)=>setValues(e)}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
        </Modal.Body>
        <Modal.Body>
             <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
        Video Cover Image URL 
        </InputGroup.Text>
        <Form.Control name="cover_image" onChange={(e)=>setValues(e)}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
        </Modal.Body>
        <Modal.Body>
             <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
           YouTube Video URL
        </InputGroup.Text>
        <Form.Control onChange={(e)=>extractUrl(e)}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addHandle}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    <ToastContainer />
  
    </div>
  )
}

export default Add