import { ProductServerServices } from "@/shopify/services/server/product.services.server";
import style from "./CollectionProductList.module.css";
import ProductCard from "../ProductCard/ProductCard.component";

export type CollectionSingle = Awaited<
  ReturnType<(typeof ProductServerServices)["getCollectionSingle"]>
>;

export interface CollectionProductListProps {
  collection: CollectionSingle;
  currentVariantId?: string;
  max?: number;
}

const CollectionProductList = ({
  collectionProductListConfig,
}: {
  collectionProductListConfig: CollectionProductListProps;
}) => {
  const max = collectionProductListConfig.max;

  const generateProductCards = (collection: CollectionSingle) => {
    const products = collection.collection.products.products;

    const gen = [];
    for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < products[i].variants.length; j++) {
        if (
          products[i].variants[j].id !==
          collectionProductListConfig.currentVariantId
        )
          gen.push(
            <ProductCard
              productCardConfig={{
                variantData: products[i].variants[j],
                productData: products[i],
              }}
            />
          );
      }
    }
    if (max) {
      for (let i = gen.length; i > max; i--) {
        gen.pop();
      }
    }
    return gen;
  };

  return (
    <div className={style.container}>
      {generateProductCards(collectionProductListConfig.collection)}
    </div>
  );
};

export default CollectionProductList;
