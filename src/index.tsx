import './index.scss'
import { createRoot } from 'react-dom/client'
import App from './components/app/app'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const root = document.getElementById('root')

if (!root) {
  throw new Error('root not found')
}
const container = createRoot(root)

container.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
