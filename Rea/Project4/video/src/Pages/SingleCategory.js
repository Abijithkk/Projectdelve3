import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAllCats, getAllVideosInCat, updateCategory } from '../services/allapis';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function SingleCategory() {
  const params=useParams();
  const [videos,setVideos] = useState([]);
  const [categories,setCategories] = useState([]);

  const fetchVideos = async( ) => {
    const {data} = await getAllVideosInCat(params.id);

    setVideos(data);

    console.log(setVideos)
  }

  const removeVidoeFromCat = async (id) => {
    const selectedCategory = categories.find(i=>i.id==params.id);
    console.log(selectedCategory)

    // update category object with video data
    selectedCategory.videos = selectedCategory.videos.filter((v) => v.id !== id);

    await updateCategory(params.id,selectedCategory);

    fetchVideos();
    getAllCategories()
  }

  const getAllCategories = async () => {
    const result = await getAllCats();
    if (result.status >= 200 && result.status < 300) {
      setCategories(result.data);
    }
  }

  useEffect(() => {
    fetchVideos();
    getAllCategories();
  }, [])
  
  
  return (
    <div d-block>
      <h2>
        <span className='fs-3 caption me-5'>{categories.find((i) => i.id == params.id)?.name}</span>
        
      </h2>
    <div className='d-flex'>
      


      {
        categories.map(i=>(
  
        i.videos.map(j => ( 
          
          <Card className='mb-5 ms-4 mt-5' style={{ width: '18rem' }}>
          
        <Card.Img cl variant="top" src={j.cover_image} />
        <Card.Body className='cardbody'>
          <Card.Title className='text-black'>{j.caption}</Card.Title>
          <Card.Text>
          
          </Card.Text>
          <Button onClick={() => removeVidoeFromCat(j.id)} className='trash'>
  <i class="fa-solid fa-trash-can fs-3 trash2" style={{color:'#112336 '}}> </i>
</Button>

        </Card.Body>
      </Card>
        
        
        ))
        ))
      }
      </div>
      
    </div>
  )
}

export default SingleCategory