import React from "react";
import { storiesOf } from "@storybook/react";
import { jsxDecorator } from "storybook-addon-jsx";

export default {
    title: "TestComponent",
    decorators: [jsxDecorator],
};


export const Paris = () => (
    <div fontSize={45} fontFamily="Roboto" align="center" color="#CAF200">
        Hello
    </div>
);
