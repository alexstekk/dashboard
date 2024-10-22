import { useDispatch } from 'react-redux';
import { AppDispatch } from 'app/provides/StoreProvider';

export const useAppDispatch = () => useDispatch<AppDispatch>();
