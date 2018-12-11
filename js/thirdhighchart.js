Highcharts.chart('container3', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'Correlation Between Residents In Poverty and Total Crime'
    },
    subtitle: {
      text: 'Source: United States Census Bureau'
    },
    xAxis: {
        title: {
            enabled: true,
            text: 'Residents Below Poverty Line (%)'
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
                pointFormat: '{point.x}% of residents live in poverty, {point.y} crimes commited'
            }
        }
    },
    series: [{
        name: 'Apopka',
        color: '#D95242',
        data: [[10.6,4214]]

    },
{
        name: 'Boca Raton',
        color: '#D95242',
        data: [[8.4, 5453]]

    },
{
        name: 'Boynton Beach',
        color: '#D95242',
        data: [[16.7, 7248]]

    },
{
        name: 'Bradenton',
        color: '#D95242',
        data: [[17.2, 3489]]

    },
{
        name: 'Cape Coral',
        color: '#D95242',
        data: [[12.7, 6248]]

    },
{
        name: 'Clearwater',
        color: '#D95242',
        data: [[15.9, 8476]]

    },
{
        name: 'Coconut Creek',
        color: '#D95242',
        data: [[8.5, 2471]]

    },
{
        name: 'Coral Gables',
        color: '#D95242',
        data: [[7.5, 2868]]

    },
{
        name: 'Coral Springs',
        color: '#D95242',
        data: [[10.0, 5719]]

    },
{
        name: 'Daytona Beach',
        color: '#D95242',
        data: [[12.6, 9140]]

    },
{
        name: 'Deerfield Beach',
        color: '#D95242',
        data: [[17.3, 5369]]

    },
{
        name: 'Delray Beach',
        color: '#D95242',
        data: [[16.5, 5993]]

    },
{
        name: 'Doral',
        color: '#D95242',
        data: [[12.8, 3646]]

    },
{
        name: 'Fort Lauderdale',
        color: '#D95242',
        data: [[19.3, 22171]]

    },
{
        name: 'Fort Myers',
        color: '#D95242',
        data: [[20.6, 5923]]

    },
{
        name: 'Gainesville',
        color: '#D95242',
        data: [[33.6, 11472]]

    },
{
        name: 'Hialeah',
        color: '#D95242',
        data: [[25.9, 11518]]

    },
{
        name: 'Hollywood',
        color: '#D95242',
        data: [[15.2, 10221]]

    },
{
        name: 'Homestead',
        color: '#D95242',
        data: [[27.1, 6315]]

    },
{
        name: 'Jupiter',
        color: '#D95242',
        data: [[8.2, 2631]]

    },
{
        name: 'Kissimmee',
        color: '#D95242',
        data: [[24.4, 4916]]

    },
{
        name: 'Lakeland',
        color: '#D95242',
        data: [[17.9, 8659]]

    },
{
        name: 'Largo',
        color: '#D95242',
        data: [[15.1, 6446]]

    },
{
        name: 'Lauderhill',
        color: '#D95242',
        data: [[24.3, 6880]]

    },
{
        name: 'Margate',
        color: '#D95242',
        data: [[11.7, 2330]]

    },
{
        name: 'Melbourne',
        color: '#D95242',
        data: [[16.7, 8149]]

    },
{
        name: 'Miami',
        color: '#D95242',
        data: [[25.8, 43921]]

    },
{
        name: 'Miami Beach',
        color: '#D95242',
        data: [[16.6, 16944]]

    },
{
        name: 'Miami Gardens',
        color: '#D95242',
        data: [[21.5, 9249]]

    },
{
        name: 'Miramar',
        color: '#D95242',
        data: [[10.1, 5311]]

    },
{
        name: 'North Miami',
        color: '#D95242',
        data: [[22.7, 6202]]

    },
{
        name: 'North Port',
        color: '#D95242',
        data: [[12.3, 1797]]

    },
{
        name: 'Ocala',
        color: '#D95242',
        data: [[20.3, 7290]]

    },
{
        name: 'Orlando',
        color: '#D95242',
        data: [[19.1, 35228]]

    },
{
        name: 'Palm Bay',
        color: '#D95242',
        data: [[15.6, 5369]]

    },
{
        name: 'Palm Beach Gardens',
        color: '#D95242',
        data: [[6.2, 3062]]

    },
{
        name: 'Pembroke Pines',
        color: '#D95242',
        data: [[8.4, 8098]]

    },
{
        name: 'Pensacola',
        color: '#D95242',
        data: [[17.5, 4788]]

    },
{
        name: 'Pinellas Park',
        color: '#D95242',
        data: [[15.2, 5279]]

    },
{
        name: 'Plantation',
        color: '#D95242',
        data: [[9.0, 6636]]

    },
{
        name: 'Pompano Beach',
        color: '#D95242',
        data: [[21.1, 12584]]

    },
{
        name: 'Port Orange',
        color: '#D95242',
        data: [[14.9, 3165]]

    },
{
        name: 'Port St. Lucie',
        color: '#D95242',
        data: [[12.1, 4625]]

    },
{
        name: 'Sanford',
        color: '#D95242',
        data: [[20.7, 5784]]

    },
{
        name: 'Sarasota',
        color: '#D95242',
        data: [[18.6, 4576]]

    },
{
        name: 'St. Petersburg',
        color: '#D95242',
        data: [[15.9, 26478]]

    },
{
        name: 'Sunrise',
        color: '#D95242',
        data: [[13.7, 6007]]

    },
{
        name: 'Tallahassee',
        color: '#D95242',
        data: [[27.1, 21874]]

    },
{
        name: 'Tamarac',
        color: '#D95242',
        data: [[11.1, 3361]]

    },
{
        name: 'Tampa',
        color: '#D95242',
        data: [[20.0, 17013]]

    },
{
        name: 'Wellington',
        color: '#D95242',
        data: [[7.9, 2388]]

    },
{
        name: 'Weston',
        color: '#D95242',
        data: [[7.5, 997]]

    },
{
        name: 'West Palm Beach',
        color: '#D95242',
        data: [[18.9, 12389]]

    }]
});
