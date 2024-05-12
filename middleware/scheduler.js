const { query } = require('../db/connect');

async function clean_sessions_exprirees() {
  // À chaque redémarrage serveur
  try {
    const result = await query(
      'DELETE FROM session WHERE fin < NOW()'
    );
    console.log("Sessions expirées supprimées :", result.rowCount);
  } catch (err) {
    console.error('Erreur clean sessions expirées:', err);
  }
}

async function clean_sessions_expirees_intervalle() {
  // Toutes les 24 heures
  const intervalle = 24 * 60 * 60 * 1000;

  setInterval(async () => {
    await query(
      'DELETE FROM session WHERE fin < NOW()'
    );
  }, intervalle);
}

// exécution de toutes les tâches
async function run_scheduler() {
  await clean_sessions_exprirees();
  await clean_sessions_expirees_intervalle();
}

module.exports = { run_scheduler };
