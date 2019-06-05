import React, {Component} from 'react';
import Input from './Input';
import CurrencyList from './CurrencyList';

export default class Form extends Component {
    render() {
        return(
            <div className="form-wrapper">
                <div className="change-form">
                    <div className="change-input">
                        <div className="change-input__wrapper">
                            <span className="change-input--title">You send</span>
                            <Input className="change-input--input" name='sendValue' id="getValue" type="text" />
                            <div className="change-input--line"></div>
                            <div className="change-input--arrow">
                                <svg width="12" height="6" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M.343 0h11.314L6 5.657" fillRule="evenodd"></path>
                                </svg>
                            </div>
                            <label className="change-input--currency">
                                BTC
                            </label>
                        </div> 
                    </div> 

                    <div className="change-input">
                        <div className="change-input__wrapper">
                            <span className="change-input--title">You get</span>
                            <Input className="change-input--input" name='sendValue' id="sendValue" type="text" />
                            <div className="change-input--line"></div>
                            <div className="change-input--arrow">
                                <svg width="12" height="6" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M.343 0h11.314L6 5.657" fillRule="evenodd"></path>
                                </svg>
                            </div>
                            <label className="change-input--currency">
                                BTC
                            </label>
                        </div> 
                    </div> 
                </div> 
            </div>
        )
    }
}