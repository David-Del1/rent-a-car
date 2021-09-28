import { createSelector } from "reselect";
import { HomePage } from ".";
import { IRootAppState } from "../../typings";
import { homePageSlice } from "./slice";

const selectHomePage = (state: IRootAppState) => state.homePage;

export const makeSelectTopCars = createSelector(
  selectHomePage, (HomePage) => HomePage.topCars
);