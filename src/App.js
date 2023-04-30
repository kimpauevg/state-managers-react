import './App.css';
import React from 'react';
import TestRenderer from "./common/TestRenderer";


function App() {
    let [selectedType, updateType] = React.useState('hook');
    const [currentComponent, updateState] = React.useState();
    function renderComponent(type, name, size = 0) {
        resetComponent();

        updateState(<TestRenderer componentType={type} componentName={name} size={size}/>)
    }

    function resetComponent() {
        updateState('');
    }

    function setComponentType(type) {
        updateType(type);

        resetComponent();
    }

    return (
      <div>
          <div>Selected type: {selectedType}</div>
          <div>
              <button onClick={() => setComponentType('hook')}>React hooks</button>
              <button onClick={() => setComponentType('mobx')}>MobX</button>
              <button onClick={() => setComponentType('redux')}>Redux</button>
              <button onClick={() => setComponentType('zustand')}>Zustand</button>
          </div>
          <div>
              <button onClick={ () => renderComponent(selectedType, 'list') }>
                  List
              </button>
              <button onClick={ () => renderComponent(selectedType, 'hardList') }>
                  List with data
              </button>
              <button onClick={ () => renderComponent(selectedType, 'matrix', 20) }>
                  Matrix 20x20
              </button>
              <button onClick={ () => renderComponent(selectedType, 'matrix', 100) }>
                  Matrix 100x100
              </button>
              <button onClick={ () => renderComponent(selectedType, 'matrix', 400) }>
                  Matrix 400x400
              </button>
          </div>
          <div id="target">
              {currentComponent}
          </div>
      </div>
    );
}

export default App;
