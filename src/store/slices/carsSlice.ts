import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Car, ChangeCarDataPayload } from '../../types';

export const fetchCars = createAsyncThunk(
    'carsSlice/fetchCars',
    async () => {
        const response: { data: Car[] } = await axios.get('https://test.tspb.su/test-task/vehicles');
        return response.data;
    }
)

const cars: Car[] = []

const initialState = {
    loading: false,
    error: '',
    cars,
}

type ChangeCarDataAction = {
    payload: ChangeCarDataPayload,
}

interface IDeleteCar {
    id: number,
}
type DeleteCarAction = {
    payload: IDeleteCar,
}

type SortAction = {
    payload: boolean,
}

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,

    reducers: {
        changeCarData: (state, action: ChangeCarDataAction) => {
            for (let index = 0; index < state.cars.length; index++) {
                if (action.payload.id === state.cars[index].id) {
                    state.cars[index].id = action.payload.id;
                    state.cars[index].name = action.payload.name;
                    state.cars[index].model = action.payload.model;
                    state.cars[index].color = action.payload.color;
                }
            }
            return state;
        },
        deleteCar: (state, action: DeleteCarAction) => {
            for (let index = 0; index < state.cars.length; index++) {
                if (action.payload.id === state.cars[index].id) {
                    state.cars.splice(index, 1);
                }
            }
            return state;
        },
        sortByPrice: (state, action: SortAction) => {
            function compare(a: Car, b: Car) {
                if (a.price < b.price) {
                    return -1 * (action.payload ? 1 : -1);
                }
                if (a.price > b.price) {
                    return 1 * (action.payload ? 1 : -1);
                }
                return 0;
            }
            state.cars.sort(compare);
            return state;
        },
        sortByYear: (state, action: SortAction) => {
            function compare(a: Car, b: Car) {
                if (a.year < b.year) {
                    return -1 * (action.payload ? 1 : -1);
                }
                if (a.year > b.year) {
                    return 1 * (action.payload ? 1 : -1);
                }
                return 0;
            }
            state.cars.sort(compare);
            return state;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCars.pending, (state, action) => {
            state.loading = true;
            return state;
        })
        builder.addCase(fetchCars.fulfilled, (state, action) => {
            state.cars = action.payload;
            state.loading = false;
            return state;
        })
        builder.addCase(fetchCars.rejected, (state, action) => {
            console.log('Error occurred while fetching Data')
            state.loading = false;
            state.error = 'Error occurred while fetching Data';
            return state;
        })
    },
});

export default carsSlice;
