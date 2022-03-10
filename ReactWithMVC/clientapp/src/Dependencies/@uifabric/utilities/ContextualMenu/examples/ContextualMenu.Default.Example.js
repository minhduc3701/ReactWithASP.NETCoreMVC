import * as React from 'react';
import { ContextualMenuItemType, } from 'office-ui-fabric-react/lib/ContextualMenu';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
export var ContextualMenuDefaultExample = function () {
    return React.createElement(DefaultButton, { text: "Click for ContextualMenu", menuProps: menuProps });
};
var menuItems = [
    {
        key: 'newItem',
        text: 'New',
        onClick: function () { return console.log('New clicked'); },
    },
    {
        key: 'divider_1',
        itemType: ContextualMenuItemType.Divider,
    },
    {
        key: 'rename',
        text: 'Rename',
        onClick: function () { return console.log('Rename clicked'); },
    },
    {
        key: 'edit',
        text: 'Edit',
        onClick: function () { return console.log('Edit clicked'); },
    },
    {
        key: 'properties',
        text: 'Properties',
        onClick: function () { return console.log('Properties clicked'); },
    },
    {
        key: 'linkNoTarget',
        text: 'Link same window',
        href: 'http://bing.com',
    },
    {
        key: 'linkWithTarget',
        text: 'Link new window',
        href: 'http://bing.com',
        target: '_blank',
    },
    {
        key: 'linkWithOnClick',
        name: 'Link click',
        href: 'http://bing.com',
        onClick: function (ev) {
            alert('Link clicked');
            ev.preventDefault();
        },
        target: '_blank',
    },
    {
        key: 'disabled',
        text: 'Disabled item',
        disabled: true,
        onClick: function () { return console.error('Disabled item should not be clickable.'); },
    },
];
var menuProps = {
    shouldFocusOnMount: true,
    items: menuItems,
};
//# sourceMappingURL=ContextualMenu.Default.Example.js.map