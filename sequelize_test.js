var Sequelize = require('sequelize');

var sequelize = new Sequelize('test', 'root', 'ljl094813.', {
    host: 'localhost',
    port:3306,
    dialect: 'mysql'
});
var Class1 = sequelize.define('class', {
    Clno: Sequelize.INTEGER,
    Speciality: Sequelize.STRING,
    Inyear: Sequelize.STRING
});
Class1.create({
    Clno: 1,
    Speciality: 'cs',
    Inyear: '2018'
}).then(function(result){
    console.log('inserted XiaoMing ok');
}).catch(function(err){
    console.log('inserted XiaoMing error');
    console.log(err.message);
});