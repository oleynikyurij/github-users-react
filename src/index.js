import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWithData from './App';

import {	ApolloProvider} from 'react-apollo';
import {	ApolloClient} from 'apollo-client';
import {	HttpLink} from 'apollo-link-http';
import {	InMemoryCache} from 'apollo-cache-inmemory';

const token = "1279fc0222d2d85581eb26d173bdf7f3f447f474";

const httpLink = {
	uri: 'https://api.github.com/graphql',
	headers: {
		authorization: `Bearer ${token}`
	}
};

const client = new ApolloClient({
	link: new HttpLink(httpLink),
	cache: new InMemoryCache()
});


ReactDOM.render( <ApolloProvider client = {	client} > < AppWithData />
 </ApolloProvider>, document.getElementById('root'));