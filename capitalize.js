

//npm install title-capitalization
var capitalize = require('title-capitalization');
var fs = require('fs');

function walkSync(dir, filelist) {
    var files = fs.readdirSync(dir);
    files.forEach(function(file) {
        if (fs.statSync(dir + '/' + file).isDirectory()) {
            walkSync(dir + '/' + file, filelist);
        }
        else {
            fs.readFile(dir+"/"+file, 'utf8', function(err, data) {
                if (err) throw err;

                var orig = data;

                data = data.replace(/title: "(.*)"\n/, function(a, b) {
                    return 'title: "'+capitalize(b)+'"\n';
                });

                data = data.replace(/(\#+) (.*)\n/g, function(a, b, c) {
                    return b+" "+capitalize(c)+"\n";
                });

                if (orig !== data) {
                    fs.writeFile(dir+"/"+file, data, function(err) {
                        if(err) {
                            return console.log(err);
                        }

                        console.log(dir+"/"+file+" updated.");
                    });
                }
            });
        }
    });
};

walkSync('./content');