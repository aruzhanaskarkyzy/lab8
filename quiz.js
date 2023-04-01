$(document).ready(function(){
    correct = ["2009", "name", "code", "js"];
    questions = ["Which year Nazarbayev University was founded?","Which year Nazarbayev University was founded?"]
    choice_options = [["2009","2010","2011","2012"],["2009","2010","2011","2012"]]
    
    // Generate quiz questions
    // ...
    
    //let quizBox = document.getElementById ("quiz-box"); // JS way
    quizBox = $("#quiz-box"); // Jquery
    
    quizBox.append ("<div class='question'>"); 
    
    $('.question').append ("<p class='d'> Q1. Which year Nazarbayev University was founded? </p>");
    $('.question').append ("<label><input type='radio' name='q1' value='a'>2010</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>2009</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>2011</label>")
    $('.question').append ("<label><input type='radio' name='q1' value='a'>2012</label>")
    
    countCorrect = 0;
    reset = false;
    
    $("button").click (function (event){
         $("input[name=q1]").each (function (index){
                choice = $(this).parent().text(); 
                if ($( this ).prop("checked") == true && correct [0] == choice){
                     countCorrect += 1;
                }
         });
    $("#quiz-box").append ("<h2>Result of the quiz is: " + countCorrect + "</h2>");
    }); 

});