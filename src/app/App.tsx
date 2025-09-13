import "./App.scss";
import { StoreProvider } from "./providers/storeProvider.js";
import RouterProvider from "./providers/routerProvider.js";
import { InitProvider } from "./providers/initProvider.js";
import type { ReactNode } from "react";

function App(): ReactNode {
    return (
        <StoreProvider>
            <InitProvider>
                <RouterProvider />
            </InitProvider>
        </StoreProvider>
    );
}

export default App;
