import React from 'react';
import '../scss/search.scss';

export default class CurrencyList extends React.Component {
    constructor (props) {
        super(props);
        this.items = [
            'BTC',
            'ETH',
            'XRP',
            'BCH'
        ];
        this.state = {
            suggestions: [],
            text: ''
        };
    }

    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = this.items.sort().filter(v => regex.test(v));
        }
        this.setState(() => ({ suggestions, text: value }));
    }

    suggestionSelected (value) {
        this.setState(() => ({
            text: value,
            suggesions: [],
        }))
    }

    renderSuggestions () {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul className="search-items">
                {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        )
    }

    render () {
        const {text} = this.state;
        return (
            <div className="search-input">
                <input value={text} onChange={this.onTextChanged} className="search-input" type="text" />
                <ul></ul>
                    {this.renderSuggestions()}
            </div>
        )
    }
}