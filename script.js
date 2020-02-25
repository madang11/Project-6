$("button").click(function() {
  var age = $("#age").val();
  var hours = $("#hours").val();
  var years = $("#years").val();
  var sleepMessage;
  var average = 8 * 7 * 52 * years;
  var owner = hours * 52 * years;
  var result = owner - average;
  
  if (result===0) {    
    sleepMessage =
     " you are sleeping for the perfect amount of hours! Congrats, here's a cute gif of a hamster.";
     $("img").attr(
      "src",
      "https://media.tenor.com/images/738c61635a83d2632a063e265b0db847/tenor.gif");
    
  } else if (average < owner) {
    sleepMessage =
      " you will be over sleeping " +
      result +
      " hours. Research has shown that people who sleep more than nine hours per night are at an increased risk of diabetes, heart disease, depression, obesity, and other ailments.";
    $("img").attr(
      "src",
      "https://media.tenor.com/images/08d442dca1ca4137fccfbf6fd98c12e3/tenor.gif"
    );
  }
    
    else if (average > owner) {
    var resultss = result * -1;
    sleepMessage =
      " you will be missing " +
      resultss +
      " hours of sleep. Sleep deprivation prevents your immune system from building up its forces. If you don't get enough sleep, your body may not be able to fend off invaders. It may also take you longer to recover from illness. Long-term sleep deprivation also increases your risk for chronic illnesses like diabetes and heart disease.";
    $("img").attr(
      "src",
      "https://media1.tenor.com/images/2d7f787c0eb9201b379365cbe175a8f7/tenor.gif?itemid=5120823"
    );
  }
  $("p").text(
    "Hello " +
      age +
      " the average person sleeps for 56 hours a week. At the rate that you're going, in " +
      years +
      " years" +
      sleepMessage
  );
  $("img").show();
});
