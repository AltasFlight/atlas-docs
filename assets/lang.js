// Перемикач мови: веде на дзеркальну сторінку в іншому дереві.
(function () {
  var path = location.pathname;
  var m = path.match(/\/(uk|en)\/([^\/]*)$/);
  if (!m) return;
  var cur = m[1], file = m[2] || 'index.html';
  var other = cur === 'uk' ? 'en' : 'uk';
  try { localStorage.setItem('atlas-lang', cur); } catch (e) {}
  var btn = document.querySelector('.lang-btn');
  if (btn) {
    btn.setAttribute('href', '../' + other + '/' + file);
    btn.textContent = other.toUpperCase();
  }
  // розгортання груп прошивок
  document.querySelectorAll('.firmware-header').forEach(function (h) {
    h.addEventListener('click', function () {
      h.classList.toggle('open');
      var body = h.nextElementSibling;
      if (body) body.classList.toggle('open');
    });
    if (h.nextElementSibling && h.nextElementSibling.classList.contains('open')) {
      h.classList.add('open');
    }
  });

  var burger = document.querySelector('.hamburger');
  var side = document.querySelector('.sidebar');
  if (burger && side) burger.addEventListener('click', function () { side.classList.toggle('open'); });
})();
