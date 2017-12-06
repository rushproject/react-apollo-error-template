import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class Thing extends Component {
    render() {
        console.log(this.props.data);

        return (
            <div>
                {this.props.data.loading ? "LOADING..." : this.props.data.thing.name}
            </div>
        );
    }
}

const ThingWithData = graphql(
    gql`
        query Thing {
            thing(id: 2) {
                name
            }
        }
    `
)(Thing);

class App extends Component
{
  render() {
      return (
        <Router>
            <div>
                <div className="container">
                    <Route exact path="/" render={() => (
                        <div>
                            <Link to="/thing/2">Thing 2 - push</Link><br/>
                            <a href="/thing/2">Thing 2 - bookmark</a>
                        </div>)}/>
                    <Route exact path={"/thing/:id"} component={ThingWithData}/>
                </div>
            </div>
        </Router>
    )
  }
}

export default graphql(
    gql`
        query {
            user(id: 1) {
                firstName
            }
        }
    `,
    { skip: false}
)(App);
