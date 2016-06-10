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