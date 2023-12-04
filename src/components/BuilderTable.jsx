import { useNavigate } from "react-router-dom";

export default function BuilderTable() {
  let navigate = useNavigate();
  const handleClick = (e) => {
    navigate("/productList/" + e.target.id);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Componets</th>
          <th>Products</th>
          <th>Unit Price</th>
          <th>Quantity</th>
          <th>subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td id="motherBoard" onClick={handleClick}>
            Mother Board
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td id="processor" onClick={handleClick}>
            Processor
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td id="ram" onClick={handleClick}>
            RAM
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td id="cpuFan" onClick={handleClick}>
            CPU Fan
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td id="hardDrive" onClick={handleClick}>
            Hard Drive
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td id="powerSupply" onClick={handleClick}>
            Power Supply
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td id="casing" onClick={handleClick}>
            Casing
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="4">Total</td>
        </tr>
      </tfoot>
    </table>
  );
}
