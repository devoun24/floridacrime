Highcharts.chart('container4', {
    title: {
        text: 'Violent Crime, 2017'
    },
    subtitle: {
        text: 'Source: FBI Uniform Crime Reporting Program'
    },
    yAxis: {
        title: {
            text: 'Violent Crimes Commited'
        }
    },
    legend: {
        enabled: false,
    },
    plotOptions: {
        series: {  color: '#A83738'},
        hover: { enabled: true,},
        label: {enable:false,},
       tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x}% had {point.y} violent crimes commited last year.'
            },
    },
    xAxis: {
        title: {
            text: 'Cities'
        },
         categories: ['Clearwater', 'Coral Springs', 'Davie', 'Gainesville', 'Lakeland', 'Miami Gardens', 'Miramar', 'Palm Bay', 'Pompano Beach', 'West Palm Beach'],
    },
    series: [{
    		name: 'Violent Crimes',
        data: [578, 249, 244, 952, 307, 896, 408, 561, 958, 906]}],
});
Highcharts.chart('container5', {
    title: {
        text: 'Murder and Nonnegligent Manslaughter, 2017'
    },
    subtitle: {
        text: 'Source: FBI Uniform Crime Reporting Program'
    },
    yAxis: {
        title: {
            text: 'Murder and Nonnegligent Manslaughters Commited'
        }
    },
    legend: {
        enabled: false,
    },
    plotOptions: {
        series: {  color: '#A83738'},
        hover: { enabled: true,},
        label: {enable:false,},
       tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x}% had {point.y} murders and nonnegligent manslaughters commited last year.'
            },
    },
    xAxis: {
        title: {
            text: 'Cities'
        },
         categories: ['Clearwater', 'Coral Springs', 'Davie', 'Gainesville', 'Lakeland', 'Miami Gardens', 'Miramar', 'Palm Bay', 'Pompano Beach', 'West Palm Beach'],
    },
    series: [{
    		name: 'Murders and Nonnegligent Manslaughters',
        data: [3, 0, 0, 4, 1, 19, 3, 7, 8, 25]}],
});
Highcharts.chart('container6', {
    title: {
        text: 'Rape, 2017'
    },
    subtitle: {
        text: 'Source: FBI Uniform Crime Reporting Program'
    },
    yAxis: {
        title: {
            text: 'Rapes Commited'
        }
    },
    legend: {
        enabled: false,
    },
    plotOptions: {
        series: {  color: '#A83738'},
        hover: { enabled: true,},
        label: {enable:false,},
       tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x}% had {point.y} rapes commited last year.'
            },
    },
    xAxis: {
        title: {
            text: 'Cities'
        },
         categories: ['Clearwater', 'Coral Springs', 'Davie', 'Gainesville', 'Lakeland', 'Miami Gardens', 'Miramar', 'Palm Bay', 'Pompano Beach', 'West Palm Beach'],
    },
    series: [{
    		name: 'Rapes',
        data: [85, 47, 33, 164, 73, 18, 33, 41, 61, 66]}],
});
Highcharts.chart('container7', {
    title: {
        text: 'Robbery, 2017'
    },
    subtitle: {
        text: 'Source: FBI Uniform Crime Reporting Program'
    },
    yAxis: {
        title: {
            text: 'Robberies Commited'
        }
    },
    legend: {
        enabled: false,
    },
    plotOptions: {
        series: {  color: '#A83738'},
        hover: { enabled: true,},
        label: {enable:false,},
       tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x}% had {point.y} robberies commited last year.'
            },
    },
    xAxis: {
        title: {
            text: 'Cities'
        },
         categories: ['Clearwater', 'Coral Springs', 'Davie', 'Gainesville', 'Lakeland', 'Miami Gardens', 'Miramar', 'Palm Bay', 'Pompano Beach', 'West Palm Beach'],
    },
    series: [{
    		name: 'Robberies',
        data: [141, 68, 82, 176, 89, 246, 92, 50, 410, 322]}],
});
Highcharts.chart('container8', {
    title: {
        text: 'Aggravated Assault, 2017'
    },
    subtitle: {
        text: 'Source: FBI Uniform Crime Reporting Program'
    },
    yAxis: {
        title: {
            text: 'Aggravated Assaults Commited'
        }
    },
    legend: {
        enabled: false,
    },
    plotOptions: {
        series: {  color: '#A83738'},
        hover: { enabled: true,},
        label: {enable:false,},
       tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x}% had {point.y} aggravated assualts commited last year.'
            },
    },
    xAxis: {
        title: {
            text: 'Cities'
        },
         categories: ['Clearwater', 'Coral Springs', 'Davie', 'Gainesville', 'Lakeland', 'Miami Gardens', 'Miramar', 'Palm Bay', 'Pompano Beach', 'West Palm Beach'],
    },
    series: [{
    		name: 'Aggravated Assaults',
        data: [349, 134, 129, 608, 144, 613, 280, 463, 479, 493]}],
});
Highcharts.chart('container9', {
    title: {
        text: 'Property Crime, 2017'
    },
    subtitle: {
        text: 'Source: FBI Uniform Crime Reporting Program'
    },
    yAxis: {
        title: {
            text: 'Property Crimes Commited'
        }
    },
    legend: {
        enabled: false,
    },
    plotOptions: {
        series: {  color: '#A83738'},
        hover: { enabled: true,},
        label: {enable:false,},
       tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x}% had {point.y} property crimes commited last year.'
            },
    },
    xAxis: {
        title: {
            text: 'Cities'
        },
         categories: ['Clearwater', 'Coral Springs', 'Davie', 'Gainesville', 'Lakeland', 'Miami Gardens', 'Miramar', 'Palm Bay', 'Pompano Beach', 'West Palm Beach'],
    },
    series: [{
    		name: 'Property Crimes',
        data: [3652, 2609, 2722, 4778, 4021, 3722, 2246, 2120, 5330,
              5275]}],
});
Highcharts.chart('container10', {
    title: {
        text: 'Burglary, 2017'
    },
    subtitle: {
        text: 'Source: FBI Uniform Crime Reporting Program'
    },
    yAxis: {
        title: {
            text: 'Burglaries Commited'
        }
    },
    legend: {
        enabled: false,
    },
    plotOptions: {
        series: {  color: '#A83738'},
        hover: { enabled: true,},
        label: {enable:false,},
       tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x}% had {point.y} burglaries commited last year.'
            },
    },
    xAxis: {
        title: {
            text: 'Cities'
        },
         categories: ['Clearwater', 'Coral Springs', 'Davie', 'Gainesville', 'Lakeland', 'Miami Gardens', 'Miramar', 'Palm Bay', 'Pompano Beach', 'West Palm Beach'],
    },
    series: [{
    		name: 'Burglaries',
        data: [494, 249, 267, 500, 574, 492, 292, 225, 898,
              847]}],
});
Highcharts.chart('container11', {
    title: {
        text: 'Larceny Theft, 2017'
    },
    subtitle: {
        text: 'Source: FBI Uniform Crime Reporting Program'
    },
    yAxis: {
        title: {
            text: 'Larceny Thefts Commited'
        }
    },
    legend: {
        enabled: false,
    },
    plotOptions: {
        series: {  color: '#A83738'},
        hover: { enabled: true,},
        label: {enable:false,},
       tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x}% had {point.y} larceny thefts commited last year.'
            },
    },
    xAxis: {
        title: {
            text: 'Cities'
        },
         categories: ['Clearwater', 'Coral Springs', 'Davie', 'Gainesville', 'Lakeland', 'Miami Gardens', 'Miramar', 'Palm Bay', 'Pompano Beach', 'West Palm Beach'],
    },
    series: [{
    		name: 'Larceny Thefts',
        data: [2909, 2149, 2168, 3915, 3237, 2811, 1694, 1524, 3624,
              3907]}],
});
Highcharts.chart('container12', {
    title: {
        text: 'Motor Vehicle Theft, 2017'
    },
    subtitle: {
        text: 'Source: FBI Uniform Crime Reporting Program'
    },
    yAxis: {
        title: {
            text: 'Motor Vehicle Thefts Commited'
        }
    },
    legend: {
        enabled: false,
    },
    plotOptions: {
        series: {  color: '#A83738'},
        hover: { enabled: true,},
        label: {enable:false,},
       tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x}% had {point.y} motor vehicle thefts commited last year.'
            },
    },
    xAxis: {
        title: {
            text: 'Cities'
        },
         categories: ['Clearwater', 'Coral Springs', 'Davie', 'Gainesville', 'Lakeland', 'Miami Gardens', 'Miramar', 'Palm Bay', 'Pompano Beach', 'West Palm Beach'],
    },
    series: [{
    		name: 'Motor Vehicle Thefts',
        data: [249, 211, 287, 363, 210, 419, 260, 151, 808,
              521]}],
});
Highcharts.chart('container13', {
    title: {
        text: 'Arson, 2017'
    },
    subtitle: {
        text: 'Source: FBI Uniform Crime Reporting Program'
    },
    yAxis: {
        title: {
            text: 'Arson Commited'
        }
    },
    legend: {
        enabled: false,
    },
    plotOptions: {
        series: {  color: '#A83738'},
        hover: { enabled: true,},
        label: {enable:false,},
       tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x}% had {point.y} arsons commited last year.'
            },
    },
    xAxis: {
        title: {
            text: 'Cities'
        },
         categories: ['Clearwater', 'Coral Springs', 'Davie', 'Gainesville', 'Lakeland', 'Miami Gardens', 'Miramar', 'Palm Bay', 'Pompano Beach', 'West Palm Beach'],
    },
    series: [{
    		name: 'Motor Vehicle Thefts',
        data: [16, 3, 13, 12, 3, 13, 3, 7, 8, 27]}],
});
