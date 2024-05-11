$(document).ready(function() {
  console.log("check_login.js");
  
  $('#login_form').submit(function(e) {
      // ne pas envoyer le formulaire
      
      const mdp = $('#mdp').val();
      
      if (!validate_mdp(mdp)) {
        $('#error-message').text('Votre mot de passe doit contenir entre 8 et 32 caractères, avec au moins une lettre majuscule, une lettre minuscule et un chiffre.');
        $('#error-message').show();
        e.preventDefault();
      }
  });

  function validate_mdp(mdp) {
    return /[a-z]/.test(mdp) 
        && /[A-Z]/.test(mdp) 
        && /\d/.test(mdp)
        && mdp.length >= 8
        && mdp.length <= 32
  }
});