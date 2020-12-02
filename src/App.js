import './App.css';
import './index.css'
import React from 'react'
import NavbarComp from './Components/Navbar'
import InfoBoxes from './Components/InfoBoxes'
import SearchBar from './Components/SearchBar'
import Footer from './Components/Footer'
import Button from 'react-bootstrap/Button';


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      page: 1,
      search: '',
      result: '',
      button_users:'info',
      button_keywords:'secondary'
    }
    this.changeTabs = this.changeTabs.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
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
    let endpoint = this.state.button_users == 'info' ? 'users' : 'keywords';
    let url = 'http://localhost:3000/'+endpoint
    fetch(url, {
        headers: {
          'search_value' : this.state.search
        }
    })
      .then(response => response.json())
      .then((data) => {
        this.setState({
          result: data
        })
      })
  }

  toggleButton(id){
    if(id == 'users'){
      let other = this.state.button_users == 'info' ? 'secondary' : 'info';
      let current = this.state.button_users
      this.setState({
        button_users : other,
        button_keywords: current
      })
    } else {
      let other = this.state.button_keywords == 'info' ? 'secondary' : 'info';
      let current = this.state.button_keywords
      this.setState({
        button_keywords : other,
        button_users : current
      })
    }
  }

  render(){
    if(this.state.page == 1){
       return (
        <div className="app-container">
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
        <div className="app-container">
          <NavbarComp changeTabs={this.changeTabs}/>
          <div className="search-container">
            <SearchBar handleChange={this.handleChange} handleSubmit={this.handleSubmit} result={this.state.result}/>
            <div className="button-container">
               <Button className="button" variant={this.state.button_users} size="lg" onClick={() => this.toggleButton('users')}>Users</Button>
               <Button className="button" variant={this.state.button_keywords} size="lg" onClick={() => this.toggleButton('keywords')}>Keywords</Button>
             </div>
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
