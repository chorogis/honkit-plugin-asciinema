# honkit-plugin-asciinema

Load cast from own asciinema-server or locals.

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

Then you can use `asciinema` tag in your .md.

```
{% asciinema %}
Bzp8HVCJu4K0uGSpO2EwAuYOY
{% endasciinema %}
```

Or in your book assets.

```
{% asciicast cols=123 rows=42 %}
.assets/cast/operation.cast
{% encasciicast %}
```