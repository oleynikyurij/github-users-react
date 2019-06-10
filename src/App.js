import React, {Component} from 'react';

import styled from 'styled-components';
import map from './map.png';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const Wrap = styled.div`
	margin: 0 auto;
	max-width: 600px;
`;

const Item = styled.div`
	display: flex;
	border-top: 1px solid #eee;
	margin-top: 20px;
	padding-top: 10px;
`;

const ItemImage = styled.div`
	width: 70px;
	margin-right: 10px;
`;

const ItemContent = styled.div`
	width: 100%;
`;

const Link = styled.a`
	text-decoration: none;
	font-weight: ${props => props.email ? 'normal' : 'bold'};
	color: ${props => props.email ? '#D7D7E0' : '#2f0cf1'};
	margin-right: ${props => props.email ? '0px' : '10px'};


`;

const ItemLocation = styled.div`
	margin-top: 7px;
`;

const Img = styled.img`
	width: ${props => props.small ? '16px' : 'inherit'};
	margin-right: ${props => props.small ? '7px' : 'inherit'};
`;

const Span = styled.span`
	color: #D7D7E0;
	margin-right: ${props => props.mr ? '15px' : 'inherit'};
	
`;

const Div = styled.div`
`;

class App extends Component {
  render() {
		return (
			<>
			<Wrap>
			<h1>Top 10 GitHub User in {city}</h1>
				{	this.props.data.loading === true ? "Loading data..." : 					          this.props.data.search.edges.map(data =>
						<Item key={data.node.id} >
							<ItemImage>
								<Img src={data.node.avatarUrl} alt="avatar"/>
							</ItemImage>
							<ItemContent>
									<Div>
										<Link href={data.node.url} target="_blank" rel="noopener noreferrer" >
										{data.node.login}
										</Link>
										{data.node.name}
									</Div>
									<Div>
										{data.node.bio}
									</Div>
									<ItemLocation>
										<Span mr>
										 <Img small src={map} alt="map"/>	
										 	{data.node.location}
										</Span>
										<Span>
											<Link email href="mailto:{data.node.email}" >
												{data.node.email}
											</Link> 
										</Span>
									</ItemLocation>
									<Div>
										All stars:  {data.node.starredRepositories.totalCount}  
									</Div>
							</ItemContent>
						</Item>	
				)
				}
				</Wrap>	
			</>
    );
  }
}

//query
const userQuery = gql`
query($count: Int!, $name: String!) {
  search(query: $name, type: USER, first: $count) {
    edges {
      node {
        ... on User {
					id
          name
          login
          email
          bio
          avatarUrl
          url
          location
	starredRepositories{
            totalCount
          }
          
        }
      }
    }
  }
}
`

const city = "kyiv";
// const city = "krivoy-rog";
// const city = "los-angeles";

const AppWithData = graphql(
  userQuery,
  {
    options: {
      variables: {
				name: "location:" + city,
				count: 10
      }
    }
  }
)(App);


 
export default AppWithData;


