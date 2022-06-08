# IDQBRN - Epidemiologic Map

"IDQBRN - Epidemologic Map" is a website for displaying epidemic occurrences on a map.
It was built to be fed with data from the National Epidemiologic Vigilance System of Brazil.
This repository contains only the front-end of the applicaton. The back-end is designed in C#.

![Alt text](src/images/printscreen.png?raw=true "Print screen of the home page")



## Features

- Filter data on the map by diseases names and regions of occurrences
- CRUD of diseases and users by admins
- Import data from .tsv files


## Installation

It is required to have NodeJS installed.

To install the dependencies, in the project folder you can run:

```bash
npm install
```
Then, you can run the project with:

```bash
npm start
```

## Usage

To have updated data, the application must be connected with the back-end.
The connection occurs by the URL defined in the api.js file.
