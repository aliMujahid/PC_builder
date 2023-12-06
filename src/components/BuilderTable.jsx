import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BuildContext } from "../context/BuildContext";

export default function BuilderTable() {
  let navigate = useNavigate();
  const componentList = [
    { name: "Mother Board", id: "motherBoard" },
    { name: "Processor", id: "processor" },
    { name: "CPU Fan", id: "cpuFan" },
    { name: "RAM", id: "ram" },
    { name: "Hard Drive", id: "hardDrive" },
    { name: "Power Supply", id: "powerSupply" },
    { name: "Casing", id: "casing" },
  ];
  const handleClick = (e) => {
    navigate("/productList/" + e.target.id);
  };
  const { build } = useContext(BuildContext);

  const calculateTotal = () => {
    const productList = Object.values(build);
    let total = 0;
    productList.forEach((element) => {
      total = total + element["price"];
    });
    return total;
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Componets</th>
          <th>Products</th>
          <th>Unit Price</th>
        </tr>
      </thead>
      <tbody>
        {componentList.map((component) => {
          return (
            <tr key={component.id}>
              <td id={component.id} onClick={handleClick}>
                {component.name}
              </td>
              {build[component.id] ? (
                <>
                  <td>{build[component.id]["name"]}</td>
                  <td>{build[component.id]["price"]}</td>
                </>
              ) : (
                <>
                  <td></td>
                  <td></td>
                </>
              )}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="2">Total</td>
          <td>{calculateTotal()}</td>
        </tr>
      </tfoot>
    </table>
  );
}
