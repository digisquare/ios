'use strict';

var React = require('react-native');
var {
  AppRegistry,
  NavigatorIOS
} = React;

var Events = require('./App/Views/Events');

var Digisquare = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={{flex: 1}}
        initialRoute={{
          component: Events,
          title: 'Digisquare'
        }}
      />
    );
  }
});

AppRegistry.registerComponent('Digisquare', () => Digisquare);
