import { createContext, useState } from "react";
export const MyContext = createContext(AppContext);

const AppContext = () => {
    return ( 
        <div>
            <p>Context as a folder</p>
        </div>
     );
}
 
export default AppContext;