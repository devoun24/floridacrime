Highcharts.chart('container1', {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'Correlation Between Household Income and Total Crime'
    },
    subtitle: {
      text: 'Source: United States Census Bureau'
    },
    xAxis: {
        title: {
            enabled: true,
            text: 'Total Crime'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
    },
    yAxis: {
        title: {
            text: 'Median Household Income'
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
                pointFormat: '{point.x} crimes commited, {point.y} median household income'
            }
        }
    },
    series: [{
        name: 'Apopka',
        color: '#D95242',
        data: [[4214, 59869]]

    },
{
        name: 'Boca Raton',
        color: '#D95242',
        data: [[5453, 76218]]

    },
{
        name: 'Boynton Beach',
        color: '#D95242',
        data: [[7248, 50561]]

    },
{
        name: 'Bradenton',
        color: '#D95242',
        data: [[3489, 42902]]

    },
{
        name: 'Cape Coral',
        color: '#D95242',
        data: [[6248, 53653]]

    },
{
        name: 'Clearwater',
        color: '#D95242',
        data: [[8476, 45631]]

    },
{
        name: 'Coconut Creek',
        color: '#D95242',
        data: [[2471, 56556]]

    },
{
        name: 'Coral Gables',
        color: '#D95242',
        data: [[2868, 96887]]

    },
{
        name: 'Coral Springs',
        color: '#D95242',
        data: [[5719, 70768]]

    },
{
        name: 'Davie',
        color: '#D95242',
        data: [[5945, 64170	]]

    },
{
        name: 'Daytona Beach',
        color: '#D95242',
        data: [[9140, 30137]]

    },
{
        name: 'Deerfield Beach',
        color: '#D95242',
        data: [[5369, 44142]]

    },
{
        name: 'Delray Beach',
        color: '#D95242',
        data: [[5993, 53233]]

    },
{
        name: 'Doral',
        color: '#D95242',
        data: [[3646, 76184]]

    },
{
        name: 'Fort Lauderdale',
        color: '#D95242',
        data: [[22171, 52315]]

    },
{
        name: 'Fort Myers',
        color: '#D95242',
        data: [[5923, 41591]]

    },
{
        name: 'Gainesville',
        color: '#D95242',
        data: [[11472, 34004]]

    },
{
        name: 'Hialeah',
        color: '#D95242',
        data: [[11518, 31012]]

    },
{
        name: 'Hollywood',
        color: '#D95242',
        data: [[10221, 50019]]

    },
{
        name: 'Homestead',
        color: '#D95242',
        data: [[6315, 43150]]

    },
{
        name: 'Jupiter',
        color: '#D95242',
        data: [[2631, 79731]]

    },
{
        name: 'Kissimmee',
        color: '#D95242',
        data: [[4916, 38353]]

    },
{
        name: 'Lakeland',
        color: '#D95242',
        data: [[8659, 42033]]

    },
{
        name: 'Largo',
        color: '#D95242',
        data: [[6446, 41008]]

    },
{
        name: 'Lauderhill',
        color: '#D95242',
        data: [[6880, 38805]]

    },
{
        name: 'Margate',
        color: '#D95242',
        data: [[2330, 43782]]

    },
{
        name: 'Melbourne',
        color: '#D95242',
        data: [[8149, 43159]]

    },
{
        name: 'Miami',
        color: '#D95242',
        data: [[43921, 33999]]

    },
{
        name: 'Miami Beach',
        color: '#D95242',
        data: [[16944, 50193]]

    },
{
        name: 'Miami Gardens',
        color: '#D95242',
        data: [[9249, 41139]]

    },
{
        name: 'Miramar',
        color: '#D95242',
        data: [[5311, 66560]]

    },
{
        name: 'North Miami',
        color: '#D95242',
        data: [[6202, 39723]]

    },
{
        name: 'North Port',
        color: '#D95242',
        data: [[1797, 54687]]

    },
{
        name: 'Ocala',
        color: '#D95242',
        data: [[7290, 39238]]

    },
{
        name: 'Orlando',
        color: '#D95242',
        data: [[35228, 45436]]

    },
{
        name: 'Palm Bay',
        color: '#D95242',
        data: [[5369, 45811]]

    },
{
        name: 'Palm Beach Gardens',
        color: '#D95242',
        data: [[3062, 77864]]

    },
{
        name: 'Pembroke Pines',
        color: '#D95242',
        data: [[8098, 65805]]

    },
{
        name: 'Pensacola',
        color: '#D95242',
        data: [[4788, 46569]]

    },
{
        name: 'Pinellas Park',
        color: '#D95242',
        data: [[5279, 42106]]

    },
{
        name: 'Plantation',
        color: '#D95242',
        data: [[6636, 69531]]

    },
{
        name: 'Pompano Beach',
        color: '#D95242',
        data: [[12584, 44756]]

    },
{
        name: 'Port Orange',
        color: '#D95242',
        data: [[3165, 48478]]

    },
{
        name: 'Port St. Lucie',
        color: '#D95242',
        data: [[4625, 54046]]

    },
{
        name: 'Sanford',
        color: '#D95242',
        data: [[5784, 42025]]

    },
{
        name: 'Sarasota',
        color: '#D95242',
        data: [[4576, 45073]]

    },
{
        name: 'St. Petersburg',
        color: '#D95242',
        data: [[26478, 50622]]

    },
{
        name: 'Sunrise',
        color: '#D95242',
        data: [[6007, 53237]]

    },
{
        name: 'Tallahassee',
        color: '#D95242',
        data: [[21874, 42418]]

    },
{
        name: 'Tamarac',
        color: '#D95242',
        data: [[3361, 45474]]

    },
{
        name: 'Tampa',
        color: '#D95242',
        data: [[17013, 48245]]

    },
{
        name: 'Wellington',
        color: '#D95242',
        data: [[2388, 85172]]

    },
{
        name: 'Weston',
        color: '#D95242',
        data: [[997, 96173]]

    },
{
        name: 'West Palm Beach',
        color: '#D95242',
        data: [[12389, 49054]]

    }]
});
