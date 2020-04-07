import $echarts from 'echarts'
export default function line(id){
    let chart = $echarts.init(document.getElementById(id));
    chart.clear();

    const optionData = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
        }]
    };

    chart.setOption(optionData);
}