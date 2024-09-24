import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './useRedux';
import { changeMode } from 'store/themeSlice';
import { TMode } from 'types/mode';



const useChangeMode = (): [
  boolean,
  (mode: TMode) => void
] => {
  const themeMode = useAppSelector((state) => state.theme.mode);
  const isEnabled = themeMode === 'dark';
  const dispatch = useAppDispatch();
  const onModeChange = (mode: TMode) => dispatch(changeMode(mode));

  useEffect(() => {
    if (window === undefined) {
      return;
    }
    const root = window.document.documentElement;
    root.classList.remove(isEnabled ? 'light' : 'dark');
    root.classList.add(isEnabled ? 'dark' : 'light');
  }, [isEnabled]);

  return [isEnabled, onModeChange];
};

export default useChangeMode;
