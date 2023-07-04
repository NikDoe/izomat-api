'use strict';

const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'glasses',
      [...Array(10)].map(() => ({
        price: faker.number.int({ min: 1000, max: 10000 }),
        name: faker.lorem.words({ min: 2, max: 4 }),
        vendor_code: faker.string.alphanumeric(10),
        description: faker.lorem.words({ min: 5, max: 10 }),
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('glasses', null);
  },
};
