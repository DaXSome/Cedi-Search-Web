export interface ISearchResult {
  name: string;
  price: number;
  description: string;
  product_id: string;
  url: string;
  rating: number;
  image: string;
}

export interface ISearchResponse {
  results: ISearchResult[];
}
