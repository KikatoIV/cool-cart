import { ProductItem } from "./productItem";

export interface ProductProps {
  product: ProductItem;
  onAddToCart: (product: ProductItem) => void;
}
