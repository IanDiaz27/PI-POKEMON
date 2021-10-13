const { Pokemon, Tipo, conn } = require('../../src/db.js');
const { expect } = require('chai');
const { agent } = require('superagent');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
    describe('Find types in database', () => {
      it('there should be 20 items inside', () => {
        Tipo.findAll()
        .then(function(res){
          expect(res.body).to.have.length(20)
        })
      })
    })
  });

