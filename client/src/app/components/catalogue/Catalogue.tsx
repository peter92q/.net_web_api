import { Button } from "@mui/material";
import { Product } from "../../types/product";
import ProductList from "./ProductList";

interface Props {
  products: Product[];
}

const Catalogue = ({products}: Props) => {
  return (
    <>
      <ProductList products={products}/>
      <Button variant="contained">Add Product</Button>
    </>
  )
}

export default Catalogue;