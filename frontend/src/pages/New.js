import React, { Component } from 'react';
import './New.css';

import api from '../services/api';

export default class New extends Component {
    state = {
        image: null,
        author: '',
        place: '',
        description: '',
        hashtags: '',
    };

    handleCange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleImageCange = event => {
        this.setState({ image: event.target.files[0] });
    }

    handleSubmit = async event => {
        event.preventDefault();

        const data = new FormData();

        data.append('image', this.state.image);
        data.append('author', this.state.author);
        data.append('place', this.state.place);
        data.append('description', this.state.description);
        data.append('hashtags', this.state.hashtags);
        
        await api.post('/post', data);

        this.props.history.push('/');
    }

    render() {
        return (
            <form id="new-post" onSubmit={this.handleSubmit}>
                <input
                    type="file"
                    onChange={this.handleImageCange}
                />

                <input
                    type="text"
                    name="author"
                    placeholder="Autor do post"
                    value={this.state.author}
                    onChange={this.handleCange}
                />

                <input
                    type="text"
                    name="place"
                    placeholder="Local do post"
                    value={this.state.place}
                    onChange={this.handleCange}
                />

                <input
                    type="text"
                    name="description"
                    placeholder="Descrição do post"
                    value={this.state.description}
                    onChange={this.handleCange}
                />

                <input
                    type="text"
                    name="hashtags"
                    placeholder="Hashtags do post"
                    value={this.state.hashtags}
                    onChange={this.handleCange}
                />

                <button type="submit">Compartilhar</button>
            </form>
        );
    }
}