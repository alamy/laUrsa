import { Meta, StoryObj } from '@storybook/react';
import { boolean } from 'yargs';
import { Avatar, AvatarProps } from './Avatar';

export default {
    title: 'Atmomic/Avatar',
    component: Avatar,
    args: {
        text: 'Perfil',
        notification: false,
    },
    argTypes: {
        size:{
            options: ['sm', 'md', 'lg', 'lx' ],
            control: {type: 'radio'}
        },
        image: {
            options : "",
            control : {type: 'file'}
        }
    }
} as Meta<AvatarProps>

export const Default: StoryObj<AvatarProps> = {
    args: {},
    argTypes: {}
}