!function() {
  var $body = $('body'), bw = $body.width(), bh = $body.height();

  Reveal.addEventListener( 'ready', function( event ) {
    console.log('ready!')

    // make all list elements fragments
    $('li').addClass('fragment');

    // img hack-- if title is set, remove it and inject it into an inline style
    $('img').each(function(elm) {
      var $el = $(elm), oldStyle = $el.attr('style'), title = $el.attr('title');
      if(title) {
        $el.attr('style', oldStyle + ';' + title).attr('title', '');
      }
    });
  } );

  // Full list of configuration options available here:
  // https://github.com/hakimel/reveal.js#configuration
  Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,

    theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
    transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

    // Optional libraries used to extend on reveal.js
    dependencies: []
  });
}();
