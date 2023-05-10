import { Meta, Story, StoryObj } from '@storybook/react';
import {MenuProps, Menu} from './Menu'
import { Pppe } from '../../Icon/Menu/Pppe';

export default {
    title: 'template/Menu',
    component: Menu,
    args: {
        Objeto: {1:[<Pppe size="md" type="Primary"/>, 'teste'],2:[<Pppe size="md" type="Primary"/>, 'teste2']},
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