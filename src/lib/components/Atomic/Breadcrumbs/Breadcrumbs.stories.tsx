import { Meta, StoryObj } from '@storybook/react';
import {BreadcrumbsProps, Breadcrumbs}from './Breadcrumbs'

export default {
    title: 'Atmomic/Breadcrumbs',
    component: Breadcrumbs,
    args: {
        label: []
    }
} as Meta<BreadcrumbsProps>

export const Default: StoryObj<BreadcrumbsProps> = {
    args: {
        label: ['teste' , 'teste3']
    },
    argTypes: {}
}