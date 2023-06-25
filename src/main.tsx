import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import AuthProvider from './providers/auth-provider/AuthProvider.tsx'
import { persistor, store } from './store/store.ts'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	// <React.StrictMode>
	<BrowserRouter>
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<AuthProvider>
						<App />
					</AuthProvider>
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	</BrowserRouter>
	//{' '}
	/* </React.StrictMode> */
)
