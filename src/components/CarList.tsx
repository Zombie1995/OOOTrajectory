import React from 'react'
import { CarPanel } from './CarPanel'
import { Car } from '../types'

export const CarList: React.FC<{cars: Car[]}> = ({cars}) => {    
    return (
        <div className='carList'>
        <div className="col s12 m7">
          {cars.map((car: Car) => (
            <CarPanel key={car.id} car={car}/>
          ))}
        </div>
      </div>
    )
}