// import React from 'react';
import React, {Component} from 'react';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: this.props.name,
            hasLoaded: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        this.setState({hasLoaded: true});
    }

    handleChange(e){
        this.setState({
            text: e.target.value
        });
    }

    handleClick(e){
        this.setState({
            hasLoaded: !this.state.hasLoaded
        });
    
    }

   
    render () {
        
        if(this.state.hasLoaded){
            return (
                <React.Fragment>
                <input type="text" placholder= {this.state} onChange = {this.handleChange}></input>
                <button onClick= {this.handleClick}>Click Me</button>
                <h1> Hello {this.props.name} {this.state.text}</h1>
                </React.Fragment>
            )
        }
        else {
            return (
                <React.Fragment>
                <h1>Loading....</h1>
                <button onClick= {this.handleClick}>Click Me</button>
                </React.Fragment>
            )
        }
    }
}

// function App(prop) {
//     return <h1> {prop.change} </h1>;
// }



export default App;