import React, { Component } from 'react';

import './New.css';


class New extends Component{

    state ={
        image: null,
        author: '',
        place: '',
        description: '',
        hashtags: '',
    }

    handleChange = e =>{
        this.setState({[e.target.name]: e.target.value})
    }


    render(){
        return (
            <form id="new-post">
                <input type="file" />

                <input
                    type="text"
                    name="author"
                    placeholder="Autor do post"
                    onChange={this.handleChange}
                    Value={this.state.author}
                />

                <input
                    type="text"
                    name="place"
                    placeholder="Local do post"
                    onChange={this.handleChange}
                    Value={this.state.place}
                />

                <input
                    type="text"
                    name="description"
                    placeholder="Descrição do post"
                    onChange={this.handleChange}
                    Value={this.state.description}
                />

                <input
                    type="text"
                    name="hashtags"
                    placeholder="Hashtags do post"
                    onChange={this.handleChange}
                    Value={this.state.hashtags}
                    
                />
                <button type="submit">Enviar</button>
            </form>
        )
    }
}

export default New;