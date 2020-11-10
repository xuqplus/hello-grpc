var protoPath = `${__dirname}/demo.proto`;

var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(protoPath, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

var demoProto = grpc.loadPackageDefinition(packageDefinition);

var main = function () {
    var id, name;
    if (process.argv.length > 2) {
        id = process.argv[2];
    } else {
        id = 1;
    }
    if (process.argv.length > 3) {
        name = process.argv[3];
    } else {
        name = 'xqq';
    }

    var client = new demoProto.user.User("localhost:50051", grpc.credentials.createInsecure());
    client.f({ id, name }, (err, resp) => {
        console.log(resp);
    });
};

main();