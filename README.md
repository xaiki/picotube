PicoTube: a tiny Youtube API library with promises

# install

just run `yarn add picotube`

# usage

we map exactly to the youtube API REST names, note that we only implement
the `list` behaviour
<https://developers.google.com/youtube/v3/docs/>

so to use the `videos` endpoint simply do
```js
    import PicoTube from 'picotube'

    const pico = new PicoTube(API_KEY)
    pico.videos({
      id: 'QcQIaoHajoM'
    }).then(res => res.data)
      .then(info => {
        console.log('hello mom, i got this from youtube', info)
    })
```

note that we return the raw `axios` object, so errors live in `response.data.error`

