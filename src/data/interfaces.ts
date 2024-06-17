export interface ISearchResult {
  name: string;
  price: number;
  description: string;
  url: string;
  rating: number;
  image: string;
  slug: string
}

export interface IProduct {
  description: string;
  images: string[];
  name: string;
  price: number;
  product_id: string;
  rating: number;
  source: string;
  url: string;
}
