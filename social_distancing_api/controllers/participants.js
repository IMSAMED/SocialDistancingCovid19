const Participante = require('../models/Participante');

// @description  Get all participants
// @route        Get /covidProjectApi/participants

exports.getParticipantes = async (req, res, next) => {
   try {
      const participantes = await Participante.find();
      return res.status(200).json({
        success: true,
        count: participantes.length,
        data: participantes
      });
    } catch (error) {
       console.error(error);
       res.status(500).json({ error: 'server error'});
    }
};

// @description  Add participantAddresse
// @route        Post /covidProjectApi/participants

exports.addParticipante = async (req, res, next) => {
   try {
      const participante = await Participante.create(req.body);
      return res.status(200).json({
         success: true,
         data: participante
       });
    } catch (error) {
       console.error(error);
       if (error.code === 11000) {
          return res.status(400).json({ error: 'already exist'});
       }
       res.status(500).json({ error: 'server error'});
    }
};