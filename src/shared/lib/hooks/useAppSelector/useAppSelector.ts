import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { StateSchema } from 'app/provides/StoreProvider/config/StateSchema';

export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;
