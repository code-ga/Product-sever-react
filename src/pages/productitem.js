import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Col
} from "reactstrap";

class productitem extends Component {
  render() {
    var { product } = this.props;
    return (
      <div className="productitem">
        <Col>
          <Card>
            <CardImg
              top
              width="100%"
              src={product.imageUrl}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle tag="h5">{product.name}</CardTitle>
              <CardText>{product.description}</CardText>
              <Button>add to cart</Button>
            </CardBody>
          </Card>
        </Col>
      </div>
    );
  }
}
export default productitem;
