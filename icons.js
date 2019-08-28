var fs = require('fs');
var obj;
var stream = fs.createWriteStream("_posts/2018-12-16-icons.html");
stream.write('---\n');
stream.write('layout: post\n');
stream.write('title:  List of icons include on theme\n')
stream.write("date:   2018-12-26\n")
stream.write('tags:\n');
stream.write('- blog\n');
stream.write('- icons\n');
stream.write('category: blog\n');
stream.write('---\n');
stream.write('<h4>This is the list of all icons include on theme:</h4>\n');
stream.write('<ul>\n');

fs.readFile('config_fontello.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
  for(var k in obj.glyphs){
    icon = 'icon-'+obj.glyphs[k].css;
    stream.write('<li><i class="'+icon+'"></i> '+icon+'</li>\n');
  }
  stream.write('</ul>\n');
  stream.end();
});