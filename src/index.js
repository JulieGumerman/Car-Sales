import React from 'react';
import ReactDOM from 'react-dom';
//check on exports
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

import 'bulma/css/bulma.css';
import './styles.scss';

import { carReducer } from "./reducer/index";


const store = createStore(carReducer);



const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);
