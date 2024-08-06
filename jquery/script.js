$(document).ready(function () {

    // jQuery methods go here...
    $("#myButton").click(function(event){
    //    let divText =  $("div").first().text(); //найди первый div и вытащи текст который там лежит
    //     //eq()по индексу
    //     $("div").first().text(`${divText}"<p>Paragraph text</p>"`);// будет дописы.${divText} при нажатии на кнопку
    //      $("div").last().html("<p>Paragraph html </p>");
    //      $("input").val("Input value");
    $("div").first().append("<span>Append span </span>"); //дописывает внутри div
    $("div").first().after("<span>Span after div </span>");// дописывает вне(после) div
    $("div").first().prepend("<span>Span Prepend</span>");
    $("div").first().before("<span>Span before </span>");
    });
    $("#removeBtn").click(function(){
      $("div").first().remove(); 
    });
    $("#emptyBtn").click(function(){
   $("div").first().empty();
    });
   $("#colorBtn").click(function(){
    $("div").addClass("colored").css("font-size", "20px");
    });
});