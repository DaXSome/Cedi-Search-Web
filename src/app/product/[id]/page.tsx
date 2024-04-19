import ProductDetails from "@/components/product-details/ProductDetails";
import { API_URL } from "@/data/constants";
import { IProductDetailsResponse } from "@/data/interfaces";
import { Fragment } from "react";

interface IParams {
  params: {
    id: string;
  };
}

const ProductDetailsPage = async (params: IParams) => {
  const { id } = params.params;

  const res = await fetch(`${API_URL}/product/${id}`, {
    cache: "no-cache",
  });

  const data = (await res.json()) as IProductDetailsResponse;

  const product = data.data;

  return (
    <Fragment>
      <ProductDetails product={product} />
    </Fragment>
  );
};

export default ProductDetailsPage;
