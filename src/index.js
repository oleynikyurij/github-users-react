import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWithData from './App';

import {	ApolloProvider} from 'react-apollo';
import {	ApolloClient} from 'apollo-client';
import {	HttpLink} from 'apollo-link-http';
import {	InMemoryCache} from 'apollo-cache-inmemory';

const token = "95ec9c75dce738b6b16c19dde7eaccd5aff189e1";

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