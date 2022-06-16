// 5.1. Все элементы с классом test
$(".test").css("color", "red");
// 5.2. Все <h2> с классом test
$("h2.test").css("color", "red");
// 5.3. Все абзацы которые следуют сразу за абзацами
$("p + p").css("color", "red");
// 5.4. Все <li>, которые следуют сразу за <li> с классом www
$("li.www + li").css("color", "red");
// 5.5. Все <i> внутри <h2>
$("h2 i").css("color", "red");
// 5.6. Все <i> непосредственно внутри <h2>
$("h2 > i").css("color", "red");

// Все заголовки
$(":header").css("color", "red");
// 6.1. Все <h2> НЕ с классом test
$("h2:not(.test)").css("color", "red");
// 6.2. Все заголовки НЕ с классом test
$(":header:not(.test)").css("color", "red");
// 6.3. Все заголовки, которые следуют сразу за заголовками
$(":header + :header").css("color", "red");
// 6.4 Все заголовки с классом test, которые следуют сразу за заголовками с классом test
$(":header.test + :header.test").css("color", "red");

