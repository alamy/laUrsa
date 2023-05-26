import { Meta, Story, StoryObj } from '@storybook/react';
import {MenuProps, Menu} from './Menu'
import { Pppe } from '../../Icon/Menu/Pppe';

export default {
    title: 'organisms/Menu',
    component: Menu,
    args: {
        Objeto: {
            1:
            [<Pppe size="md" type="Primary"/>, 'teste',
            {
               1:['sub menu', 'sub menu 2']
            }
        ],
            2:[<Pppe size="md" type="Primary"/>, 'teste2']
        },
        title: ''
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