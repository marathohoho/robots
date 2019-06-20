import React from 'react';
import CardList from '../components/CardList';
import {robots} from '../Robots'; // need to make a destructure because not default
import SearchBox from '../components/SearchBox';
import 'tachyons';
import Scroll1 from '../components/Scroll.js';


// we need state to interact parents with children



class App extends React.Component{
    constructor(){
        //only pass props when I want to access props from the constructor
        super() 
        //state changes 
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())       
        .then(users => this.setState({robots: users}));
    }

    // creating a random name FUNCTION that will monitor changes in the searchbox
    onSearchChange = (event) => {
        this.setState({ searchfield : event.taget.value});
    }
    
    render() {
        // filtering all the robots and creating a new array 
        // with thw required robots
        const {robots, searchfield} = this.state;
        const filterRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchfield.toLocaleLowerCase());
        })
        return !robots.length ? 
            <h1>Loading</h1> :  
            (
                // text center
                <div className='tc'>
                    <h1>Robo Friends</h1>
                    {/* these are PROPS */}
                    <SearchBox searchChange={this.onSearchChange}/>
                    {/* now can access the robots from THIS same class */}
                    {/* passing robots as reference to our cardList function 
                    with robots argument */}
                    {/* the left side of the assignment must be equal to the argument
                    inside the child function */}
                    <Scroll1>
                        <CardList robots = {filterRobots}/> 
                    </Scroll1>
                </div>
            );
    }
}

export default App;