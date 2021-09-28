import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Car from '../../app/components/Car';
import { ICar } from '../../typings/car';
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import '@brainhubeu/react-carousel/lib/style.css';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../../app/components/responsive';
import carService from '../../app/services/carService';
import { Dispatch } from 'redux';
import { GetCars_cars } from '../../app/services/carService/__generated__/GetCars';
import { setTopCars } from './slice';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectTopCars } from './selectors';
import BeatLoader from "react-spinners/BeatLoader";

const TopCarsContainer = styled.div`
  ${tw `
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `}
`;

const Title = styled.h2`
  ${tw `
    text-2xl
    lg:text-4xl
    text-black
    font-extrabold
  `}
`;

const CarsContainer = styled.div`
  ${tw `
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `}
`;

const EmptyCars = styled.div`
  ${tw `
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-gray-500
  `}
`;

const LoadingContainer = styled.div`
  ${tw `
    w-full
    mt-9
    flex
    justify-center
    items-center
    text-base
    text-black
  `}
`;


  const actionDispatch = (dispatch: Dispatch) => ({
    setTopCars: (cars: GetCars_cars[]) => dispatch(setTopCars(cars))
  });

  const stateSelector = createSelector(makeSelectTopCars, topCars => ({
    topCars
  }));

  const wait = (timeout: number) => new Promise(rs => setTimeout(rs, timeout))

function TopCars() {
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const { topCars } = useSelector(stateSelector);
  const { setTopCars } = actionDispatch(useDispatch());

  const fetchTopCars = async () => {
    setLoading(true)
    const cars = await carService.getCars()
      .catch(err => {
        console.error("Error:", err.message);
      });

      await wait(5000);

    console.log("Cars: ", cars);
    if(cars) setTopCars(cars);
    setLoading(false);
  }

  const testCar: ICar = {
    name: "Audi S3 Car",
    mileage: "10k",
    thumbnailSrc: "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
  };

  const testCar2: ICar = {
    name: "HONDA cITY 5 Seater Car",
    mileage: "20k",
    thumbnailSrc: "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: "Auto",
    gas: "Petrol",
  };

  useEffect(() => {
    fetchTopCars();
  }, []);

  const isEmptyTopCars = !topCars || topCars.length === 0;

  const cars = !isEmptyTopCars && topCars.map(car => <Car {...car} thumbnailSrc={car.thumbnailUrl} />) || [];

  const numOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

  if(isEmptyTopCars) return null;

  return (
    <TopCarsContainer>
      <Title>Explore Our Models</Title>
      {loading && (<LoadingContainer>
        <BeatLoader loading size={20} />
      </LoadingContainer>)}
      {isEmptyTopCars && !loading && <EmptyCars>No Cars to Show!</EmptyCars>}
      {!isEmptyTopCars && !loading && (
      <CarsContainer>
        <Carousel 
          value={current} 
          onChange={setCurrent} 
          slides={cars}
          plugins={[
            "clickToChange",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              }
            }
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1 
                  }
                }
              ]
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2
                  }
                }
              ]
            },
          }}
        />
        <Dots value={current} onChange={setCurrent} number={numOfDots} />
      </CarsContainer>
      )
      }
    </TopCarsContainer>
  );
}

export default TopCars;
