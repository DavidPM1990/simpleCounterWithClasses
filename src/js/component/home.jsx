import React from "react";
import "../../styles/index.css";
import SecondsCounter from "./counter";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isRunning: true,
    };
  }

  componentDidMount() {
    this.startInterval();
  }

  componentWillUnmount() {
    this.stopInterval();
  }

  startInterval() {

    this.stopInterval();

    this.intervalId = setInterval(() => {
      let six = Math.floor((this.state.counter / 100000) % 10);
      let five = Math.floor((this.state.counter / 10000) % 10);
      let four = Math.floor((this.state.counter / 1000) % 10);
      let three = Math.floor((this.state.counter / 100) % 10);
      let two = Math.floor((this.state.counter / 10) % 10);
      let one = this.state.counter % 10;

      console.log(
        "Este es el contador de cada digito!!!! ----->",
        six,
        five,
        four,
        three,
        two,
        one
      );

      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    }, 1000);
  }

  stopInterval() {
    clearInterval(this.intervalId);
  }

  resetCounter() {
    this.setState({ counter: 0 });
  }

  pauseCounter() {
    this.stopInterval();
    this.setState({ isRunning: false });
  }

  resumeCounter() {
    this.startInterval();
    this.setState({ isRunning: true });
  }

  render() {
    let six = Math.floor((this.state.counter / 100000) % 10);
    let five = Math.floor((this.state.counter / 10000) % 10);
    let four = Math.floor((this.state.counter / 1000) % 10);
    let three = Math.floor((this.state.counter / 100) % 10);
    let two = Math.floor((this.state.counter / 10) % 10);
    let one = this.state.counter % 10;

    return (
      <div>
        <SecondsCounter
          digitOne={one}
          digitTwo={two}
          digitThree={three}
          digitFour={four}
          digitFive={five}
          digitSix={six}
        />
        <div className="d-flex justify-content-center m-5">
          <div className="mx-2"><button className="btn btn-warning" onClick={() => this.pauseCounter()}>Stop</button></div>
          <div className="mx-2"><button className="btn btn-success" onClick={() => this.resumeCounter()}>Resume</button></div>
          <div className="mx-2"><button className="btn btn-danger" onClick={() => this.resetCounter()}>Reset</button></div>
            <form>
              <label for="numeroInput">Número:</label>
              <input type="number" id="numeroInput" name="numeroInput" required/>
              <input type="submit" value="Enviar"/>
            </form>
        </div>
      </div>
    );
  }
}

export default Home;
