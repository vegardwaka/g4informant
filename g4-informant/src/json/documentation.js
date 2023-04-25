export default [
    {
        id:0,
        title:"Workbench.js",
        desc:"The workbench component is built on a lot of different components. The workbench is getting its data from the MainTemplate which again gets its data from each square displayed on the screen. The square again gets the API from what the user clicks on in the component list and is then is put in a list which is used to remember you informantion screen. Each square is connected from a template which has a certain 'count' by the usage of props. This system makes the API-component go through levels based on if you want to add it to the Workbench or if you want to display it from the profile page. The list with components for your information screen is stored in a database so you are able to delete it or view the other information screens you created.",
    },
    {
        id:1,
        title:"Clock.js",
        desc:"The clock API is based on data provided by TimeAPI.io and the component is displaying the time based on your input. It displays the time in 24h and shows the current day at the top. The timezone is also included for more information and of course the current date. Pretty neat."
    },
    {
        id:2,
        title:"Weather.js",
        desc:"The weather API is provided by Norwegian Meteorological Institute and gets its data by user input. The user input is routed through OpenStreetMap to get the longitude and latitude of the location you entered, which again is given to NMI (Norwegian Meteorological Institute). The degrees is in celcius but this can easily be changed to fahrenheit if needed. "
    },
    {
        id:3,
        title:"Textarea.js",
        desc:"The textarea is just that, a textarea. It stores the text of you input and displays it to the screen. The styling of the textarea is transparent to not overlay the possible background image you want to use. Scaling the textarea is limited to not make it overlay the entire information screen."
    },
    {
        id:4,
        title:"Image.js",
        desc:"The image component is just an image tag which gets it source from a button where the user uploads an image file from you file directory. An image component is very dynamic in the sense of the amount of information an image can contain. An image says more than a thousand words some once said which makes it a crucial component to include."
    },
    {
        id:5,
        title:"Timeedit.js",
        desc:""
    },
    {
        id:6,
        title:"News.js",
        desc:"The news API currently gets its information from NRK and TV2 but is definetly not limited to these two. News feeds are exported as RSS which is in XML format, and by sending the XML data through a filter to turn it into JSON, it lets us gather daily top stories provided by different networks. It is very easy to include other networks, may they be local or global, by adding another RSS link to the component. It is updated daily by the news source to the same RSS link which makes this component the easiest to render."
    }
]