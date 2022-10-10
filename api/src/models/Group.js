const { DataTypes, BOOLEAN } = require('sequelize');
module.exports = (sequelize) => {
    // defino el modelo para temperamento
    sequelize.define('group', {
      id:{
          type: DataTypes.STRING,
          primaryKey: true,
          defaultValue: DataTypes.UUID.toString()
        },
        name:{
          type:DataTypes.STRING,
          allowNull:false,
        },
      /* userid: {
        type: DataTypes.STRING,
        allowNull: false,
        isProf: DataTypes.BOOLEAN
        
      }, */
      
       
      
    },
    
    {          
      timestamps: false,
      createdAt: false,
      updatedAt: false
  
  });
  };