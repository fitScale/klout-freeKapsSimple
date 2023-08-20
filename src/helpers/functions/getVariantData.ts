import { ProductServerServices } from "@/shopify/services/server/product.services.server";

const getVariantData = async (
  productId: string,

  variantId: string
) => {
  const data = (await ProductServerServices.getProductSingle(productId))
    .variants!;

  let variantData;

  for (let i = 0; i < data.length; i++) {
    if (data[i].id === variantId) {
      variantData = data[i];
      break;
    }
  }

  return variantData;
};

export type VariantData = Awaited<ReturnType<typeof getVariantData>>;

export default getVariantData;
