#Wedux

#Introduction

This application was created as a dive into using React with Redux. It allows users to search a zip-code or city across the world, and returns a five day weather forecast. 

#Use Cases

The primary use case for this application is a quick-and-easy snapshot of the weather in a given location. The user searches a city on the home screen, and is then directed to a page with the weather for that location.

#Technical Overview

Stack/technology used in this project:

* HTML
* CSS
* Javascript
* React
* Redux
* Weather Underground API
* Webpack
* Component hot-reloading

Technical implementation:

* The homescreen searchbar uses the React-Select library to update the search suggestions as you type
* After selecting a city, Redux is used to call the Weather Underground API, which returns a five-day weatherforecast, as well as the current weather conditions
* The single-day and four-day forecasts are updated with the information returned from the API

#RoadMap

###v2

Features to be implemented in v2:

* Allow users to store and manage past searches
* Allow users to view a live radar for the weather in their area
