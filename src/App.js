import logo from './logo.svg';
import './App.css';
import React from 'react';
import testRenderer from "./common/TestRenderer";
import TestRenderer from "./common/TestRenderer";


function App() {
    let [selectedType, updateType] = React.useState('hook');
    const [currentComponent, updateState] = React.useState();
    function renderComponent(type, name, size = 0) {
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
              <button onClick={() => setComponentType('hook')}>Hook</button>
              <button onClick={() => setComponentType('mobx')}>MobX</button>
              <button onClick={() => setComponentType('redux')}>Redux</button>
          </div>
          <div>
              <button onClick={ () => renderComponent(selectedType, 'list') }>
                  Рендеринг списка
              </button>
              <button onClick={ () => renderComponent(selectedType, 'listWithData') }>
                  Рендеринг списка и одновременная обработка большого объема данных
              </button>
              <button onClick={ () => renderComponent(selectedType, 'matrix') }>
                  Рендеринг матрицы 20x20
              </button>
              <button>
                  Рендеринг матрицы 100x100
              </button>
              <button>
                  Рендеринг матрицы 100x100
              </button>
          </div>
          <div id="target">
              {currentComponent}
          </div>
      </div>
      );
}

export default App;
