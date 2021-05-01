# Project Overview
![Walking Robot](https://media.giphy.com/media/CoD1p64HU8DjsX7dlr/giphy.gif)
## Project Links

- [https://github.com/tony-shifflett/project2]
- [https://jolly-galileo-f8ed6f.netlify.app/]

## Project Description

This app will provide civic data to users such as a list of their
elected officials and upcoming elections based on zipcode. 

Visual inspiration: https://www.behance.net/gallery/25446589/Voting-Information-Project?tracking_source=search_projects_recommended%7Cvoter%20voting


## API

This project uses the Google Civic Info API to accept info about a user's address and return a list of elected officials and other political information relevant to that location. 

Example: 
https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=70068&key=AIzaSyAjF7-RqPI7T8xVRsYQHQwztV8Z85DvTSQ

```
{     "name": "John Kennedy",
      "address": [
        {
          "line1": "416 Russell Senate Office Building",
          "city": "Washington",
          "state": "DC",
          "zip": "20510"
        }
      ],
      "party": "Republican Party",
      "phones": [
        "(202) 224-4623"
      ],
      "urls": [
        "https://www.kennedy.senate.gov/"
      ],
      "photoUrl": "https://www.kennedy.senate.gov/sites/default/files/Senator-Kennedy-headshot._s.jpg",
      "channels": [
        {
          "type": "Facebook",
          "id": "SenatorJohnKennedy"
        },
        {
          "type": "Twitter",
          "id": "senjohnkennedy"
        },
        {
          "type": "YouTube",
          "id": "UCAabrsorq5Dx3b1KG49sH4A"
        }
      ]
    }
```


## Wireframes

### Mobile Wireframes
- [https://imgur.com/m9CfEG1]
### Tablet Wireframes
- [https://imgur.com/KyrGNr0]
### Desktop Wireframes
- [https://imgur.com/7HkmLb2]
### React Architecture
- [https://imgur.com/beYKJqT]


### MVP/PostMVP - 5min
 

#### MVP 
- Find and use external api 
- Render data on page 
- Allow user to interact with the page
- Create HomePage with form that accepts user zipcode
- Feed zipcode into API call
- Display user location data based on data returned from API call
- Allow User to select whether to display state or sederal officials
- Display such officials on new page

#### PostMVP EXAMPLE

- Cross reference User Location with Google Maps Api to display nearby polling location 
- Display additional info about voting records of selected officials


## Components
Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
|HomeScreen| First Page rendering the zipsearch component|
|ZipSearch|Renders an input form that accepts user zipcode|
|PickLevel|Diplays a button allowing user to choose whether the next page will display info about state or federal officials|
| NavBar| This will render the navbar | 
|Display Location| Renders a page displaying user location from 
|DisplayOfficials| This will Render a page containing Official Cards
| OfficialCard| This will render a box displaying info describing individual elected officals based on user location| 

## Time Line + Priority Chart
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Working with API | H | 3hrs|
| Home Screen |H| 1.5 Hours|
| Display Location | 1.5 Hours|
| Display Officials| 2 Hours|
| Styling|L| 8 Hours|
| Total | H | 16hrs| 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```