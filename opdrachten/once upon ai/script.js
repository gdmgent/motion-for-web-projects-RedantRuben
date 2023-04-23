document.addEventListener("DOMContentLoaded", function () {
    var rellax = new Rellax(".rellax");

    new fullpage("#fullpage", {
        licenseKey: "YOUR_KEY_HERE",
        anchors: ["title", "part1", "part2", "part3", "part4", "part5"],
        menu: "#menu",
        scrollingSpeed: 1000,
        scrollOverflow: true
    });
});
``
