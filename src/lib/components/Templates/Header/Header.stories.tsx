import { Meta, StoryObj } from '@storybook/react';
import {HeaderProps, Header} from './Header'

export default {
    title: 'template/Header',
    component: Header,
    args: {
        notification: false,
        home: true,
        path: '',
    },
    
    argTypes: {
        img: {
            options : "",
            control : {type: 'file'}
        },
        onClick: { action: 'clicked' }
    }
} as Meta<HeaderProps>


export const Desktop: StoryObj<HeaderProps> = {
    args: {},
    argTypes: {}
}

export const Mobil: StoryObj<HeaderProps> = {
    args: {},
    argTypes: {}
}
