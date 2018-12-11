var mymap = L.map('mymap').setView([27.902, -83.165], 6.00);

L.tileLayer('https://api.mapbox.com/styles/v1/devoun24/cjpiykoj542vv2ro1ti0ys9pq/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZGV2b3VuMjQiLCJhIjoiY2pveWx3bnRpMDBoaTNrbzFwNzFsMGlvMiJ9.tXgkC4n6J0V_Yr8NY7otSQ',
  {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> and <a href="https://ucr.fbi.gov/crime-in-the-u.s/2017/crime-in-the-u.s.-2017/tables/table-8/table-8-state-cuts/florida.xls">FBI Database</a>, Contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 6
}).addTo(mymap);

for ( let i = 0; i < counties.length; i++ ) {
  L.marker( [ counties[i].latitude, counties[i].longitude ] )
  .bindPopup( '<h3>' + counties[i].placeName + '</h3>' + '<h4>' +            counties[i].descrip + '</h4>')
  .addTo( mymap );
}
