exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('prompt').del()
    .then(function () {
      // Inserts seed entries
      return knex('prompt').insert([
        { id: 1, promptItem: 'been kicked out of a bar' },
        { id: 2, promptItem: 'been to Stralia' },
        { id: 3, promptItem: 'thought it was a good idea to git rebase' },
        { id: 4, promptItem: 'been kicked out of a bar' },
        { id: 5, promptItem: 'thrown my laptop at a mate' },
        { id: 6, promptItem: 'performed at the Civic' },
        { id: 7, promptItem: 'poured tea on my laptop' },
        { id: 8, promptItem: 'fallen asleep during a lecture' },
        { id: 9, promptItem: 'been a member of a Glee club' },
        { id: 10, promptItem: 'done a walk of shame (aka stride of pride)' },
        { id: 11, promptItem: 'lived in a tiny house' },
        { id: 12, promptItem: 'shoplifted' },
        { id: 13, promptItem: 'been arrested' },
        { id: 14, promptItem: 'gotten stitches' },
        { id: 15, promptItem: 'gone Vegan' },
        { id: 16, promptItem: 'bungy jumped' },
        { id: 17, promptItem: 'dinned and dashed' },
        { id: 18, promptItem: 'jumped off a roof' },
        { id: 19, promptItem: 'had a paranormal experience' },
        { id: 20, promptItem: 'had to drink the king cup' }
      ])
    })
};