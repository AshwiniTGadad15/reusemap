import type { Item } from '../types/item'

export const demoItems: Item[] = [
  {
    id: 'reading-chair',
    title: 'A comfy reading chair',
    description:
      'A much-loved armchair ready for a new corner. The fabric is clean and sturdy, with a little character from years of good books.',
    category: 'Furniture',
    condition: 'Good',
    locality: 'Indiranagar',
    imageUrl:
      'https://images.unsplash.com/photo-1598300056393-4aac492f4344?auto=format&fit=crop&w=900&q=82',
    imageAlt: 'Soft, neutral armchair beside a bright window',
    ownerName: 'Ananya',
    postedAt: '2 days ago',
  },
  {
    id: 'plant-starter-kit',
    title: 'Plant starter kit',
    description:
      'A handful of pots, a small watering can and a few beginner-friendly planters. Hope it helps someone get their first little garden going.',
    category: 'Home Essentials',
    condition: 'Like New',
    locality: 'Jayanagar',
    imageUrl:
      'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=82',
    imageAlt: 'Healthy green houseplant in a terracotta pot',
    ownerName: 'Rohan',
    postedAt: 'Yesterday',
  },
  {
    id: 'storybook-set',
    title: 'A shelf of storybooks',
    description:
      'A cheerful mix of picture books and early readers. All pages are intact and ready for more bedtime stories.',
    category: 'Books and Education',
    condition: 'Good',
    locality: 'HSR Layout',
    imageUrl:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=82',
    imageAlt: 'Colorful books arranged on a wooden shelf',
    ownerName: 'Meera',
    postedAt: '3 days ago',
  },
  {
    id: 'desk-lamp',
    title: 'Adjustable desk lamp',
    description:
      'A simple, working desk lamp with a flexible neck. Bulb included; the base has a small scuff that does not affect use.',
    category: 'Electronics',
    condition: 'Usable',
    locality: 'Koramangala',
    imageUrl:
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=82',
    imageAlt: 'Minimal desk lamp on a tidy work surface',
    ownerName: 'Dev',
    postedAt: '4 days ago',
  },
  {
    id: 'woven-basket',
    title: 'Woven storage basket',
    description:
      'A sturdy basket that works well for blankets, toys or laundry. Passing it along after a small home refresh.',
    category: 'Home Essentials',
    condition: 'Good',
    locality: 'Whitefield',
    imageUrl:
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=900&q=82',
    imageAlt: 'Natural woven basket in a calm living space',
    ownerName: 'Isha',
    postedAt: 'Today',
  },
  {
    id: 'board-games',
    title: 'Board games for a rainy day',
    description:
      'Two family games with all their pieces. They have been well played and are still in great shape.',
    category: 'Toys',
    condition: 'Good',
    locality: 'Malleshwaram',
    imageUrl:
      'https://images.unsplash.com/photo-1606503153255-59d8b8b8219b?auto=format&fit=crop&w=900&q=82',
    imageAlt: 'Colorful board game pieces arranged on a table',
    ownerName: 'Kavya',
    postedAt: '5 days ago',
  },
  {
    id: 'ceramic-mugs',
    title: 'Set of ceramic mugs',
    description:
      'Four mismatched but lovely mugs. No chips or cracks, just making room in the kitchen cupboard.',
    category: 'Kitchen Items',
    condition: 'Like New',
    locality: 'Banashankari',
    imageUrl:
      'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=82',
    imageAlt: 'Handmade ceramic mugs arranged on a table',
    ownerName: 'Arjun',
    postedAt: '1 day ago',
  },
  {
    id: 'yoga-mat',
    title: 'Yoga mat, ready to roll',
    description:
      'A gently used non-slip mat, cleaned and rolled up. Great for stretching, yoga or a little extra cushioning.',
    category: 'Sports Equipment',
    condition: 'Good',
    locality: 'JP Nagar',
    imageUrl:
      'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=900&q=82',
    imageAlt: 'Rolled yoga mat on a light studio floor',
    ownerName: 'Nisha',
    postedAt: '6 days ago',
  },
]

export const itemCategories = [
  'All categories',
  'Books and Education',
  'Clothes',
  'Furniture',
  'Electronics',
  'Toys',
  'Kitchen Items',
  'Home Essentials',
  'Sports Equipment',
  'Other',
] as const
