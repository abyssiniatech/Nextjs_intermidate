import React from 'react';
import { notFound } from 'next/navigation';

const Page = ({ params }: { params: { slug: string; id: string } }) => {
  const { slug, id } = params;

  if (slug !== 'product' || id !== '123') {
    notFound();
  }

  return (
    <div className="bg-amber-50 h-screen flex flex-col items-center justify-center text-2xl font-bold text-gray-800">
      <p>
        productId: <span className="font-semibold text-red-500">{slug}</span>
      </p>
      <p>
        Customer: <span className="font-semibold text-red-500">{id}</span>
      </p>
    </div>
  );
};

export default Page;
