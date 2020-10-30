//饼图
export function Doughnut(data) {
    let option = {
        // tooltip: {
        //     trigger: 'item',
        //     formatter: '{a} <br/>{b}: {c} ({d}%)'
        // },
        color: ['#35e894', '#ffd758', "#f6714d"],
        legend: {
            orient: 'vertical',
            left: 2,
            top: 40,
            bottom: 20,
            icon: "circle",
            textStyle: {
                fontSize: 14,//字体大小
                color: '#ffffff'//字体颜色
            },
            data: data.legend
        },
        series: [
            {
                name: '人员入园管理',
                type: 'pie',
                radius: ['60%', '70%'],
                center: ['70%', '40%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                itemStyle: {
                    borderWidth: 5, //设置border的宽度有多大
                    borderColor: '#161622',
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '16',
                        fontWeight: 'bold',
                        formatter: function (val) {   //让series 中的文字进行换行
                            return val.data.name + "\n" + "{b|" + val.data.value + "(" + val.percent + "%" + ")" + "}";
                        },
                        rich: {
                            b: {
                                fontSize: 14,
                                fontFamily: "微软雅黑",
                                color: "#fff",
                                lineHeight: 30
                            }
                        }
                    }
                },
                labelLine: {
                    show: false
                },
                data: data.information,
            }
        ]
    };
    data.EChart.setOption(option);
}
//柱状图
export function Columnarvar(data) {
    let option = {
        color: ["#1ffdef", "#44b2fd"],
        legend: {
            data: [data.nameO, data.nameT],
            icon: "circle",
            textStyle: {
                fontSize: 14,//字体大小
                color: '#ffffff'//字体颜色
            },
        },
        barGap: "0%",
        tooltip: {},
        xAxis: {
            data: data.Xdata,
            splitLine: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            },
            axisLine: {       //x轴
                show: false
            },
            axisTick: {       //x轴刻度线
                show: false
            },
            splitLine: {
                show: false
            }
        },
        yAxis: {
            axisLine: {
                show: false,
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false
            }
        },
        series: [{
            name: data.nameO,
            type: 'bar',
            data: data.data0,
            itemStyle: {
                normal: { color: '#72b201' }
            },
            animationDelay: function (idx) {
                return idx * 7;
            }
        }, {
            name: data.nameT,
            type: 'bar',
            data: data.dataT,
            animationDelay: function (idx) {
                return idx * 6 + 100;
            },
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };
    data.EChart.setOption(option);
}
//南丁格尔玫瑰图
export function Rose(data) {
    let option = {
        // backgroundColor: '#2c343c',
        // title: {
        //     text: 'Customized Pie',
        //     left: 'center',
        //     top: 20,
        //     textStyle: {
        //         color: '#ccc'
        //     }
        // },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        visualMap: {
            show: false,
            min: 150,
            max: 700,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '70%',
                center: ['50%', '50%'],
                data: [
                    {
                        value: 335, name: '直接访问', itemStyle: {
                            color: '#33f8b3',

                        },
                    },
                    {
                        value: 310, name: '邮件营销', itemStyle: {
                            color: '#47b3fe',

                        },
                    },
                    {
                        value: 274, name: '联盟广告', itemStyle: {
                            color: '#fffc37',

                        },
                    },
                    {
                        value: 235, name: '视频广告', itemStyle: {
                            color: 'orange',
                        },
                    },
                    {
                        value: 400, name: '搜索引擎', itemStyle: {
                            color: '#1DE516',

                        },
                    }
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                    // color: '#fff'
                    fontSize: 16,
                    formatter: function (val) {   //让series 中的文字进行换行
                        return val.data.name + "\n" + "{b|" + val.data.value +"件}"+"{c|"+ "(" + val.percent + "%" + ")" + "}";
                    },
                    rich: {
                        b: {
                            fontSize: 16,
                            fontFamily: "微软雅黑",
                            // color: "#fff",
                            lineHeight: 30
                        },
                        c:{
                            fontSize: 12,
                            fontFamily: "微软雅黑",
                            // color: "#fff",
                            lineHeight: 30
                        }
                    }
                },
                labelLine: {
                    lineStyle: {
                        type: 'dashed'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                },
                itemStyle: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }

        ]
    };
    data.EChart.setOption(option);
}