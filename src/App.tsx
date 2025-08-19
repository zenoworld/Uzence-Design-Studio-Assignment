import { useState } from "react"
import InputFieldPage from "./pages/InputFieldPage";
import DataTablePage from "./pages/DataTablePage";

const App = () => {
  const [secondComponent, setSecondComponent] = useState(false);
  return <>
    <div className="flex flex-col items-center justify-between w-full h-screen gap-4 bg-gray-950 relative">
      <div className="h-2/4 sm:h-1/4 w-full">
        <h1 className="w-full h-26 text-center flex items-center justify-center text-3xl font-extrabold ">
          Uzence Design Studio
        </h1>

        <div className="flex flex-col py-4 sm:py-0 sm:flex-row items-center justify-center w-full gap-4">
          <button onClick={() => setSecondComponent(false)} className="button">Component 1 (InputField)</button>
          <button onClick={() => setSecondComponent(true)} className="button">Component 2 (DataTable)</button>
        </div>
      </div>

      <div className="w-full h-3/4 flex items-center justify-center relative">
        {
          secondComponent ?
            (
              <DataTablePage />
            )
            :
            (
              <InputFieldPage />
            )
        }
      </div>
    </div>
  </>
}

export default App