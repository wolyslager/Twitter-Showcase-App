import './App.css';
import './index.css'
import React from 'react'
import NavbarComp from './Components/Navbar'
import InfoBoxes from './Components/InfoBoxes'
import SearchBar from './Components/SearchBar'
import Tweet from './Components/Tweet'
import Footer from './Components/Footer'
import RandomButton from './Components/RandomButton'
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      page: 1,
      search: '',
      random_search: '',
      result: '',
      random_result:'',
      button_users:'info',
      button_keywords:'secondary'
    }
    this.changeTabs = this.changeTabs.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRandomChange = this.handleRandomChange.bind(this);
  }

  changeTabs(page){
    this.setState({
      page: page
    })
  }

  handleChange(event){
    this.setState({
      search: event.target.value,
      random_search: ''
    })
  }

  handleRandomChange(randomWord){
    this.setState({
      search: '',
      random_search: randomWord
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.search == '' && this.state.random_search !== ''){
      if(prevState.random_search !== this.state.random_search){
        this.handleSubmit('random');
      }
    }
  }

  handleSubmit(endpoint){
    let header = endpoint == 'search' ? this.state.search : this.state.random_search;
    let url = 'https://shrouded-atoll-44911.herokuapp.com/'+ endpoint
    fetch(url, {
        headers: {
          'search_value' : header
        }
    })
      .then(response => response.json())
      .then((data) => {
        if(endpoint == 'search'){
          this.setState({
            result: data 
          })
        } else {
          this.setState({
            random_result: data
          })
        } 
      })
  }

  render(){
    if(this.state.page == 1){
       return (
        <div className="app-container-home">
          <NavbarComp changeTabs={this.changeTabs} />
          <div className="title-infoboxes-container">
            <div className="title">
              <h1 className="title-text">Twitter API Application</h1>
            </div>
            <div className="infoboxes-footer-container">
              <InfoBoxes />
               <Footer />
            </div>
          </div>
        </div>
      );
    } else if(this.state.page ==2) {
       return (
        <div className="app-container-search">
          <NavbarComp changeTabs={this.changeTabs}/>
          <div className="search-container">
            <SearchBar 
                handleChange={this.handleChange} 
                handleSubmit={this.handleSubmit} 
                result={this.state.result}
                button_users = {this.state.button_users}
                button_keywords = {this.state.button_keywords}
                toggleButton={this.toggleButton}/>
          </div>
        </div>
      );
    } else {
         return (
        <div>
          <NavbarComp changeTabs={this.changeTabs}/>
          <div className="random-container">
            <RandomButton handleRandomChange = {this.handleRandomChange} random_result={this.state.random_result}/>
          </div>
        </div>
      );
    }
  }
}

export default App;
