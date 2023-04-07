import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Fragment } from "react";
import "./style.css";

const GridLayout = () => {
  const sizes = ["tiny", "small", "medium", "large", "huge"];
  const colors = [
    "navy",
    "blue",
    "aqua",
    "teal",
    "olive",
    "green",
    "lime",
    "yellow",
    "orange",
    "red",
    "maroon",
    "fuchsia",
    "purple",
    "silver",
    "gray",
    "black",
  ];
  const fruits = [
    "apple",
    "banana",
    "watermelon",
    "orange",
    "peach",
    "tangerine",
    "pear",
    "kiwi",
    "mango",
    "pineapple",
  ];

  const items = sizes.reduce(
    (items, size) => [
      ...items,
      ...fruits.reduce(
        (acc, fruit) => [
          ...acc,
          ...colors.reduce(
            (acc, color) => [
              ...acc,
              {
                name: `${size} ${color} ${fruit}`,
                color,
              },
            ],
            []
          ),
        ],
        []
      ),
    ],
    []
  );

  var [listOfItems, setListOfItems] = useState([]);

  const handleClick = (itemName, event) => {
    event.currentTarget.classList.add("selected");

    var dummy;
    if (listOfItems.length > 0) {
      listOfItems.map((list, index) => {
        if (list === itemName) {
          dummy = index;
        }
      });
      // console.log("dummy:", dummy);
    }

    if (dummy === undefined) {
      setListOfItems((oldArray) => [...oldArray, itemName]);
    } else {
      let dummyArray = [...listOfItems];
      dummyArray.splice(dummy, 1);
      setListOfItems(dummyArray);

      event.currentTarget.classList.remove("selected");
    }
  };

  useEffect(() => {
    // console.log("List of Items", listOfItems);
    console.log("rerenders");
  }, [listOfItems]);

  const handleSelecting = () => {};
  return (
    <>
      <div>
        <Row className="mx-5">
          {listOfItems.length > 0 && <h4 className="mt-3"> Items Selected</h4>}
          {listOfItems !== [] &&
            listOfItems?.map((items, index) => {
              return (
                <Col xl="2" key={index}>
                  <p className="text-start">
                    {index + 1}. {items}{" "}
                  </p>
                </Col>
              );
            })}
        </Row>

        <Fragment>
          <ul className="List">
            {items.map((item) => (
              <li
                style={{ cursor: "pointer" }}
                onClick={(event) => handleClick(item.name, event)}
                key={item.name}
                className={`List__item List__item--${item.color}`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </Fragment>
      </div>
    </>
  );
};

export default GridLayout;
