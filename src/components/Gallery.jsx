import React, { useState, useEffect } from 'react'
import galleryData from '../utils/galleryData'
import Draggable from 'react-draggable'
import Search from './Search'
import Toastify from 'toastify-js'
import { LazyLoadImage } from "react-lazy-load-image-component";
import imagePlaceholder from '../assets/placehoderr.jpg'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { data } from 'autoprefixer'

function Gallery() {

  const [searchImage, setSearchImage] = useState([])
  const [users, setUsers] = useState([])

  const [gallery, setGallery] = useState(galleryData)
  const [searchInput, setSearchInput] = useState('search')
  // const [mousedown, setMouseDown] = useState(false)
  const filterSearch = galleryData.filter(data => {
    if (searchInput.length === 0) return setSearchInput('search')
    return data.tags.includes(searchInput[0].toUpperCase() + searchInput.slice(1))
  })





  function handleSearch() {
    if (filterSearch.length > 0) setGallery(filterSearch)
    if (filterSearch.length <= 0){
      Toastify({
        text: "Invalid search input. Enter a valid text",
        duration: 4000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#736CC4",
          color: 'white',
          paddingBlock: '10px',
          width: '100%'
        },
        // Callback after click
      }).showToast();
    } return;
    
  }

  function handleDragStyleTrue(id) {
    const modifyGallery = gallery.map(data => {
      if(data.id === id) {
        console.log(data)
        data = {...data, mousedown: true}
        console.log(data)
        return data
      }
      return data
    })

    setGallery(modifyGallery)

  }
  
  function handleDragStyleFalse(id) {
    const modifyGallery = gallery.map(data => {
      if(data.id === id) {
        data = {...data, mousedown: false}
        return data
      }
      return data
    })

    setGallery(modifyGallery)

  }

  

  const fetchUserData = () => {
    fetch("https://github.com/codeInn001/codeinn001.github.io/blob/main/db.json")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
        console.log(users)
      })
  }

 useEffect(() => {

   fetchUserData()
 }, [])


  return (
    <>
      <Search setSearchInput={setSearchInput} handleSearch={handleSearch} filterSearch={filterSearch} />
      <div className='flex flex-wrap justify-center gap-x-8 gap-y-16 h-screen '>

        {
          gallery.map(data => {
            {/* const mousedown = data.mousedown ? data.mousedown: null */}
            return (
              <Draggable 
              onDrag={() => handleDragStyleTrue(data.id)} scale={1.4}
              onStop={() => handleDragStyleFalse(data.id)}
              >
                <div className="w-64 h-64" style={{ boxShadow: data.mousedown ? 'rgba(0, 0, 0, 0.35) 0px 5px 15px' : 'none' }}>
                  <LazyLoadImage PlaceholderSrc={imagePlaceholder} 
                  width={256} height={256}
                  className='object-cover w-64 h-full' 
                  src={data.imgSrc} 
                  alt={data.tags} 
                    effect='blur'
                   />
                  <div className='flex flex-wrap gap-1'>
                    {data.tags.map(tag => (
                      <span className='bg-[#FDD] text-[#000] py-p[x] text-xs px-2 mt-2 mb-1 rounded-md'>{tag}</span>
                    ))}
                  </div>
                </div>
              </Draggable>
            )
          })
        }
      </div>
    </>

  )
}

export default Gallery
