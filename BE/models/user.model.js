/** Model Utente */
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true
          }
      },
      password: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.STRING,
      }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);
    return User;
};