import ProductDetails from "@/components/product-details/ProductDetails";
import { SEARCH_SERVICE_URL } from "@/data/constants";
import { IProductDetailsResponse } from "@/data/interfaces";
import { Fragment } from "react";

interface IParams {
  params: {
    id: string;
  };
}

const ProductDetailsPage = async (params: IParams) => {
  const { id } = params.params;

  const res = await fetch(`${SEARCH_SERVICE_URL}/product/${id}`, {
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
