$(function () {
  var pages = [
    ["Home", "index.html"],
    ["Task 0", "task0.html"],
    ["Task 1", "task1.html"],
    ["Task 2", "task2.html"],
    ["Task 3", "task3.html"],
    ["Task 4", "task4.html"],
    ["Task 5", "task5.html"],
    ["Task 6", "task6.html"],
    ["Task 7", "task7.html"],
    ["Task 8", "task8.html"],
    ["Task 9", "task9.html"],
    ["Task 10", "task10.html"],
    ["Task 11", "task11.html"]
  ];
  var current = location.pathname.split("/").pop() || "index.html";
  var links = "";
  $.each(pages, function (i, p) {
    var cls = p[1] === current ? ' class="active"' : "";
    links += '<li><a href="' + p[1] + '"' + cls + ">" + p[0] + "</a></li>";
  });
  var header =
    '<header><div class="container nav">' +
    '<a href="index.html" class="logo"><span class="logo-icon">+</span>jQuery Practice</a>' +
    "<nav><ul>" + links + "</ul></nav></div></header>";
  var footer = '<footer><div class="container">Assignment 6 · jQuery</div></footer>';
  $("body").prepend(header).append(footer);
});