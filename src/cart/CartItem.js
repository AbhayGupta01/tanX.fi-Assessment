// Misc imports
import React from "react";
import { Trash2 } from "react-feather";
import { useDispatch } from "react-redux";
import { Button, Card, CardBody, CardImg, Col, Row } from "reactstrap";
import { handleAdjustQuantity, handleRemoveFromCart } from "../store";
import toast from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(handleRemoveFromCart(item.id));  // Pass only the id to the action
    toast.success("Item Removed");
  };
  return (
    <Card className="mb-2">
      <CardBody>
        <Row key={item.id}>
          <Col sm="4">
            <CardImg
              alt="Card image"
              style={{
                width: "100%",
                height: "20vh",
                objectFit: "cover",
              }}
              src={item.image}
            />
          </Col>
          <Col sm="6">
            <h4 className="mb-2">{item.title}</h4>
            <p>${item.amount}</p>
            <p>
              <Button
                color="primary"
                outline
                onClick={() => {
                  return item.quantity > 1 ?
                  dispatch(
                    handleAdjustQuantity({
                      id: item.id,
                      quantity: item.quantity - 1, // Decreasing the Quantity by 1
                    })
                  ) :
                  toast.error("Minimum quantity is 1");
                }}
              >
                -
              </Button>
              <span className="mx-3">{item.quantity}</span>
              <Button
                color="primary"
                outline
                onClick={() => {
                  return item.quantity > 1 && item.quantity <= 10 ?
                  dispatch(
                    handleAdjustQuantity({
                      id: item.id,
                      quantity: item.quantity + 1, // Decreasing the Quantity by 1
                    })
                  ) :
                  toast.error("You can't add more than 10 items");
                }}
              >
                +
              </Button>
            </p>
          </Col>
          <Col className="d-flex justify-content-center  align-items-center">
            <Button color="link">
              <Trash2
                className="text-danger"
                onClick={handleRemoveItem}
              />
            </Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default CartItem;
