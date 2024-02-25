import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return <h1>Hello React</h1>
}

// FReact v.18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// strictMode during development kit will render the App twice and React will check if we are using outdated parts of the React API.


// React before 18
// React.render(<App />);
