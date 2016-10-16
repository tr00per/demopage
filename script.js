(function () {
    function init() {
        var tables = document.getElementsByTagName("table");
        tables[0].innerHTML += "<caption>Podpis do tabelki</caption>";

        var coverup = document.getElementById("curtain");
        coverup.addEventListener("click", closeCurtain(coverup), true);
    }

    function closeCurtain(curtain) {
        return function (ev) {
            curtain.style.display = "none";
        }
    }

    window.onload = init
})();
