"use strict";

module.exports = {
  website: {
    assets: './assets',
    js: ["asciinema-player.js"],
    css: ["asciinema-player.css"]
  },
  blocks: {
    asciicast: {
      process: function (block) {
        const file = block.body.trim();
        const kwargs = block.kwargs;

        if (this.generator != "website") {
          return `asciicast is here: $file`
        }

        const attrs = ['cols', 'rows', 'autoplay', 'preload', 'loop', 'start-at', 'speed', 'idle-time-limit',
          'poster', 'font-size', 'theme', 'title', 'author', 'author-url', 'author-img-url']
          .map(name => (name in kwargs) ? `${name}="${kwargs[name]}"` : "");

        return [`<asciinema-player src="${file}"`]
          .concat(attrs)
          .concat('></asciinema-player>')
          .join(" ");
      }
    },
    asciinema: {
      process: function (block) {
        const cfg = this.config.get('pluginsConfig.asciinema')
        const { baseURL } = cfg
        const castId = block.body.trim()

        if (this.generator !== 'website') {
          return `<img src="${baseURL}/a/${castId}.svg" alt="asciinema" /><a href="${baseURL}/a/${castId}">asciinema link</a>`
        }
        return `<script id="asciicast-${castId}" src="${baseURL}/a/${castId}.js" async></script>`
      }
    }
  }
};
