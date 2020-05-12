const Sequelize = require('sequelize');
const config=require('./config');
let sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});
//定义模型，告诉sequelize如何映射数据库表
var Class = sequelize.define('class', {
    Clno:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    Speciality: Sequelize.STRING,
    Inyear: Sequelize.STRING,
    Number:Sequelize.STRING,
    Monitor:Sequelize.STRING,
}, {
    timestamps: false});
//插入数据

( async ()=>{
    var add=await Class.create({
        Clno: '2',
        Speciality: 'cs',
        Inyear: '2018',
        Number:'112',
        Monitor:'2018612'
    }).then(function(result){//插入成功
        console.log('inserted success');
    }).catch(function(err){//插入失败
        console.log('inserted  error');
        console.log(err.message);
    });
})();

//查询数据

(async () => {
    var Classes = await Class.findAll({
        where: {
            //这里可以插入限制条件
        }
    });
    console.log(`find ${Classes.length} classes:`);
    for (let c of Classes) {
        console.log(JSON.stringify(c));
    }
})();


//更新数据
(async () => {
    var Classes = await Class.update({
        Number:'123'   //修改的内容
    }, {//下面写限制条件
        where:{
            Clno:'1'
        }
    })
})();

//删除数据
(async () => {
    var Classes = await Class.destroy({
        //下面写限制条件
        where:{
            Clno:'2'
        }
    })
})();
