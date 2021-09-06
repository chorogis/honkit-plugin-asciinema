"use strict";

module.exports = {
  blocks: {
    asciinema: {
      process: function (block) {
        const cfg = this.config.get('pluginsConfig.asciinema')
        const { baseURL } = cfg
        const castId = block.body

        if (this.generator !== 'website') {
          return `<img src="${baseURL}/a/${castId}.svg" alt="asciinema" /><a href="${baseURL}/a/${castId}">asciinema link</a>`
        }
        return `<script id="asciicast-${castId}" src="${baseURL}/a/${castId}.js" async></script>`
      }
    }
  }
};
