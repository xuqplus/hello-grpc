


import { clientFactory } from 'rxjs-grpc';
import { user } from './grpc-namespaces';

const Client = clientFactory<user.ClientFactory>('demo.proto', 'user');

const client = new Client("localhost:50051");
const user = client.getUser();

let id: number, name: string;
if (process.argv.length > 2) {
    id = Number.parseInt(process.argv[2]);
} else {
    id = 1;
}
if (process.argv.length > 3) {
    name = process.argv[3];
} else {
    name = 'xqq';
}

user.f({ id, name }).forEach(resp => {
    console.log(resp);
});

