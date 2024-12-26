import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import Image, { StaticImageData } from 'next/image';
import { XIcon } from '@heroicons/react/outline'; // Importing the X icon from Heroicons

type ProductModalProps = {
  product: {
    id: number;
    name: string;
    status: string;
    href: string;
    imageSrc: StaticImageData;
    imageAlt: string;
    price: string;
    description: string;
  };
  onClose: () => void;
};

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  return (
    <Transition.Root show as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 transition-opacity" />
        </Transition.Child>

        {/* Modal Panel */}
        <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <Dialog.Panel className="relative w-full max-w-lg transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:p-6 p-4">
              {/* Close Button (X Icon) */}
              <button
                type="button"
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 focus:outline-none"
              >
                <XIcon className="h-6 w-6" />
              </button>

              <div className="flex flex-col items-center sm:flex-row sm:items-start">
                {/* Product Image */}
                <div className="flex-shrink-0">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-48 w-48 rounded-lg object-cover"
                  />
                </div>
                {/* Product Details */}
                <div className="mt-4 text-center sm:mt-0 sm:ml-6 sm:text-left">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium text-gray-900"
                  >
                    {product.name}
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">{product.status}</p>
                    <p className="mt-1 text-lg font-semibold text-gray-900">{product.price}</p>
                    {/* Product Description */}
                    <p className="mt-3 text-sm text-gray-700">{product.description}</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 sm:mt-4 sm:flex sm:justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 sm:w-auto sm:text-sm"
                >
                  Close
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ProductModal;
