import { Meta, StoryObj } from '@storybook/react';
import {DashboardProps, Dashboard} from './Dashboard'
import { Search } from '../../Icon/System/Search';

export default {
    title: 'template/Dashboard',
    component: Dashboard,
    arg: {
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
        titulo: 'teste',
        children: Object
    }
} as Meta<DashboardProps>


export const Desktop: StoryObj<DashboardProps> = {
    args: {
    },
    argTypes: {}
}
