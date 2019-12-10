import React from 'react';
import './App.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InputForm from './components/inputBox';
import TodoList from './components/todoList';


toast.configure()

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      text: "",
      todo: []
    }
    this.notify = this.notify.bind(this)
  }

  handleFormSubmit = (event) =>{
    event.preventDefault()
    let {text,todo} = this.state
    
    this.notify()
    
    todo.push({
      item: text
    })
    
    let todoCopy = [...todo]
    
    console.log('form submitted', todo[0].item, todoCopy[0].item)
    
    this.setState({
      text: "",
      todo: todoCopy
    })
    // this.notify()
  }
  
  handleInputChange = (event) =>{
    console.log(event.target.value)
    this.setState({
      text: event.target.value,  
    })
  }
  
  // notify function
  notify = (msg) => {
    let {text} = this.state
    msg = text
    toast(msg);
  }
  
  
  render(){
    let {text,todo} = this.state;
    return (
      <div className="App">
         <TodoList
        items = {todo}/>
        
        <InputForm
        value = {text}
        Submit ={this.handleFormSubmit} 
        inputChange = {this.handleInputChange}
        notify = {this.notify}/>
      </div>
    );
  }
}

export default App;
  

  


