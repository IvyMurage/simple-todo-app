import { Route, Routes } from "react-router-dom"
import Frame from "./components/frame"
import Home from "./components/Home"
import Office from "./components/Office"
import TodoContainer from "./components/todo-container"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Frame />}>
          <Route path="/all" element={<TodoContainer />}>

            <Route path='/all/home' element={<Home />} />
            <Route path="/all/office" element={<Office />} />
          </Route>

        </Route>
      </Routes>
    </>
  )
}

export default App
