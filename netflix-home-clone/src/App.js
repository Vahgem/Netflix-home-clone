import React from 'react';
import './App.css';
import Row from './Row';
import request from './request';
import Banner from './Banner';
import Nav from './Nav';
function App() {
  return (
    <div className="App">
     
      <Nav/>
      <Banner />
      <Row title="Netflix Originals" 
      fetchurl={request.fetchNetflixOriginals}
      isLargeRow={true}/>   
      
      <Row title="Trending Now" fetchurl={request.fetchTrending}/>
      <Row title="Top Rated" fetchurl={request.fetchTopRated}/>
      <Row title="Action Movies" fetchurl={request.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchurl={request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchurl={request.fetchHorrorMovies}/>
      <Row title="Documentaries" fetchurl={request.fetchDocumentaries}/>
    
    </div>
  );
}

export default App;
