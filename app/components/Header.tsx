// 'use client';

// import { useState } from 'react';
// import Linkpage from './Link';
// import { Menu, X } from 'lucide-react';

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className="bg-linear-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-white shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <h1 className="text-2xl font-bold tracking-wide cursor-pointer hover:text-indigo-300 transition duration-300">
//           🚀 MyWebsite
//         </h1>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8">
//           <Linkpage />
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="focus:outline-none"
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden bg-indigo-800 transition-all duration-300 ease-in-out ${
//           isOpen ? 'max-h-96 py-4' : 'max-h-0 overflow-hidden'
//         }`}
//       >
//         <div className="flex flex-col items-center gap-6">
//           <Linkpage />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

'use client';

import { useState } from 'react';
import Linkpage from './Link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-linear-to-r from-indigo-900 via-indigo-800 to-indigo-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide cursor-pointer hover:text-indigo-300 transition duration-300">
          MyWebsite
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Linkpage />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-indigo-800 shadow-lg transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen
            ? 'max-h-96 opacity-100 scale-100 py-4'
            : 'max-h-0 opacity-0 scale-95'
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          <Linkpage />
        </div>
      </div>
    </header>
  );
};

export default Header;
