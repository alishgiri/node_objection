const { Model } = require("objection");

class User extends Model {
    static get tableName() {
        return 'user';
    }

    static get relationMappings() {
        const Channel = require("./channel");
        return {
            channel: {
                modelClass: Channel,
                relation: Model.HasOneRelation,
                join: {
                    to: 'channel.id',
                    from: 'user.channelId',
                }
            }
        };
    }

}

module.exports = User;