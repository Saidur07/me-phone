import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { ImCross } from "react-icons/im";
import Modal from "react-modal";

//Modal styles
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const Shop = () => {
  const [phones, setPhones] = useState([]);
  const [phoneArr, setPhoneArr] = useState([]);
  const [drawItem, setDrawItem] = useState({});

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);

  let selectedPhone = [];
  const handleAddToCart = (props) => {
    selectedPhone = [...phoneArr, props];
    setPhoneArr(selectedPhone);
  };
  const draw = (array) => {
    //Lucky draw logic
    if (array.length === 0) {
      return;
    } else {
      const random = Math.floor(Math.random() * array.length);
      const luckyProductArr = phoneArr[random];
      setDrawItem(luckyProductArr);
      openModal();
    }
  };
  const reset = () => {
    setPhoneArr([]);
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);
  //Modal open function
  function openModal() {
    setIsOpen(true);
  }
  // Modal close function
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="container">
      <div className=" shop-grid">
        <div className="grid">
          {phones.map((phone) => (
            <Product
              handleAddToCart={handleAddToCart}
              key={phone.id}
              phone={phone}
            ></Product>
          ))}
        </div>
        <div className="cart">
          <div className="sticky">
            <h4 className="text-center decision">Order Summery</h4>
            <div className="cart-info">
              {phoneArr.map((phone) => (
                <Cart key={phone.id} phone={phone}></Cart>
              ))}
              <div className="text-center group">
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <ImCross className="cross" onClick={closeModal}></ImCross>
                  <img className="modal-image" src={drawItem.img} alt="" />
                  <h3 className="modal-header py-0 mb-0">{drawItem.name}</h3>
                  <h4 className="modal-header py-2">${drawItem.price}</h4>
                  <button className="order-now btn my-3" onClick={closeModal}>
                    Order Now
                  </button>
                </Modal>
                <button
                  className="btn w-75 my-3 button-size"
                  onClick={() => draw(phoneArr)}
                >
                  Lucky Draw
                </button>
                <button className="btn w-75 button-size" onClick={reset}>
                  Choose again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
