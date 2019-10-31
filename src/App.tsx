import React from 'react';
import './App.css';
import { getListCategory } from './controllers/api-controller';

type CategoryState = {
  id :string;
  title :string;
}

class App extends React.Component {

  state = {
    list: []
  }

  componentDidMount(){
    getListCategory()
    .then(res => res.data.result)
    .then( cartegories => this.setState({ list: cartegories }) )
  }

  render(){
    const {list} = this.state;

    return (
      <div>
        <ul>
          {list.map(({id,title} :CategoryState) => 
              (<li key={id}>{id} - {title}</li>) 
          )}
        </ul>
      </div>
    );
  }
}

export default App;
