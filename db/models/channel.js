const { Model } = require('objection');

class Channel extends Model {
    static get tableName() {
        return 'user';
    }
}

module.exports = Channel;