import * as grpc from 'grpc';
import { Observable } from 'rxjs';
/** Namespace user. */
export namespace user {

    /** Contains all the RPC service clients. */
    export interface ClientFactory {

        /**
         * Returns the User service client.
         */
        getUser(): user.User;
    }

    /** Builder for an RPC service server. */
    export interface ServerBuilder {

        /**
         * Adds a User service implementation.
         * @param impl User service implementation
         */
        addUser(impl: user.User): user.ServerBuilder;
    }

    /** Properties of a UserReq. */
    export interface UserReq {

        /** UserReq id */
        id?: (number|Long|null);

        /** UserReq name */
        name?: (string|null);
    }

    /** Properties of a UserResp. */
    export interface UserResp {

        /** UserResp id */
        id?: (number|Long|null);

        /** UserResp name */
        name?: (string|null);
    }

    /** Constructs a new User service. */
    export interface User {

        /**
         * Calls f.
         * @param request UserReq message or plain object
         *  * @param metadata Optional metadata
         * @returns Promise
         */
        f(request: user.UserReq, metadata?: grpc.Metadata): Observable<user.UserResp>;
    }
}
