import React from 'react'
// params slug
const page = async ({params}: {params: Promise<{slug: string} >}) => {
  const { slug } = await params;
  return (
    <div className='bg-amber-50 h-screen flex flex-col items-center justify-center text-2xl font-bold  text-gray-800'>
      <h1>Intermidate</h1>
      <p>Slug: <span className='font-semibold text-red-500'>{slug}</span></p>
    </div>
  )
}

export default page

