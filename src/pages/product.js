import React, { Component } from "react";
import Productitem from "./productitem";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: []
    };
  }
  componentDidMount() {
    axios.get("https://4sqqo.sse.codesandbox.io/product").then((res) => {
      this.setState({
        product: res.data
      });
    });
  }
  render() {
    var { product } = this.state;
    return (
      <div className="product">
        <Container>
          <h2>product</h2>
          <Row>
            {product.map((product, index) => (
              <Col sm="4">
                <Productitem product={product} key={index} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}
export default Product;
