const express = require('express')
const router = express.Router()
const notesController = require('../controllers/notesController')
const verifyJWT = require('../middleware/verifyJWT')

/*
    The route for notes
*/

// Will do verification to retrieve the user's token
router.use(verifyJWT)

router.route('/')
    .get(notesController.getAllNotes)
    .post(notesController.createNewNote)
    .patch(notesController.updateNote)
    .delete(notesController.deleteNote)

module.exports = router