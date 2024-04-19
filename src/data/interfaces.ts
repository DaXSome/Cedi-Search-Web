export interface ISearchResult {
  name: string;
  price: number;
  description: string;
  id: string;
  url: string;
  rating: number;
  image: string;
}

export interface IProductDetailsResponse {
  data: IProduct;
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
