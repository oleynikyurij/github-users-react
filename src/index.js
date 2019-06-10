import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWithData from './App';

import {	ApolloProvider} from 'react-apollo';
import {	ApolloClient} from 'apollo-client';
import {	HttpLink} from 'apollo-link-http';
import {	InMemoryCache} from 'apollo-cache-inmemory';

const token = "42af8914c8735ab3a7dcc131500ea4488fe3436e";

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