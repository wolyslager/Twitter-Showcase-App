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
      keyword_button_class:'btn-success',
      user_button_class:'btn-secondary',
      search: '',
      random_search: '',
      search_type: 'keyword',
      result: '',
      user_result: '',
      random_result:'',
      button_users:'info',
      button_keywords:'secondary',
      profileArray : ['playstation', 'ferrari', 'microsoft', 'realmadrid', 'patagonia', 'netflix', 'porsche', 'elonmusk'],
      randomProfiles : [],
      randomProfilesTweets: [],
      loading: false
    }
    this.changeTabs = this.changeTabs.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRandomChange = this.handleRandomChange.bind(this);
    this.handleSearchType = this.handleSearchType.bind(this);
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

  componentDidMount(){
    let randomProfiles = [];
    let promises = [];
    let profiles = this.state.profileArray;
    profiles.forEach((profile) => {
      promises.push(
      fetch('/random-users', {
        headers: {
          'search_value' : profile
        }
       })
      .then(response => response.json())
      .then((data) => {  
           let profileInfo = data;
           fetch('/random-users-tweets', {
            headers: {
              'search_value' : profile
             }
            })
            .then(response => response.json())
            .then((data) => {
                let profileTweets = data;
                randomProfiles.push([profileInfo, profileTweets])
          })
      })
     )
    }) 

    Promise.all(promises).then(() => {
      this.setState({
        randomProfiles : randomProfiles
      })
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
    this.setState({loading: true})
    let header = endpoint == 'search' || endpoint == 'search-user' ? this.state.search : this.state.random_search;
    let url = '/'+ endpoint
    fetch(url, {
        headers: {
          'search_value' : header
        }
    })
      .then(response => response.json())
      .then((data) => {
        if(endpoint == 'search'){
          this.setState({
            result: data ,
            user_result: '',
            loading: false
          })
        } else if (endpoint == 'search-user') {
          this.setState({
            user_result: data,
            result: '', 
            loading: false
          })
        } else {
          this.setState({
            random_result: data
          })
        }
      })
  }

  handleSearchType(button){
    if(button == 'keyword'){
      this.setState({
        keyword_button_class: 'btn-success',
        user_button_class: "btn-secondary",
        search_type: 'keyword'
      })
    } else {
      this.setState({
        keyword_button_class: 'btn-secondary',
        user_button_class: "btn-success",
        search_type: 'user'
      })
    }
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
                handleSearchType={this.handleSearchType}
                keyword_button_class = {this.state.keyword_button_class}
                user_button_class = {this.state.user_button_class}
                handleChange={this.handleChange} 
                handleSubmit={this.handleSubmit} 
                result={this.state.result}
                button_users = {this.state.button_users}
                button_keywords = {this.state.button_keywords}
                toggleButton={this.toggleButton}
                search_type={this.state.search_type}
                user_result={this.state.user_result}
                loading={this.state.loading}/>
          </div>
        </div>
      );
    } else {
         return (
        <div className="random-page">
          <NavbarComp changeTabs={this.changeTabs}/>
          <div className="random-container">
            <RandomButton 
              user_result = {this.state.randomProfiles} 
              user_result_tweets ={this.state.randomProfilesTweets}/>
          </div>
        </div>
      );
    }
  }
}

export default App;