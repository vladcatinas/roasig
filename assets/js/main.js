  (function(){
    var form = document.getElementById('offer-form');
    var status = document.getElementById('form-status');
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var d = Object.fromEntries(new FormData(form).entries());
      var subject = encodeURIComponent('Cerere ofertă — ' + (d.tip || 'asigurare'));
      var body = encodeURIComponent(
        'Nume: ' + d.nume + '\n' +
        'Telefon: ' + d.telefon + '\n' +
        'Email: ' + d.email + '\n' +
        'Tip asigurare: ' + d.tip + '\n' +
        'Mesaj: ' + (d.mesaj || '-')
      );
      window.location.href = 'mailto:contact@roasig-cluj.ro?subject=' + subject + '&body=' + body;
      status.textContent = 'Se deschide clientul tău de email cu mesajul precompletat — dă Send acolo ca să ajungă la mine.';
      status.dataset.state = 'ok';
    });
  })();
