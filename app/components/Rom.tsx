import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import StatusBadge from './StatusBadge';
import RoomOverview from './RoomOverview'; // Import the modal component

type ProductCardProps = {
  product: {
    id: number;
    name: string;
    status: string;
    href: string;
    imageSrc: StaticImageData;
    imageAlt: string;
    price: string;
    description: string;
    category: string;
  };
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <div className="relative">
        <div className="relative h-72 w-full overflow-hidden rounded-lg">
          <Image
            src={product.imageSrc}
            alt={product.imageAlt}
            className="h-full w-full object-cover object-center"
            placeholder="blur"
          />
        </div>
        <div className="relative mt-4">
          <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
          <StatusBadge status={product.status} />
        </div>
        <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
          />
          <p className="relative text-lg font-semibold text-white">{product.price}</p>
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <button
          onClick={openModal}
          className="relative flex items-center justify-center rounded-lg border border-gray-300 bg-indigo-600 px-8 py-2 text-sm font-medium text-white shadow-md transition-all hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Details<span className="sr-only">, {product.name}</span>
        </button>
      </div>


      {/* Modal */}
      {isModalOpen && <RoomOverview product={product} onClose={closeModal} />}
    </div>
  );
};

export default ProductCard;
