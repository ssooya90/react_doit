import React from 'react';

export default function (loadingMessage = '로딩 중'){

    return function withLoading(WrappedComponent){
        const { displayName, name : componentName} = WrappedComponent;
        const wrappedComponetName = displayName || componentName;

        function WithLoading({ isLoading, ...otherProps }){

            if(isLoading) return loadingMessage;

            return (
                <WrappedComponent {...otherProps}/>
            );
        }

        WithLoading.displayName = `withLoading(${wrappedComponetName})`;
        // withLoading()에 감싸 컴포넌트 이름을 표시합니다.

        return WithLoading;
    };

}