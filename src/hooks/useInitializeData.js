import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarsSuccess, applyFilters } from '../store/slices/carsSlice';
import { carsData } from '../data/cars';

export const useInitializeData = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cars);

  useEffect(() => {
    // Only load cars data if it's not already loaded
    if (items.length === 0) {
      dispatch(fetchCarsSuccess(carsData));
      dispatch(applyFilters());
    }
  }, [dispatch, items.length]);
};

export default useInitializeData;
