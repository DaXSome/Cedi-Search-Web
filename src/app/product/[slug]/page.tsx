import { API_URL } from "@/data/constants";
import { IProduct } from "@/data/interfaces";

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
    <div className="container mx-auto max-w-7xl p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-12">
        <img src={product.images[0]} />

        <div className="space-y-6">
          <header>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              {product.name}
            </h1>
            <p className="text-2xl font-light text-gray-900 dark:text-gray-400">
              {product.price} GHS
            </p>
          </header>

          <div className="space-y-4">
            <div>
              <h2 className="text-lg lg:text-xl font-semibold text-yellow-500 dark:text-yellow-300 uppercase mb-4">
                Product Details
              </h2>
              <p>{product.description}</p>
            </div>
          </div>

          <a
            target="_blank"
            href={product.url}
            className="block w-full mt-8 text-center rounded-none py-3 bg-gray-900 text-white dark:bg-gray-50 dark:text-gray-900 uppercase font-medium hover:translate-y-1 hover:shadow-lg transition-transform"
          >
            Visit website
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
