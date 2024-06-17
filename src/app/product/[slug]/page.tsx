import ProductDetails from "@/components/product-details/ProductDetails";
import { API_URL } from "@/data/constants";
import { IProduct } from "@/data/interfaces";
import { Fragment } from "react";

interface IParams {
  params: {
    slug: string;
  };
}

const ProductDetailsPage = async (params: IParams) => {
  const { slug } = params.params;

  const res = await fetch(`${API_URL}/product/${slug}`, {
    cache: "no-cache",
  });

  const product = (await res.json()) as IProduct;

  return (
    <Fragment>
      <ProductDetails product={product} />
    </Fragment>
  );
};

export default ProductDetailsPage;
