import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { testReduxTest } from "./actions/action";
function App() {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.dashboard);
  console.log("item", item);

  useEffect(() => {
    let cleanUp = false;

    if (!cleanUp) {
      console.log("useEffect");
      dispatch(testReduxTest("아귀먼트 작동"));
    }
    return () => {
      cleanUp = true;
    };
  }, []);
  return <div className="App">test</div>;
}

export default App;
