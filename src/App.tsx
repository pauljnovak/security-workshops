import React from 'react';
import './App.css';
import TodoListContainer from "./containers/TodoListContainer";
import store from "./store";
import {Provider} from "react-redux";

function App() {


    return (
     <Provider store={store}>
        <React.Fragment>
          <div className="todoapp">
              <TodoListContainer />
          </div>
        </React.Fragment>
     </Provider>
  );
}

export default App;
