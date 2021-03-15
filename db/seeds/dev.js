
exports.seed = async (knex) => {
  // Truncate all existing tables
  await knex.raw('TRUNCATE TABLE "user" CASCADE');
  await knex.raw('TRUNCATE TABLE "video" CASCADE');
  await knex.raw('TRUNCATE TABLE "channel" CASCADE');

  // Deletes ALL existing entries
  // await knex('channel').del();

  // Inserts seed entries
  await knex('channel').insert([
    { id: 1, name: 'channel 1' },
    { id: 2, name: 'channel 2' },
    { id: 3, name: 'channel 3' }
  ]);

  await knex('user').insert([
    { id: 1, name: 'user 1', email: 'u1@email.com', channelId: 1 },
    { id: 2, name: 'user 2', email: 'u2@email.com' },
    { id: 3, name: 'user 3', email: 'u3@email.com', channelId: 2 }
  ]);

  return await knex('video').insert([
    { id: 1, title: "Video By User 1", channelId: 1 },
    { id: 2, title: "Video By User 2", channelId: 1 },
  ]);
};
