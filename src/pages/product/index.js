import React, { Component } from 'react'
import api from '../../services/api'
import './styles.css'
import Routes from '../../routes'

export default class Product extends Component {
    state = {
        product: []
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`/products/${id}`)

        this.setState({
            product: response.data
        })
    }
    render() {

        const { product } = this.state;

        return (
            <div className='product-info'>
                <h1>{product.title}</h1>
                <p>{product.description}</p>

                <p>Url: <a href={product.url} target='_blank'>{product.url}</a></p>

            </div>
        );
    }
}