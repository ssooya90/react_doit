import React from 'react';

export default function withHoC(WrappedComponents){

    const { displayName , name} = WrappedComponents;
    const wrappedComponentName = displayName || name;
    // displayName이 있으면 wrappedComponentNAme에는 displayName이 먼저 할당

    return class WithHoC extends  React.Component {

        static displayName = `withHoC(${WrappedComponents.name}`;

        render() {
            return <WrappedComponents {...this.props}/>
        }
    }

};