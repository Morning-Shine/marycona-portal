import { createContext, SetStateAction } from 'react';
import { TShowCatContext } from './type';

export const ShowCatContext = createContext<TShowCatContext>({
    isShowCat: false,
    setIsShowCat: function (value: SetStateAction<boolean>): void {
        throw new Error('Function not implemented.');
    }
});
