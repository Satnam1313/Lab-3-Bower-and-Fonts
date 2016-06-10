/**
 * FileName: app.js
 * 
 * @author Satnam Singh
 * @date June 9, 2016
 * 
 * StudentID: 300875942
 * GitHub: https://github.com/Satnam1313/Lab-3-Bower-and-Fonts
 * website:  http://lab3-fonts-and-bower.azurewebsites.net/contact.html
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

      var paragraph=document.getElementsByTagName("p")[0];

      paragraph.innerHTML="<h3>Bower</h3><br> Bower is a package management system for client-side programming on the World Wide Web. It depends on Node.js and npm. It works with git and GitHub repositories. It was initially developed at Twitter by Jacob Thornton, co-creator of the successful Bootstrap framework, which helped Bower rapidly gain adoption."+"As of October 22, 2015, Bower's primary maintainer issued a call for support in order to maintain the project.<br>"+"<h3>Fonts</h3><br> Google Fonts (previously called Google Web Fonts) is an interactive directory of free hosted application programming interfaces for web fonts. It was launched in 2010 and revamped in 2011. Many of the fonts are released under the SIL Open Font License 1.1, while some are released under the Apache License; both are free software licenses. The fonts are also served by Monotype’s SkyFonts and by Adobe’s Edge Web Fonts and Typekit services."+"Google Fonts is designed to provide a platform for users to discover fonts and is used extensively. Its example font faces include Lato, Raleway, and Lobster";
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

        paragraph.innerHTML="This is my First Paragraph of " +document.title+ " page"+"I am an international student and I am currently enrolled in the Software Engineering Tech. program at Centennial College. I am a person with a positive attitude, strong determination and good analytical skills. I have good verbal as well as writting skills. I have completed my Secondary Education from India. Through the program I have learned HTML/CSS,Microsoft-Office and Basics of C# language.I have lot of curiosity to learn JavaScript,Linux,System Analysis and Database Management.<br>My hobbies are:<br>1. Workout at gym.<br>2. Learning new things<br>3. Love to explore new places.<br>4. Allways curious to know how thhings happerns around the world.";
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

        paragraph.innerHTML="OR Gate project was first project of my life.In the beginning,I thought that it is impossible for me to complete beacuse every time I  was changing something to enhance it's functionality everthing was messed up.Then my Physics teacher helpedme to complete my project on time."+ "Overall, I enjoyed a lot while doing this project.";
    }
    
   //document.body.onload=PageSwitcher; executes



    //document.body.addEventListener("load",PageSwitcher);  will not execute
   

    // these two form will execute
    //window.onload=PageSwitcher;
    window.addEventListener("load",PageSwitcher);
})();