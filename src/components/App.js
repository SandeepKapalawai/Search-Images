import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from "./imageList";

class App extends React.Component{

    state={
        images :[]
    }

  onSearchSubmit =  async text =>{
        console.log(text);
        const response =await  unsplash.get('/search/photos?query=cars'
       ,{
            params : {query: text}
        });

        console.log(response.data.results);
        this.setState({images :response.data.results });
    };

    render(){
        return(
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
               <ImageList images = {this.state.images}/>
            </div>
        )
    }
    
}

export default App;