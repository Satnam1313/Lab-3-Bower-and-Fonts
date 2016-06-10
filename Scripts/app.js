/**
 * FileName: app.js
 * 
 * @author Satnam Singh
 * @date June 9, 2016
 * 
 * StudentID: 300875942
 * GitHub: 
 * website:  
 * @description This file is the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";
    /**
     * This function uses the document.title to switch javascript function 
     * when the page switches
     * 
     * @function PageSwitcher
     * @returns {void}
     */
    function PageSwitcher() {
        switch(document.title){
       case "Home":
       console.log("This is Home Page");
       Home();
       break;
       case "About Me":
       console.log("This is About Me Page");
       About();
       break;
       case "Contact Me":
       console.log("This is Contact Me Page");
       Contact();
       break;
       case "Projects":
       console.log("This is Projects Page");
      Projects();
       break;
   }
    }
   /**
    * This function injects some text into the first page of a page baded on it's
    * document.title property
    *
    *@function InitialText
    *@returns (void)
    */
   function InitialText() {
        var paragraph=document.getElementsByTagName("p")[0];

        paragraph.textContent="This is my First Paragraph of " +document.title+ " page";
      
   }
    /**
     * this function provides javascript code  for the Home PAge
     * 
     * @function  Home
     * @returns (viod)
     */
    function Home(){
         InitialText();

        //var elementsActive=document.querySelector(".active a")[0];
        //elementsActive.innerHTML="Goodbye";
      
    }
      /**
     * this function provides javascript code  for the About PAge
     * 
     * @function  About
     * @returns (viod)
     */
     function About(){
       var paragraph=document.getElementsByTagName("p")[0];

        paragraph.textContent="This is my First Paragraph of " +document.title+ " page";
    }
      /**
     * this function provides javascript code  for the Contact PAge
     * 
     * @function  Contact
     * @returns (viod)
     */
     function Contact(){
      
    }
      /**
     * this function provides javascript code  for the Projects PAge
     * 
     * @function  Projects
     * @returns (viod)
     */
     function Projects(){
        var paragraph=document.getElementsByTagName("p")[0];

        paragraph.textContent="This is my First Paragraph of " +document.title+ " page";
    }
    
   //document.body.onload=PageSwitcher; executes



    //document.body.addEventListener("load",PageSwitcher);  will not execute
   

    // these two form will execute
    //window.onload=PageSwitcher;
    window.addEventListener("load",PageSwitcher);
})();