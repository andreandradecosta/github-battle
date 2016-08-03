var React = require('react')
var ConfirmBattle = require('../components/ConfirmBattle')


var ConfirmBattleContainer = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState: function() {
        console.log('initial state');
        return {
            isLoading: true,
            playersInfo: []
        }
    },

    componentWillMount: function() {
        console.log('will mount');
    },

    componentDidMount: function() {
        console.log('did mount');
        var query = this.props.location.query
        console.log('fetch info from github for:', query);

    },

    componentWillReceiveProps: function() {
        console.log('will receive props');
    },

    componentWillUnmount: function() {
        console.log('will unmount');
    },
    
    render: function() {
        console.log('render');
        return (
            <ConfirmBattle
                isLoading={this.state.isLoading}
                playersInfo={this.state.playersInfo}/>
        )
    }
})

module.exports = ConfirmBattleContainer;
