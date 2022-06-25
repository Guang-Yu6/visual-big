import React, {useEffect, useRef} from "react"
import * as echarts from 'echarts';

const px = (n) => n / 2420 * (window as any).pageWidth
export const Chart2 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(divRef.current);
        // 绘制图表
        myChart.setOption({
            textStyle: {
                fontSize: px(12),
                color: '#79839E'
            },
            title: {show: false},
            legend: {show: false},
            grid: {
                x: px(20),
                y: px(20),
                x2: px(20),
                y2: px(20),
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01],
                splitLine: {show: false},
                axisLabel: {show: false}
            },
            yAxis: {
                axisTick: {show: false},
                type: 'category',
                data: [ '城关区公安局', '七里河区公安局', '西固区公安局',
                        '安宁区公安局', '红古区公安局', '永登区公安局',
                        '皋兰区公安局', '渝中区公安局', '新区公安局'],
                axisLabel: {
                    fontSize: px(12),
                    formatter(val) {
                        return val.replace('公安局', '\n公安局');
                    }
                },
            },
            series: [
                {
                    name: '破案排名',
                    type: 'bar',
                    data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                    itemStyle: { // 渐变色
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#2034f9'
                            }, {
                                offset: 1,
                                color: '#04a1ff'
                            }]),
                        }
                    }
                },
                {
                    name: '追缉排名',
                    type: 'bar',
                    data: [2, 3, 4, 5, 6, 7, 8, 9, 10,],
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#b92ae8'
                            }, {
                                offset: 1,
                                color: '#6773e7'
                            }]),
                        }
                    }
                }
            ]
        });
    }, [])
    return (
        <div className="bordered 破获排名">
            <h2>案件破获排名</h2>
            <div ref={divRef} className='chart'/>
            <div className="legend">
                <span className="first"/> 破案排名1
                <span className="second"/> 破案排名2
            </div>


        </div>
    )
}