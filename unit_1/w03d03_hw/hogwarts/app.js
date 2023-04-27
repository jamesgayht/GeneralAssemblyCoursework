// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};

const liCreator = (liText) => {
  const $li = $("<li>");
  $li.text(liText);
  return $li;
};

function appendToUl($ul, liArray) {
  for (let li of liArray) {
    $ul.append(li);
  }
  return $ul;
}

function trCreator(day, subject) {
  const $tr = $("<tr>");
  $tr.append($("<td>").text(day));
  $tr.append($("<td>").text(subject));
  return $tr;
}

$(() => {
  const $container = $("#container");
  // console.info($container)

  const $h1 = $("<h1>");
  // console.info($h1)
  $h1.text("Hogwarts");
  $container.append($h1);

  const $h2 = $("<h2>");
  $h2.addClass("name");
  $h2.text("John Grubbly-Plank");
  $container.append($h2);

  const houses = ["Hufflepuff", "Gryffindor", "Ravenclaw", "Slytherin"];
  let randomizer = Math.floor(Math.random() * houses.length);
  const $h3 = $("<h3>");
  $h3.addClass("house");
  $h3.text(`${houses[randomizer]}`);
  console.info($h3);
  $container.append($h3);

  const $h4Pet = $("<h4>");
  $h4Pet.addClass("pet");
  $h4Pet.text("Pato");
  $container.append($h4Pet);

  const $h4Wand = $("<h4>");
  $h4Wand.addClass("wand-name");
  $h4Wand.text("Magic Sprinkler");
  $container.append($h4Wand);

  const $ul = $("<ul>");
  $ul.attr("storage", "trunk");

  const $butterBeer = liCreator("butter beer");
  const $invisibilityCloak = liCreator("invisibility cloak").addClass("secret");
  const $magicMap = liCreator("magic map").addClass("secret");
  const $timeTurner = liCreator("time turner").addClass("secret");
  const $leash = liCreator("leash").addClass("pet");
  const $bertieBottsEveryFlavorBeans = liCreator(
    "Bertie Bott's Every Flavor [Jelly] Beans"
  );

  const liArray = [
    $butterBeer,
    $invisibilityCloak,
    $magicMap,
    $timeTurner,
    $leash,
    $bertieBottsEveryFlavorBeans,
  ];

  $container.append(appendToUl($ul, liArray));

  const $h5 = $("<h5>");
  $h5.text("Spring 2017");
  $container.append($h5);

  const $table = $("<table>");
  $container.append($table);

  const $thead = $("<thead>");
  $table.append($thead);
  $thead.append($("<th>").text("Day"));
  $thead.append($("<th>").text("Classes"));

  const $tbody = $("<tbody>");
  // const $tr = $('<tr>')
  // $tr.append($('<td>').text("Monday"))
  // $tr.append($('<td>').text("Herbology"))

  $tbody.append(trCreator("Monday", "Herbology"));
  $tbody.append(trCreator("Tuesday", "History of Magic"));
  $tbody.append(trCreator("Wednesday", "Charms"));
  $tbody.append(trCreator("Thursday", "Potions"));
  $tbody.append(trCreator("Friday", "Defense Against the Dark Arts"));

  $table.append($tbody);

  $container.append($table);

  $(".wand-name").remove();
  $("li").first().remove();

  $h4Wand.text("Magic Sprinkler 2.0");
  $("h4.pet").after($h4Wand);
  $h4Wand.css("color", "dodgerblue");

  // Send your pet on a spy mission (remove your pet from the DOM, put it somewhere else in your HTML). Make sure your pet's leash stays in your trunk (list item with the same class as your pet inside unordered list) -- not sure what this is asking?
  $h4Pet.hide();
  $h4Pet.show();

  $("h4.pet").remove();
  $h3.after($h4Pet);

  $(".secret").delay(2000).hide("slow");
  $(".secret").show("slow");

  $("li.pet").addClass("cabbage");
  $("li.pet").removeClass("cabbage");

  $("h5").text("Fall 2018");
  $("ul").prepend($butterBeer);
  $("ul").attr("storage", "chest");
});
