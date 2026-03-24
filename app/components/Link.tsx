import Link from 'next/link';

export const link = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Product', href: '/product' },
  { name: 'Contact', href: '/contact' },
];
const Linkpage = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      {link.map((list, index) => {
        return (
          <div key={index}>
            <Link href={list.href}>{list.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Linkpage;
