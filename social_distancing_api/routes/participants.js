const express = require('express');
const { getParticipantes, addParticipante } = require('../controllers/participants');
const router = express.Router();

router
.route('/')
.get(getParticipantes)
.post(addParticipante);

module.exports = router;


