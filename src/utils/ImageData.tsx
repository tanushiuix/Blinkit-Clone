import {ImageSourcePropType} from 'react-native';

export type ImageDataType = {
  title: string;
  image: ImageSourcePropType;
  description: string;
  price?: string;
  offer?: string;
};

export const ImageSlider: ImageDataType[] = [
  {
    title: 'Sunsets',
    image: {
      uri: 'https://plus.unsplash.com/premium_photo-1661698763470-55da05629e50?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGwlMjBzaXplfGVufDB8fDB8fHww',
    },
    price: '₹20',
    description: '5 Reasons Why a Sunset Is a Favorite Photography Subject ...',
  },
  {
    title: 'Sunrise',
    image: {
      uri: 'https://media.istockphoto.com/id/1321275554/photo/small-ball-out-balance.jpg?b=1&s=612x612&w=0&k=20&c=H4NtV96s6miooaF2jMUeOBZic0j5V31hGP_PNbJvZBw=',
    },
    price: '₹20',
    description: '5 Reasons Why a Sunset Is a Favorite Photography Subject ...',
  },
  {
    title: 'Summer',
    image: {
      uri: 'https://images.pexels.com/photos/1522186/pexels-photo-1522186.jpeg?cs=srgb&dl=pexels-nubikini-1522186.jpg&fm=jpg',
    },
    price: '₹20',
    description: '5 Reasons Why a Sunset Is a Favorite Photography Subject ...',
  },
  {
    title: 'Summer',
    image: {
      uri: 'https://media.istockphoto.com/id/529160187/photo/disbalance.jpg?s=612x612&w=0&k=20&c=nbtopJqDYmoqk3fvQIC0lYJZ8k5LEJElT-18tx4LqYE=',
    },
    price: '₹20',
    description: '5 Reasons Why a Sunset Is a Favorite Photography Subject ...',
  },
  {
    title: 'Summer',
    image: {
      uri: 'https://images.pexels.com/photos/28859908/pexels-photo-28859908/free-photo-of-close-up-of-a-european-robin-on-a-post-in-nature.jpeg',
    },
    price: '₹20',
    description:
      '5 Reasons Why a Sunset Is a Favorite Photography Subject ...A sunset is the time when the sun disappears from the sky in the evening, along with the atmospheric effects that accompany it',
  },

  {
    title: 'Summer',
    image: {
      uri: 'https://images.pexels.com/photos/3308727/pexels-photo-3308727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    price: '₹20',
    description: '5 Reasons Why a Sunset Is a Favorite Photography Subject ...',
  },
  {
    title: 'Summer',
    image: {
      uri: 'https://images.pexels.com/photos/7123562/pexels-photo-7123562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    price: '₹20',
    description: '5 Reasons Why a Sunset Is a Favorite Photography Subject ...',
  },
  {
    title: 'Summer',
    image: {
      uri: 'https://images.pexels.com/photos/1522186/pexels-photo-1522186.jpeg?cs=srgb&dl=pexels-nubikini-1522186.jpg&fm=jpg',
    },
    price: '₹20',
    description: '5 Reasons Why a Sunset Is a Favorite Photography Subject ...',
  },
  {
    title: 'Summer',
    image: {
      uri: 'https://images.pexels.com/photos/1522186/pexels-photo-1522186.jpeg?cs=srgb&dl=pexels-nubikini-1522186.jpg&fm=jpg',
    },
    price: '₹20',
    description: '5 Reasons Why a Sunset Is a Favorite Photography Subject ...',
  },
];

export const ShopByCategoryImages: ImageDataType[] = [
  {
    title: 'Vegetables and Fruits',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/category/cms_images/icon/332_1680269002502.png',
    },
    description: 'Vegetables and Fruits',
  },
  {
    title: 'Dairy and Baskets',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/category/cms_images/icon/14_1678949221877.png',
    },
    description: 'Dairy and Baskets',
  },
  {
    title: 'Munchies',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/category/cms_images/icon/1237_1670927167688.png',
    },
    description: 'Munchies',
  },
  {
    title: 'Cold Drinks and Juices',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/category/cms_images/icon/332_1680269002502.png',
    },
    description: 'Cold Drinks and Juices',
  },
  {
    title: 'Instant and Frozen Food',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/category/cms_images/icon/15_1676610279582.png',
    },
    description: 'Instant and Frozen Food',
  },
  {
    title: 'Tea Coffee and Health',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/category/cms_images/icon/1237_1670927167688.png',
    },
    description: 'Tea Coffee and Health',
  },
  {
    title: 'Cold Drinks and Juices',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/category/cms_images/icon/14_1678949221877.png',
    },
    description: 'Cold Drinks and Juices',
  },
  {
    title: 'Cold Drinks and Juices',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/category/cms_images/icon/332_1680269002502.png',
    },
    description: 'Cold Drinks and Juices',
  },
  {
    title: 'Vegetables and Fruits',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/category/cms_images/icon/332_1680269002502.png',
    },
    description: 'Vegetables and Fruits',
  },
  {
    title: 'Dairy and Baskets',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/category/cms_images/icon/14_1678949221877.png',
    },
    description: 'Dairy and Baskets',
  },
  {
    title: 'Munchies',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/category/cms_images/icon/1237_1670927167688.png',
    },
    description: 'Munchies',
  },
  {
    title: 'Cold Drinks and Juices',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/app/images/category/cms_images/icon/332_1680269002502.png',
    },
    description: 'Cold Drinks and Juices',
  },
];

export const ShopByStore: ImageDataType[] = [
  {
    title: 'Toy Store',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/layout-engine/2023-07/toys-store_1.png',
    },
    description: 'Toy Store',
  },
  {
    title: 'Book Store',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/layout-engine/2023-07/book-store.png',
    },
    description: 'Book Store',
  },
  {
    title: 'Pet Store',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/layout-engine/2024-05/pet-store-new-icon-1.png',
    },
    description: 'Pet Store',
  },
  {
    title: 'Kid Store',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/layout-engine/2023-07/kid-store_0.png',
    },
    description: 'Kid Store',
  },
  {
    title: 'Pharma Store',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/layout-engine/2024-06/Pharma-Store_store-icon-1.png',
    },
    description: 'Pharma Store',
  },
  {
    title: 'Sports Store',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/layout-engine/2023-07/kid-store_0.png',
    },
    description: 'Sports Store',
  },
  {
    title: 'Party Store',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=450/layout-engine/2023-07/kid-store_0.png',
    },
    description: 'Sports Store',
  },
];

export const HotDeals: ImageDataType[] = [
  {
    title: 'Whole Farm Grocery Raisins',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/3a474f33-1b7e-4703-8dbc-37fa7cab0322.jpg?ts=1713777273',
    },
    description: 'Whole Farm Grocery Raisins',
    price: '₹65',
    offer: '10% Off',
  },
  {
    title: 'Nut-Toppers Premium Dates',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/3a474f33-1b7e-4703-8dbc-37fa7cab0322.jpg?ts=1713777273',
    },
    description: 'Nut-Toppers Premium Dates',
    price: '₹65',
    offer: '10% Off',
  },
  {
    title: 'Whole Farm Premium Ajwain Seeds',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/3a474f33-1b7e-4703-8dbc-37fa7cab0322.jpg?ts=1713777273',
    },
    description: 'Whole Farm Premium Ajwain Seeds',
    price: '₹65',
    offer: '40% Off',
  },
  {
    title: 'Whole Farm Premium Red Chilli Whole',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/3a474f33-1b7e-4703-8dbc-37fa7cab0322.jpg?ts=1713777273',
    },
    description: 'Whole Farm Premium Red Chilli Whole',
    price: '₹65',
    offer: '20% Off',
  },
];

export const DailyFreshNeeds: ImageDataType[] = [
  {
    title: 'Kiran Watermelon Organic',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/42f37e6d-9ca9-4fca-b5a6-7bf3e767bc9a.jpg?ts=1714120670',
    },
    description: 'Kiran Watermelon Organic',
    offer: '10% Off',
    price: '₹65',
  },
  {
    title: 'baby onoin Sirka',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/eaed1dde-b653-4eb2-a35c-478d70087d03.jpg?ts=1711010248',
    },
    description: 'baby onoin Sirka',
    offer: '10% Off',
    price: '₹65',
  },
  {
    title: 'Coconut Chunk',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/06fce6a0-de1a-4c7f-8e95-5d4e37bada0e.jpg?ts=1726553733',
    },
    description: 'Coconut Chunk',
    offer: '10% Off',
    price: '₹65',
  },
  {
    title: 'SugarCane Stick',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/app/assets/products/sliding_images/jpeg/33ef0601-859e-45de-94ae-7880bec66ec5.jpg?ts=1725611227',
    },
    description: 'SugarCane Stick',
    offer: '10% Off',
    price: '₹65',
  },
];

export const CookingIdeas: ImageDataType[] = [
  {
    title: 'Matar Dal Tadka',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/assets/search/usecase/laccha_paratha_01.png',
    },
    description: 'Laccha Paratha',
  },
  {
    title: 'Chole Rice',
    image: {
      uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=540/assets/search/usecase/dum_aloo_banarsi_01.png',
    },
    description: 'Dum Aloo Banarsi',
  },
];
