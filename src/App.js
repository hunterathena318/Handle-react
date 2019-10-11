import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
      this.state={
        firstname: '',
        lastname: '',
        show: '',
      }
    }

 
   handleChange = (event) => {
     let name = event.target.name
    this.setState({
      [name]: event.target.value
    })
  } 
  // handleChangelast = (event) => {
  //   this.setState({
  //     lastname: event.target.value
      
  //   })
  // }
  handeClick = (event) => {
    alert('first name: ' + this.state.firstname + '  '  + 'last name:' +this.state.lastname);
    event.preventDefault();
    this.setState({
      show: this.state.firstname + this.state.lastname
    })
  }
  render() {
    var a = [1,2,4,5]
     var list = a.map((item,index)=>{
      return  <li key={index}>{item}</li>
     })
     console.log(list);
    return (
      <div>
        {list}
          first name : <input type="text" value={this.state.firstname} name="firstname" onChange={this.handleChange} /><br/>
          last name : <input type="text" value={this.state.lastname}  name="lastname" onChange={this.handleChange} />
          <input type="submit" onClick={this.handeClick}/> <br/>
          {this.state.show}
      </div>
    );
  }
}

export default App;