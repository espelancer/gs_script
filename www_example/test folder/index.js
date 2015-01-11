var app = {
    initialize: function() {
      var markdown = require('markdown').markdown;
      document.write(markdown.toHTML("Hello **World**!"));
    },
};

app.initialize();
