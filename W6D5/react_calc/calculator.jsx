import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);

    this.state = {input1: '', input2: '', result:0};
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
    this.add = this.add.bind(this);
    this.subtract = this.subtract.bind(this);
    this.multiply = this.multiply.bind(this);
    this.divide = this.divide.bind(this);
    this.clear = this.clear.bind(this);
  }

  setNum1(e) {
    this.setState({input1: parseInt(e.target.value)})
  }
  setNum2(e) {
    this.setState({input2: parseInt(e.target.value)})
  }

  add(e){
   e.preventDefault();
   const result = this.state.input1 + this.state.input2;
   this.setState({ result });
 }

 subtract(e){
   e.preventDefault();
   const result = this.state.input1 - this.state.input2;
   this.setState({ result });
 }

 multiply(e){
   e.preventDefault();
   const result = this.state.input1 * this.state.input2;
   this.setState({ result });
 }

 divide(e){
   e.preventDefault();
   const result = this.state.input1 / this.state.input2;
   this.setState({ result });
 }

 clear(e){
   e.preventDefault();
   this.setState({ input1: "", input2: "", result: 0 });
 }

  render(){
    return (
      <div>
        <h1>{this.state.result}</h1>
          <input onChange={this.setNum1} value={this.state.input1}/>
        <input onChange={this.setNum2} value={this.state.input2}/>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>*</button>
        <button onClick={this.divide}>/</button>

      </div>
    );
  }
}

export default Calculator;
