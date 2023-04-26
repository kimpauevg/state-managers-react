import React from "react";
import HookList from "../react-hooks/list";
import MobxList from "../mobx/list";
import ReduxList from "../redux/list"
import HookMatrix from "../react-hooks/matrix"
import MobxMatrix from "../mobx/matrix"
import ReduxMatrix from "../redux/matrix"
import MobxHardList from "../mobx/hardList"
import HookHardList from "../react-hooks/hardList"
import ReduxHardList from "../redux/hardList";

const hookComponents = {
    list: HookList,
    matrix: HookMatrix,
    hardList: HookHardList,
}

const mobxComponents = {
    list: MobxList,
    matrix: MobxMatrix,
    hardList: MobxHardList,
}

const reduxComponents = {
    list: ReduxList,
    matrix: ReduxMatrix,
    hardList: ReduxHardList,
}

const components = {
    hook: hookComponents,
    mobx: mobxComponents,
    redux: reduxComponents,
}

export default block => {
    // component does exist
    return React.createElement(components[block.componentType][block.componentName], {
        size: block.size,
    });
}