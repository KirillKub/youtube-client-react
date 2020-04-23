import React, { Fragment, Component } from 'react';
import './App.css';
import Header from './header/header';
import Setting from './searchSetting/setting';
import ListCard from './list-card/listCard';
import FullCard from './full-card/fullCard';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import WrongPage from './wrong-page/wrongPage';
import { connect } from 'react-redux';
import {changeSetting, getResponse, sortByDate, sortByCount, sortByInput, changeSearchValue, fetchPosts} from './redux/actions/actions'
class App extends Component {
  render() {
  return (
      <Router>
        <Fragment>
          <Header 
          isClickSetting={this.props.isClickSetting} 
          // isClickSearch={this.props.isClickSearch}
          isClickSearch={this.props.makeResponse.bind(this, this.props.search)}
          changeSearchValue={this.props.changeSearchValue}
          ></Header>
          <Setting 
          isSetting={this.props.isSetting} 
          sortByCount={this.props.sortByCount.bind(this)} 
          sortByDate={this.props.sortByDate.bind(this)} 
          sortByInput={this.props.sortByInput.bind(this)}/>
          <Switch> 
            <Route exact path="/search">
              <ListCard cards={this.props.response}></ListCard>
            </Route>
            <Route path="/search/:id">
              <FullCard cards={this.props.responseOld}
              />
            </Route>  
            <Route path="/">

            </Route>
            <Route exact path="*">
              <WrongPage/>
            </Route>
            <Redirect to={'/'}/>
          </Switch>
        </Fragment>
      </Router>    
    );
  }
}

function mapStateToProps(state) {
  return {
    isSetting: state.isSetting ,
    response: state.response ,
    responseOld: state.responseOld ,
    search: state.search,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    isClickSetting: () => dispatch(changeSetting()),
    isClickSearch: () => dispatch(getResponse()),
    sortByCount: (event) => dispatch(sortByCount(event)),
    sortByDate: (event) => dispatch(sortByDate(event)),
    sortByInput: (event) => dispatch(sortByInput(event)),
    changeSearchValue: (event) => dispatch(changeSearchValue(event)),
    makeResponse: (value) => dispatch(fetchPosts(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);