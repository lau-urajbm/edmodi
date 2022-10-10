const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    // defino el modelo para temperamento
    sequelize.define('student', {
      id:{
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4
        },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        
      },
      password:{
          type: DataTypes.STRING,
          allowNull: false,
      },
      
      groupId:{
        type: DataTypes.STRING,
        allowNull: false,
      }  
      
    },
    
    {          
      timestamps: false,
      createdAt: false,
      updatedAt: false
  
  });
  };