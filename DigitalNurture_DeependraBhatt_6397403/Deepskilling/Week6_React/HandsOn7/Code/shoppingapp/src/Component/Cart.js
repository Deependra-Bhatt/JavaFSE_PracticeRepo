import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    const { item } = this.props;

    return (
      <div style={{ display: "inline-block", marginTop: "20px" }}>
        <table border="1" cellPadding="1" >
          <thead style={{color:"rgba(42, 203, 42, 1)"}}>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody style={{color:"rgba(97, 207, 97, 1)"}}>
            {item.map((product, index) => (
              <tr key={index}>
                <td>{product.itemname}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
