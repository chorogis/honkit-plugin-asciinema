# honkit-plugin-asciinema

## book.json

```js
{
    "plugins": ["asciinema"]
    "pluginsConfig": {
        "asciinema":{
            "baseURL": "https://your-asciinema-server"
        }
    }
}
```

Then you can use `asciinema` tag in your .md

```
{% asciinema %}
Bzp8HVCJu4K0uGSpO2EwAuYOY
{% endasciinema %}
```