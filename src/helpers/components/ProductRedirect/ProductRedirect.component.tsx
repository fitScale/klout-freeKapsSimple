"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { ProductClientServices } from "@/shopify/services/client/product.services.client";
import { useQuery } from "@apollo/client";
import { getProductSingleQuery } from "@/shopify/graphql/queries/product.queries";
import { useEffect } from "react";

export interface ProductRedirectProps {
  productId: string;
}

const ProductRedirect = ({ productId }: { productId: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { data } = useQuery(getProductSingleQuery, {
    variables: { productId },
  });

  useEffect(() => {
    if (data) {
      const parsedData = ProductClientServices.parseProductSingle(data);
      if (parsedData.variants && parsedData.variants[0]) {
        router.push(
          `${pathname}/${encodeURIComponent(parsedData.variants[0].id)}`
        );
      }
    }
  }, [data]);

  return <div></div>;
};

export default ProductRedirect;
