import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { validateEmail } from "../utils";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    loading: false
  };
  _onEmailEnter = e => {
    this.setState({ email: e.target.value });
  };
  _onPasswordEnter = e => {
    this.setState({ password: e.target.value });
  };
  _onLogin = async () => {
    try {
      let { email, password } = this.state;
      this.setState({ loading: true });
      let response = await fetch(`https://reqres.in/api/login`, {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email, password: password })
      });
      let data = await response.json();
      console.log(data);
      if (data) {
        this.props.onLogin();
        localStorage.setItem("loginData", JSON.stringify(data));
      }
      this.setState({ loading: false });
    } catch (e) {
      this.setState({ loading: false });
      console.log(e);
    }
  };
  render() {
    let { email, password, loading } = this.state;
    return (
      <div style={{ paddingTop: 100 }}>
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 3 }}>
              <h1>Login Here</h1>
            </Col>
            <Col
              md={{ span: 6, offset: 3 }}
              style={{
                border: "1px solid #ccc",
                padding: 30,
                marginTop: 20,
                borderRadius: 5
              }}
            >
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={this._onEmailEnter}
                    type="email"
                    placeholder="Enter email"
                  />
                  {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text> */}
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={this._onPasswordEnter}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>

                <Button
                  disabled={
                    !(email.length > 0 && password.length > 0) || loading
                  }
                  onClick={this._onLogin}
                  variant="primary"
                  type="button"
                >
                  {!loading ? "Submit" : "Loading…"}
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
