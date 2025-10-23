import "./App.scss";
import { StoreProvider } from "./providers/storeProvider.js";
import RouterProvider from "./providers/routerProvider.js";
import { InitProvider } from "./providers/initProvider.js";
import type { ReactNode } from "react";
import { I18nProvider } from "./providers/I18nProvider.js";

function App(): ReactNode {
    return (
        <StoreProvider>
            <I18nProvider>
				<InitProvider>
					<RouterProvider />
				</InitProvider>
			</I18nProvider>
        </StoreProvider>
    );
}

export default App;
