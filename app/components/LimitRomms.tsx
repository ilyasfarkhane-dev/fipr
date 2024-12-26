
import room1 from '@/public/room-1.jpg';
import room2 from '@/public/room-2.jpg';
import room3 from '@/public/room-3.png';
import room4 from '@/public/room-4.png';
import Image from 'next/image';
import StatusBadge from '@/app/components/StatusBadge'

const products = [
    {
      id: 1,
      name: 'Suite avec 2 toilettes',
      status: 'Disponible',
      href: '#',
      imageSrc: room1, // Use the imported image directly
      imageAlt:
        'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '$140',
    },
    {
      id: 2,
      name: 'Chambre imple ',
      status: 'Maintenance',
      href: '#',
      imageSrc: room2, // Use the imported image directly
      imageAlt:
        'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '$140',
    },
    {
      id: 3,
      name: 'Chambre bien équipé',
      status: 'reservé',
      href: '#',
      imageSrc: room3, // Use the imported image directly
      imageAlt:
        'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '$140',
    },
    {
      id: 4,
      name: 'Chambre sans cuisine',
      status: 'Maintenance',
      href: '#',
      imageSrc: room4, // Use the imported image directly
      imageAlt:
        'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '$140',
    },
    {
      id: 5,
      name: 'Suite avec 2 toilettes',
      status: 'Disponible',
      href: '#',
      imageSrc: room1, // Use the imported image directly
      imageAlt:
        'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '$140',
    },
    {
      id: 6,
      name: 'Chambre imple ',
      status: 'Maintenance',
      href: '#',
      imageSrc: room2, // Use the imported image directly
      imageAlt:
        'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '$140',
    },
    {
      id: 7,
      name: 'Chambre bien équipé',
      status: 'reservé',
      href: '#',
      imageSrc: room3, // Use the imported image directly
      imageAlt:
        'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '$140',
    },
    {
      id: 8,
      name: 'Chambre sans cuisine',
      status: 'Maintenance',
      href: '#',
      imageSrc: room4, // Use the imported image directly
      imageAlt:
        'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
      price: '$140',
    },
    // More products...
  ];
  


export default function Example() {
    // Limit to the first 4 products
    const displayedProducts = products.slice(0, 4);
  
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {displayedProducts.map((product) => (
              <div key={product.id}>
                <div className="relative">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
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
                <div className="mt-6">
                  <a
                    href={product.href}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    Details<span className="sr-only">, {product.name}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  