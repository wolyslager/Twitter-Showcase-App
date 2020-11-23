import './App.css';
import './index.css'
import React from 'react'
import NavbarComp from './Components/Navbar'
import InfoBoxes from './Components/InfoBoxes'
import SearchBar from './Components/SearchBar'


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      page: 1,
      search: ''
    }

    this.changeTabs = this.changeTabs.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    
  }

  changeTabs(page){
    this.setState({
      page: page
    })
  }

  handleChange(event){
    this.setState({
      search: event.target.value
    })
  }

  handleSubmit(){
    let url = 'http://localhost:3000/'
    fetch(url, {
        headers: {
          'search_value' : this.state.search
        }
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }

  render(){
    if(this.state.page == 1){
       return (
        <div>
          <NavbarComp changeTabs={this.changeTabs} />
          <div className="app-container">
            <div className="title">
              <h1 className="title-text">Twitter API Application</h1>
            </div>
            <div>
              <InfoBoxes />
            </div>
          </div>
        </div>
      );
    } else if(this.state.page ==2) {
       return (
        <div>
          <NavbarComp changeTabs={this.changeTabs}/>
          <div className="search-container">
            <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
          </div>
        </div>
      );
    } else {
         return (
        <div>
          <NavbarComp changeTabs={this.changeTabs}/>
          <div className="search-container">
            
          </div>
        </div>
      );
    }
  }
}

export default App;
