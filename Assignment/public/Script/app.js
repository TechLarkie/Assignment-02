// adding immidiately invoked function expression

(function(){
    function start(){
        console.log("App Started"); // when this function starts, the message 'App Started' will be displayed in the websites console log
    }
    window.addEventListener("load",start);
    // this adds a listener to the website which is tasked with 'listening' to when the webpage completes its loading 
    // - once a page has finished loading it will re-run the above segment of code so that the message 'App Started' will reappear in the console log
     
})();