import React, { Component } from "react";
import Header from "./Header";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default class Home extends Component {
  state = {
    data: [],
    page: 1,
    total_pages: 0
  };
  getData = async (page = 1) => {
    try {
      let response = await fetch(`https://reqres.in/api/login?page=${page}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      let data = await response.json();
      this.setState(prevState => ({
        data: [...prevState.data, ...data.data],
        total_pages: 2,
        page: page
      }));
    } catch (e) {
      console.log(e);
    }
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    let { data, page, total_pages } = this.state;
    return (
      <div>
        <Header onLogout={this.props.onLogout} />
        <Container style={{ marginTop: 10 }}>
          <Row>
            {data.map(value => (
              <Col key={value.id} md="4">
                <Card style={{ width: "18rem", margin: 10 }}>
                  <Card.Img
                    variant="top"
                    src={`http://singlecolorimage.com/get/${value.color.replace(
                      "#",
                      ""
                    )}/180x100`}
                  />
                  <Card.Body>
                    <Card.Title>
                      {value.name.toUpperCase()} ({value.year})
                    </Card.Title>
                    <Card.Text>
                      This is a {value.name} color. Its color code is{" "}
                      {value.color} and its pantone value {value.pantone_value}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
            {page != total_pages && (
              <Button onClick={() => this.getData(page + 1)} bg="primary">
                Load More
              </Button>
            )}
          </Row>
        </Container>
      </div>
    );
  }
}
