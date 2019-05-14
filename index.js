var json_server = "";
document.querySelector("button").onclick = function () {
    alert("json-server: " + json_server);
};
fetch('http://localhost:3000/posts')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    json_server = JSON.stringify(data);
});
