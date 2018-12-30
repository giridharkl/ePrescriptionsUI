import React from "react";
import { Container, Footer } from "mdbreact";

class FooterPage extends React.Component {
  render() {
    return (
      <Footer color="indigo" className="fixed-bottom footer-copyright font-small py-3">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="https://www.ePrescriptions.com">ePrescriptions.com</a>
          </Container>
      </Footer>
    );
  }
}

export default FooterPage;
