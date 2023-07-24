import React from "react";

export interface TramitacaoProps {
    type?: 'Primary' | 'Second';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Tramitacao({type = 'Primary', size = 'md'}: TramitacaoProps ) {
    let estilo = '';
    let width;
    let height;

    switch(type) {
        case 'Primary':
            estilo = "#1474FF"
            break;
        case 'Second':
            estilo = "#FFF"
            break;
    }

    switch(size){
        case 'sm':
            width = '14';
            height = '14';
            break;
        case 'md':
            width = '19';
            height = '19';
            break;
        case 'lg':
            width = '24';
            height = '24';
            break;
        case 'xl' :
            width = '32';
            height = '32';
            break;    
    }   

    return (
        <svg width={width} height={height} viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.01574 10.6459V11.1459H1.51574H15.2355C15.3778 11.1459 15.4934 11.2615 15.4934 11.4038V12.6441V13.7207L16.316 13.0261L22.3883 7.89877L22.8408 7.5167L22.3883 7.13468L16.3159 2.00852L15.4934 1.31416V2.39059V3.63086C15.4934 3.77318 15.3778 3.88874 15.2355 3.88874H1.51574H1.01574V4.38874V10.6459ZM15.127 14.511L15.1268 14.5109C15.0362 14.4688 14.9776 14.3774 14.9776 14.2761V12.1617V11.6617H14.4776H0.757857C0.615561 11.6617 0.5 11.5461 0.5 11.4038V3.63086C0.5 3.48851 0.615561 3.37297 0.757857 3.37297H14.4776H14.9776V2.87297V0.758578C14.9776 0.657229 15.0363 0.565864 15.1268 0.523763C15.217 0.481767 15.3251 0.496341 15.4011 0.560536L15.4012 0.560623L23.4078 7.31897C23.408 7.3191 23.4081 7.31923 23.4083 7.31937C23.4668 7.36929 23.5 7.44175 23.5 7.51674C23.5 7.59254 23.4662 7.66586 23.4083 7.71526C23.4081 7.7154 23.408 7.71554 23.4078 7.71568L15.4017 14.4736C15.4017 14.4737 15.4016 14.4737 15.4015 14.4738C15.3544 14.5134 15.296 14.534 15.2355 14.534C15.1946 14.534 15.1591 14.526 15.127 14.511ZM8.50541 15.3083V14.2319L7.68288 14.9263L1.61052 20.0524L1.15799 20.4345L1.61048 20.8165L7.68284 25.9438L8.50541 26.6384V25.5618V24.3215C8.50541 24.1792 8.62098 24.0637 8.7633 24.0637H22.4831H22.9831V23.5637V17.3065V16.8065H22.4831H8.7633C8.62098 16.8065 8.50541 16.6909 8.50541 16.5486V15.3083ZM8.59892 27.3917L8.5976 27.3906L0.592392 20.6336C0.592245 20.6335 0.592098 20.6334 0.591951 20.6333C0.532991 20.5829 0.5 20.5107 0.5 20.4345C0.5 20.3565 0.534167 20.2853 0.589357 20.2391L0.591033 20.2377L8.59764 13.4783L8.59789 13.4781C8.67455 13.4133 8.78207 13.3995 8.87129 13.4412L8.87205 13.4415C8.96257 13.4836 9.02118 13.575 9.02118 13.6763V15.7907V16.2907H9.52118H23.2421C23.3844 16.2907 23.5 16.4063 23.5 16.5486V24.3215C23.5 24.4639 23.3844 24.5794 23.2421 24.5794H9.52118H9.02118V25.0794V27.1938C9.02118 27.2955 8.96242 27.3858 8.87368 27.4267L8.87367 27.4267L8.8698 27.4285C8.83817 27.4434 8.80089 27.4517 8.7633 27.4517C8.70294 27.4517 8.64539 27.4312 8.59892 27.3917Z" fill={estilo} stroke={estilo}/>
        </svg>
    );
 
}