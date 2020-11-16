import logo from './logo.svg';
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
      page: 1
    }

    this.changeTabs = this.changeTabs.bind(this);
  }

  changeTabs(page){
    this.setState({
      page: page
    })
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
    } else {
       return (
        <div>
          <NavbarComp changeTabs={this.changeTabs}/>
          <div className="search-container">
            <SearchBar />
          </div>
        </div>
      );
    }
  }
}

export default App;
