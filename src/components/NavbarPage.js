import React, { ReactDOM } from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconPharmacy from "@material-ui/icons/LocalPharmacyOutlined";
import IconUser from "@material-ui/icons/SupervisedUserCircleOutlined";
import SettingsModal from "./SettingsModal";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  FormInline,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  MDBIcon,
  Fa
} from "mdbreact";

class NavbarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      settingsModalState: false
    };
  }
  toggleCollapse = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  closeModal =(event) => {
    this.setState(
      state => ({
        settingsModalState: false
      }));
  }
  openModal = (event) => {
    console.log("clicked on " + event.currentTarget.textContent);
    if (event.currentTarget.textContent === "Settings") {
      this.setState(
        state => ({
          settingsModalState: true
        }),
        () => {
          console.log("Modal State: " + this.state.settingsModalState);
        }
      );
    }
  };

  render() {
    return (
      <div>
        <SettingsModal modalState={this.state.settingsModalState} handleModalClose={this.closeModal}/>
        <Navbar color="indigo" dark expand="md">
          <NavbarBrand>
            <IconPharmacy />
            <strong className="white-text">ePrescriptions</strong>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleCollapse} />
          <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <NavbarNav left>
              <NavItem active>
                <NavLink to="/home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#!">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#!">Pricing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>
                    <div className="d-none d-md-inline">Dropdown</div>
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem href="#!">Action</DropdownItem>
                    <DropdownItem href="#!">Another Action</DropdownItem>
                    <DropdownItem href="#!">Something else here</DropdownItem>
                    <DropdownItem href="#!">Something else here</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <FormInline waves>
                  <div className="md-form my-0">
                    <input
                      className="form-control mr-sm-2"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </div>
                </FormInline>
              </NavItem>
              <NavItem>
                <NavLink className="waves-effect waves-light" to="#!">
                  <Fa icon="twitter" />
                </NavLink>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>
                    <Fa icon="user" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-default" right>
                    <DropdownItem href="#!">User Name</DropdownItem>
                    <DropdownItem href="#!" onClick={this.openModal}>
                      Settings
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarPage;
