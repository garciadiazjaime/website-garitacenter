let scropllInProgress = false;
export default (location) => {
  const bits = location.pathname.split('/');
  let elementID = location.pathname ? bits.pop() || 'inicio' : 'inicio';
  if ($('#mainmenu_trigger').is(':visible') && bits.length === 1) {
    elementID = 'inicio';
  }

  if ($('#' + elementID).length && !scropllInProgress) {
    scropllInProgress = true;
    const scrollTo = $('#' + elementID).offset().top - 43;
    const srolltime = 100;
    const rootTag = typeof document.body.scrollTop !== 'undefined' ? 'body' : 'html, body';
    $(rootTag).animate({
      scrollTop: scrollTo,
    }, srolltime, 'swing', () => {
      scropllInProgress = false;
    });
  }
};
