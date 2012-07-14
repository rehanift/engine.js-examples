var engine = require("engine.js").engine,
    intake = engine.intake.create(),
    cylinder = engine.cylinder.create(),
    exhaust = engine.exhaust.create();
    
var fs = require('fs'),
    my_context = fs.readFileSync("./context.js","utf-8"),
    my_code = fs.readFileSync("./code.js","utf-8");

var client = engine.client.create();

var my_task = client.createTask();
my_task.setContext(my_context);
my_task.setCode(my_code);
my_task.setLocals({});

my_task.on("eval", function(err, response){
    console.log("Engine.js says: " + response.getEvaluation());
    client.close();
    intake.close();
    cylinder.close();
    exhaust.close();
});

my_task.run();