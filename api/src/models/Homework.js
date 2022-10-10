const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    // defino el modelo para temperamento
    sequelize.define('homework', {
      id:{
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4
        },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      date:{
          type: DataTypes.STRING,
          allowNull: false,
      },
      links:{
          type: DataTypes.STRING,
          allowNull: true,
      },
      /* groupId:{
        type: DataTypes.STRING,
        allowNull: false,
      }, */
      
      
    },
    
    {          
      timestamps: false,
      createdAt: false,
      updatedAt: false
  
  });
  };