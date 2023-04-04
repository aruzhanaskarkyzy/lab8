$(document).ready(function() {

  // Create an array of questions
  var questions = [    "What is the national flower of South Korea?",    "What is the traditional Korean dress called?",    "What is the most popular Korean dish?",    "Which Korean music group became the first K-pop group to perform at the Billboard Music Awards in 2017?",    "Which Korean filmmaker won the Palme d'Or at the Cannes Film Festival for the film Parasite in 2019?"  ];

  // Create an array of answers for each question
  var answers = [    "Mugunghwa",    "Hanbok",    "Kimchi",    "BTS",    "Bong Joon-ho"  ];

  // Create a 2D array of answer choices for each question
  var choice_options = [    ["Rose", "Lily", "Cherry Blossom", "Mugunghwa"],
    ["Hanbok", "Cheongsam", "Yukata", "Sari"],
    ["Bibimbap", "Bulgogi", "Japchae", "Kimchi"],
    ["EXO", "BTS", "Blackpink", "Super Junior"],
    ["Park Chan-wook", "Bong Joon-ho", "Kim Ki-duk", "Lee Chang-dong"]
  ];

  // Generate the quiz HTML
  var quizHTML = "";
  for (var i = 0; i < questions.length; i++) {
    quizHTML += "<h2>" + questions[i] + "</h2>";
    for (var j = 0; j < choice_options[i].length; j++) {
      quizHTML += "<input type='radio' name='q" + i + "' value='" + choice_options[i][j] + "'> " + choice_options[i][j] + "<br>";
    }
  }
  $("#quiz").html(quizHTML);

  // Attach a click event handler for the submit button
  $("#submit").click(function() {
    // Check the answers and calculate the score
    var score = 0;
    for (var i = 0; i < questions.length; i++) {
      var selectedAnswer = $("input[name='q" + i + "']:checked").val();
      if (selectedAnswer == answers[i]) {
        score++;
      }
    }
    // Display the score
    var scoreHTML = "<h2>Your Score:</h2>";
    scoreHTML += "<p>" + score + " out of " + questions.length + "</p>";
    $("#score").html(scoreHTML);
  });

});
