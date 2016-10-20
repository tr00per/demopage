//(function () {
//    function init() {
//        var tables = document.getElementsByTagName("table");
//        tables[0].innerHTML += "<caption>Podpis do tabelki</caption>";
//
//        var coverup = document.getElementById("curtain");
//        coverup.addEventListener("click", closeCurtain(coverup), true);
//    }
//
//    function closeCurtain(curtain) {
//        return function (ev) {
//            curtain.style.display = "none";
//        }
//    }
//
//    window.onload = init
//})();

(function () {
    function init() {
        let tables = document.querySelectorAll("table");
        tables.forEach(elem => elem.innerHTML += "<caption>Podpis do tabelki</caption>");

        let coverup = document.querySelector("#curtain");
        coverup.addEventListener("click", closeCurtain(coverup), true);

        document.querySelectorAll('a[href^="https://"]').forEach(elem => elem.style.backgroundColor="yellow")
    }

    function closeCurtain(curtain) {
        return function (ev) {
            curtain.style.display = "none";
        }
    }

    window.onload = init
})();
