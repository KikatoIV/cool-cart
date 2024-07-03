import { ProductItem } from "./productItem";

export interface ProductGridProps {
  products: ProductItem[];
  onAddToCart: (product: ProductItem) => void;
}
