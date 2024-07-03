import { ProductItem } from "./productItem";

export interface CartProps {
  cart: ProductItem[];
  onAdd: (product: ProductItem) => void;
  onRemove: (product: ProductItem) => void;
}
