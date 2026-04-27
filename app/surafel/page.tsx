
const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  console.log('Slug:', slug);
  return (
    <div className="min-h-screen p-4 flex justify-center items-center gap-2  bg-indigo-700 text-white">
      <h1>Welcome to My Page</h1>
      <p>Slug: {slug}</p>
    </div>
  );
};

export default page;
