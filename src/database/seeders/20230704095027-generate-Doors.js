'use strict';

const { faker } = require('@faker-js/faker');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'doors',
      [...Array(5)].map(() => ({
        price: faker.number.int({ min: 25000, max: 30000 }),
        name: faker.lorem.word(),
        vendor_code: faker.string.alphanumeric(10),
        description: faker.lorem.sentences({ min: 5, max: 10 }),
        createdAt: new Date(),
        updatedAt: new Date(),
      })),
    );
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('doors', null);
  },
};
