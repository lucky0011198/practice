import React from "react";
import { render } from "react-dom";
import { Drawer } from "rsuite";
import { ButtonToolbar } from "rsuite";
import { IconButton } from "rsuite";
import { Icon } from "rsuite";
import { Container } from "rsuite";
import { Form, FormGroup, FormControl, ControlLabel, HelpBlock } from "rsuite";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: "xs",
      show: false,
      sho: false,
      name: "",
      notice: "",
      date: "",
    };
    this.close = this.close.bind(this);
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
  }
  handleInputChanged(event) {
    this.setState({
      name: event.target.value,
    });
  }
  handleInputNotice(event) {
    this.setState({
      notice: event.target.value,
    });
  }
  handleInputDate(event) {
    this.setState({
      date: event.target.value,
    });
  }

  handleButtonClicked() {
    var name = this.state.name;
    var notice = this.state.notice;
    var date = this.state.date;
    console.log(name);
    console.log(notice);
    console.log(date);
  }
  close() {
    this.setState({
      show: false,
      sho: false,
    });
  }

  toggleDrawer(placement) {
    this.setState({
      placement,
      show: true,
    });
  }
  toggle(placement) {
    this.setState({
      placement,
      sho: true,
    });
  }
  handleChangeSize(xs) {
    this.setState({ xs });
  }
  render() {
    const { placement, show, sho } = this.state;

    return (
      <div>
        <ButtonToolbar
          style={{
            marginTop: "1%",
            marginRight: "1%",
            position: "fixed",
            left: "90%",
            width: "20%",
          }}
        >
          <IconButton
            icon={<Icon icon="plus" />}
            onClick={() => this.toggleDrawer("right")}
          >
            ADD
          </IconButton>
        </ButtonToolbar>
        <div style={{ marginLeft: "1%", position: "fixed" }}></div>
        <ButtonToolbar
          style={{
            margin: "10px",
            position: "fixed",
            top: "90%",
            fontFamily: "sans-serif",
          }}
        >
          <IconButton
            icon={<Icon icon="chevron-circle-up" />}
            onClick={() => this.toggle("bottom")}
          >
            DMCA
          </IconButton>
        </ButtonToolbar>

        <Drawer
          size={"xs"}
          placement={placement}
          show={sho}
          onHide={this.close}
        >
          <Drawer.Header>
            <Drawer.Title style={{ marginLeft: "10%", marginRight: "10%" }}>
              DMCA
            </Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <Container style={{ marginLeft: "10%", marginRight: "10%" }}>
              If we Have added some content that belong to you or your
              organization by mistake, We are sorry for that. We apologize for
              that and assure you that this wont be repeated in future. If you
              are rightful owner of the content used in our Website, Please mail
              us with your Name, Organization Name, Contact Details, Copyright
              infringing URL and Copyright Proof (URL or Legal Document) at
              varkallaxmikant62@gmail.com I assure you that, I will remove the
              infringing content Within 48 Hours.
            </Container>
          </Drawer.Body>
        </Drawer>
        <Drawer
          size={"xs"}
          placement={placement}
          show={show}
          onHide={this.close}
        >
          <Drawer.Header>
            <Drawer.Title style={{ margin: "5%", textAlign: "center" }}>
              <ButtonToolbar>
                <IconButton icon={<Icon icon="th-large" />}>
                  Menu items
                </IconButton>
              </ButtonToolbar>
            </Drawer.Title>
          </Drawer.Header>
          <Drawer.Body   style={{textAlign: "center"}}>
            <Form >
              
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.handleInputChanged.bind(this)}
                style ={{ width :"80%" ,padding:"2%",margin:"2%"}}
                />
              
              <input
                type="text"
                value={this.state.notice}
                onChange={this.handleInputNotice.bind(this)}
style ={{ width :"80%" ,padding:"2%",margin:"2%"}}
              />
              <input
                type="text"
                value={this.state.date}
                onChange={this.handleInputDate.bind(this)}
style ={{ width :"80%" ,padding:"2%",margin:"2%"}}
              />
<div/>
              <button onClick={this.handleButtonClicked.bind(this)}>
                Submit
              </button>
            </Form>
          </Drawer.Body>
        </Drawer>
      </div>
    );
  }
}

const App = () => (
  <>
    <div className="nav-wrapper">
      <Demo appearance="subtle" />
    </div>
  </>
); 
render(<App />, document.getElementById("root"));
export default App;