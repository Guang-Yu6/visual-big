import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts';


const px = (n) => n / 2420 * (window as any).pageWidth

export const Chart1 = () => {
    const divRef = useRef(null)
    useEffect(() => {
        console.log(divRef.current)
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(divRef.current);
        // 绘制图表
        myChart.setOption({
            textStyle: {
                fontSize: px(12),
                color: '#79839E'
            },
            grid: {
                x: px(20),
                y: px(40),
                x2: px(40),
                y2: px(20),
                containLabel: true
            },
            title: {show: false},
            legend: {show: false},
            xAxis: {
                data: ['兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区', '兰州新区'],
                axisTick: { // 隐藏尖尖
                    show: false
                },
                axisLabel: {
                    fontSize: px(12),
                    formatter(val) {
                        console.log(val)
                        if (val.length > 2) {  // 如果长度大于2，就换行
                            const array = val.split('');
                            array.splice(2, 0, '\n');
                            return array.join('')
                        } else {  // 长度不大于二就返回默认值
                            return val
                        }
                    }
                },
            },
            yAxis: {
                splitLine: {show: false}, // 横线隐藏
                axisLabel: {
                    fontSize: px(12)
                }
            },
            series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20, 30, 50]
                }
            ]
        });
    }, [])
    return (
        <div className="bordered 管辖统计">
            <h2>案发派出所管辖统计</h2>
            <div ref={divRef} className='chart'></div>
        </div>
    )
}