import React from 'react';
import { Map, GeoJSON} from 'react-leaflet';
import mapDataTest from './../data/CountriesTest.json';
import 'leaflet/dist/leaflet.css'; //This style is for the scroll and plus controls of the map
import '../css/LeafletMap.css';
import * as L from 'leaflet';
import hash from 'object-hash';



const TradeReportMap =(props)=> {
   

    var mscreenMapa =  null;


    const converter=()=>{

      
       
     //   paisesTest = propsAux.countriesData.datasets
if(props.countriesData.datasets!==null){
    
      for (const country in props.countriesData.datasets) {
            
            color.push(props.countriesData.datasets[country].backgroundColor);
            countriesName.push(props.countriesData.datasets[country].label);
            data.push(props.countriesData.datasets[country].data);
        }

       
      

       years = props.countriesData.labels;

      //  console.log(color)
        //console.log("PAISES DESDE LA GRAFICAS")
        //console.log(countriesName)
       // console.log(props.countriesData.datasets.length)
        //console.log(data)
     
      

   // console.log(props.countriesData.datasets[1].label);
    }
    }


var popup=null;
    //This list is for the countries of Rest_of_Sub_Saharan_Africa
    //because in the data they do not come by individual countries
  var  name_countries_Rest_of_Sub_Saharan_Africa = [
        'Angola',
		'Benin',
		'Botswana',
		'Burkina Faso',
		'Burundi',
		'Cameroon',
		'Cape Verde',
		'Central African Republic',
		'Chad',
		'Comoros',
		'Democratic Republic of the Congo',
		'Republic of Congo',
    	'Ivory Coast',
		'Djibouti',
		'Equatorial Guinea',
		'Eritrea',
		'Ethiopia',
		'Gabon',
		'Gambia',
		'Ghana',
		'Guinea',
		'Guinea Bissau',
		'Kenya',
		'Lesotho',
		'Liberia',
		'Madagascar',
		'Malawi',
		'Mali',
		'Mauritania',
		'Mauritius',
		'Mozambique',
		'Namibia',
		'Niger',
		'Nigeria',
		'Reunion',
		'Rwanda',
		'Sao Tome',
		'Sao Tome and Principe',
		'Senegal',
		'Seychelles',
		'Sierra Leone',
		'Somalia',
		'South Africa',
		'Sudan',
		'Swaziland',
		'United Republic of Tanzania',
		'Togo',
		'Uganda',
		'Western Sahara',
		'Zambia',
        'Zimbabwe'];
        
    //This list is for the countries of Rest of Central and South America
    //because in the data they do not come by individual countries
   var name_countries_Rest_of_Central_and_South_America = [
        'El salvador',
        'Costa Rica',
        'Belize',
        'Guatemala',
        'Honduras',
        'Nicaragua',
        'Panama',
        'Argentina',
        'Bolivia',
        'Brazil',
        'Chile',
        'Colombia',
        'Ecuador',
        'Guyana',
        'Paraguay',
        'Peru',
        'Suriname',
        'Trinidad and Tobago',
        'Uruguay',
        'Venezuela',
        'Guayana Francesa',
        'Falkland Islands',
        'Aruba',
        'Curaçao',
        'Bonaire'
    ];

    //This list is for the countries of Rest of North Africa Middle East and central Asia
    //because in the data they do not come by individual countries
  var  name_countries_Rest_of_North_Africa_Middle_East_and_central_Asia = [
        'Algeria',
        'Libya',
        'Morocco',
        'Egypt',
        'Tunisia',
        'Western Sahara',
        'Sudan',
        'Bahrain',
        'Iran',
        'Iraq',
        'Israel',
        'Israeli Controlled Territory',
        'Kuwait',
        'Lebanon',
        'Oman',
        'Qatar',
        'Saudi Arabia',
        'Syria',
        'Turkey',
        'United Arab Emirates',
        'Yemen',
        'Armenia',
        'Azerbaijan',
        'Kazakhstan',
        'Kyrgyzstan',
        'Tajikistan',
        'Turkmenistan',
        'Uzbekistan'
    ];

  var  name_countries_Rest_of_Europe_non_EU8 = ['Austria',
        'Belgium',
        'Bulgaria',
        'Croatia',
        'Cyprus',
        'Czechia',
        'Denmark',
        'Estonia',
        'Finland',
        'France',
        'Germany',
        'Greece',
        'Hungary',
        'Ireland',
        'Italy',
        'Latvia',
        'Lithuania',
        'luxembourg',
        'Malta',
        'Netherlands',
        'Poland',
        'Portugal',
        'Romania',
        'Slovakia',
        'Slovenia',
        'Spain',
        'Sweden',
        'Switzerland'
        ];

  var  color = [];

  var  countriesName = [];

  var  years = [];

  var  data = [];

  var   propsAux = null ;

  var   isColored = false;

  var  paisesTest = [];
    
 {/**
    constructor(props) {

        super(props);
        */
       


 } 


    //This function is for the style of countries in the GeoJson
  var  countryStyle = {
        fillColor: '#dddddd', //Color countries
        fillOpacity: 1, //This number is between cero to one. For example 0 0.1 0.2 0.3 .. 0.9 1
        color: 'white', //The border color of the countries 
        weight: 1, //The weight of the countries border
        //dashArray: 5

    };

  const  printMessageToConsole = (event) => {
        console.log('This is a console message');
    }

 const   changeTheCountryColor = ( event ) => {
        //console.log('The mouse is over the country')
        //console.log( event )

        //console.log(this.props);

        //console.log('Over the country')
        //console.log(event.target);
        event.target.setStyle({
            color: 'grey',
            //fillColor: '#b4b42d' this is the fable color
            fillColor: this.state.color,
            fillOpacity: 1
        });
        
    }


    var htmlCode = ''

  const  createListInfoCountry = (index, countryName) => {
        htmlCode = '<p style="text-align:center;"><strong>'+ countryName + '</strong></p>'
        
        htmlCode = htmlCode + '<ul>'

        var i = 0
        for (const currentValue in years) {
            //try { 
                htmlCode =htmlCode + '<li>' +'<strong>' + years[i] + '</strong>' +': '+ data[index][i] + '</li>'
            /*} catch ( e ) {
                console.log('Con este pais murio: ', countryName)
                console.log('Este es el indece: ', index)
                console.log(this.countriesName)
            }*/
            
            
            i ++ ;
        }

        //this.years.forEach(function (currentValue, index, array){
        //    this.htmlCode = '<li>' + this.years[index] +': '+ this.data[index] + '</li>'
        //});

        htmlCode = htmlCode + '</ul>'

        return htmlCode ;
        
    }

 const onEachCountry = (country, layer) => {
    
       const countryName = country.id; //The name of the countries
 
       var indexAux = -1;
 
       if (name_countries_Rest_of_Sub_Saharan_Africa.includes(countryName)){
           console.log("1")
        indexAux = countriesName.indexOf('Rest of Sub-Saharan Africa');
        
        layer.options.fillColor = color[indexAux];
        //console.log('Se llamo con ', indexAux );
         popup = L.popup().setContent(createListInfoCountry (indexAux, countryName));
        layer.bindPopup(popup)
       }else if (name_countries_Rest_of_North_Africa_Middle_East_and_central_Asia.includes(countryName)){
            console.log("2")
        indexAux = countriesName.indexOf( 'Rest of North Africa Middle East and central Asia');
        layer.options.fillColor = color[indexAux];
        //console.log('Se llamo con ', indexAux );
        popup = L.popup().setContent(createListInfoCountry (indexAux, countryName));
        layer.bindPopup(popup)        
       }else
       if (name_countries_Rest_of_Central_and_South_America.includes(countryName)){
        console.log("3")
        indexAux = countriesName.indexOf( 'Rest of Central and South America' );
        layer.options.fillColor = color[indexAux];
        //console.log('Se llamo con ', indexAux );
        popup = L.popup().setContent(createListInfoCountry (indexAux, countryName));
        layer.bindPopup(popup)
       }else
       if (name_countries_Rest_of_Europe_non_EU8.includes(countryName)){
        console.log("4")
        indexAux = countriesName.indexOf( 'Rest of European Union' );
        layer.options.fillColor = color[indexAux];
        
        popup = L.popup().setContent(createListInfoCountry (indexAux, countryName));
        layer.bindPopup(popup)
       }else{
      
              indexAux = countriesName.indexOf(countryName);
          //    indexAux!==-1?console.log(`${countryName}  ${countriesName[indexAux]}`):console.log("");
              
       }

    
     
       
       /*this.countriesName.forEach(function(country, index, array) {
            if (country == countryName) {
                indexAux = index;
                //break;
                return
            }

            if(this.name_countries_Rest_of_Sub_Saharan_Africa.includes(country)) {
                indexAux = index;
                //break;
                return
            } 
            
       });*/

       /**
        * If the value of indexAux is less than 1 
        * it means that it did not find the country 
        * and therefore it does not overwrite the color
        */
       
       if(indexAux != -1){
        
            layer.options.fillColor = color[indexAux];
            
            popup = L.popup().setContent(createListInfoCountry (indexAux, countryName));
           // layer.setPopupContent(popup);
        layer.bindPopup(popup)
            isColored = true;
          

       }
       
       /*if (!this.isColored) {
        indexAux = this.countriesName.indexOf('Otros');
        layer.options.fillColor = this.color[indexAux];
            
            var popup = L.popup().setContent(this.createListInfoCountry (indexAux, countryName));
            layer.bindPopup(popup)
       }*/

       

        //layer.options.fillOpacity = Math.random () ; //This line is for draw diferent opacities with the countries
        //const colorIndex = Math.floor(Math.random() * this.colors.length); //The random color index in the array of the colors
        //layer.options.fillColor = this.colors[colorIndex]; //Change the color with anything color in the array od colors

        //console.log('This is the layer country')
        //console.log(countryName)

        //layer.bindPopup( countryName ) ; //When i click above the countri display the name of the country. If i need to add more
        //information about the country like for example i only need to concat the string. example countryName + 'other information'
        //this parameter could be a componenet or HTML code

        //admin the event on the layer with the countries
        /*layer.on({
            click: this.printMessageToConsole,
            //mouseover: this.changeTheCountryColor //This line change the country color when the mause is over the country 
        });*/



    }

    //This function change the value color of the state 
    //This value comes from input color in the render
 const   colorChange = (event) => {
        this.setState({color: event.target.value});
    }

//a;sldma;lsm;aslma;l

  var  corner1 = L.latLng(-90, -200)
  var  corner2 = L.latLng(90, 200)
  var  bounds = L.latLngBounds(corner1, corner2)

   var mapa=null;
        return (
            <div>
               
                <Map style={{height: '80vh'}} zoom={2} center={[20, 100]} maxBoundsViscosity = {1.0} maxBounds = {bounds}>
                { 
            converter(),
           mapa= props.countriesData.datasets.length!==0?<GeoJSON style={countryStyle} 
           key={hash(props.countriesData.datasets)} 
           data={mapDataTest.features}
            onEachFeature={onEachCountry}/>:null
                    }  

                    {/** 
                    <TileLayer
                        /*url="https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
                        attribution='<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>'
                        id="mapbox.streets"
                        noWrap='true'
                        */
                        /*/>*/}
                </Map>
                
            </div>
        );
    
}

export default TradeReportMap;