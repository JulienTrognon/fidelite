const authController = {
    // Affiche la page unique d'authentification avec les deux formulaires
    auth_get: (req, res) => {
        res.render('auth');
    },

    signup_post: (req, res) => {
        // Logique d'inscription
        console.log("redirection de inscription vers profile");
        res.redirect('/users/profile');  // Supposer une inscription réussie
    },

    login_post: (req, res) => {
        // Logique de connexion
        console.log("redirection de connexion vers profile");
        res.redirect('/users/profile');  // Supposer une connexion réussie
    }
};

module.exports = authController;
