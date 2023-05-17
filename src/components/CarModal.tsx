import React, { LegacyRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import carsSlice from '../store/slices/carsSlice'
import { AppDispatch } from '../store/store'
import { Car, ChangeCarDataPayload } from '../types'

function getCarPayload(id: number, carName: string, carModel: string, carColor: string): ChangeCarDataPayload {
    return { id: id, name: carName, model: carModel, color: carColor }
}

interface ICarModal {
    modalRef: LegacyRef<HTMLDivElement>,
    car: Car,
}

export const CarModal: React.FC<ICarModal> = ({ modalRef, car }) => {
    const [carName, setCarName] = useState<string>(car.name)
    const [carModel, setCarModel] = useState<string>(car.model)
    const [carColor, setCarColor] = useState<string>(car.color)

    const dispatch = useDispatch<AppDispatch>()

    return (
        <div ref={modalRef} id="modal1" className="modal">
            <div className="modal-content">
                <div className="input-field col s6">
                    <input id="Car" type="text" onChange={(event) => setCarName(event.target.value)} value={carName} />
                    <label htmlFor="Car" className="active">Car</label>
                </div>
                <div className="input-field col s6">
                    <input id="Model" type="text" onChange={(event) => setCarModel(event.target.value)} value={carModel} />
                    <label htmlFor="Model" className="active">Model</label>
                </div>
                <div className="input-field col s6">
                    <input id="Color" type="text" onChange={(event) => setCarColor(event.target.value)} value={carColor} />
                    <label htmlFor="Color" className="active">Color</label>
                </div>
            </div>
            <div className="modal-footer">
                <button
                    className="modal-close waves-effect waves-green btn-flat"
                    onClick={() => dispatch(carsSlice.actions.changeCarData(getCarPayload(car.id, carName, carModel, carColor)))}>
                    Save
                </button>
                <button className="modal-close waves-effect waves-green btn-flat">Close</button>
            </div>
        </div>
    )
}