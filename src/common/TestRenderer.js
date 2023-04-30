import React from 'react'
import HookList from '../react-hooks/list'
import HookMatrix from '../react-hooks/matrix'
import HookHardList from '../react-hooks/hardList'
import MobxList from '../mobx/list'
import MobxMatrix from '../mobx/matrix'
import MobxHardList from '../mobx/hardList'
import ReduxList from '../redux/list'
import ReduxMatrix from '../redux/matrix'
import ReduxHardList from '../redux/hardList'
import ZustandList from '../zustand/list'
import ZustandMatrix from '../zustand/matrix'
import ZustandHardList from '../zustand/hardList'
import EffectorList from '../effector/list'
import EffectorHardList from '../effector/hardList'
import EffectorMatrix from '../effector/matrix'

const hookComponents = {
  list: HookList,
  matrix: HookMatrix,
  hardList: HookHardList
}

const mobxComponents = {
  list: MobxList,
  matrix: MobxMatrix,
  hardList: MobxHardList
}

const reduxComponents = {
  list: ReduxList,
  matrix: ReduxMatrix,
  hardList: ReduxHardList
}

const zustandComponents = {
  list: ZustandList,
  hardList: ZustandHardList,
  matrix: ZustandMatrix
}

const effectorComponents = {
  list: EffectorList,
  hardList: EffectorHardList,
  matrix: EffectorMatrix
}

const components = {
  hook: hookComponents,
  mobx: mobxComponents,
  redux: reduxComponents,
  zustand: zustandComponents,
  effector: effectorComponents
}

function testRenderer (block) {
  if (components[block.componentType][block.componentName] === undefined) {
    return 'Test for the library is not supported'
  }
  // component does exist
  return React.createElement(components[block.componentType][block.componentName], {
    size: block.size
  })
}
export default testRenderer
