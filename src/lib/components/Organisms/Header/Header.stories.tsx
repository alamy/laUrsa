import { Meta, StoryObj } from '@storybook/react';
import {HeaderProps, Header} from './Header'

export default {
    title: 'organisms/Header',
    component: Header,
    args: {
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
        menuSettings: [
            {
                name: 'teste',
                to: '/teste'

            }
        ]
    },
    argTypes: {
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
