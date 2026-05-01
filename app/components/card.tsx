import Image from 'next/image';

const cards = [
  {
    img: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d',
    title: 'Card 1',
    description: 'This is the first card',
    email: 'surafel@gmail.com',
    phone: '123-456-7890',
  },
  {
    img: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7',
    title: 'Card 2',
    description: 'This is the second card',
    email: 'john.doe@gmail.com',
    phone: '098-765-4321',
  },
  {
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    title: 'Card 3',
    description: 'This is the third card',
    email: 'jane.smith@gmail.com',
    phone: '555-555-5555',
  },
  {
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
  },
  {
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    title: 'Card 4',
    description: 'This is the fourth card',
    email: 'alice.johnson@gmail.com',
    phone: '555-123-4567',
  },
  {
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    title: 'Card 5',
    description: 'This is the fifth card',
    email: 'bob.wilson@gmail.com',
    phone: '555-987-6543',
  },
  {
    img: 'https://images.unsplash.com/photo-1502767089025-6572583495b4',
    title: 'Card 6',
    description: 'This is the sixth card',
    email: 'charlie.brown@gmail.com',
    phone: '555-555-5555',
  },
  {
    img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
    title: 'Card 7',
    description: 'This is the seventh card',
    email: 'david.miller@gmail.com',
    phone: '555-111-2222',
  },
];

const CardComponents = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((item, index) => (
        <div
          key={index}
          className="bg-white text-black rounded-xl shadow-lg p-4 m-4 w-64 hover:scale-105 transition"
        >
          <Image
            src={item.img}
            alt={item.title || 'Card image'}
            width={300}
            height={200}
            className="w-full h-40 object-cover rounded-md mb-4"
          />

          <h2 className="text-xl font-bold mb-2">{item.title || 'No Title'}</h2>

          <p className="text-gray-600 mb-2">
            {item.description || 'No description available'}
          </p>

          <p className="text-gray-600 text-sm">📧 {item.email || 'N/A'}</p>

          <p className="text-gray-600 text-sm">📞 {item.phone || 'N/A'}</p>
        </div>
      ))}
    </div>
  );
};

export default CardComponents;
