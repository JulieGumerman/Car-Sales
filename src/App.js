import React from 'react';
// import { createStore } from "redux";
import { connect } from "react-redux";


import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


// import { carReducer } from "./reducer/index";

// const store = createStore(carReducer);

const App = () => {
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   store: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

  const removeFeature = item => {
    // dispatch an action here to remove an item

    //.filter() by ID to remove item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    // <div className="boxes">
    //   <div className="box">
    //     <Header car={state.car} />
    //     <AddedFeatures car={state.car} />
    //   </div>
    //   <div className="box">
    //     <AdditionalFeatures store={state.store} />
    //     <Total car={state.car} additionalPrice={state.additionalPrice} />
    //   </div>
    // </div>

        <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={store} />
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
export default connect(mapStateToProps, {})(App);

