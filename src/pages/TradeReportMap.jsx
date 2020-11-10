import React from 'react';
import { Map, GeoJSON } from 'react-leaflet';
import mapDataTest from './../data/Countries.json';
import 'leaflet/dist/leaflet.css'; //This style is for the scroll and plus controls of the map
import '../css/LeafletMap.css';
import * as L from 'leaflet';




const TradeReportMap = (props) => {


    var mscreenMapa = null;


    const converter = () => {



        //   paisesTest = propsAux.countriesData.datasets
        if (props.countriesData.datasets !== null) {

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


    var popup = null;
    
    

    var R_ASIPAC = [
        'BGD',
        'BRN',
        'KHM',
        'FJI',
        'PYF',
        'JPN',
        'PRK',
        'KOR',
        'LAO',
        'MNG',
        'MMR',
        'NPL',
        'NZL',
        'NCL',
        'PHL',
        'WSM',
        'SLB',
        'LKA',
        'THA',
        'VUT',
        'VNM',
        'TLS'
    ];

    var R_LAM = [
        'BHS',
        'BLZ',
        'BOL',
        'CHL',
        'CRI',
        'CUB',
        'DOM',
        'ECU',
        'SLV',
        'GTM',
        'GUY',
        'HTI',
        'HND',
        'JAM',
        'NIC',
        'PAN',
        'PRY',
        'PER',
        'SUR',
        'TTO',
        'URY',
        'VEN'
    ];

    var R_MECAS = [
        'AFG',
        'DZA',
        'ARM',
        'AZE',
        'EGY',
        'GEO',
        'IRN',
        'IRQ',
        'ISR',
        'JOR',
        'KAS',
        'KWT',
        'KGZ',
        'LBN',
        'LBY',
        'MAR',
        'PAK',
        'SAU',
        'SYR',
        'TJK',
        'TUN',
        'TKM',
        'ARE',
        'UZB',
        'YEM',
        'PSE'
    ];

    var R_AFR = [
        'AGO',
        'BEN',
        'BWA',
        'BFA',
        'CMR',
        'CPV',
        'CAF',
        'TCD',
        'COG',
        'CIV',
        'DJI',
        'GAB',
        'GMB',
        'GHA',
        'GIN',
        'GBN',
        'KEN',
        'LSO',
        'LBR',
        'MDG',
        'MWI',
        'MLI',
        'MRT',
        'MUS',
        'MOZ',
        'NAM',
        'NER',
        'NGA',
        'SEN',
        'SLE',
        'SOM',
        'SWZ',
        'TZA',
        'TGO',
        'UGA',
        'ZMB',
        'ZWE'
    ];

    var R_NEU = [
        'ALB',
        'BLR',
        'BIH',
        'ISL',
        'MKD',
        'MDA',
        'SRB',
        'CHE',
        'TUR',
        'UKR'
    ];

    var R_OEU = [
        'AUT',
        'BEL',
        'BGR',
        'HRV',
        'CYP',
        'CZE',
        'DNK',
        'EST',
        'FRA',
        'GRC',
        'HUN',
        'IRL',
        'ITA',
        'LVA',
        'LTU',
        'LUX',
        'MLT',
        'NLD',
        'POL',
        'PRT',
        'ROU',
        'SVK',
        'SVN',
        'ESP'
    ];

    var color = [];

    var countriesName = [];

    var years = [];

    var data = [];

    var propsAux = null;

    var isColored = false;

    var paisesTest = [];


    //This function is for the style of countries in the GeoJson
    var countryStyle = {
        fillColor: '#dddddd', //Color countries
        fillOpacity: 1, //This number is between cero to one. For example 0 0.1 0.2 0.3 .. 0.9 1
        color: 'white', //The border color of the countries 
        weight: 1, //The weight of the countries border
        //dashArray: 5

    };

    var htmlCode = ''

    const createListInfoCountry = (index, countryName) => {
        htmlCode = '<p style="text-align:center;"><strong>' + countryName + '</strong></p>'

        htmlCode = htmlCode + '<ul>'

        var i = 0
        for (const currentValue in years) {
 
            htmlCode = htmlCode + '<li>' + '<strong>' + years[i] + '</strong>' + ': ' + data[index][i]

            if(props.graphType == 'Biodiversity') {
                htmlCode = htmlCode + '%';        
            }

            htmlCode = htmlCode + '</li>';

            i++;
        }

        htmlCode = htmlCode + '</ul>'

        return htmlCode;

    }

    const onEachCountry = (country, layer) => {

        //const countryName = country.id; //The name of the countries
        const countryName = country.properties.ISO_A3;


        var indexAux = -1;

        if (R_AFR.includes(countryName)) {
            indexAux = countriesName.indexOf('R_AFR');

            if (indexAux != -1) {
                layer.options.fillColor = color[indexAux];
                popup = L.popup().setContent(createListInfoCountry(indexAux, countryName));
                layer.bindPopup(popup);
            } else {
                indexAux = countriesName.indexOf('SSA');

                if (indexAux != -1) {
                    layer.options.fillColor = color[indexAux];
                    popup = L.popup().setContent(createListInfoCountry(indexAux, countryName));
                    layer.bindPopup(popup);
                }
            }
        } else if (R_MECAS.includes(countryName)) {
            indexAux = countriesName.indexOf('R_MECAS');

            if (indexAux != -1) {
                layer.options.fillColor = color[indexAux];
                popup = L.popup().setContent(createListInfoCountry(indexAux, countryName));
                layer.bindPopup(popup)
            } else {
                indexAux = countriesName.indexOf('NMC');

                if (indexAux != -1) {
                    layer.options.fillColor = color[indexAux];
                    popup = L.popup().setContent(createListInfoCountry(indexAux, countryName));
                    layer.bindPopup(popup);
                }
            }
        } else if (R_LAM.includes(countryName)) {
            indexAux = countriesName.indexOf('R_LAM');

            if (indexAux != -1) {
                layer.options.fillColor = color[indexAux];
                popup = L.popup().setContent(createListInfoCountry(indexAux, countryName));
                layer.bindPopup(popup);
            } else {
                indexAux = countriesName.indexOf('CSA');

                if (indexAux != -1) {
                    layer.options.fillColor = color[indexAux];
                    popup = L.popup().setContent(createListInfoCountry(indexAux, countryName));
                    layer.bindPopup(popup);
                }
            }

        } else if (R_OEU.includes(countryName)) {
            indexAux = countriesName.indexOf('ROEU');

            if (indexAux != -1) {
                layer.options.fillColor = color[indexAux];
                popup = L.popup().setContent(createListInfoCountry(indexAux, countryName));
                layer.bindPopup(popup);
            } else {
                indexAux = countriesName.indexOf('R_OEU');

                if (indexAux != -1) {
                    layer.options.fillColor = color[indexAux];
                    popup = L.popup().setContent(createListInfoCountry(indexAux, countryName));
                    layer.bindPopup(popup);
                }

            }
        } else if (R_NEU.includes(countryName)) {
            indexAux = countriesName.indexOf('R_NEU');

            if (indexAux != -1) {
                layer.options.fillColor = color[indexAux];
                popup = L.popup().setContent(createListInfoCountry(indexAux, countryName));
                layer.bindPopup(popup);
            } else {
                indexAux = countriesName.indexOf('NEU');

                if (indexAux != -1) {
                    layer.options.fillColor = color[indexAux];
                    popup = L.popup().setContent(createListInfoCountry(indexAux, countryName));
                    layer.bindPopup(popup);
                }
            }

        } else if (R_ASIPAC.includes(countryName)) {
            indexAux = countriesName.indexOf('R_ASIPAC');

            if (indexAux != -1) {
                layer.options.fillColor = color[indexAux];
                popup = L.popup().setContent(createListInfoCountry(indexAux, countryName));
                layer.bindPopup(popup);
            } else {
                indexAux = countriesName.indexOf('ASP');

                if (indexAux != -1) {
                    layer.options.fillColor = color[indexAux];
                    popup = L.popup().setContent(createListInfoCountry(indexAux, countryName));
                    layer.bindPopup(popup);
                }
            }

        } else {

            indexAux = countriesName.indexOf(countryName);
            //    indexAux!==-1?console.log(`${countryName}  ${countriesName[indexAux]}`):console.log("");

        }

        /**
         * If the value of indexAux is less than 1 
         * it means that it did not find the country 
         * and therefore it does not overwrite the color
         */

        if (indexAux != -1) {

            layer.options.fillColor = color[indexAux];

            popup = L.popup().setContent(createListInfoCountry(indexAux, countryName));
            // layer.setPopupContent(popup);
            layer.bindPopup(popup)
            isColored = true;


        }

    }

    //This function change the value color of the state 
    //This value comes from input color in the render
    const colorChange = (event) => {
        this.setState({ color: event.target.value });
    }

    var corner1 = L.latLng(-90, -200)
    var corner2 = L.latLng(90, 200)
    var bounds = L.latLngBounds(corner1, corner2)

    var mapa = null;
    return (
        <div>

            <Map key={new Date().getMilliseconds()} style={{ height: '80vh' }} zoom={1} center={[20, 100]} maxBoundsViscosity={1.0} maxBounds={bounds}>
                {
                    converter(),
                    mapa = props.countriesData.datasets.length !== 0 ? <GeoJSON style={countryStyle}
                        key={new Date().getMilliseconds()}
                        data={mapDataTest.features}
                        onEachFeature={onEachCountry} /> : null
                }

            </Map>

        </div>
    );

}

export default TradeReportMap;