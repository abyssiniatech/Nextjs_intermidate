import React from 'react'

const page = async ({ params }: { params: Promise<{ slug: string; id: string }> }) => {
  const { slug, id } = await params;
  return (
    <div className='bg-amber-50 h-screen flex flex-col items-center justify-center text-2xl font-bold  text-gray-800'>
      <p>productId: <span className='font-semibold text-red-500'>{slug}</span></p>
      <p>Customer: <span className='font-semibold text-red-500'>{id}</span></p>
    </div>
  )
}

export default page

