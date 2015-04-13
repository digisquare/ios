'use strict';

var React = require('react-native');
var Moment = require('moment/min/moment-with-locales');
Moment.locale('fr');

var {
  ScrollView,
  StyleSheet,
  Text,
  MapView
} = React;

var Event = React.createClass({

  render: function() {
    return (
      <ScrollView style={{padding: 10}}>
        <Text style={styles.title}>
          {this.props.event.Event.name}
        </Text>
        <Text style={styles.date}>
          {Moment(this.props.event.Event.start_at).format('dddd D MMMM YYYY')}
        </Text>
        <Text>
          {this.props.event.Event.description}
        </Text>
        <MapView
          style={styles.map}
          region={{
            latitude: this.props.event.Venue.latitude,
            longitude: this.props.event.Venue.longitude,
            latitudeDelta: 0.01
          }}
        />
      </ScrollView>
    );
  }

});

var styles = StyleSheet.create({
  title: {
    fontSize:24,
    fontWeight: '500',
    marginBottom: 10
  },
  date: {
    marginBottom: 10
  },
  map: {
    height: 150,
    margin: 10,
    borderWidth: 1,
  }
});

module.exports = Event;
