import './App.css';
import { StoreProvider } from './providers/storeProvider';
import RouterProvider from './providers/routerProvider';
import { InitProvider } from './providers/initProvider';

function App() {
	return (
		<StoreProvider>
			<InitProvider>
				<RouterProvider />
			</InitProvider>
		</StoreProvider>
	)
}

export default App;
