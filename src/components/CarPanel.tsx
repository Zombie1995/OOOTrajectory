import React from 'react'
import { Car } from '../types';
import M from "materialize-css";
import { PanelMap } from './PanelMap';
import { CarModal } from './CarModal';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import carsSlice from '../store/slices/carsSlice';

export const CarPanel: React.FC<{ car: Car }> = React.memo(({ car }) => {
  const dispatch = useDispatch<AppDispatch>();

  const modalRef = React.useRef<HTMLDivElement>(null);

  const handleClick = () => {
    M.Modal.init(modalRef.current!).open();
  };

  return (
    <>
      <div className="card horizontal" style={{ width: "550px" }}>
        <div className="card-image">
          <PanelMap mapHeight={200} mapWidth={200} position={[car.latitude, car.longitude]} />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h5 className='panelElement'>{car.latitude}</h5>
              <h5 className='panelElement'>{car.longitude}</h5>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p className='panelElement'>Car:<br />{car.name}</p>
              <p className='panelElement'>Model:<br />{car.model}</p>
              <p className='panelElement'>Color:<br />{car.color}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p className='panelElement'>Year:<br />{car.year}</p>
              <p className='panelElement'>Price:<br />{car.price}</p>
            </div>
          </div>
        </div>
        <div className="horizontalCardRightIcons">
          <i className="material-icons" onClick={() => dispatch(carsSlice.actions.deleteCar(car))}>close</i>
          <i className="material-icons" onClick={handleClick}>mode_edit</i>
        </div>
      </div>
      <CarModal modalRef={modalRef} car={car} />
    </>
  );
});

export { }
