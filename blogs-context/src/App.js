import React, { useEffect } from 'react'
import Header from './components/Header'
import Blogs from './components/Blogs'
import Pagination from './components/Pagination'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'

const App = () => {

  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  )
}

export default App
