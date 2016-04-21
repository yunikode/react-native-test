var React = require('react-native')

var german_english = require('./german_english.json')

var Dictionary = React.createClass({
  getInitialState: function() {
    return {
      input: '',
      output: ''
    }
  },

  showMeaning: function() {
    // User the ternary operator to check if the word
    // exists in the dictionary
    var meaning = this.state.input in german_english
      ? german_english[this.state.input]
      : "Not Found"

    // Update the state
    this.setState({
      output: meaning
    })
  },

  render: function() {
    var layout =
      <React.View style = { styles.parent } >

        <React.Text>
          Type something in German:
        </React.Text>

        <React.TextInput
          text= { this.state.input }
          onChangeText={ (e) => this.setState({input: e}) }
          onSubmitEditing = { this.showMeaning }
        />

      <React.Text style = { styles.englishLabel } >
          It's English equivalent is:
        </React.Text>

        <React.Text style = { styles.englishWord } >
          { this.state.output }
        </React.Text>

      </React.View>

      return layout
  }
})

var styles = React.StyleSheet.create({

  // For the container View
  parent: {
    padding: 16
  },

  // For the Text label
  englishLabel: {
    marginTop: 20,
    fontWeight: 'bold'
  },

  // For the Text meaning
  englishWord: {
    marginTop: 15,
    fontSize: 30,
    fontStyle: 'italic'
  }
})

React.AppRegistry.registerComponent('Dictionary', () => Dictionary)
