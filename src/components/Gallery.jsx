import React,{useState, useEffect} from 'react'
import galleryData from '../utils/galleryData'
import Search from './Search'

function Gallery() {

  const [searchImage, setSearchImage] = useState([])

const [gallery, setGallery] = useState(galleryData)
  const [searchInput, setSearchInput] = useState('search')
  const filterSearch = galleryData.filter(data => {
    if(searchInput.length === 0) return setSearchInput('search')
   return  data.tags.includes(searchInput[0].toUpperCase() + searchInput.slice(1))
  })

 

  

  function handleSearch() {
    if(filterSearch.length <= 0) return;
    setGallery(filterSearch)
  }

  

  console.log(filterSearch)
    

  return (
    <>
    <Search setSearchInput={setSearchInput} handleSearch={handleSearch} filterSearch={filterSearch} />
      <div className='flex flex-wrap justify-center gap-x-8 gap-y-16 h-screen padding-8'>

        {
          gallery.map(data => {
            return (
              <div className="w-64 h-64">
                <img className='object-cover w-64 h-full' src={data.imgSrc} alt="" srcset="" />
                <div className='flex flex-wrap gap-1'>
                  {data.tags.map(tag => (
                    <span className='bg-[#FDD] text-[#000] py-p[x] text-xs px-2 mt-2 mb-1 rounded-md'>{tag}</span>
                  ))}
                </div>
              </div>
            )
          })
        }
      </div>
    </>
    
  )
}

export default Gallery
