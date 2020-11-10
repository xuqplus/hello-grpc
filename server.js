var protoPath = `${__dirname}/demo.proto`;

console.log(`protoPath=>${protoPath}, `);

var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader')
var packageDefinition = protoLoader.loadSync(protoPath, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
})

var demoProto = grpc.loadPackageDefinition(packageDefinition)

var f = function (call, callback) {
    console.log(call.request)
    callback(null, { id: 7, ...call.request, name: 'haha' })
}

var main = function () {
    var server = new grpc.Server()
    server.addService(demoProto.user.User.service, { f })
    server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
    console.log(`start server ..`);
    server.start()
}

main()