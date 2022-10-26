import { configureStore, createAction, createReducer } from `@reduxjs/toolkit`;
import { configure } from "@testing-library/react";

const initialState = {
   hourValue: 1,
   currentPrice: 0,
   radioValue: `low`,
   selectedCountry: {
      key `ee`, title: `Eesti`,
   },
   bestTimeRange: {
      from: 0,
    until: 0,
    timeStamp: null,
    bestprice: 0,
   },
};


setWorstTimeRange : {
   from: 0,
 until: 0,
 timeStamp: null,
 bestprice: 0,
},
};

export const setHourValue = createAction("setHourValue");
export const setCurrentPrice = createAction("setCurrentPrice");
export const setRadioValue = createAction("setRadioValue");
export const setSelectedCountry = createAction("setSelectedCountry");
export const setBestTimeRange = createAction("setBestTimeRange");



const reducer = createReducer(initialState, {
   [setHourValue]: (state, action) => {
      state.hourValue = action.payload;
   },
   [setCurrentPrice]: (state, action) => {
      state.currentPrice = action.payload;
   },
   [setRadioValue]: (state, action) => {
      state.setRadioValue = action.payload;
   },
   [setSelectedCountry]: (state, action) => {
      state.setSelectedCountry = action.payload;
   },
});


export const store = configureStore({reducer});