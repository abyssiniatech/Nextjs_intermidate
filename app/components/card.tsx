import React from 'react'

const card = () => {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image className="w-full" src="/card-image.jpg" alt="Card image" width={500} height={300} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Card Title</div>
          <p className="text-gray-700 text-base">
            This is a description of the card. It provides some information about the content of the card.
          </p>

        </div>
      </div>
    </div>
  )
}

export default card

