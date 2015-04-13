'use strict';

var React = require('react-native');
var Moment = require('moment/min/moment-with-locales');

var {
  Text,
  View,
  ListView,
} = React;

var EventCell = require('./Elements/EventCell');
var EventView = require('../Event');

var Events = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false,
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    fetch('https://digisquare.net/events.json?end_at=' + Moment().format('YYYY-MM-DD') + '&edition_id=9&sort=start_at&direction=asc')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.events),
          loaded: true
        });
      })
      .done();
  },

  render: function() {
    if (!this.state.loaded) {
      // TODO: loader
      return null;
    }

    return (
      this.renderListView()
    );
  },

  renderListView: function(){
    return(
      <ListView
        style={{padding: 10}}
        dataSource={this.state.dataSource}
        renderRow={this.renderEventCell}
      />
    );
  },

  renderEventCell: function(event){
    return(
      <EventCell
        onSelect={() => this.selectEvent(event)}
        event={event}/>
    );
  },

  selectEvent: function(event){
    this.props.navigator.push({
      component: EventView,
      title: 'Evènement',
      passProps: {
        event: event
      }
    });
  }

});

module.exports = Events;
