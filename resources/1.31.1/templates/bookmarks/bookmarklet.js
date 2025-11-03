(function () {
  var bookmarkUrl = window.location;
  var title = document.querySelector('title')?.textContent || document.querySelector(`meta[property='og:title']`)?.getAttribute('content') || '';
  var description = document.querySelector(`meta[name='description']`)?.getAttribute('content') || document.querySelector(`meta[property='og:description']`)?.getAttribute(`content`) || '';
  var applicationUrl = '{{ application_url }}';
  
  applicationUrl += '?url=' + encodeURIComponent(bookmarkUrl);
  applicationUrl += '&title=' + encodeURIComponent(title);
  applicationUrl += '&description=' + encodeURIComponent(description);
  applicationUrl += '&auto_close';

  window.open(applicationUrl);
})();
