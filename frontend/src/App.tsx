import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { store } from './app/store'
import { routers } from './routers/routers'

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={routers}>
      </RouterProvider>
    </Provider>
  )
}

export default App