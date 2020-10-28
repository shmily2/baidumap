export function Doughnut(data) {
    let option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color : [ 'red', 'orange', 'yellow', 'green', 'blue' ],
        legend: {
            orient: 'vertical',
            left: 10,
            top: 20,
            bottom: 20,
            textStyle: {
                fontSize: 14,//字体大小
                color: '#ffffff'//字体颜色
            },
            data: data.legend
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                center: ['70%', '40%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: data.information,
            }
        ]
    };
    data.pieEChart.setOption(option);
}