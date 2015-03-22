var tour = new Tour(
{
    storage: false,
    steps: [
		        {
		  orphan: true,
          title: "Welcome",
          content: "This is a short tour to help you navigate around the Rock homepage.",
          placement: "bottom" 
        },
		{
		  orphan: true,
          title: "Welcome",
          content: "Handy hints like these will appear whenever you visit a page in Rock for the first time.",
          placement: "bottom" 
        },
		{
		  title: "Welcome",
		  orphan: true,
          content: "Let's look around this page.",
		  duration: 1800,
          placement: "bottom" 
        },
		{
          title: "Menu Bar",
          content: "This menu bar provides access to different areas of Rock",
          element: ".nav.nav-stacked.navbar-side",
		  duration: 4000,
          placement: "right"
        },

		{
          title: "Intranet",
          content: "The Intranet stores information such as office phone numbers and printer codes",
          element: "#Intranet",
		  duration: 5000,
		  placement: "right"
        },
		{
          title: "People",
          content: "The People category allows you to add new families, edit and view groups, and message people via text or email",
          element: "#People",
		  duration: 5000,
		  placement: "right"
        },
		{
          title: "Tools",
          content: "The Tools category allows you to sort and filter people using data views, create reports, and track attendance",
          element: "#Tools",
		  duration: 6000,
		  placement: "right"
        },

		{
          title: "Search",
          content: "Find people or groups by using the search box",
          element: ".smartsearch.searchinput",
		  duration: 4000,
          placement: "bottom"
        },
		{
          title: "Search",
          content: "Choose between searching for a person by name, address, or telephone number",
          element: ".nav.pull-right.smartsearch-type",
		  duration: 5000,
          placement: "bottom"
        },		
		{
          title: "Your Profile",
          content: "Click here to easily access your person information, change your password, or logout",
          element: ".nav.navbar-nav.loginstatus",
		  duration: 5000,
		  placement: "left"
        }
			]
  });

    // Initialize the tour
    tour.init();
 
    // Start the tour
    tour.start();