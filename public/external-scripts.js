!(function (d, i) {
  if (!d.getElementById(i)) {
    var s = d.createElement("script");
    (s.id = i), (s.src = "https://cdn2.chronogolf.com/widgets/v2");
    var r = d.getElementsByTagName("script")[0];
    r.parentNode.insertBefore(s, r);
  }
})(document, "chronogolf-js");
window.chronogolfSettings = {
  clubId: "19225",
  locale: "en-US",
};
// Optional: Customize the Chronogolf theme color
window.chronogolfTheme = {
  color: "#7da33f",
};
