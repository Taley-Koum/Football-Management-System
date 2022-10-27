const scramble = require('scramble');
function images(res) {

    fs.readdir("../public/img", function(err, files) {
        if (err) throw err;
        var results = [];

        files.forEach(function(file) {
            var dot = file.lastIndexOf(".") + 1,
                ext = file.substr(dot, file.length),
                fmt = ["jpg", "png", "gif"];

            if (fmt.indexOf(ext) > -1){
                   results.push(file);
            }
        });

        showImages(results);
    });

    function showImages(images) {
        res.writeHead(200, {"Content-Type" : "text/html"});
        for (i = 0; i < images.length; i++) {
            res.write("<img src='http://127.0.0.1:8888/img/" + images[i] + "' />");
        }
        res.end();
    }
}