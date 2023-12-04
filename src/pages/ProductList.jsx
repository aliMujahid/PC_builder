import { useParams } from "react-router-dom";
import ProductListItem from "../components/ProductListItem";
import { products } from "../components/data";

export default function ProductList() {
  const params = useParams();
  let component_list = products[params.component];
  return (
    <>
      {component_list.map((product) => (
        <ProductListItem product={product} key={product.name} />
      ))}
    </>
  );
}
