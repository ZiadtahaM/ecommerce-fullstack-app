export interface Icart {
    _id:
    string;
    cartOwner: string;
    products: ProductElement[];
    createdAt: Date;
    updatedAt: Date;
    v:
    number;
    totalCartPrice: number;
    }
    export interface ProductElement {
    count: number;
    _id: string;
    product: ProductProduct;
    price: number;
    }
    export interface ProductProduct {

    _id: string;
    title: string;
    quantity: number;
    imageCover: string;
   
    ratingsAverage: number;
}






export interface wishlist {
  sold: number;
  images: string[];
  subcategory: Subcategory[];
  ratingsQuantity: number;
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  priceAfterDiscount: number;
  imageCover: string;
  category:Category[] ;
  brand: Category;
  ratingsAverage: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}