Highcharts.chart('container2', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'Correlation Between Graduation Rates and Total Crime'
    },
    subtitle: {
      text: 'Source: United States Census Bureau'
    },
    xAxis: {
        title: {
            enabled: true,
            text: 'Graduation Rates (%)'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
    },
    yAxis: {
        title: {
            text: 'Total Crime'
        }
    },
    legend: {
    	enabled: false,
    },
    labels: {
    	enabled: false,
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x}% of students graduate high school or higher, {point.y} crimes commited'
            }
        }
    },
    series: [{
        name: 'Apopka',
        color: '#D95242',
        data: [[86.1,4214]]

    },
{
        name: 'Boca Raton',
        color: '#D95242',
        data: [[96.1, 5453]]

    },
{
        name: 'Boynton Beach',
        color: '#D95242',
        data: [[87.6, 7248]]

    },
{
        name: 'Bradenton',
        color: '#D95242',
        data: [[85.2, 3489]]

    },
{
        name: 'Cape Coral',
        color: '#D95242',
        data: [[91.0, 6248]]

    },
{
        name: 'Clearwater',
        color: '#D95242',
        data: [[89.4, 8476]]

    },
{
        name: 'Coconut Creek',
        color: '#D95242',
        data: [[92.7, 2471]]

    },
{
        name: 'Coral Gables',
        color: '#D95242',
        data: [[95.6, 2868]]

    },
{
        name: 'Coral Springs',
        color: '#D95242',
        data: [[92.4, 5719]]

    },
{
        name: 'Davie',
        color: '#D95242',
        data: [[91.2, 5945]]

    },
{
        name: 'Daytona Beach',
        color: '#D95242',
        data: [[87.6, 9140]]

    },
{
        name: 'Deerfield Beach',
        color: '#D95242',
        data: [[85.7, 5369]]

    },
{
        name: 'Delray Beach',
        color: '#D95242',
        data: [[86.0, 5993]]

    },
{
        name: 'Doral',
        color: '#D95242',
        data: [[95.4, 3646]]

    },
{
        name: 'Fort Lauderdale',
        color: '#D95242',
        data: [[86.8, 22171]]

    },
{
        name: 'Fort Myers',
        color: '#D95242',
        data: [[80.6, 5923]]

    },
{
        name: 'Gainesville',
        color: '#D95242',
        data: [[91.5, 11472]]

    },
{
        name: 'Hialeah',
        color: '#D95242',
        data: [[70.6, 11518]]

    },
{
        name: 'Hollywood',
        color: '#D95242',
        data: [[87.0, 10221]]

    },
{
        name: 'Homestead',
        color: '#D95242',
        data: [[73.8, 6315]]

    },
{
        name: 'Jupiter',
        color: '#D95242',
        data: [[93.7, 2631]]

    },
{
        name: 'Kissimmee',
        color: '#D95242',
        data: [[83.7, 4916]]

    },
{
        name: 'Lakeland',
        color: '#D95242',
        data: [[88.4, 8659]]

    },
{
        name: 'Largo',
        color: '#D95242',
        data: [[89.5, 6446]]

    },
{
        name: 'Lauderhill',
        color: '#D95242',
        data: [[82.2, 6880]]

    },
{
        name: 'Margate',
        color: '#D95242',
        data: [[86.7, 2330]]

    },
{
        name: 'Melbourne',
        color: '#D95242',
        data: [[90.5, 8149]]

    },
{
        name: 'Miami',
        color: '#D95242',
        data: [[75.6, 43921]]

    },
{
        name: 'Miami Beach',
        color: '#D95242',
        data: [[88.7, 16944]]

    },
{
        name: 'Miami Gardens',
        color: '#D95242',
        data: [[79.9, 9249]]

    },
{
        name: 'Miramar',
        color: '#D95242',
        data: [[90.8, 5311]]

    },
{
        name: 'North Miami',
        color: '#D95242',
        data: [[77.1, 6202]]

    },
{
        name: 'North Port',
        color: '#D95242',
        data: [[90.3, 1797]]

    },
{
        name: 'Ocala',
        color: '#D95242',
        data: [[86.6, 7290]]

    },
{
        name: 'Orlando',
        color: '#D95242',
        data: [[90.1, 35228]]

    },
{
        name: 'Palm Bay',
        color: '#D95242',
        data: [[89.5, 5369]]

    },
{
        name: 'Palm Beach Gardens',
        color: '#D95242',
        data: [[94.9, 3062]]

    },
{
        name: 'Pembroke Pines',
        color: '#D95242',
        data: [[92.6, 8098]]

    },
{
        name: 'Pensacola',
        color: '#D95242',
        data: [[92.2, 4788]]

    },
{
        name: 'Pinellas Park',
        color: '#D95242',
        data: [[88.3, 5279]]

    },
{
        name: 'Plantation',
        color: '#D95242',
        data: [[93.4, 6636]]

    },
{
        name: 'Pompano Beach',
        color: '#D95242',
        data: [[83.4, 12584]]

    },
{
        name: 'Port Orange',
        color: '#D95242',
        data: [[90.4, 3165]]

    },
{
        name: 'Port St. Lucie',
        color: '#D95242',
        data: [[87.4, 4625]]

    },
{
        name: 'Sanford',
        color: '#D95242',
        data: [[89.6, 5784]]

    },
{
        name: 'Sarasota',
        color: '#D95242',
        data: [[88.1, 4576]]

    },
{
        name: 'St. Petersburg',
        color: '#D95242',
        data: [[90.5, 26478]]

    },
{
        name: 'Sunrise',
        color: '#D95242',
        data: [[88.1, 6007]]

    },
{
        name: 'Tallahassee',
        color: '#D95242',
        data: [[93.3, 21874]]

    },
{
        name: 'Tamarac',
        color: '#D95242',
        data: [[89.6, 3361]]

    },
{
        name: 'Tampa',
        color: '#D95242',
        data: [[87.1, 17013]]

    },
{
        name: 'Wellington',
        color: '#D95242',
        data: [[95.0, 2388]]

    },
{
        name: 'Weston',
        color: '#D95242',
        data: [[96.7, 997]]

    },
{
        name: 'West Palm Beach',
        color: '#D95242',
        data: [[85.5, 12389]]

    }]
});
