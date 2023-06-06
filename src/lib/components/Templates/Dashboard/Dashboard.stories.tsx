import { Meta, StoryObj } from '@storybook/react';
import {DashboardProps, Dashboard} from './Dashboard'

export default {
    title: 'template/Dashboard',
    component: Dashboard,
    arg: {
        titulo: 'teste'
    }
} as Meta<DashboardProps>


export const Desktop: StoryObj<DashboardProps> = {
    args: {},
    argTypes: {}
}
