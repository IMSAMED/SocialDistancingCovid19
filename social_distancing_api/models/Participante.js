const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder')


const ParticipanteSchema = new mongoose.Schema({
     username:{ 
         type: String,
         required:[true, 'Nommez votre emplacement sur la carte'],
         unique: true,
         trim: true,
         maxlength: [10, 'user name less than 10']
        },
     address:{
          type: String,
          required: [true, 'veuillez entrer une adresse valide']
     },
     starthour: String,
     endhour:  String,
     location: {
          type: {
            type: String, 
            enum: ['Point'] 
          },
          coordinates: {
            type: [Number],
            index: '2dsphere'
          },
         formattedAddresse: String,
        },
        createdAt:{
             type: Date,
             default: Date.now
        }
});


//Geocode & create location 
ParticipanteSchema.pre('save', async function(){
     const loc = await geocoder.geocode(this.address);
     this.location = {
          type: 'Point',
          coordinates: [loc[0].longitude, loc[0].latitude],
          formattedAddresse: loc[0].formattedAddress
     }

    //do not save address taping by user in bd
    this.address = undefined;
});

module.exports = mongoose.model('Paticipante', ParticipanteSchema);