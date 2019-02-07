import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import TextBox from './TextBox.js';

const div1Style= {
textAlign:'center',
};

const butDivStyle={
  textAlign:'center', 
};

const butStyle={
  height:'50px',
  width:'50px',
};


export default class App extends Component {

  constructor(props)
  {
    super(props);
    this.state={
       value:"",
       operator:""
        };
    this.changeTboxValue=this.changeTboxValue.bind(this);
    this.handleOpClick=this.handleOpClick.bind(this);
  };

  handleOpClick(e)
  {
    if(e.target.id=='+' || e.target.id=='-' || e.target.id=='*' || e.target.id=='/')
    {
        this.setState({
          n1:this.state.value,
          value:"",
          operator:e.target.id,
        });
    }
      else
      {
        if(e.target.id=='C')
        {
          this.setState({
            value:"",
            operator:"",
          });
        }
        else
        {
          var n2=this.state.value;
          var op=this.state.operator;
          if(op=='+')
          alert(this.state.n1 +" + "+n2+" is : "+parseFloat(parseFloat(this.state.n1)+parseFloat(n2)));
          else if(op=='-')
          alert(this.state.n1+" - " +n2+" is : "+parseFloat(parseFloat(this.state.n1)-parseFloat(n2)));
          else if(op=='*')
          alert(this.state.n1+" * "+n2+" is : "+parseFloat(parseFloat(this.state.n1)*parseFloat(n2)));
          else
          alert(this.state.n1+" / "+n2+" is: "+parseFloat(parseFloat(this.state.n1)/parseFloat(n2)));
          this.setState({
            value:"",
            operator:"",
          });
        }
        }
  }

 changeTboxValue(e)
 {
   var v=e.target.id;
   this.setState({
     value:this.state.value+v,
    });
 }
  render() 
  {
    return (
      <div style={div1Style}>
      <hr/><h1>CALCULATOR</h1><hr/>
        <div style={butDivStyle}>
        <TextBox value={this.state.value}/><br/>
        <button id="1" style={butStyle} onClick={(e)=>this.changeTboxValue(e)}>1</button>
        <button id="2" style={butStyle} onClick={(e)=>this.changeTboxValue(e)}>2</button>
        <button id="3" style={butStyle} onClick={(e)=>this.changeTboxValue(e)}>3</button>
        <button id="4" style={butStyle} onClick={(e)=>this.changeTboxValue(e)}>4</button><br/>
        <button id="5" style={butStyle} onClick={(e)=>this.changeTboxValue(e)}>5</button>
        <button id="6" style={butStyle} onClick={(e)=>this.changeTboxValue(e)}>6</button>
        <button id="7" style={butStyle} onClick={(e)=>this.changeTboxValue(e)}>7</button>
        <button id="8" style={butStyle} onClick={(e)=>this.changeTboxValue(e)}>8</button><br/>
        <button id="9" style={butStyle} onClick={(e)=>this.changeTboxValue(e)}>9</button>
        <button id="0" style={butStyle} onClick={(e)=>this.changeTboxValue(e)}>0</button>
        <button id="+" style={butStyle} onClick={(e)=>this.handleOpClick(e)}>+</button>
        <button id="-" style={butStyle} onClick={(e)=>this.handleOpClick(e)}>-</button><br/>
        <button id="C" style={butStyle} onClick={(e)=>this.handleOpClick(e)}>C</button>
        <button id="*" style={butStyle} onClick={(e)=>this.handleOpClick(e)}>*</button>
        <button id="/" style={butStyle} onClick={(e)=>this.handleOpClick(e)}>/</button>
        <button id="=" style={butStyle} onClick={(e)=>this.handleOpClick(e)}>=</button>
        </div>
      </div>
    );
  }
}