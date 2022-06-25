import React, {useEffect, useRef} from 'react';
import './home.scss';
import headerBg from '../images/header.png'
import * as echarts from 'echarts'
import {Chart1} from '../components/chart-1'
import {Chart2} from '../components/chart-2'

export const Home = () => {
    return (
        <div className='home'>
            <header style={{backgroundImage: `url(${headerBg})`}}/>
            <main>
                <section className="section1">
                    <Chart1></Chart1>
                    <Chart2></Chart2>
                </section>
                <section className='bordered section2'></section>
                <section className='bordered section3'>3</section>
                <section className='bordered section4'>4</section>
                <section className='bordered section5'>5</section>
            </main>
        </div>
    );
};
