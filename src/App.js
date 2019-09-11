import React from 'react';
// import { createStore } from "redux";
import { connect } from "react-redux";


import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addItem } from './actions';


// import { carReducer } from "./reducer/index";

// const store = createStore(carReducer);

const App = ({car, store, additionalPrice, addItem}) => {


  const removeFeature = item => {
    // dispatch an action here to remove an item

    //.filter() by ID to remove item
  };

  const buyItem = item => {
    console.log(item);
    addItem(item)
  };

  return (

        <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} store={store} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};


const mapStateToProps = state => {
  console.log("state from mSTP", state)
  return {
    car: state.car,
    store: state.store, 
    additionalPrice: state.additionalPrice
  }
}
export default connect(mapStateToProps, {addItem})(App);

//add removeItem to squiggly brackets