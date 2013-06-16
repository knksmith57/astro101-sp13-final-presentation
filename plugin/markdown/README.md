This is a special version [data-markdown](https://gist.github.com/paulirish/1343518) built by [@hakimel](https://github.com/hakimel) for [reveal.js](https://github.com/hakimel/reveal.js). I had an issue with it while building the presentation and am documenting it here. I don't think it's a _bug_ so much as a _missing feature_, but you should definitely be aware of it if you plan on using markdown in your slide deck.

First of all, the [original data-markdown plugin](https://gist.github.com/paulirish/1343518) for the project was built by [Paul Irish](http://www.paulirish.com/) and lives at that [gist](https://gist.github.com/paulirish/1343518) I keep linking to. Hakim modified it for better compatibility with the reveal.js project.


**Here's the important notice:** since Hakim's version first splits all the slides into individual `<section>` blocks and them renders the markdown -> html on a per-section basis, if you use the [reference-style links](http://daringfireball.net/projects/markdown/syntax#link) and your references aren't defined in the section that you use reference them, **they will be broken** . Why would they be in the same section? I'm not sure since I thought the point of using the reference style is so that you can move those huge strings to the bottom or your file and get them out of the way.

One day I might hack together a simple regex that fixes the problem, but I'm not super great at them and no one else seems to have encountered this bug (that I can find), so for now we'll just let it fly!
