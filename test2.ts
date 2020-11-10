import * as grpc from 'grpc';
import * as protoLoader from '@grpc/proto-loader';

import { of } from 'rxjs';
import { serverBuilder } from 'rxjs-grpc';
import { user } from './grpc-namespaces';

const server = serverBuilder<user.ServerBuilder>('demo.proto', 'user');
server.addUser({
    f(req: user.UserReq) {
        console.log(req);
        return of({
            id: 7, name: 'qq2'
        });
    }

    // f(request: user.UserReq, metadata?: grpc.Metadata) {
    //     console.log(request);
    //     return of({
    //         id: '7', name: 'qq2'
    //     });
    // }
});

console.log(`start server ..`);
server.start('0.0.0.0:50051');