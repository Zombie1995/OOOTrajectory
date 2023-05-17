import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import carsSlice, { fetchCars } from '../store/slices/carsSlice';
import { AppDispatch, RootState } from '../store/store';
import { CarList } from './CarList';

export const CarPage: React.FC = () => {
  const carsData = useSelector((store: RootState) => store.cars)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchCars())
  }, [dispatch]);

  return (
    <div>
      <nav className="blue darken-1">
        <div className="nav-wrappers">
          <ul id="nav-mobile" className="left">
            <li><a onClick={() => dispatch(carsSlice.actions.sortByPrice(true))}>Price↓</a></li>
            <li><a onClick={() => dispatch(carsSlice.actions.sortByPrice(false))}>Price↑</a></li>
            <li><a onClick={() => dispatch(carsSlice.actions.sortByYear(true))}>Year↓</a></li>
            <li><a onClick={() => dispatch(carsSlice.actions.sortByYear(false))}>Year↑</a></li>
          </ul>
        </div>
      </nav>
      <CarList cars={carsData.cars} />
    </div>
  )
}