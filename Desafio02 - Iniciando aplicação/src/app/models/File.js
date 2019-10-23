import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init(sequelize) {
    super.init({
      id: Sequelize.INTEGER,
      name: Sequelize.STRING,
      path: Sequelize.STRING,
    }, {
      sequelize,
    });
  }
}

export default File;
