import { useParams } from "react-router-dom";
import ProductListItem from "../components/ProductListItem";
import { useContext } from "react";
import { BuildContext } from "../context/BuildContext";
import { products } from "../components/data";

export default function ProductList() {
  const params = useParams();
  let component_list = products[params.component];
  const { build, dispatch } = useContext(BuildContext);
  const handleClick = (product) => {
    const selected = { component: params.component, product: product };
    dispatch({ type: "ADD_PRODUCT", payload: selected });
    console.log(build);
  };
  return (
    <>
      {component_list.map((product) => (
        <ProductListItem
          product={product}
          key={product.name}
          handleClick={handleClick}
        />
      ))}
    </>
  );
}
