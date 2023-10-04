import { useDispatch } from 'react-redux';
import { createReduxStore } from '../../app/providers/config/store';

export const useAppDispatch = () => useDispatch<ReturnType<typeof createReduxStore>['dispatch']>();
