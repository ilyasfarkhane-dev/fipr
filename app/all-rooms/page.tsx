import { Metadata } from "next";

import room1 from '@/public/room-1.jpg';
import room2 from '@/public/room-2.jpg';
import room3 from '@/public/room-3.png';
import room4 from '@/public/room-4.png';
import Image from 'next/image';
import StatusBadge from '@/app/components/StatusBadge'
import FilterRomms from '@/app/components/FilterRooms'

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

  {
    id: 9,
    name: 'Suite avec 2 toilettes',
    status: 'Disponible',
    href: '#',
    imageSrc: room1, // Use the imported image directly
    imageAlt:
      'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  {
    id: 10,
    name: 'Chambre imple ',
    status: 'Maintenance',
    href: '#',
    imageSrc: room2, // Use the imported image directly
    imageAlt:
      'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  {
    id: 11,
    name: 'Chambre bien équipé',
    status: 'reservé',
    href: '#',
    imageSrc: room3, // Use the imported image directly
    imageAlt:
      'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    price: '$140',
  },
  {
    id: 12,
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

export const metadata: Metadata = {
  title: "All-Rooms",
  description: "Our Rooms",
};

export default function Example() {
  return (
       
    <FilterRomms />
  );
}

