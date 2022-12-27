import {useContext, createContext} from "react";

const DarkModeContext = createContext([false, () => null]);

function useDarkMode() {
    return useContext(DarkModeContext);
}

export default useDarkMode;