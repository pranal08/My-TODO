import React from 'react';
// import CardTile from './CardTile';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import Card from './Card';
import Footer from './Footer';
import '../stylesheets/CardStyle.css';

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="container h-100">
                    <SearchBar />
                    <div className="row">
                        <Card itemName="Item 1" />
                        <Card itemName="Item 2" />
                        <Card itemName="Item 3" />
                        <Card itemName="Item 4" />
                    </div>
                    <div className="row">
                        <Card itemName="Item 5" />
                        <Card itemName="Item 6" />
                        <Card itemName="Item 7" />
                        <Card itemName="Item 8" />
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}
export default App;