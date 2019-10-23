
module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn('avatar_id', {
      type: Sequelize.INTEGER,
      references: { model: 'files', key: 'id' },
      allowNull: true,
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  down: (queryInterface, Sequelize) => queryInterface.removeColumn('avatar_id'),
};
