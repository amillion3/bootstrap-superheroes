# Bootstrap Superhero

## This app was an exercise in smashing two different JSONs into one file. A common field (`id`) was the primary key linking the two JSON files together. Utilizing a mega-smash function, the JSONS were merged together allowing us to see what other jobs each superhero held in their past.

## Technology
- HTML5
- CSS3
- JavaScript/ES6
- Bootstrap 3

## Screenshots
Here is the landing page, a superhero in his own right, Larry Enticer.

![Page on load](https://raw.githubusercontent.com/amillion3/bootstrap-superheroes/master/screenshots/on-load.png)
___

Here we have actual superheros printed to cards.

![Superhero cards](https://raw.githubusercontent.com/amillion3/bootstrap-superheroes/master/screenshots/superheros-summary.png)
___

A dropdown to select a superhero and see what other jobs they have held. Utilizing the `data-` to tie selected menu items with their respective records from the JSON data.

![Drodown menu](https://raw.githubusercontent.com/amillion3/bootstrap-superheroes/master/screenshots/dropdown.png)
___

Here, we see other jobs that The Hulk has held.

![Other jobs held by superheroes](https://raw.githubusercontent.com/amillion3/bootstrap-superheroes/master/screenshots/dropdown-result.png)
___
## Running The Project
1. Clone down this repo and CD into project.
2. Install the [http-server](https://www.npmjs.com/package/http-server) plugin via [npm](https://www.npmjs.com/).
3. In your terminal, type `hs -p 8089`
4. In your browser navigate to `localhost:8089`