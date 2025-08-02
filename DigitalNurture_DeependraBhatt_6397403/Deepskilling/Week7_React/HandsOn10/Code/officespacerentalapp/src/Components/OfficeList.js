import React from "react";
import "./OfficeList.css"; // CSS file for .textRed and .textGreen

const OfficeList = () => {
  const heading = "Office Space";

  const offices = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      Image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    },
    {
      Name: "Regus",
      Rent: 70000,
      Address: "Mumbai",
      Image:
        "https://tse4.mm.bing.net/th/id/OIP.WEwUO7gZCf4zcB0wY1l2FgHaE8?pid=Api&P=0&h=180",
    },
    {
      Name: "Creative Loft",
      Rent: 45000,
      Address: "789 Art Lane, Delhi",
      Iamge:
        "https://tse2.mm.bing.net/th/id/OIP.Vic5xA6CkjyRfv1EXGRZNQAAAA?pid=Api&P=0&h=180",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>{heading}, at Affordable Range</h1>

      {offices.map((item, index) => {
        let colors = [];

        if (item.Rent <= 60000) {
          colors.push("textRed");
        } else {
          colors.push("textGreen");
        }

        const jsxatt = (
          <img
            src={item.Image}
            width="25%"
            height="25%"
            alt="Office Space"
            style={{ borderRadius: "5px", margin: "10px 0" }}
          />
        );

        return (
          <div key={index}>
            {jsxatt}
            <h1>Name: {item.Name}</h1>
            <h3 className={colors.join(" ")}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default OfficeList;
