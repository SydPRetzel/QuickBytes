# QuickBytes
You shouldn't make decisions when you're "hangry". Type your location and we'll show you all the quickest, good food spots near you!

## Live App
- [Go to site](https://sydpretzel.github.io/QuickBytes/)

## Technologies Used
HTML, CSS, Bootstrap, Javascript, JQuery, AJAX, Open Street Maps, Leaflet, Mapquest and Zomato REST APIs.

## Architecture
QuickBytes is a mobile ready, responsive, client side app.  The view layer is built with Bootstrap, Open Street Maps, Javascript, HTML and CSS.  Javascript is used to code up class structures and for the control logic.  MapQuest and Zomato APIs are used as data sources.

## Tour
Upon loading, the app presents the user with a form, a map and a table.  The form allows the user to enter their current address.  The app defaults to the George Washington University Arlington campus address.  The app then takes that information and calls the MapQuest API to determine the latitude and longitude of the user location.  This is then used to query the Zomato API to retrieve the 10 closest restaurants within a 5 mile radius of the user location.  The user location and the restaurant location are plotted on the map.  

![Landing page](https://sydpretzel.github.io/QuickBytes/landing.png)
*Form input and map display*

The MapQuest API is queried to obtain the fastest walking and driving times to each of the restaurants from the user location.  The restaurant names and the commute times are listed in the table.  The restaurant which has the fastest drive time is listed in red.  The restaurant with the fastest walk time is listed in purple.  

![Restaurant table](https://sydpretzel.github.io/QuickBytes/table.png)
*Restaurant Table*

When a table entry is clicked, a modal will open with driving and walking instructions and also a link to the restaurant menu.

![Details page](https://sydpretzel.github.io/QuickBytes/detail.png)
*Restaurant Details*

