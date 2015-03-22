# Rock Bootstrap Tours
Tours created specifically for [Rock](http://rockrms.com) using [Bootstrap Tour](http://bootstraptour.com)
None of the source code for Bootstrap Tour is included here, only the .js and .css files necessary to use Bootstrap Tour with Rock.
This repository is for the distribution of tours. 

## Documentation
<b>The current "release" (if you can call it that) only includes a single tour (for the default page of the Rock internal site.)</b>


###Installation
* Merge the Content folder from this project with the Content folder at the root of your Rock installation.
* The following line needs to be included in the header of the page you wish to run the tour on.
```html
<link href="/Content/BootstrapTour/css/bootstrap-tour.min.css" rel="stylesheet">
```

* Attach the following code to a body element of the page for the default tour
```html
<script src="/Content/BootstrapTour/js/bootstrap-tour.min.js"></script>
<script src="/Content/BootstrapTour/js/default.js"></script>
```
* To prevent the tour from running every time the page is refreshed remove the ```storage: false``` flag from the ```default.js``` file.
* If you wish to edit the tour for your church context I recommend using [JSHint](http://jshint.com/) to verify your tour JS. If you make any Rock specific changes to the CSS I'd encourage you to create a pull request.
You can find more information about Bootstrap Tour usage [here](http://bootstraptour.com/api/). 

## License
Code licensed under the [Apache License v2.0](http://www.apache.org/licenses/LICENSE-2.0).
Documentation licensed under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/).
