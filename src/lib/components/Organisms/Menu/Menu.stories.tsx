import { Meta, Story, StoryObj } from '@storybook/react';
import {MenuProps, Menu} from './Menu'
import { Pppe } from '../../Icon/Menu/Pppe';
import { Search } from '../../Icon/System/Search';

export default {
    title: 'organisms/Menu',
    component: Menu,
    args: {
        titulo: 'SICM',
        menu:[
            {
                imagem: <Search size="lg" type="Second" />,
                texto: 'Demo',
                to: '',
                submenu: [
                    { 
                        name: 'teste', 
                        to: '/demo'
                    }
                ]
            }    
        ],
    linksExternos: [
        {
            label: 'Link 1',
            to: '/teste'
        },
        {
            label: 'Link 2',
            to: '/teste'
        }
    ],
    }
} as Meta<MenuProps>

export const Desktop: StoryObj<MenuProps> = {
    args: {},
    argTypes: {}
}

export const Mobil: StoryObj<MenuProps> = {
    args:{},
    argTypes: {}
}