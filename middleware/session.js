const { query } = require('../db/connect');

const SESSION_MAX_AGE = 7 * 24 * 60 * 60 * 1000;

async function create_session(user_id, user_type) {
  const fin = new Date(Date.now() + SESSION_MAX_AGE);
  const { rows } = await query(
    'INSERT INTO session (user_id, user_type, fin) VALUES ($1, $2, $3) RETURNING id', 
    [user_id, user_type, fin]
  );
  console.log("Session creée :", 
      user_id, user_type, rows[0].id, 
      "fin :", fin);
  return rows[0].id;
}

async function delete_session(req, res, session_id) {
  try {
    // suppression des cookies
    if (req.cookies) {
      for (const cookie in req.cookies) {
        res.clearCookie(cookie);
      }
    }
  }
  catch (err) {
    console.error("Erreur suppression cookies :", err);
    return;
  }

  try {
    // suppression de la session stockée en db
    await query('DELETE FROM session WHERE id = $1', 
    [session_id]);
    console.log("Session supprimée :", session_id);
  } catch (err) {
    console.error("Erreur suppression session db :", session_id);
  }
}

module.exports = { create_session, delete_session, SESSION_MAX_AGE };
