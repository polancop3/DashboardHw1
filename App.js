import React from 'react'
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <div className ='app'>
        <Sidebar />
        <Reviews />
        <AverageRating />
        <SentimentAnalysis />
        <WebsiteVisitors />
      </div>
    )
  }
}

class Sidebar extends React.Component{
  render(){
    return(
      <div className='sidebar'>
      <h3>Dashboard</h3>
        <h3>Widget</h3>
        <h3>Reviews</h3>
        <h3>Customers</h3>
        <h3>Online Analysis</h3>
        <h3>Settings</h3>
        </div>
    )
  }
}
class Reviews extends React.Component{
  render(){
    return(
      <div className='reviews'>
        <h2>Reviews</h2>
        <h3>1,281</h3>
      </div>
    )
  }
}
class AverageRating extends React.Component{
  render(){
    return(
      <div className='rating'>
        <h2>AVG Rating</h2>
        <h3>4.6</h3>
      </div>
    )
  }
}
class SentimentAnalysis extends React.Component{
  render(){
    return(
      <div className='sentiment'>
        <h2>Sentiment analysis</h2>
        <h3>960</h3>
        <h3>122</h3>
        <h3>321</h3>
      </div>
    )
  }
}
class WebsiteVisitors extends React.Component{
  render(){
    return(
      <div className='visitors'>
        <h2>WebsiteVisitors</h2>
        <h3>826</h3>
        <div className='visitor-background'></div>
      </div>
    )
  }
}



 export default App;
