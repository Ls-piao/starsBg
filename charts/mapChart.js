import $echarts from 'echarts'
import 'echarts/map/js/province/guangdong.js'
import 'echarts/map/js/china'
export default function map(id) {
    let chart = $echarts.init(document.getElementById(id));
    chart.clear();

    const optionData = {
        title: {
            text: '订阅我博客的人群分布',
            x: 'center',
            textStyle: {
                color: '#dcdcdc'
            }
        },
        tooltip: {
            trigger: 'item',
            transitionDuration: 1,
            enterable: true
        },
        legend: {
            show: true,
            itemWidth: 30,
            itemHeight: 20,
            orient: 'vertical',
            x: 'left',
            data: ['iphone3'],
        },
        dataRange: {
            show: false,
            min: 0,
            max: 150,
            x: 'left',
            y: 'bottom',
            text: ['max', 'min'],
            calculable: true,
            color:['#fff','green','blue','#ff6700','red']
           
        },
        toolbox: {
            show: false,
            orient: 'vertical',
            x: 'right',
            y: 'center',
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        roamController: {
            show: true,
            x: 'right',
            mapTypeControl: {
                'china': true
            }
        },
        series: [
            {
                name: 'iphone3',
                type: 'map',
                mapType: '广东',
                roam: true,
                scaleLimit: { //滚轮缩放的极限控制
                    min: 1,
                    max: 2
                },
                hoverable: true,

                itemStyle: {
                    normal: {
                        label: { show: true },
                        areaStyle: {
                            color: '#ff6700',//默认的地图板块颜色
                        }
                    },
                    emphasis: {
                        label: {
                            show: true,
                            textStyle:
                            {
                                color: '#ff6700'
                            }
                        },
                        areaStyle: {
                            color: '#000',//默认的地图板块颜色
                        }
                    }
                },
                data: [
                    { name: '珠海市', value:123,itemStyle:{normal:{areaColor:'#fff',label:{show:false}}}},
                    { name: '广州市', value:20},
                    { name: '中山市', value:55},
                    { name: '佛山市', value:23},
                    { name: '清远市', value:66},
                    { name: '梅州市', value:77},
                    { name: '汕头市', value:99},
                    { name: '东莞市', value:1},
                    { name: '惠州市', value:12},
                    { name: '深圳市', value:100}
                ]
            }
        ]
    };

    chart.setOption(optionData);
}