const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    // defino el modelo para temperamento
    sequelize.define('prof', {
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
        type: DataTypes.ARRAY([]),
        allowNull: false,
      } ,
      isProf:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }
      
    },
    
    {          
      timestamps: false,
      createdAt: false,
      updatedAt: false
  
  });
  };