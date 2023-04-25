import React from "react";
import HookList from "../react-hooks/list";
import MobxList from "../mobx/list";

const hookComponents = {
    list: HookList
}

const mobxComponents = {
    list: MobxList
}

const components = {
    hook: hookComponents,
    mobx: mobxComponents
}

export default block => {
    // component does exist
    return React.createElement(components[block.componentType][block.componentName], {
        key: block._uid,
        block: block,
        size: block.size,
    });
}