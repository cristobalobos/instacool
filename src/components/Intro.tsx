import * as React from "react";

// interfaz propiedades
interface IIntroProps {
  text?: string;
}

//interfaz estado
interface IIntroState {
  text: string;
  dato: number;
}
export default class Intro extends React.Component<IIntroProps, IIntroState> {
  public state = {
    text: "Soy un texto de estado",
    dato: 1,
  };

  public render() {
    const { text } = this.props;
    const t = text ? text : this.state.text;

    return (
      <p onClick={this.handleClick} className="App-intro">
        <span>{t}</span>
      </p>
    );
  }

  private handleClick = () => {
    this.setState({ text: "Me actualice" });
  };
}
