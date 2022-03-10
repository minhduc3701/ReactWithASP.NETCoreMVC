import * as React from 'react';
import { DefaultPalette, Slider, Stack } from 'office-ui-fabric-react';
// Non-mutating styles definition
var stackItemStyles = {
    root: {
        alignItems: 'center',
        background: DefaultPalette.themePrimary,
        color: DefaultPalette.white,
        display: 'flex',
        height: 50,
        justifyContent: 'center',
        overflow: 'hidden',
    },
};
var nonShrinkingStackItemStyles = {
    root: {
        alignItems: 'center',
        background: DefaultPalette.themePrimary,
        color: DefaultPalette.white,
        display: 'flex',
        height: 50,
        justifyContent: 'center',
        overflow: 'hidden',
        width: 500,
    },
};
// Tokens definition
var outerStackTokens = { childrenGap: 5 };
var innerStackTokens = {
    childrenGap: 5,
    padding: 10,
};
export var HorizontalStackShrinkExample = function () {
    var _a = React.useState(100), stackWidth = _a[0], setStackWidth = _a[1];
    // Mutating styles definition
    var stackStyles = {
        root: {
            background: DefaultPalette.themeTertiary,
            overflow: 'hidden',
            width: stackWidth + "%",
        },
    };
    return (React.createElement(Stack, { tokens: outerStackTokens },
        React.createElement(Slider, { label: "Change the stack width to see how child items shrink:", min: 1, max: 100, step: 1, defaultValue: 100, showValue: true, onChange: setStackWidth }),
        React.createElement(Stack, { horizontal: true, styles: stackStyles, tokens: innerStackTokens },
            React.createElement(Stack.Item, { grow: true, styles: stackItemStyles }, "I shrink"),
            React.createElement(Stack.Item, { grow: true, styles: stackItemStyles }, "I shrink"),
            React.createElement(Stack.Item, { grow: true, disableShrink: true, styles: nonShrinkingStackItemStyles }, "I don't shrink"),
            React.createElement(Stack.Item, { grow: true, styles: stackItemStyles }, "I shrink"))));
};
//# sourceMappingURL=Stack.Horizontal.Shrink.Example.js.map