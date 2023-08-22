import { ProductServerServices } from "@/shopify/services/server/product.services.server";

const Page = async () => {
  const product = await ProductServerServices.getProductSingle(
    "gid://shopify/Product/8104524120322"
  );

  console.log(product);

  return <div></div>;
};

export default Page;
