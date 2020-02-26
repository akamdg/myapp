import React, {Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
    state = {
        ninjas: [
            {
                name: 'Ryu',
                age: 30,
                belt: 'black',
                training: 'Aikido',
                key: 1
            }, {
                name: 'Fred',
                age: 35,
                belt: 'green',
                training: 'Kung Fu',
                key: 2
            }, {
                name: 'Jamie',
                age: 60,
                belt: 'yellow',
                training: 'Judo',
                key: 3
            }
        ]
    }
    addNinja = (ninja) => {
      ninja.key = Math.random();
      let ninjas = [...this.state.ninjas, ninja];
      this.setState({
        ninjas: ninjas
      });
    }
    deleteNinja = (key) => {
      let ninjas = this.state.ninjas.filter(ninja => {
        return ninja.key !== key
      });
      this.setState({
        ninjas: ninjas
      });
    }
    componentDidMount(){
      console.log('component mounted')
    }
    componentDidUpdate(prevProps, prevState){
      console.log('component updated')
      console.log(prevProps, prevState)
    }
    render() {
        return (
            <div className="App">
                <h1>My first React app!</h1>
                <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
                <AddNinja addNinja={this.addNinja} />
            </div>
        );
    }
}

export default App;


//Currently on Complete React Tutorial (& Redux) #19 - Deleting Data