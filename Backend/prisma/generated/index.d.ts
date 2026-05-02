
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model League
 * 
 */
export type League = $Result.DefaultSelection<Prisma.$LeaguePayload>
/**
 * Model LeagueMember
 * 
 */
export type LeagueMember = $Result.DefaultSelection<Prisma.$LeagueMemberPayload>
/**
 * Model Driver
 * 
 */
export type Driver = $Result.DefaultSelection<Prisma.$DriverPayload>
/**
 * Model Constructor
 * 
 */
export type Constructor = $Result.DefaultSelection<Prisma.$ConstructorPayload>
/**
 * Model Race
 * 
 */
export type Race = $Result.DefaultSelection<Prisma.$RacePayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model Prediction
 * 
 */
export type Prediction = $Result.DefaultSelection<Prisma.$PredictionPayload>
/**
 * Model RaceResult
 * 
 */
export type RaceResult = $Result.DefaultSelection<Prisma.$RaceResultPayload>
/**
 * Model Points
 * 
 */
export type Points = $Result.DefaultSelection<Prisma.$PointsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LeagueType: {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE'
};

export type LeagueType = (typeof LeagueType)[keyof typeof LeagueType]


export const RaceStatus: {
  SCHEDULED: 'SCHEDULED',
  ONGOING: 'ONGOING',
  COMPLETED: 'COMPLETED'
};

export type RaceStatus = (typeof RaceStatus)[keyof typeof RaceStatus]


export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type LeagueType = $Enums.LeagueType

export const LeagueType: typeof $Enums.LeagueType

export type RaceStatus = $Enums.RaceStatus

export const RaceStatus: typeof $Enums.RaceStatus

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.league`: Exposes CRUD operations for the **League** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leagues
    * const leagues = await prisma.league.findMany()
    * ```
    */
  get league(): Prisma.LeagueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leagueMember`: Exposes CRUD operations for the **LeagueMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeagueMembers
    * const leagueMembers = await prisma.leagueMember.findMany()
    * ```
    */
  get leagueMember(): Prisma.LeagueMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.driver`: Exposes CRUD operations for the **Driver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drivers
    * const drivers = await prisma.driver.findMany()
    * ```
    */
  get driver(): Prisma.DriverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.["constructor"]`: Exposes CRUD operations for the **Constructor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Constructors
    * const constructors = await prisma.["constructor"].findMany()
    * ```
    */
  get ["constructor"](): Prisma.ConstructorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.race`: Exposes CRUD operations for the **Race** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Races
    * const races = await prisma.race.findMany()
    * ```
    */
  get race(): Prisma.RaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prediction`: Exposes CRUD operations for the **Prediction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Predictions
    * const predictions = await prisma.prediction.findMany()
    * ```
    */
  get prediction(): Prisma.PredictionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.raceResult`: Exposes CRUD operations for the **RaceResult** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RaceResults
    * const raceResults = await prisma.raceResult.findMany()
    * ```
    */
  get raceResult(): Prisma.RaceResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.points`: Exposes CRUD operations for the **Points** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Points
    * const points = await prisma.points.findMany()
    * ```
    */
  get points(): Prisma.PointsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    League: 'League',
    LeagueMember: 'LeagueMember',
    Driver: 'Driver',
    Constructor: 'Constructor',
    Race: 'Race',
    Team: 'Team',
    Prediction: 'Prediction',
    RaceResult: 'RaceResult',
    Points: 'Points'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "league" | "leagueMember" | "driver" | "constructor" | "race" | "team" | "prediction" | "raceResult" | "points"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      League: {
        payload: Prisma.$LeaguePayload<ExtArgs>
        fields: Prisma.LeagueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeagueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeagueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>
          }
          findFirst: {
            args: Prisma.LeagueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeagueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>
          }
          findMany: {
            args: Prisma.LeagueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>[]
          }
          create: {
            args: Prisma.LeagueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>
          }
          createMany: {
            args: Prisma.LeagueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeagueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>[]
          }
          delete: {
            args: Prisma.LeagueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>
          }
          update: {
            args: Prisma.LeagueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>
          }
          deleteMany: {
            args: Prisma.LeagueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeagueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeagueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>[]
          }
          upsert: {
            args: Prisma.LeagueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaguePayload>
          }
          aggregate: {
            args: Prisma.LeagueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeague>
          }
          groupBy: {
            args: Prisma.LeagueGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeagueGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeagueCountArgs<ExtArgs>
            result: $Utils.Optional<LeagueCountAggregateOutputType> | number
          }
        }
      }
      LeagueMember: {
        payload: Prisma.$LeagueMemberPayload<ExtArgs>
        fields: Prisma.LeagueMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeagueMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeagueMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeagueMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeagueMemberPayload>
          }
          findFirst: {
            args: Prisma.LeagueMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeagueMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeagueMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeagueMemberPayload>
          }
          findMany: {
            args: Prisma.LeagueMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeagueMemberPayload>[]
          }
          create: {
            args: Prisma.LeagueMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeagueMemberPayload>
          }
          createMany: {
            args: Prisma.LeagueMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeagueMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeagueMemberPayload>[]
          }
          delete: {
            args: Prisma.LeagueMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeagueMemberPayload>
          }
          update: {
            args: Prisma.LeagueMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeagueMemberPayload>
          }
          deleteMany: {
            args: Prisma.LeagueMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeagueMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeagueMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeagueMemberPayload>[]
          }
          upsert: {
            args: Prisma.LeagueMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeagueMemberPayload>
          }
          aggregate: {
            args: Prisma.LeagueMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeagueMember>
          }
          groupBy: {
            args: Prisma.LeagueMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeagueMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeagueMemberCountArgs<ExtArgs>
            result: $Utils.Optional<LeagueMemberCountAggregateOutputType> | number
          }
        }
      }
      Driver: {
        payload: Prisma.$DriverPayload<ExtArgs>
        fields: Prisma.DriverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findFirst: {
            args: Prisma.DriverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findMany: {
            args: Prisma.DriverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          create: {
            args: Prisma.DriverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          createMany: {
            args: Prisma.DriverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DriverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          delete: {
            args: Prisma.DriverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          update: {
            args: Prisma.DriverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          deleteMany: {
            args: Prisma.DriverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DriverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          upsert: {
            args: Prisma.DriverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          aggregate: {
            args: Prisma.DriverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriver>
          }
          groupBy: {
            args: Prisma.DriverGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriverCountArgs<ExtArgs>
            result: $Utils.Optional<DriverCountAggregateOutputType> | number
          }
        }
      }
      Constructor: {
        payload: Prisma.$ConstructorPayload<ExtArgs>
        fields: Prisma.ConstructorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConstructorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConstructorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructorPayload>
          }
          findFirst: {
            args: Prisma.ConstructorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConstructorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructorPayload>
          }
          findMany: {
            args: Prisma.ConstructorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructorPayload>[]
          }
          create: {
            args: Prisma.ConstructorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructorPayload>
          }
          createMany: {
            args: Prisma.ConstructorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConstructorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructorPayload>[]
          }
          delete: {
            args: Prisma.ConstructorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructorPayload>
          }
          update: {
            args: Prisma.ConstructorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructorPayload>
          }
          deleteMany: {
            args: Prisma.ConstructorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConstructorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConstructorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructorPayload>[]
          }
          upsert: {
            args: Prisma.ConstructorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConstructorPayload>
          }
          aggregate: {
            args: Prisma.ConstructorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConstructor>
          }
          groupBy: {
            args: Prisma.ConstructorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConstructorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConstructorCountArgs<ExtArgs>
            result: $Utils.Optional<ConstructorCountAggregateOutputType> | number
          }
        }
      }
      Race: {
        payload: Prisma.$RacePayload<ExtArgs>
        fields: Prisma.RaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          findFirst: {
            args: Prisma.RaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          findMany: {
            args: Prisma.RaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          create: {
            args: Prisma.RaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          createMany: {
            args: Prisma.RaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          delete: {
            args: Prisma.RaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          update: {
            args: Prisma.RaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          deleteMany: {
            args: Prisma.RaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>[]
          }
          upsert: {
            args: Prisma.RaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RacePayload>
          }
          aggregate: {
            args: Prisma.RaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRace>
          }
          groupBy: {
            args: Prisma.RaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaceCountArgs<ExtArgs>
            result: $Utils.Optional<RaceCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      Prediction: {
        payload: Prisma.$PredictionPayload<ExtArgs>
        fields: Prisma.PredictionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PredictionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PredictionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          findFirst: {
            args: Prisma.PredictionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PredictionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          findMany: {
            args: Prisma.PredictionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>[]
          }
          create: {
            args: Prisma.PredictionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          createMany: {
            args: Prisma.PredictionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PredictionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>[]
          }
          delete: {
            args: Prisma.PredictionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          update: {
            args: Prisma.PredictionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          deleteMany: {
            args: Prisma.PredictionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PredictionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PredictionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>[]
          }
          upsert: {
            args: Prisma.PredictionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          aggregate: {
            args: Prisma.PredictionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrediction>
          }
          groupBy: {
            args: Prisma.PredictionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PredictionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PredictionCountArgs<ExtArgs>
            result: $Utils.Optional<PredictionCountAggregateOutputType> | number
          }
        }
      }
      RaceResult: {
        payload: Prisma.$RaceResultPayload<ExtArgs>
        fields: Prisma.RaceResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RaceResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RaceResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceResultPayload>
          }
          findFirst: {
            args: Prisma.RaceResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RaceResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceResultPayload>
          }
          findMany: {
            args: Prisma.RaceResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceResultPayload>[]
          }
          create: {
            args: Prisma.RaceResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceResultPayload>
          }
          createMany: {
            args: Prisma.RaceResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RaceResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceResultPayload>[]
          }
          delete: {
            args: Prisma.RaceResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceResultPayload>
          }
          update: {
            args: Prisma.RaceResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceResultPayload>
          }
          deleteMany: {
            args: Prisma.RaceResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RaceResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RaceResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceResultPayload>[]
          }
          upsert: {
            args: Prisma.RaceResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RaceResultPayload>
          }
          aggregate: {
            args: Prisma.RaceResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRaceResult>
          }
          groupBy: {
            args: Prisma.RaceResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<RaceResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.RaceResultCountArgs<ExtArgs>
            result: $Utils.Optional<RaceResultCountAggregateOutputType> | number
          }
        }
      }
      Points: {
        payload: Prisma.$PointsPayload<ExtArgs>
        fields: Prisma.PointsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload>
          }
          findFirst: {
            args: Prisma.PointsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload>
          }
          findMany: {
            args: Prisma.PointsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload>[]
          }
          create: {
            args: Prisma.PointsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload>
          }
          createMany: {
            args: Prisma.PointsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PointsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload>[]
          }
          delete: {
            args: Prisma.PointsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload>
          }
          update: {
            args: Prisma.PointsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload>
          }
          deleteMany: {
            args: Prisma.PointsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PointsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PointsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload>[]
          }
          upsert: {
            args: Prisma.PointsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointsPayload>
          }
          aggregate: {
            args: Prisma.PointsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoints>
          }
          groupBy: {
            args: Prisma.PointsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointsCountArgs<ExtArgs>
            result: $Utils.Optional<PointsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    league?: LeagueOmit
    leagueMember?: LeagueMemberOmit
    driver?: DriverOmit
    constructor?: ConstructorOmit
    race?: RaceOmit
    team?: TeamOmit
    prediction?: PredictionOmit
    raceResult?: RaceResultOmit
    points?: PointsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ownedLeagues: number
    memberships: number
    teams: number
    points: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedLeagues?: boolean | UserCountOutputTypeCountOwnedLeaguesArgs
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
    teams?: boolean | UserCountOutputTypeCountTeamsArgs
    points?: boolean | UserCountOutputTypeCountPointsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedLeaguesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeagueWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeagueMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointsWhereInput
  }


  /**
   * Count Type LeagueCountOutputType
   */

  export type LeagueCountOutputType = {
    members: number
    points: number
    teams: number
  }

  export type LeagueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | LeagueCountOutputTypeCountMembersArgs
    points?: boolean | LeagueCountOutputTypeCountPointsArgs
    teams?: boolean | LeagueCountOutputTypeCountTeamsArgs
  }

  // Custom InputTypes
  /**
   * LeagueCountOutputType without action
   */
  export type LeagueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeagueCountOutputType
     */
    select?: LeagueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeagueCountOutputType without action
   */
  export type LeagueCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeagueMemberWhereInput
  }

  /**
   * LeagueCountOutputType without action
   */
  export type LeagueCountOutputTypeCountPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointsWhereInput
  }

  /**
   * LeagueCountOutputType without action
   */
  export type LeagueCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }


  /**
   * Count Type DriverCountOutputType
   */

  export type DriverCountOutputType = {
    predictions: number
    raceResults: number
  }

  export type DriverCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    predictions?: boolean | DriverCountOutputTypeCountPredictionsArgs
    raceResults?: boolean | DriverCountOutputTypeCountRaceResultsArgs
  }

  // Custom InputTypes
  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverCountOutputType
     */
    select?: DriverCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountPredictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredictionWhereInput
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountRaceResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceResultWhereInput
  }


  /**
   * Count Type ConstructorCountOutputType
   */

  export type ConstructorCountOutputType = {
    drivers: number
    teams: number
  }

  export type ConstructorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drivers?: boolean | ConstructorCountOutputTypeCountDriversArgs
    teams?: boolean | ConstructorCountOutputTypeCountTeamsArgs
  }

  // Custom InputTypes
  /**
   * ConstructorCountOutputType without action
   */
  export type ConstructorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConstructorCountOutputType
     */
    select?: ConstructorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConstructorCountOutputType without action
   */
  export type ConstructorCountOutputTypeCountDriversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWhereInput
  }

  /**
   * ConstructorCountOutputType without action
   */
  export type ConstructorCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }


  /**
   * Count Type RaceCountOutputType
   */

  export type RaceCountOutputType = {
    teams: number
    raceResults: number
    points: number
  }

  export type RaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | RaceCountOutputTypeCountTeamsArgs
    raceResults?: boolean | RaceCountOutputTypeCountRaceResultsArgs
    points?: boolean | RaceCountOutputTypeCountPointsArgs
  }

  // Custom InputTypes
  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceCountOutputType
     */
    select?: RaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }

  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeCountRaceResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceResultWhereInput
  }

  /**
   * RaceCountOutputType without action
   */
  export type RaceCountOutputTypeCountPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointsWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    predictions: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    predictions?: boolean | TeamCountOutputTypeCountPredictionsArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountPredictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredictionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    phone_no: string | null
    created_at: Date | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    phone_no: string | null
    created_at: Date | null
    role: $Enums.Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    phone_no: number
    created_at: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    phone_no?: true
    created_at?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    phone_no?: true
    created_at?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    phone_no?: true
    created_at?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    phone_no: string
    created_at: Date
    role: $Enums.Role
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    phone_no?: boolean
    created_at?: boolean
    role?: boolean
    ownedLeagues?: boolean | User$ownedLeaguesArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    teams?: boolean | User$teamsArgs<ExtArgs>
    points?: boolean | User$pointsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    phone_no?: boolean
    created_at?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    phone_no?: boolean
    created_at?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    phone_no?: boolean
    created_at?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "phone_no" | "created_at" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedLeagues?: boolean | User$ownedLeaguesArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    teams?: boolean | User$teamsArgs<ExtArgs>
    points?: boolean | User$pointsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ownedLeagues: Prisma.$LeaguePayload<ExtArgs>[]
      memberships: Prisma.$LeagueMemberPayload<ExtArgs>[]
      teams: Prisma.$TeamPayload<ExtArgs>[]
      points: Prisma.$PointsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      phone_no: string
      created_at: Date
      role: $Enums.Role
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ownedLeagues<T extends User$ownedLeaguesArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedLeaguesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeagueMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teams<T extends User$teamsArgs<ExtArgs> = {}>(args?: Subset<T, User$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    points<T extends User$pointsArgs<ExtArgs> = {}>(args?: Subset<T, User$pointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone_no: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ownedLeagues
   */
  export type User$ownedLeaguesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    where?: LeagueWhereInput
    orderBy?: LeagueOrderByWithRelationInput | LeagueOrderByWithRelationInput[]
    cursor?: LeagueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeagueScalarFieldEnum | LeagueScalarFieldEnum[]
  }

  /**
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberInclude<ExtArgs> | null
    where?: LeagueMemberWhereInput
    orderBy?: LeagueMemberOrderByWithRelationInput | LeagueMemberOrderByWithRelationInput[]
    cursor?: LeagueMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeagueMemberScalarFieldEnum | LeagueMemberScalarFieldEnum[]
  }

  /**
   * User.teams
   */
  export type User$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * User.points
   */
  export type User$pointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    where?: PointsWhereInput
    orderBy?: PointsOrderByWithRelationInput | PointsOrderByWithRelationInput[]
    cursor?: PointsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointsScalarFieldEnum | PointsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model League
   */

  export type AggregateLeague = {
    _count: LeagueCountAggregateOutputType | null
    _avg: LeagueAvgAggregateOutputType | null
    _sum: LeagueSumAggregateOutputType | null
    _min: LeagueMinAggregateOutputType | null
    _max: LeagueMaxAggregateOutputType | null
  }

  export type LeagueAvgAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type LeagueSumAggregateOutputType = {
    id: number | null
    ownerId: number | null
  }

  export type LeagueMinAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    ownerId: number | null
    createdAt: Date | null
    league_type: $Enums.LeagueType | null
  }

  export type LeagueMaxAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    ownerId: number | null
    createdAt: Date | null
    league_type: $Enums.LeagueType | null
  }

  export type LeagueCountAggregateOutputType = {
    id: number
    name: number
    code: number
    ownerId: number
    createdAt: number
    league_type: number
    _all: number
  }


  export type LeagueAvgAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type LeagueSumAggregateInputType = {
    id?: true
    ownerId?: true
  }

  export type LeagueMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    ownerId?: true
    createdAt?: true
    league_type?: true
  }

  export type LeagueMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    ownerId?: true
    createdAt?: true
    league_type?: true
  }

  export type LeagueCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    ownerId?: true
    createdAt?: true
    league_type?: true
    _all?: true
  }

  export type LeagueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which League to aggregate.
     */
    where?: LeagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leagues to fetch.
     */
    orderBy?: LeagueOrderByWithRelationInput | LeagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leagues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leagues
    **/
    _count?: true | LeagueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeagueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeagueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeagueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeagueMaxAggregateInputType
  }

  export type GetLeagueAggregateType<T extends LeagueAggregateArgs> = {
        [P in keyof T & keyof AggregateLeague]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeague[P]>
      : GetScalarType<T[P], AggregateLeague[P]>
  }




  export type LeagueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeagueWhereInput
    orderBy?: LeagueOrderByWithAggregationInput | LeagueOrderByWithAggregationInput[]
    by: LeagueScalarFieldEnum[] | LeagueScalarFieldEnum
    having?: LeagueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeagueCountAggregateInputType | true
    _avg?: LeagueAvgAggregateInputType
    _sum?: LeagueSumAggregateInputType
    _min?: LeagueMinAggregateInputType
    _max?: LeagueMaxAggregateInputType
  }

  export type LeagueGroupByOutputType = {
    id: number
    name: string
    code: string
    ownerId: number | null
    createdAt: Date
    league_type: $Enums.LeagueType
    _count: LeagueCountAggregateOutputType | null
    _avg: LeagueAvgAggregateOutputType | null
    _sum: LeagueSumAggregateOutputType | null
    _min: LeagueMinAggregateOutputType | null
    _max: LeagueMaxAggregateOutputType | null
  }

  type GetLeagueGroupByPayload<T extends LeagueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeagueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeagueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeagueGroupByOutputType[P]>
            : GetScalarType<T[P], LeagueGroupByOutputType[P]>
        }
      >
    >


  export type LeagueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    ownerId?: boolean
    createdAt?: boolean
    league_type?: boolean
    owner?: boolean | League$ownerArgs<ExtArgs>
    members?: boolean | League$membersArgs<ExtArgs>
    points?: boolean | League$pointsArgs<ExtArgs>
    teams?: boolean | League$teamsArgs<ExtArgs>
    _count?: boolean | LeagueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["league"]>

  export type LeagueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    ownerId?: boolean
    createdAt?: boolean
    league_type?: boolean
    owner?: boolean | League$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["league"]>

  export type LeagueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    ownerId?: boolean
    createdAt?: boolean
    league_type?: boolean
    owner?: boolean | League$ownerArgs<ExtArgs>
  }, ExtArgs["result"]["league"]>

  export type LeagueSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    ownerId?: boolean
    createdAt?: boolean
    league_type?: boolean
  }

  export type LeagueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "ownerId" | "createdAt" | "league_type", ExtArgs["result"]["league"]>
  export type LeagueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | League$ownerArgs<ExtArgs>
    members?: boolean | League$membersArgs<ExtArgs>
    points?: boolean | League$pointsArgs<ExtArgs>
    teams?: boolean | League$teamsArgs<ExtArgs>
    _count?: boolean | LeagueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeagueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | League$ownerArgs<ExtArgs>
  }
  export type LeagueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | League$ownerArgs<ExtArgs>
  }

  export type $LeaguePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "League"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs> | null
      members: Prisma.$LeagueMemberPayload<ExtArgs>[]
      points: Prisma.$PointsPayload<ExtArgs>[]
      teams: Prisma.$TeamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      code: string
      ownerId: number | null
      createdAt: Date
      league_type: $Enums.LeagueType
    }, ExtArgs["result"]["league"]>
    composites: {}
  }

  type LeagueGetPayload<S extends boolean | null | undefined | LeagueDefaultArgs> = $Result.GetResult<Prisma.$LeaguePayload, S>

  type LeagueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeagueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeagueCountAggregateInputType | true
    }

  export interface LeagueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['League'], meta: { name: 'League' } }
    /**
     * Find zero or one League that matches the filter.
     * @param {LeagueFindUniqueArgs} args - Arguments to find a League
     * @example
     * // Get one League
     * const league = await prisma.league.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeagueFindUniqueArgs>(args: SelectSubset<T, LeagueFindUniqueArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one League that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeagueFindUniqueOrThrowArgs} args - Arguments to find a League
     * @example
     * // Get one League
     * const league = await prisma.league.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeagueFindUniqueOrThrowArgs>(args: SelectSubset<T, LeagueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first League that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueFindFirstArgs} args - Arguments to find a League
     * @example
     * // Get one League
     * const league = await prisma.league.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeagueFindFirstArgs>(args?: SelectSubset<T, LeagueFindFirstArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first League that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueFindFirstOrThrowArgs} args - Arguments to find a League
     * @example
     * // Get one League
     * const league = await prisma.league.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeagueFindFirstOrThrowArgs>(args?: SelectSubset<T, LeagueFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leagues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leagues
     * const leagues = await prisma.league.findMany()
     * 
     * // Get first 10 Leagues
     * const leagues = await prisma.league.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leagueWithIdOnly = await prisma.league.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeagueFindManyArgs>(args?: SelectSubset<T, LeagueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a League.
     * @param {LeagueCreateArgs} args - Arguments to create a League.
     * @example
     * // Create one League
     * const League = await prisma.league.create({
     *   data: {
     *     // ... data to create a League
     *   }
     * })
     * 
     */
    create<T extends LeagueCreateArgs>(args: SelectSubset<T, LeagueCreateArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leagues.
     * @param {LeagueCreateManyArgs} args - Arguments to create many Leagues.
     * @example
     * // Create many Leagues
     * const league = await prisma.league.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeagueCreateManyArgs>(args?: SelectSubset<T, LeagueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leagues and returns the data saved in the database.
     * @param {LeagueCreateManyAndReturnArgs} args - Arguments to create many Leagues.
     * @example
     * // Create many Leagues
     * const league = await prisma.league.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leagues and only return the `id`
     * const leagueWithIdOnly = await prisma.league.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeagueCreateManyAndReturnArgs>(args?: SelectSubset<T, LeagueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a League.
     * @param {LeagueDeleteArgs} args - Arguments to delete one League.
     * @example
     * // Delete one League
     * const League = await prisma.league.delete({
     *   where: {
     *     // ... filter to delete one League
     *   }
     * })
     * 
     */
    delete<T extends LeagueDeleteArgs>(args: SelectSubset<T, LeagueDeleteArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one League.
     * @param {LeagueUpdateArgs} args - Arguments to update one League.
     * @example
     * // Update one League
     * const league = await prisma.league.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeagueUpdateArgs>(args: SelectSubset<T, LeagueUpdateArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leagues.
     * @param {LeagueDeleteManyArgs} args - Arguments to filter Leagues to delete.
     * @example
     * // Delete a few Leagues
     * const { count } = await prisma.league.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeagueDeleteManyArgs>(args?: SelectSubset<T, LeagueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leagues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leagues
     * const league = await prisma.league.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeagueUpdateManyArgs>(args: SelectSubset<T, LeagueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leagues and returns the data updated in the database.
     * @param {LeagueUpdateManyAndReturnArgs} args - Arguments to update many Leagues.
     * @example
     * // Update many Leagues
     * const league = await prisma.league.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leagues and only return the `id`
     * const leagueWithIdOnly = await prisma.league.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeagueUpdateManyAndReturnArgs>(args: SelectSubset<T, LeagueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one League.
     * @param {LeagueUpsertArgs} args - Arguments to update or create a League.
     * @example
     * // Update or create a League
     * const league = await prisma.league.upsert({
     *   create: {
     *     // ... data to create a League
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the League we want to update
     *   }
     * })
     */
    upsert<T extends LeagueUpsertArgs>(args: SelectSubset<T, LeagueUpsertArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leagues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueCountArgs} args - Arguments to filter Leagues to count.
     * @example
     * // Count the number of Leagues
     * const count = await prisma.league.count({
     *   where: {
     *     // ... the filter for the Leagues we want to count
     *   }
     * })
    **/
    count<T extends LeagueCountArgs>(
      args?: Subset<T, LeagueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeagueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a League.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeagueAggregateArgs>(args: Subset<T, LeagueAggregateArgs>): Prisma.PrismaPromise<GetLeagueAggregateType<T>>

    /**
     * Group by League.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeagueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeagueGroupByArgs['orderBy'] }
        : { orderBy?: LeagueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeagueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeagueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the League model
   */
  readonly fields: LeagueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for League.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeagueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends League$ownerArgs<ExtArgs> = {}>(args?: Subset<T, League$ownerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    members<T extends League$membersArgs<ExtArgs> = {}>(args?: Subset<T, League$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeagueMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    points<T extends League$pointsArgs<ExtArgs> = {}>(args?: Subset<T, League$pointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teams<T extends League$teamsArgs<ExtArgs> = {}>(args?: Subset<T, League$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the League model
   */
  interface LeagueFieldRefs {
    readonly id: FieldRef<"League", 'Int'>
    readonly name: FieldRef<"League", 'String'>
    readonly code: FieldRef<"League", 'String'>
    readonly ownerId: FieldRef<"League", 'Int'>
    readonly createdAt: FieldRef<"League", 'DateTime'>
    readonly league_type: FieldRef<"League", 'LeagueType'>
  }
    

  // Custom InputTypes
  /**
   * League findUnique
   */
  export type LeagueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    /**
     * Filter, which League to fetch.
     */
    where: LeagueWhereUniqueInput
  }

  /**
   * League findUniqueOrThrow
   */
  export type LeagueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    /**
     * Filter, which League to fetch.
     */
    where: LeagueWhereUniqueInput
  }

  /**
   * League findFirst
   */
  export type LeagueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    /**
     * Filter, which League to fetch.
     */
    where?: LeagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leagues to fetch.
     */
    orderBy?: LeagueOrderByWithRelationInput | LeagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leagues.
     */
    cursor?: LeagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leagues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leagues.
     */
    distinct?: LeagueScalarFieldEnum | LeagueScalarFieldEnum[]
  }

  /**
   * League findFirstOrThrow
   */
  export type LeagueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    /**
     * Filter, which League to fetch.
     */
    where?: LeagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leagues to fetch.
     */
    orderBy?: LeagueOrderByWithRelationInput | LeagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leagues.
     */
    cursor?: LeagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leagues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leagues.
     */
    distinct?: LeagueScalarFieldEnum | LeagueScalarFieldEnum[]
  }

  /**
   * League findMany
   */
  export type LeagueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    /**
     * Filter, which Leagues to fetch.
     */
    where?: LeagueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leagues to fetch.
     */
    orderBy?: LeagueOrderByWithRelationInput | LeagueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leagues.
     */
    cursor?: LeagueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leagues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leagues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leagues.
     */
    distinct?: LeagueScalarFieldEnum | LeagueScalarFieldEnum[]
  }

  /**
   * League create
   */
  export type LeagueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    /**
     * The data needed to create a League.
     */
    data: XOR<LeagueCreateInput, LeagueUncheckedCreateInput>
  }

  /**
   * League createMany
   */
  export type LeagueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leagues.
     */
    data: LeagueCreateManyInput | LeagueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * League createManyAndReturn
   */
  export type LeagueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null
    /**
     * The data used to create many Leagues.
     */
    data: LeagueCreateManyInput | LeagueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * League update
   */
  export type LeagueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    /**
     * The data needed to update a League.
     */
    data: XOR<LeagueUpdateInput, LeagueUncheckedUpdateInput>
    /**
     * Choose, which League to update.
     */
    where: LeagueWhereUniqueInput
  }

  /**
   * League updateMany
   */
  export type LeagueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leagues.
     */
    data: XOR<LeagueUpdateManyMutationInput, LeagueUncheckedUpdateManyInput>
    /**
     * Filter which Leagues to update
     */
    where?: LeagueWhereInput
    /**
     * Limit how many Leagues to update.
     */
    limit?: number
  }

  /**
   * League updateManyAndReturn
   */
  export type LeagueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null
    /**
     * The data used to update Leagues.
     */
    data: XOR<LeagueUpdateManyMutationInput, LeagueUncheckedUpdateManyInput>
    /**
     * Filter which Leagues to update
     */
    where?: LeagueWhereInput
    /**
     * Limit how many Leagues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * League upsert
   */
  export type LeagueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    /**
     * The filter to search for the League to update in case it exists.
     */
    where: LeagueWhereUniqueInput
    /**
     * In case the League found by the `where` argument doesn't exist, create a new League with this data.
     */
    create: XOR<LeagueCreateInput, LeagueUncheckedCreateInput>
    /**
     * In case the League was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeagueUpdateInput, LeagueUncheckedUpdateInput>
  }

  /**
   * League delete
   */
  export type LeagueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
    /**
     * Filter which League to delete.
     */
    where: LeagueWhereUniqueInput
  }

  /**
   * League deleteMany
   */
  export type LeagueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leagues to delete
     */
    where?: LeagueWhereInput
    /**
     * Limit how many Leagues to delete.
     */
    limit?: number
  }

  /**
   * League.owner
   */
  export type League$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * League.members
   */
  export type League$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberInclude<ExtArgs> | null
    where?: LeagueMemberWhereInput
    orderBy?: LeagueMemberOrderByWithRelationInput | LeagueMemberOrderByWithRelationInput[]
    cursor?: LeagueMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeagueMemberScalarFieldEnum | LeagueMemberScalarFieldEnum[]
  }

  /**
   * League.points
   */
  export type League$pointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    where?: PointsWhereInput
    orderBy?: PointsOrderByWithRelationInput | PointsOrderByWithRelationInput[]
    cursor?: PointsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointsScalarFieldEnum | PointsScalarFieldEnum[]
  }

  /**
   * League.teams
   */
  export type League$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * League without action
   */
  export type LeagueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the League
     */
    select?: LeagueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the League
     */
    omit?: LeagueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueInclude<ExtArgs> | null
  }


  /**
   * Model LeagueMember
   */

  export type AggregateLeagueMember = {
    _count: LeagueMemberCountAggregateOutputType | null
    _avg: LeagueMemberAvgAggregateOutputType | null
    _sum: LeagueMemberSumAggregateOutputType | null
    _min: LeagueMemberMinAggregateOutputType | null
    _max: LeagueMemberMaxAggregateOutputType | null
  }

  export type LeagueMemberAvgAggregateOutputType = {
    id: number | null
    leagueId: number | null
    userId: number | null
  }

  export type LeagueMemberSumAggregateOutputType = {
    id: number | null
    leagueId: number | null
    userId: number | null
  }

  export type LeagueMemberMinAggregateOutputType = {
    id: number | null
    leagueId: number | null
    userId: number | null
    joinedAt: Date | null
  }

  export type LeagueMemberMaxAggregateOutputType = {
    id: number | null
    leagueId: number | null
    userId: number | null
    joinedAt: Date | null
  }

  export type LeagueMemberCountAggregateOutputType = {
    id: number
    leagueId: number
    userId: number
    joinedAt: number
    _all: number
  }


  export type LeagueMemberAvgAggregateInputType = {
    id?: true
    leagueId?: true
    userId?: true
  }

  export type LeagueMemberSumAggregateInputType = {
    id?: true
    leagueId?: true
    userId?: true
  }

  export type LeagueMemberMinAggregateInputType = {
    id?: true
    leagueId?: true
    userId?: true
    joinedAt?: true
  }

  export type LeagueMemberMaxAggregateInputType = {
    id?: true
    leagueId?: true
    userId?: true
    joinedAt?: true
  }

  export type LeagueMemberCountAggregateInputType = {
    id?: true
    leagueId?: true
    userId?: true
    joinedAt?: true
    _all?: true
  }

  export type LeagueMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeagueMember to aggregate.
     */
    where?: LeagueMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeagueMembers to fetch.
     */
    orderBy?: LeagueMemberOrderByWithRelationInput | LeagueMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeagueMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeagueMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeagueMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeagueMembers
    **/
    _count?: true | LeagueMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeagueMemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeagueMemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeagueMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeagueMemberMaxAggregateInputType
  }

  export type GetLeagueMemberAggregateType<T extends LeagueMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateLeagueMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeagueMember[P]>
      : GetScalarType<T[P], AggregateLeagueMember[P]>
  }




  export type LeagueMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeagueMemberWhereInput
    orderBy?: LeagueMemberOrderByWithAggregationInput | LeagueMemberOrderByWithAggregationInput[]
    by: LeagueMemberScalarFieldEnum[] | LeagueMemberScalarFieldEnum
    having?: LeagueMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeagueMemberCountAggregateInputType | true
    _avg?: LeagueMemberAvgAggregateInputType
    _sum?: LeagueMemberSumAggregateInputType
    _min?: LeagueMemberMinAggregateInputType
    _max?: LeagueMemberMaxAggregateInputType
  }

  export type LeagueMemberGroupByOutputType = {
    id: number
    leagueId: number
    userId: number
    joinedAt: Date
    _count: LeagueMemberCountAggregateOutputType | null
    _avg: LeagueMemberAvgAggregateOutputType | null
    _sum: LeagueMemberSumAggregateOutputType | null
    _min: LeagueMemberMinAggregateOutputType | null
    _max: LeagueMemberMaxAggregateOutputType | null
  }

  type GetLeagueMemberGroupByPayload<T extends LeagueMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeagueMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeagueMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeagueMemberGroupByOutputType[P]>
            : GetScalarType<T[P], LeagueMemberGroupByOutputType[P]>
        }
      >
    >


  export type LeagueMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leagueId?: boolean
    userId?: boolean
    joinedAt?: boolean
    league?: boolean | LeagueDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leagueMember"]>

  export type LeagueMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leagueId?: boolean
    userId?: boolean
    joinedAt?: boolean
    league?: boolean | LeagueDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leagueMember"]>

  export type LeagueMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leagueId?: boolean
    userId?: boolean
    joinedAt?: boolean
    league?: boolean | LeagueDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leagueMember"]>

  export type LeagueMemberSelectScalar = {
    id?: boolean
    leagueId?: boolean
    userId?: boolean
    joinedAt?: boolean
  }

  export type LeagueMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leagueId" | "userId" | "joinedAt", ExtArgs["result"]["leagueMember"]>
  export type LeagueMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    league?: boolean | LeagueDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LeagueMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    league?: boolean | LeagueDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LeagueMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    league?: boolean | LeagueDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LeagueMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeagueMember"
    objects: {
      league: Prisma.$LeaguePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      leagueId: number
      userId: number
      joinedAt: Date
    }, ExtArgs["result"]["leagueMember"]>
    composites: {}
  }

  type LeagueMemberGetPayload<S extends boolean | null | undefined | LeagueMemberDefaultArgs> = $Result.GetResult<Prisma.$LeagueMemberPayload, S>

  type LeagueMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeagueMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeagueMemberCountAggregateInputType | true
    }

  export interface LeagueMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeagueMember'], meta: { name: 'LeagueMember' } }
    /**
     * Find zero or one LeagueMember that matches the filter.
     * @param {LeagueMemberFindUniqueArgs} args - Arguments to find a LeagueMember
     * @example
     * // Get one LeagueMember
     * const leagueMember = await prisma.leagueMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeagueMemberFindUniqueArgs>(args: SelectSubset<T, LeagueMemberFindUniqueArgs<ExtArgs>>): Prisma__LeagueMemberClient<$Result.GetResult<Prisma.$LeagueMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeagueMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeagueMemberFindUniqueOrThrowArgs} args - Arguments to find a LeagueMember
     * @example
     * // Get one LeagueMember
     * const leagueMember = await prisma.leagueMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeagueMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, LeagueMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeagueMemberClient<$Result.GetResult<Prisma.$LeagueMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeagueMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueMemberFindFirstArgs} args - Arguments to find a LeagueMember
     * @example
     * // Get one LeagueMember
     * const leagueMember = await prisma.leagueMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeagueMemberFindFirstArgs>(args?: SelectSubset<T, LeagueMemberFindFirstArgs<ExtArgs>>): Prisma__LeagueMemberClient<$Result.GetResult<Prisma.$LeagueMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeagueMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueMemberFindFirstOrThrowArgs} args - Arguments to find a LeagueMember
     * @example
     * // Get one LeagueMember
     * const leagueMember = await prisma.leagueMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeagueMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, LeagueMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeagueMemberClient<$Result.GetResult<Prisma.$LeagueMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeagueMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeagueMembers
     * const leagueMembers = await prisma.leagueMember.findMany()
     * 
     * // Get first 10 LeagueMembers
     * const leagueMembers = await prisma.leagueMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leagueMemberWithIdOnly = await prisma.leagueMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeagueMemberFindManyArgs>(args?: SelectSubset<T, LeagueMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeagueMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeagueMember.
     * @param {LeagueMemberCreateArgs} args - Arguments to create a LeagueMember.
     * @example
     * // Create one LeagueMember
     * const LeagueMember = await prisma.leagueMember.create({
     *   data: {
     *     // ... data to create a LeagueMember
     *   }
     * })
     * 
     */
    create<T extends LeagueMemberCreateArgs>(args: SelectSubset<T, LeagueMemberCreateArgs<ExtArgs>>): Prisma__LeagueMemberClient<$Result.GetResult<Prisma.$LeagueMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeagueMembers.
     * @param {LeagueMemberCreateManyArgs} args - Arguments to create many LeagueMembers.
     * @example
     * // Create many LeagueMembers
     * const leagueMember = await prisma.leagueMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeagueMemberCreateManyArgs>(args?: SelectSubset<T, LeagueMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeagueMembers and returns the data saved in the database.
     * @param {LeagueMemberCreateManyAndReturnArgs} args - Arguments to create many LeagueMembers.
     * @example
     * // Create many LeagueMembers
     * const leagueMember = await prisma.leagueMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeagueMembers and only return the `id`
     * const leagueMemberWithIdOnly = await prisma.leagueMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeagueMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, LeagueMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeagueMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeagueMember.
     * @param {LeagueMemberDeleteArgs} args - Arguments to delete one LeagueMember.
     * @example
     * // Delete one LeagueMember
     * const LeagueMember = await prisma.leagueMember.delete({
     *   where: {
     *     // ... filter to delete one LeagueMember
     *   }
     * })
     * 
     */
    delete<T extends LeagueMemberDeleteArgs>(args: SelectSubset<T, LeagueMemberDeleteArgs<ExtArgs>>): Prisma__LeagueMemberClient<$Result.GetResult<Prisma.$LeagueMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeagueMember.
     * @param {LeagueMemberUpdateArgs} args - Arguments to update one LeagueMember.
     * @example
     * // Update one LeagueMember
     * const leagueMember = await prisma.leagueMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeagueMemberUpdateArgs>(args: SelectSubset<T, LeagueMemberUpdateArgs<ExtArgs>>): Prisma__LeagueMemberClient<$Result.GetResult<Prisma.$LeagueMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeagueMembers.
     * @param {LeagueMemberDeleteManyArgs} args - Arguments to filter LeagueMembers to delete.
     * @example
     * // Delete a few LeagueMembers
     * const { count } = await prisma.leagueMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeagueMemberDeleteManyArgs>(args?: SelectSubset<T, LeagueMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeagueMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeagueMembers
     * const leagueMember = await prisma.leagueMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeagueMemberUpdateManyArgs>(args: SelectSubset<T, LeagueMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeagueMembers and returns the data updated in the database.
     * @param {LeagueMemberUpdateManyAndReturnArgs} args - Arguments to update many LeagueMembers.
     * @example
     * // Update many LeagueMembers
     * const leagueMember = await prisma.leagueMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeagueMembers and only return the `id`
     * const leagueMemberWithIdOnly = await prisma.leagueMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LeagueMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, LeagueMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeagueMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeagueMember.
     * @param {LeagueMemberUpsertArgs} args - Arguments to update or create a LeagueMember.
     * @example
     * // Update or create a LeagueMember
     * const leagueMember = await prisma.leagueMember.upsert({
     *   create: {
     *     // ... data to create a LeagueMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeagueMember we want to update
     *   }
     * })
     */
    upsert<T extends LeagueMemberUpsertArgs>(args: SelectSubset<T, LeagueMemberUpsertArgs<ExtArgs>>): Prisma__LeagueMemberClient<$Result.GetResult<Prisma.$LeagueMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeagueMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueMemberCountArgs} args - Arguments to filter LeagueMembers to count.
     * @example
     * // Count the number of LeagueMembers
     * const count = await prisma.leagueMember.count({
     *   where: {
     *     // ... the filter for the LeagueMembers we want to count
     *   }
     * })
    **/
    count<T extends LeagueMemberCountArgs>(
      args?: Subset<T, LeagueMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeagueMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeagueMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LeagueMemberAggregateArgs>(args: Subset<T, LeagueMemberAggregateArgs>): Prisma.PrismaPromise<GetLeagueMemberAggregateType<T>>

    /**
     * Group by LeagueMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeagueMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LeagueMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeagueMemberGroupByArgs['orderBy'] }
        : { orderBy?: LeagueMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LeagueMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeagueMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeagueMember model
   */
  readonly fields: LeagueMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeagueMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeagueMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    league<T extends LeagueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeagueDefaultArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LeagueMember model
   */
  interface LeagueMemberFieldRefs {
    readonly id: FieldRef<"LeagueMember", 'Int'>
    readonly leagueId: FieldRef<"LeagueMember", 'Int'>
    readonly userId: FieldRef<"LeagueMember", 'Int'>
    readonly joinedAt: FieldRef<"LeagueMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeagueMember findUnique
   */
  export type LeagueMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberInclude<ExtArgs> | null
    /**
     * Filter, which LeagueMember to fetch.
     */
    where: LeagueMemberWhereUniqueInput
  }

  /**
   * LeagueMember findUniqueOrThrow
   */
  export type LeagueMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberInclude<ExtArgs> | null
    /**
     * Filter, which LeagueMember to fetch.
     */
    where: LeagueMemberWhereUniqueInput
  }

  /**
   * LeagueMember findFirst
   */
  export type LeagueMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberInclude<ExtArgs> | null
    /**
     * Filter, which LeagueMember to fetch.
     */
    where?: LeagueMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeagueMembers to fetch.
     */
    orderBy?: LeagueMemberOrderByWithRelationInput | LeagueMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeagueMembers.
     */
    cursor?: LeagueMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeagueMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeagueMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeagueMembers.
     */
    distinct?: LeagueMemberScalarFieldEnum | LeagueMemberScalarFieldEnum[]
  }

  /**
   * LeagueMember findFirstOrThrow
   */
  export type LeagueMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberInclude<ExtArgs> | null
    /**
     * Filter, which LeagueMember to fetch.
     */
    where?: LeagueMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeagueMembers to fetch.
     */
    orderBy?: LeagueMemberOrderByWithRelationInput | LeagueMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeagueMembers.
     */
    cursor?: LeagueMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeagueMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeagueMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeagueMembers.
     */
    distinct?: LeagueMemberScalarFieldEnum | LeagueMemberScalarFieldEnum[]
  }

  /**
   * LeagueMember findMany
   */
  export type LeagueMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberInclude<ExtArgs> | null
    /**
     * Filter, which LeagueMembers to fetch.
     */
    where?: LeagueMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeagueMembers to fetch.
     */
    orderBy?: LeagueMemberOrderByWithRelationInput | LeagueMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeagueMembers.
     */
    cursor?: LeagueMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeagueMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeagueMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeagueMembers.
     */
    distinct?: LeagueMemberScalarFieldEnum | LeagueMemberScalarFieldEnum[]
  }

  /**
   * LeagueMember create
   */
  export type LeagueMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a LeagueMember.
     */
    data: XOR<LeagueMemberCreateInput, LeagueMemberUncheckedCreateInput>
  }

  /**
   * LeagueMember createMany
   */
  export type LeagueMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeagueMembers.
     */
    data: LeagueMemberCreateManyInput | LeagueMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeagueMember createManyAndReturn
   */
  export type LeagueMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null
    /**
     * The data used to create many LeagueMembers.
     */
    data: LeagueMemberCreateManyInput | LeagueMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeagueMember update
   */
  export type LeagueMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a LeagueMember.
     */
    data: XOR<LeagueMemberUpdateInput, LeagueMemberUncheckedUpdateInput>
    /**
     * Choose, which LeagueMember to update.
     */
    where: LeagueMemberWhereUniqueInput
  }

  /**
   * LeagueMember updateMany
   */
  export type LeagueMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeagueMembers.
     */
    data: XOR<LeagueMemberUpdateManyMutationInput, LeagueMemberUncheckedUpdateManyInput>
    /**
     * Filter which LeagueMembers to update
     */
    where?: LeagueMemberWhereInput
    /**
     * Limit how many LeagueMembers to update.
     */
    limit?: number
  }

  /**
   * LeagueMember updateManyAndReturn
   */
  export type LeagueMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null
    /**
     * The data used to update LeagueMembers.
     */
    data: XOR<LeagueMemberUpdateManyMutationInput, LeagueMemberUncheckedUpdateManyInput>
    /**
     * Filter which LeagueMembers to update
     */
    where?: LeagueMemberWhereInput
    /**
     * Limit how many LeagueMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeagueMember upsert
   */
  export type LeagueMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the LeagueMember to update in case it exists.
     */
    where: LeagueMemberWhereUniqueInput
    /**
     * In case the LeagueMember found by the `where` argument doesn't exist, create a new LeagueMember with this data.
     */
    create: XOR<LeagueMemberCreateInput, LeagueMemberUncheckedCreateInput>
    /**
     * In case the LeagueMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeagueMemberUpdateInput, LeagueMemberUncheckedUpdateInput>
  }

  /**
   * LeagueMember delete
   */
  export type LeagueMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberInclude<ExtArgs> | null
    /**
     * Filter which LeagueMember to delete.
     */
    where: LeagueMemberWhereUniqueInput
  }

  /**
   * LeagueMember deleteMany
   */
  export type LeagueMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeagueMembers to delete
     */
    where?: LeagueMemberWhereInput
    /**
     * Limit how many LeagueMembers to delete.
     */
    limit?: number
  }

  /**
   * LeagueMember without action
   */
  export type LeagueMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeagueMember
     */
    select?: LeagueMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeagueMember
     */
    omit?: LeagueMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeagueMemberInclude<ExtArgs> | null
  }


  /**
   * Model Driver
   */

  export type AggregateDriver = {
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  export type DriverAvgAggregateOutputType = {
    id: number | null
    number: number | null
    price: number | null
    points: number | null
    constructorId: number | null
  }

  export type DriverSumAggregateOutputType = {
    id: number | null
    number: number | null
    price: number | null
    points: number | null
    constructorId: number | null
  }

  export type DriverMinAggregateOutputType = {
    id: number | null
    name: string | null
    number: number | null
    active: boolean | null
    price: number | null
    points: number | null
    constructorId: number | null
  }

  export type DriverMaxAggregateOutputType = {
    id: number | null
    name: string | null
    number: number | null
    active: boolean | null
    price: number | null
    points: number | null
    constructorId: number | null
  }

  export type DriverCountAggregateOutputType = {
    id: number
    name: number
    number: number
    active: number
    price: number
    points: number
    constructorId: number
    _all: number
  }


  export type DriverAvgAggregateInputType = {
    id?: true
    number?: true
    price?: true
    points?: true
    constructorId?: true
  }

  export type DriverSumAggregateInputType = {
    id?: true
    number?: true
    price?: true
    points?: true
    constructorId?: true
  }

  export type DriverMinAggregateInputType = {
    id?: true
    name?: true
    number?: true
    active?: true
    price?: true
    points?: true
    constructorId?: true
  }

  export type DriverMaxAggregateInputType = {
    id?: true
    name?: true
    number?: true
    active?: true
    price?: true
    points?: true
    constructorId?: true
  }

  export type DriverCountAggregateInputType = {
    id?: true
    name?: true
    number?: true
    active?: true
    price?: true
    points?: true
    constructorId?: true
    _all?: true
  }

  export type DriverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Driver to aggregate.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drivers
    **/
    _count?: true | DriverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DriverAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DriverSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverMaxAggregateInputType
  }

  export type GetDriverAggregateType<T extends DriverAggregateArgs> = {
        [P in keyof T & keyof AggregateDriver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriver[P]>
      : GetScalarType<T[P], AggregateDriver[P]>
  }




  export type DriverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWhereInput
    orderBy?: DriverOrderByWithAggregationInput | DriverOrderByWithAggregationInput[]
    by: DriverScalarFieldEnum[] | DriverScalarFieldEnum
    having?: DriverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverCountAggregateInputType | true
    _avg?: DriverAvgAggregateInputType
    _sum?: DriverSumAggregateInputType
    _min?: DriverMinAggregateInputType
    _max?: DriverMaxAggregateInputType
  }

  export type DriverGroupByOutputType = {
    id: number
    name: string
    number: number | null
    active: boolean
    price: number
    points: number
    constructorId: number | null
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  type GetDriverGroupByPayload<T extends DriverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverGroupByOutputType[P]>
            : GetScalarType<T[P], DriverGroupByOutputType[P]>
        }
      >
    >


  export type DriverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    active?: boolean
    price?: boolean
    points?: boolean
    constructorId?: boolean
    constructor?: boolean | Driver$constructorArgs<ExtArgs>
    predictions?: boolean | Driver$predictionsArgs<ExtArgs>
    raceResults?: boolean | Driver$raceResultsArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    active?: boolean
    price?: boolean
    points?: boolean
    constructorId?: boolean
    constructor?: boolean | Driver$constructorArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    number?: boolean
    active?: boolean
    price?: boolean
    points?: boolean
    constructorId?: boolean
    constructor?: boolean | Driver$constructorArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectScalar = {
    id?: boolean
    name?: boolean
    number?: boolean
    active?: boolean
    price?: boolean
    points?: boolean
    constructorId?: boolean
  }

  export type DriverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "number" | "active" | "price" | "points" | "constructorId", ExtArgs["result"]["driver"]>
  export type DriverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constructor?: boolean | Driver$constructorArgs<ExtArgs>
    predictions?: boolean | Driver$predictionsArgs<ExtArgs>
    raceResults?: boolean | Driver$raceResultsArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DriverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constructor?: boolean | Driver$constructorArgs<ExtArgs>
  }
  export type DriverIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    constructor?: boolean | Driver$constructorArgs<ExtArgs>
  }

  export type $DriverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Driver"
    objects: {
      constructor: Prisma.$ConstructorPayload<ExtArgs> | null
      predictions: Prisma.$PredictionPayload<ExtArgs>[]
      raceResults: Prisma.$RaceResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      number: number | null
      active: boolean
      price: number
      points: number
      constructorId: number | null
    }, ExtArgs["result"]["driver"]>
    composites: {}
  }

  type DriverGetPayload<S extends boolean | null | undefined | DriverDefaultArgs> = $Result.GetResult<Prisma.$DriverPayload, S>

  type DriverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DriverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverCountAggregateInputType | true
    }

  export interface DriverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Driver'], meta: { name: 'Driver' } }
    /**
     * Find zero or one Driver that matches the filter.
     * @param {DriverFindUniqueArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriverFindUniqueArgs>(args: SelectSubset<T, DriverFindUniqueArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Driver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DriverFindUniqueOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriverFindUniqueOrThrowArgs>(args: SelectSubset<T, DriverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriverFindFirstArgs>(args?: SelectSubset<T, DriverFindFirstArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriverFindFirstOrThrowArgs>(args?: SelectSubset<T, DriverFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drivers
     * const drivers = await prisma.driver.findMany()
     * 
     * // Get first 10 Drivers
     * const drivers = await prisma.driver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverWithIdOnly = await prisma.driver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriverFindManyArgs>(args?: SelectSubset<T, DriverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Driver.
     * @param {DriverCreateArgs} args - Arguments to create a Driver.
     * @example
     * // Create one Driver
     * const Driver = await prisma.driver.create({
     *   data: {
     *     // ... data to create a Driver
     *   }
     * })
     * 
     */
    create<T extends DriverCreateArgs>(args: SelectSubset<T, DriverCreateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drivers.
     * @param {DriverCreateManyArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriverCreateManyArgs>(args?: SelectSubset<T, DriverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drivers and returns the data saved in the database.
     * @param {DriverCreateManyAndReturnArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drivers and only return the `id`
     * const driverWithIdOnly = await prisma.driver.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DriverCreateManyAndReturnArgs>(args?: SelectSubset<T, DriverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Driver.
     * @param {DriverDeleteArgs} args - Arguments to delete one Driver.
     * @example
     * // Delete one Driver
     * const Driver = await prisma.driver.delete({
     *   where: {
     *     // ... filter to delete one Driver
     *   }
     * })
     * 
     */
    delete<T extends DriverDeleteArgs>(args: SelectSubset<T, DriverDeleteArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Driver.
     * @param {DriverUpdateArgs} args - Arguments to update one Driver.
     * @example
     * // Update one Driver
     * const driver = await prisma.driver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriverUpdateArgs>(args: SelectSubset<T, DriverUpdateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drivers.
     * @param {DriverDeleteManyArgs} args - Arguments to filter Drivers to delete.
     * @example
     * // Delete a few Drivers
     * const { count } = await prisma.driver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriverDeleteManyArgs>(args?: SelectSubset<T, DriverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriverUpdateManyArgs>(args: SelectSubset<T, DriverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers and returns the data updated in the database.
     * @param {DriverUpdateManyAndReturnArgs} args - Arguments to update many Drivers.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drivers and only return the `id`
     * const driverWithIdOnly = await prisma.driver.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DriverUpdateManyAndReturnArgs>(args: SelectSubset<T, DriverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Driver.
     * @param {DriverUpsertArgs} args - Arguments to update or create a Driver.
     * @example
     * // Update or create a Driver
     * const driver = await prisma.driver.upsert({
     *   create: {
     *     // ... data to create a Driver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Driver we want to update
     *   }
     * })
     */
    upsert<T extends DriverUpsertArgs>(args: SelectSubset<T, DriverUpsertArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverCountArgs} args - Arguments to filter Drivers to count.
     * @example
     * // Count the number of Drivers
     * const count = await prisma.driver.count({
     *   where: {
     *     // ... the filter for the Drivers we want to count
     *   }
     * })
    **/
    count<T extends DriverCountArgs>(
      args?: Subset<T, DriverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DriverAggregateArgs>(args: Subset<T, DriverAggregateArgs>): Prisma.PrismaPromise<GetDriverAggregateType<T>>

    /**
     * Group by Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DriverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriverGroupByArgs['orderBy'] }
        : { orderBy?: DriverGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DriverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Driver model
   */
  readonly fields: DriverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Driver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    constructor<T extends Driver$constructorArgs<ExtArgs> = {}>(args?: Subset<T, Driver$constructorArgs<ExtArgs>>)
    predictions<T extends Driver$predictionsArgs<ExtArgs> = {}>(args?: Subset<T, Driver$predictionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    raceResults<T extends Driver$raceResultsArgs<ExtArgs> = {}>(args?: Subset<T, Driver$raceResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Driver model
   */
  interface DriverFieldRefs {
    readonly id: FieldRef<"Driver", 'Int'>
    readonly name: FieldRef<"Driver", 'String'>
    readonly number: FieldRef<"Driver", 'Int'>
    readonly active: FieldRef<"Driver", 'Boolean'>
    readonly price: FieldRef<"Driver", 'Float'>
    readonly points: FieldRef<"Driver", 'Int'>
    readonly constructorId: FieldRef<"Driver", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Driver findUnique
   */
  export type DriverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findUniqueOrThrow
   */
  export type DriverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findFirst
   */
  export type DriverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findFirstOrThrow
   */
  export type DriverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findMany
   */
  export type DriverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Drivers to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver create
   */
  export type DriverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to create a Driver.
     */
    data: XOR<DriverCreateInput, DriverUncheckedCreateInput>
  }

  /**
   * Driver createMany
   */
  export type DriverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Driver createManyAndReturn
   */
  export type DriverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Driver update
   */
  export type DriverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to update a Driver.
     */
    data: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
    /**
     * Choose, which Driver to update.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver updateMany
   */
  export type DriverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to update.
     */
    limit?: number
  }

  /**
   * Driver updateManyAndReturn
   */
  export type DriverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Driver upsert
   */
  export type DriverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The filter to search for the Driver to update in case it exists.
     */
    where: DriverWhereUniqueInput
    /**
     * In case the Driver found by the `where` argument doesn't exist, create a new Driver with this data.
     */
    create: XOR<DriverCreateInput, DriverUncheckedCreateInput>
    /**
     * In case the Driver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
  }

  /**
   * Driver delete
   */
  export type DriverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter which Driver to delete.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver deleteMany
   */
  export type DriverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drivers to delete
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to delete.
     */
    limit?: number
  }

  /**
   * Driver.constructor
   */
  export type Driver$constructorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constructor
     */
    select?: ConstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constructor
     */
    omit?: ConstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructorInclude<ExtArgs> | null
    where?: ConstructorWhereInput
  }

  /**
   * Driver.predictions
   */
  export type Driver$predictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    where?: PredictionWhereInput
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    cursor?: PredictionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PredictionScalarFieldEnum | PredictionScalarFieldEnum[]
  }

  /**
   * Driver.raceResults
   */
  export type Driver$raceResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultInclude<ExtArgs> | null
    where?: RaceResultWhereInput
    orderBy?: RaceResultOrderByWithRelationInput | RaceResultOrderByWithRelationInput[]
    cursor?: RaceResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceResultScalarFieldEnum | RaceResultScalarFieldEnum[]
  }

  /**
   * Driver without action
   */
  export type DriverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
  }


  /**
   * Model Constructor
   */

  export type AggregateConstructor = {
    _count: ConstructorCountAggregateOutputType | null
    _avg: ConstructorAvgAggregateOutputType | null
    _sum: ConstructorSumAggregateOutputType | null
    _min: ConstructorMinAggregateOutputType | null
    _max: ConstructorMaxAggregateOutputType | null
  }

  export type ConstructorAvgAggregateOutputType = {
    id: number | null
    price: number | null
    points: number | null
  }

  export type ConstructorSumAggregateOutputType = {
    id: number | null
    price: number | null
    points: number | null
  }

  export type ConstructorMinAggregateOutputType = {
    id: number | null
    name: string | null
    active: boolean | null
    price: number | null
    points: number | null
  }

  export type ConstructorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    active: boolean | null
    price: number | null
    points: number | null
  }

  export type ConstructorCountAggregateOutputType = {
    id: number
    name: number
    active: number
    price: number
    points: number
    _all: number
  }


  export type ConstructorAvgAggregateInputType = {
    id?: true
    price?: true
    points?: true
  }

  export type ConstructorSumAggregateInputType = {
    id?: true
    price?: true
    points?: true
  }

  export type ConstructorMinAggregateInputType = {
    id?: true
    name?: true
    active?: true
    price?: true
    points?: true
  }

  export type ConstructorMaxAggregateInputType = {
    id?: true
    name?: true
    active?: true
    price?: true
    points?: true
  }

  export type ConstructorCountAggregateInputType = {
    id?: true
    name?: true
    active?: true
    price?: true
    points?: true
    _all?: true
  }

  export type ConstructorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Constructor to aggregate.
     */
    where?: ConstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Constructors to fetch.
     */
    orderBy?: ConstructorOrderByWithRelationInput | ConstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Constructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Constructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Constructors
    **/
    _count?: true | ConstructorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConstructorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConstructorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConstructorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConstructorMaxAggregateInputType
  }

  export type GetConstructorAggregateType<T extends ConstructorAggregateArgs> = {
        [P in keyof T & keyof AggregateConstructor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConstructor[P]>
      : GetScalarType<T[P], AggregateConstructor[P]>
  }




  export type ConstructorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConstructorWhereInput
    orderBy?: ConstructorOrderByWithAggregationInput | ConstructorOrderByWithAggregationInput[]
    by: ConstructorScalarFieldEnum[] | ConstructorScalarFieldEnum
    having?: ConstructorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConstructorCountAggregateInputType | true
    _avg?: ConstructorAvgAggregateInputType
    _sum?: ConstructorSumAggregateInputType
    _min?: ConstructorMinAggregateInputType
    _max?: ConstructorMaxAggregateInputType
  }

  export type ConstructorGroupByOutputType = {
    id: number
    name: string
    active: boolean
    price: number
    points: number
    _count: ConstructorCountAggregateOutputType | null
    _avg: ConstructorAvgAggregateOutputType | null
    _sum: ConstructorSumAggregateOutputType | null
    _min: ConstructorMinAggregateOutputType | null
    _max: ConstructorMaxAggregateOutputType | null
  }

  type GetConstructorGroupByPayload<T extends ConstructorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConstructorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConstructorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConstructorGroupByOutputType[P]>
            : GetScalarType<T[P], ConstructorGroupByOutputType[P]>
        }
      >
    >


  export type ConstructorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    active?: boolean
    price?: boolean
    points?: boolean
    drivers?: boolean | Constructor$driversArgs<ExtArgs>
    teams?: boolean | Constructor$teamsArgs<ExtArgs>
    _count?: boolean | ConstructorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["constructor"]>

  export type ConstructorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    active?: boolean
    price?: boolean
    points?: boolean
  }, ExtArgs["result"]["constructor"]>

  export type ConstructorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    active?: boolean
    price?: boolean
    points?: boolean
  }, ExtArgs["result"]["constructor"]>

  export type ConstructorSelectScalar = {
    id?: boolean
    name?: boolean
    active?: boolean
    price?: boolean
    points?: boolean
  }

  export type ConstructorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "active" | "price" | "points", ExtArgs["result"]["constructor"]>
  export type ConstructorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drivers?: boolean | Constructor$driversArgs<ExtArgs>
    teams?: boolean | Constructor$teamsArgs<ExtArgs>
    _count?: boolean | ConstructorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConstructorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ConstructorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ConstructorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Constructor"
    objects: {
      drivers: Prisma.$DriverPayload<ExtArgs>[]
      teams: Prisma.$TeamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      active: boolean
      price: number
      points: number
    }, ExtArgs["result"]["constructor"]>
    composites: {}
  }

  type ConstructorGetPayload<S extends boolean | null | undefined | ConstructorDefaultArgs> = $Result.GetResult<Prisma.$ConstructorPayload, S>

  type ConstructorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConstructorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConstructorCountAggregateInputType | true
    }

  export interface ConstructorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Constructor'], meta: { name: 'Constructor' } }
    /**
     * Find zero or one Constructor that matches the filter.
     * @param {ConstructorFindUniqueArgs} args - Arguments to find a Constructor
     * @example
     * // Get one Constructor
     * const constructor = await prisma.constructor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConstructorFindUniqueArgs>(args: SelectSubset<T, ConstructorFindUniqueArgs<ExtArgs>>): Prisma__ConstructorClient<$Result.GetResult<Prisma.$ConstructorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Constructor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConstructorFindUniqueOrThrowArgs} args - Arguments to find a Constructor
     * @example
     * // Get one Constructor
     * const constructor = await prisma.constructor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConstructorFindUniqueOrThrowArgs>(args: SelectSubset<T, ConstructorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConstructorClient<$Result.GetResult<Prisma.$ConstructorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Constructor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstructorFindFirstArgs} args - Arguments to find a Constructor
     * @example
     * // Get one Constructor
     * const constructor = await prisma.constructor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConstructorFindFirstArgs>(args?: SelectSubset<T, ConstructorFindFirstArgs<ExtArgs>>): Prisma__ConstructorClient<$Result.GetResult<Prisma.$ConstructorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Constructor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstructorFindFirstOrThrowArgs} args - Arguments to find a Constructor
     * @example
     * // Get one Constructor
     * const constructor = await prisma.constructor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConstructorFindFirstOrThrowArgs>(args?: SelectSubset<T, ConstructorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConstructorClient<$Result.GetResult<Prisma.$ConstructorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Constructors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstructorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Constructors
     * const constructors = await prisma.constructor.findMany()
     * 
     * // Get first 10 Constructors
     * const constructors = await prisma.constructor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const constructorWithIdOnly = await prisma.constructor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConstructorFindManyArgs>(args?: SelectSubset<T, ConstructorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConstructorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Constructor.
     * @param {ConstructorCreateArgs} args - Arguments to create a Constructor.
     * @example
     * // Create one Constructor
     * const Constructor = await prisma.constructor.create({
     *   data: {
     *     // ... data to create a Constructor
     *   }
     * })
     * 
     */
    create<T extends ConstructorCreateArgs>(args: SelectSubset<T, ConstructorCreateArgs<ExtArgs>>): Prisma__ConstructorClient<$Result.GetResult<Prisma.$ConstructorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Constructors.
     * @param {ConstructorCreateManyArgs} args - Arguments to create many Constructors.
     * @example
     * // Create many Constructors
     * const constructor = await prisma.constructor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConstructorCreateManyArgs>(args?: SelectSubset<T, ConstructorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Constructors and returns the data saved in the database.
     * @param {ConstructorCreateManyAndReturnArgs} args - Arguments to create many Constructors.
     * @example
     * // Create many Constructors
     * const constructor = await prisma.constructor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Constructors and only return the `id`
     * const constructorWithIdOnly = await prisma.constructor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConstructorCreateManyAndReturnArgs>(args?: SelectSubset<T, ConstructorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConstructorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Constructor.
     * @param {ConstructorDeleteArgs} args - Arguments to delete one Constructor.
     * @example
     * // Delete one Constructor
     * const Constructor = await prisma.constructor.delete({
     *   where: {
     *     // ... filter to delete one Constructor
     *   }
     * })
     * 
     */
    delete<T extends ConstructorDeleteArgs>(args: SelectSubset<T, ConstructorDeleteArgs<ExtArgs>>): Prisma__ConstructorClient<$Result.GetResult<Prisma.$ConstructorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Constructor.
     * @param {ConstructorUpdateArgs} args - Arguments to update one Constructor.
     * @example
     * // Update one Constructor
     * const constructor = await prisma.constructor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConstructorUpdateArgs>(args: SelectSubset<T, ConstructorUpdateArgs<ExtArgs>>): Prisma__ConstructorClient<$Result.GetResult<Prisma.$ConstructorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Constructors.
     * @param {ConstructorDeleteManyArgs} args - Arguments to filter Constructors to delete.
     * @example
     * // Delete a few Constructors
     * const { count } = await prisma.constructor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConstructorDeleteManyArgs>(args?: SelectSubset<T, ConstructorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Constructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstructorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Constructors
     * const constructor = await prisma.constructor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConstructorUpdateManyArgs>(args: SelectSubset<T, ConstructorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Constructors and returns the data updated in the database.
     * @param {ConstructorUpdateManyAndReturnArgs} args - Arguments to update many Constructors.
     * @example
     * // Update many Constructors
     * const constructor = await prisma.constructor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Constructors and only return the `id`
     * const constructorWithIdOnly = await prisma.constructor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConstructorUpdateManyAndReturnArgs>(args: SelectSubset<T, ConstructorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConstructorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Constructor.
     * @param {ConstructorUpsertArgs} args - Arguments to update or create a Constructor.
     * @example
     * // Update or create a Constructor
     * const constructor = await prisma.constructor.upsert({
     *   create: {
     *     // ... data to create a Constructor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Constructor we want to update
     *   }
     * })
     */
    upsert<T extends ConstructorUpsertArgs>(args: SelectSubset<T, ConstructorUpsertArgs<ExtArgs>>): Prisma__ConstructorClient<$Result.GetResult<Prisma.$ConstructorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Constructors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstructorCountArgs} args - Arguments to filter Constructors to count.
     * @example
     * // Count the number of Constructors
     * const count = await prisma.constructor.count({
     *   where: {
     *     // ... the filter for the Constructors we want to count
     *   }
     * })
    **/
    count<T extends ConstructorCountArgs>(
      args?: Subset<T, ConstructorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConstructorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Constructor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstructorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConstructorAggregateArgs>(args: Subset<T, ConstructorAggregateArgs>): Prisma.PrismaPromise<GetConstructorAggregateType<T>>

    /**
     * Group by Constructor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConstructorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConstructorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConstructorGroupByArgs['orderBy'] }
        : { orderBy?: ConstructorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConstructorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConstructorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Constructor model
   */
  readonly fields: ConstructorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Constructor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConstructorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drivers<T extends Constructor$driversArgs<ExtArgs> = {}>(args?: Subset<T, Constructor$driversArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teams<T extends Constructor$teamsArgs<ExtArgs> = {}>(args?: Subset<T, Constructor$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Constructor model
   */
  interface ConstructorFieldRefs {
    readonly id: FieldRef<"Constructor", 'Int'>
    readonly name: FieldRef<"Constructor", 'String'>
    readonly active: FieldRef<"Constructor", 'Boolean'>
    readonly price: FieldRef<"Constructor", 'Float'>
    readonly points: FieldRef<"Constructor", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Constructor findUnique
   */
  export type ConstructorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constructor
     */
    select?: ConstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constructor
     */
    omit?: ConstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructorInclude<ExtArgs> | null
    /**
     * Filter, which Constructor to fetch.
     */
    where: ConstructorWhereUniqueInput
  }

  /**
   * Constructor findUniqueOrThrow
   */
  export type ConstructorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constructor
     */
    select?: ConstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constructor
     */
    omit?: ConstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructorInclude<ExtArgs> | null
    /**
     * Filter, which Constructor to fetch.
     */
    where: ConstructorWhereUniqueInput
  }

  /**
   * Constructor findFirst
   */
  export type ConstructorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constructor
     */
    select?: ConstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constructor
     */
    omit?: ConstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructorInclude<ExtArgs> | null
    /**
     * Filter, which Constructor to fetch.
     */
    where?: ConstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Constructors to fetch.
     */
    orderBy?: ConstructorOrderByWithRelationInput | ConstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Constructors.
     */
    cursor?: ConstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Constructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Constructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Constructors.
     */
    distinct?: ConstructorScalarFieldEnum | ConstructorScalarFieldEnum[]
  }

  /**
   * Constructor findFirstOrThrow
   */
  export type ConstructorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constructor
     */
    select?: ConstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constructor
     */
    omit?: ConstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructorInclude<ExtArgs> | null
    /**
     * Filter, which Constructor to fetch.
     */
    where?: ConstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Constructors to fetch.
     */
    orderBy?: ConstructorOrderByWithRelationInput | ConstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Constructors.
     */
    cursor?: ConstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Constructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Constructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Constructors.
     */
    distinct?: ConstructorScalarFieldEnum | ConstructorScalarFieldEnum[]
  }

  /**
   * Constructor findMany
   */
  export type ConstructorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constructor
     */
    select?: ConstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constructor
     */
    omit?: ConstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructorInclude<ExtArgs> | null
    /**
     * Filter, which Constructors to fetch.
     */
    where?: ConstructorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Constructors to fetch.
     */
    orderBy?: ConstructorOrderByWithRelationInput | ConstructorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Constructors.
     */
    cursor?: ConstructorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Constructors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Constructors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Constructors.
     */
    distinct?: ConstructorScalarFieldEnum | ConstructorScalarFieldEnum[]
  }

  /**
   * Constructor create
   */
  export type ConstructorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constructor
     */
    select?: ConstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constructor
     */
    omit?: ConstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructorInclude<ExtArgs> | null
    /**
     * The data needed to create a Constructor.
     */
    data: XOR<ConstructorCreateInput, ConstructorUncheckedCreateInput>
  }

  /**
   * Constructor createMany
   */
  export type ConstructorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Constructors.
     */
    data: ConstructorCreateManyInput | ConstructorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Constructor createManyAndReturn
   */
  export type ConstructorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constructor
     */
    select?: ConstructorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Constructor
     */
    omit?: ConstructorOmit<ExtArgs> | null
    /**
     * The data used to create many Constructors.
     */
    data: ConstructorCreateManyInput | ConstructorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Constructor update
   */
  export type ConstructorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constructor
     */
    select?: ConstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constructor
     */
    omit?: ConstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructorInclude<ExtArgs> | null
    /**
     * The data needed to update a Constructor.
     */
    data: XOR<ConstructorUpdateInput, ConstructorUncheckedUpdateInput>
    /**
     * Choose, which Constructor to update.
     */
    where: ConstructorWhereUniqueInput
  }

  /**
   * Constructor updateMany
   */
  export type ConstructorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Constructors.
     */
    data: XOR<ConstructorUpdateManyMutationInput, ConstructorUncheckedUpdateManyInput>
    /**
     * Filter which Constructors to update
     */
    where?: ConstructorWhereInput
    /**
     * Limit how many Constructors to update.
     */
    limit?: number
  }

  /**
   * Constructor updateManyAndReturn
   */
  export type ConstructorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constructor
     */
    select?: ConstructorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Constructor
     */
    omit?: ConstructorOmit<ExtArgs> | null
    /**
     * The data used to update Constructors.
     */
    data: XOR<ConstructorUpdateManyMutationInput, ConstructorUncheckedUpdateManyInput>
    /**
     * Filter which Constructors to update
     */
    where?: ConstructorWhereInput
    /**
     * Limit how many Constructors to update.
     */
    limit?: number
  }

  /**
   * Constructor upsert
   */
  export type ConstructorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constructor
     */
    select?: ConstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constructor
     */
    omit?: ConstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructorInclude<ExtArgs> | null
    /**
     * The filter to search for the Constructor to update in case it exists.
     */
    where: ConstructorWhereUniqueInput
    /**
     * In case the Constructor found by the `where` argument doesn't exist, create a new Constructor with this data.
     */
    create: XOR<ConstructorCreateInput, ConstructorUncheckedCreateInput>
    /**
     * In case the Constructor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConstructorUpdateInput, ConstructorUncheckedUpdateInput>
  }

  /**
   * Constructor delete
   */
  export type ConstructorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constructor
     */
    select?: ConstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constructor
     */
    omit?: ConstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructorInclude<ExtArgs> | null
    /**
     * Filter which Constructor to delete.
     */
    where: ConstructorWhereUniqueInput
  }

  /**
   * Constructor deleteMany
   */
  export type ConstructorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Constructors to delete
     */
    where?: ConstructorWhereInput
    /**
     * Limit how many Constructors to delete.
     */
    limit?: number
  }

  /**
   * Constructor.drivers
   */
  export type Constructor$driversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    where?: DriverWhereInput
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    cursor?: DriverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Constructor.teams
   */
  export type Constructor$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Constructor without action
   */
  export type ConstructorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constructor
     */
    select?: ConstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constructor
     */
    omit?: ConstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructorInclude<ExtArgs> | null
  }


  /**
   * Model Race
   */

  export type AggregateRace = {
    _count: RaceCountAggregateOutputType | null
    _avg: RaceAvgAggregateOutputType | null
    _sum: RaceSumAggregateOutputType | null
    _min: RaceMinAggregateOutputType | null
    _max: RaceMaxAggregateOutputType | null
  }

  export type RaceAvgAggregateOutputType = {
    id: number | null
    season: number | null
  }

  export type RaceSumAggregateOutputType = {
    id: number | null
    season: number | null
  }

  export type RaceMinAggregateOutputType = {
    id: number | null
    name: string | null
    circuit: string | null
    raceDate: Date | null
    season: number | null
    raceStart: Date | null
    raceEnd: Date | null
    status: $Enums.RaceStatus | null
  }

  export type RaceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    circuit: string | null
    raceDate: Date | null
    season: number | null
    raceStart: Date | null
    raceEnd: Date | null
    status: $Enums.RaceStatus | null
  }

  export type RaceCountAggregateOutputType = {
    id: number
    name: number
    circuit: number
    raceDate: number
    season: number
    raceStart: number
    raceEnd: number
    status: number
    _all: number
  }


  export type RaceAvgAggregateInputType = {
    id?: true
    season?: true
  }

  export type RaceSumAggregateInputType = {
    id?: true
    season?: true
  }

  export type RaceMinAggregateInputType = {
    id?: true
    name?: true
    circuit?: true
    raceDate?: true
    season?: true
    raceStart?: true
    raceEnd?: true
    status?: true
  }

  export type RaceMaxAggregateInputType = {
    id?: true
    name?: true
    circuit?: true
    raceDate?: true
    season?: true
    raceStart?: true
    raceEnd?: true
    status?: true
  }

  export type RaceCountAggregateInputType = {
    id?: true
    name?: true
    circuit?: true
    raceDate?: true
    season?: true
    raceStart?: true
    raceEnd?: true
    status?: true
    _all?: true
  }

  export type RaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Race to aggregate.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Races
    **/
    _count?: true | RaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaceMaxAggregateInputType
  }

  export type GetRaceAggregateType<T extends RaceAggregateArgs> = {
        [P in keyof T & keyof AggregateRace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRace[P]>
      : GetScalarType<T[P], AggregateRace[P]>
  }




  export type RaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceWhereInput
    orderBy?: RaceOrderByWithAggregationInput | RaceOrderByWithAggregationInput[]
    by: RaceScalarFieldEnum[] | RaceScalarFieldEnum
    having?: RaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaceCountAggregateInputType | true
    _avg?: RaceAvgAggregateInputType
    _sum?: RaceSumAggregateInputType
    _min?: RaceMinAggregateInputType
    _max?: RaceMaxAggregateInputType
  }

  export type RaceGroupByOutputType = {
    id: number
    name: string
    circuit: string | null
    raceDate: Date
    season: number
    raceStart: Date
    raceEnd: Date | null
    status: $Enums.RaceStatus
    _count: RaceCountAggregateOutputType | null
    _avg: RaceAvgAggregateOutputType | null
    _sum: RaceSumAggregateOutputType | null
    _min: RaceMinAggregateOutputType | null
    _max: RaceMaxAggregateOutputType | null
  }

  type GetRaceGroupByPayload<T extends RaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaceGroupByOutputType[P]>
            : GetScalarType<T[P], RaceGroupByOutputType[P]>
        }
      >
    >


  export type RaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    circuit?: boolean
    raceDate?: boolean
    season?: boolean
    raceStart?: boolean
    raceEnd?: boolean
    status?: boolean
    teams?: boolean | Race$teamsArgs<ExtArgs>
    raceResults?: boolean | Race$raceResultsArgs<ExtArgs>
    points?: boolean | Race$pointsArgs<ExtArgs>
    _count?: boolean | RaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["race"]>

  export type RaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    circuit?: boolean
    raceDate?: boolean
    season?: boolean
    raceStart?: boolean
    raceEnd?: boolean
    status?: boolean
  }, ExtArgs["result"]["race"]>

  export type RaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    circuit?: boolean
    raceDate?: boolean
    season?: boolean
    raceStart?: boolean
    raceEnd?: boolean
    status?: boolean
  }, ExtArgs["result"]["race"]>

  export type RaceSelectScalar = {
    id?: boolean
    name?: boolean
    circuit?: boolean
    raceDate?: boolean
    season?: boolean
    raceStart?: boolean
    raceEnd?: boolean
    status?: boolean
  }

  export type RaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "circuit" | "raceDate" | "season" | "raceStart" | "raceEnd" | "status", ExtArgs["result"]["race"]>
  export type RaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | Race$teamsArgs<ExtArgs>
    raceResults?: boolean | Race$raceResultsArgs<ExtArgs>
    points?: boolean | Race$pointsArgs<ExtArgs>
    _count?: boolean | RaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Race"
    objects: {
      teams: Prisma.$TeamPayload<ExtArgs>[]
      raceResults: Prisma.$RaceResultPayload<ExtArgs>[]
      points: Prisma.$PointsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      circuit: string | null
      raceDate: Date
      season: number
      raceStart: Date
      raceEnd: Date | null
      status: $Enums.RaceStatus
    }, ExtArgs["result"]["race"]>
    composites: {}
  }

  type RaceGetPayload<S extends boolean | null | undefined | RaceDefaultArgs> = $Result.GetResult<Prisma.$RacePayload, S>

  type RaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaceCountAggregateInputType | true
    }

  export interface RaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Race'], meta: { name: 'Race' } }
    /**
     * Find zero or one Race that matches the filter.
     * @param {RaceFindUniqueArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaceFindUniqueArgs>(args: SelectSubset<T, RaceFindUniqueArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Race that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaceFindUniqueOrThrowArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaceFindUniqueOrThrowArgs>(args: SelectSubset<T, RaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Race that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindFirstArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaceFindFirstArgs>(args?: SelectSubset<T, RaceFindFirstArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Race that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindFirstOrThrowArgs} args - Arguments to find a Race
     * @example
     * // Get one Race
     * const race = await prisma.race.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaceFindFirstOrThrowArgs>(args?: SelectSubset<T, RaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Races that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Races
     * const races = await prisma.race.findMany()
     * 
     * // Get first 10 Races
     * const races = await prisma.race.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raceWithIdOnly = await prisma.race.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaceFindManyArgs>(args?: SelectSubset<T, RaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Race.
     * @param {RaceCreateArgs} args - Arguments to create a Race.
     * @example
     * // Create one Race
     * const Race = await prisma.race.create({
     *   data: {
     *     // ... data to create a Race
     *   }
     * })
     * 
     */
    create<T extends RaceCreateArgs>(args: SelectSubset<T, RaceCreateArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Races.
     * @param {RaceCreateManyArgs} args - Arguments to create many Races.
     * @example
     * // Create many Races
     * const race = await prisma.race.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaceCreateManyArgs>(args?: SelectSubset<T, RaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Races and returns the data saved in the database.
     * @param {RaceCreateManyAndReturnArgs} args - Arguments to create many Races.
     * @example
     * // Create many Races
     * const race = await prisma.race.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Races and only return the `id`
     * const raceWithIdOnly = await prisma.race.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaceCreateManyAndReturnArgs>(args?: SelectSubset<T, RaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Race.
     * @param {RaceDeleteArgs} args - Arguments to delete one Race.
     * @example
     * // Delete one Race
     * const Race = await prisma.race.delete({
     *   where: {
     *     // ... filter to delete one Race
     *   }
     * })
     * 
     */
    delete<T extends RaceDeleteArgs>(args: SelectSubset<T, RaceDeleteArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Race.
     * @param {RaceUpdateArgs} args - Arguments to update one Race.
     * @example
     * // Update one Race
     * const race = await prisma.race.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaceUpdateArgs>(args: SelectSubset<T, RaceUpdateArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Races.
     * @param {RaceDeleteManyArgs} args - Arguments to filter Races to delete.
     * @example
     * // Delete a few Races
     * const { count } = await prisma.race.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaceDeleteManyArgs>(args?: SelectSubset<T, RaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Races.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Races
     * const race = await prisma.race.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaceUpdateManyArgs>(args: SelectSubset<T, RaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Races and returns the data updated in the database.
     * @param {RaceUpdateManyAndReturnArgs} args - Arguments to update many Races.
     * @example
     * // Update many Races
     * const race = await prisma.race.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Races and only return the `id`
     * const raceWithIdOnly = await prisma.race.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RaceUpdateManyAndReturnArgs>(args: SelectSubset<T, RaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Race.
     * @param {RaceUpsertArgs} args - Arguments to update or create a Race.
     * @example
     * // Update or create a Race
     * const race = await prisma.race.upsert({
     *   create: {
     *     // ... data to create a Race
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Race we want to update
     *   }
     * })
     */
    upsert<T extends RaceUpsertArgs>(args: SelectSubset<T, RaceUpsertArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Races.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceCountArgs} args - Arguments to filter Races to count.
     * @example
     * // Count the number of Races
     * const count = await prisma.race.count({
     *   where: {
     *     // ... the filter for the Races we want to count
     *   }
     * })
    **/
    count<T extends RaceCountArgs>(
      args?: Subset<T, RaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Race.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RaceAggregateArgs>(args: Subset<T, RaceAggregateArgs>): Prisma.PrismaPromise<GetRaceAggregateType<T>>

    /**
     * Group by Race.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaceGroupByArgs['orderBy'] }
        : { orderBy?: RaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Race model
   */
  readonly fields: RaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Race.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teams<T extends Race$teamsArgs<ExtArgs> = {}>(args?: Subset<T, Race$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    raceResults<T extends Race$raceResultsArgs<ExtArgs> = {}>(args?: Subset<T, Race$raceResultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    points<T extends Race$pointsArgs<ExtArgs> = {}>(args?: Subset<T, Race$pointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Race model
   */
  interface RaceFieldRefs {
    readonly id: FieldRef<"Race", 'Int'>
    readonly name: FieldRef<"Race", 'String'>
    readonly circuit: FieldRef<"Race", 'String'>
    readonly raceDate: FieldRef<"Race", 'DateTime'>
    readonly season: FieldRef<"Race", 'Int'>
    readonly raceStart: FieldRef<"Race", 'DateTime'>
    readonly raceEnd: FieldRef<"Race", 'DateTime'>
    readonly status: FieldRef<"Race", 'RaceStatus'>
  }
    

  // Custom InputTypes
  /**
   * Race findUnique
   */
  export type RaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race findUniqueOrThrow
   */
  export type RaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race findFirst
   */
  export type RaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Races.
     */
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race findFirstOrThrow
   */
  export type RaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Race to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Races.
     */
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race findMany
   */
  export type RaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter, which Races to fetch.
     */
    where?: RaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Races to fetch.
     */
    orderBy?: RaceOrderByWithRelationInput | RaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Races.
     */
    cursor?: RaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Races from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Races.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Races.
     */
    distinct?: RaceScalarFieldEnum | RaceScalarFieldEnum[]
  }

  /**
   * Race create
   */
  export type RaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Race.
     */
    data: XOR<RaceCreateInput, RaceUncheckedCreateInput>
  }

  /**
   * Race createMany
   */
  export type RaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Races.
     */
    data: RaceCreateManyInput | RaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Race createManyAndReturn
   */
  export type RaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * The data used to create many Races.
     */
    data: RaceCreateManyInput | RaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Race update
   */
  export type RaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Race.
     */
    data: XOR<RaceUpdateInput, RaceUncheckedUpdateInput>
    /**
     * Choose, which Race to update.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race updateMany
   */
  export type RaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Races.
     */
    data: XOR<RaceUpdateManyMutationInput, RaceUncheckedUpdateManyInput>
    /**
     * Filter which Races to update
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to update.
     */
    limit?: number
  }

  /**
   * Race updateManyAndReturn
   */
  export type RaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * The data used to update Races.
     */
    data: XOR<RaceUpdateManyMutationInput, RaceUncheckedUpdateManyInput>
    /**
     * Filter which Races to update
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to update.
     */
    limit?: number
  }

  /**
   * Race upsert
   */
  export type RaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Race to update in case it exists.
     */
    where: RaceWhereUniqueInput
    /**
     * In case the Race found by the `where` argument doesn't exist, create a new Race with this data.
     */
    create: XOR<RaceCreateInput, RaceUncheckedCreateInput>
    /**
     * In case the Race was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaceUpdateInput, RaceUncheckedUpdateInput>
  }

  /**
   * Race delete
   */
  export type RaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
    /**
     * Filter which Race to delete.
     */
    where: RaceWhereUniqueInput
  }

  /**
   * Race deleteMany
   */
  export type RaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Races to delete
     */
    where?: RaceWhereInput
    /**
     * Limit how many Races to delete.
     */
    limit?: number
  }

  /**
   * Race.teams
   */
  export type Race$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Race.raceResults
   */
  export type Race$raceResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultInclude<ExtArgs> | null
    where?: RaceResultWhereInput
    orderBy?: RaceResultOrderByWithRelationInput | RaceResultOrderByWithRelationInput[]
    cursor?: RaceResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RaceResultScalarFieldEnum | RaceResultScalarFieldEnum[]
  }

  /**
   * Race.points
   */
  export type Race$pointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    where?: PointsWhereInput
    orderBy?: PointsOrderByWithRelationInput | PointsOrderByWithRelationInput[]
    cursor?: PointsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointsScalarFieldEnum | PointsScalarFieldEnum[]
  }

  /**
   * Race without action
   */
  export type RaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Race
     */
    select?: RaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Race
     */
    omit?: RaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    raceId: number | null
    leagueId: number | null
    constructorId: number | null
  }

  export type TeamSumAggregateOutputType = {
    id: number | null
    userId: number | null
    raceId: number | null
    leagueId: number | null
    constructorId: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: number | null
    userId: number | null
    raceId: number | null
    leagueId: number | null
    locked: boolean | null
    constructorId: number | null
  }

  export type TeamMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    raceId: number | null
    leagueId: number | null
    locked: boolean | null
    constructorId: number | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    userId: number
    raceId: number
    leagueId: number
    locked: number
    constructorId: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    id?: true
    userId?: true
    raceId?: true
    leagueId?: true
    constructorId?: true
  }

  export type TeamSumAggregateInputType = {
    id?: true
    userId?: true
    raceId?: true
    leagueId?: true
    constructorId?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    userId?: true
    raceId?: true
    leagueId?: true
    locked?: true
    constructorId?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    userId?: true
    raceId?: true
    leagueId?: true
    locked?: true
    constructorId?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    userId?: true
    raceId?: true
    leagueId?: true
    locked?: true
    constructorId?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: number
    userId: number
    raceId: number
    leagueId: number
    locked: boolean
    constructorId: number | null
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    raceId?: boolean
    leagueId?: boolean
    locked?: boolean
    constructorId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    race?: boolean | RaceDefaultArgs<ExtArgs>
    league?: boolean | LeagueDefaultArgs<ExtArgs>
    constructor?: boolean | Team$constructorArgs<ExtArgs>
    predictions?: boolean | Team$predictionsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    raceId?: boolean
    leagueId?: boolean
    locked?: boolean
    constructorId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    race?: boolean | RaceDefaultArgs<ExtArgs>
    league?: boolean | LeagueDefaultArgs<ExtArgs>
    constructor?: boolean | Team$constructorArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    raceId?: boolean
    leagueId?: boolean
    locked?: boolean
    constructorId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    race?: boolean | RaceDefaultArgs<ExtArgs>
    league?: boolean | LeagueDefaultArgs<ExtArgs>
    constructor?: boolean | Team$constructorArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    userId?: boolean
    raceId?: boolean
    leagueId?: boolean
    locked?: boolean
    constructorId?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "raceId" | "leagueId" | "locked" | "constructorId", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    race?: boolean | RaceDefaultArgs<ExtArgs>
    league?: boolean | LeagueDefaultArgs<ExtArgs>
    constructor?: boolean | Team$constructorArgs<ExtArgs>
    predictions?: boolean | Team$predictionsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    race?: boolean | RaceDefaultArgs<ExtArgs>
    league?: boolean | LeagueDefaultArgs<ExtArgs>
    constructor?: boolean | Team$constructorArgs<ExtArgs>
  }
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    race?: boolean | RaceDefaultArgs<ExtArgs>
    league?: boolean | LeagueDefaultArgs<ExtArgs>
    constructor?: boolean | Team$constructorArgs<ExtArgs>
  }

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      race: Prisma.$RacePayload<ExtArgs>
      league: Prisma.$LeaguePayload<ExtArgs>
      constructor: Prisma.$ConstructorPayload<ExtArgs> | null
      predictions: Prisma.$PredictionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      raceId: number
      leagueId: number
      locked: boolean
      constructorId: number | null
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    race<T extends RaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RaceDefaultArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    league<T extends LeagueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeagueDefaultArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    constructor<T extends Team$constructorArgs<ExtArgs> = {}>(args?: Subset<T, Team$constructorArgs<ExtArgs>>)
    predictions<T extends Team$predictionsArgs<ExtArgs> = {}>(args?: Subset<T, Team$predictionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'Int'>
    readonly userId: FieldRef<"Team", 'Int'>
    readonly raceId: FieldRef<"Team", 'Int'>
    readonly leagueId: FieldRef<"Team", 'Int'>
    readonly locked: FieldRef<"Team", 'Boolean'>
    readonly constructorId: FieldRef<"Team", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.constructor
   */
  export type Team$constructorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Constructor
     */
    select?: ConstructorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Constructor
     */
    omit?: ConstructorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConstructorInclude<ExtArgs> | null
    where?: ConstructorWhereInput
  }

  /**
   * Team.predictions
   */
  export type Team$predictionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    where?: PredictionWhereInput
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    cursor?: PredictionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PredictionScalarFieldEnum | PredictionScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model Prediction
   */

  export type AggregatePrediction = {
    _count: PredictionCountAggregateOutputType | null
    _avg: PredictionAvgAggregateOutputType | null
    _sum: PredictionSumAggregateOutputType | null
    _min: PredictionMinAggregateOutputType | null
    _max: PredictionMaxAggregateOutputType | null
  }

  export type PredictionAvgAggregateOutputType = {
    id: number | null
    teamId: number | null
    driverId: number | null
    predictedPosition: number | null
  }

  export type PredictionSumAggregateOutputType = {
    id: number | null
    teamId: number | null
    driverId: number | null
    predictedPosition: number | null
  }

  export type PredictionMinAggregateOutputType = {
    id: number | null
    teamId: number | null
    driverId: number | null
    predictedPosition: number | null
    predictedDNF: boolean | null
  }

  export type PredictionMaxAggregateOutputType = {
    id: number | null
    teamId: number | null
    driverId: number | null
    predictedPosition: number | null
    predictedDNF: boolean | null
  }

  export type PredictionCountAggregateOutputType = {
    id: number
    teamId: number
    driverId: number
    predictedPosition: number
    predictedDNF: number
    _all: number
  }


  export type PredictionAvgAggregateInputType = {
    id?: true
    teamId?: true
    driverId?: true
    predictedPosition?: true
  }

  export type PredictionSumAggregateInputType = {
    id?: true
    teamId?: true
    driverId?: true
    predictedPosition?: true
  }

  export type PredictionMinAggregateInputType = {
    id?: true
    teamId?: true
    driverId?: true
    predictedPosition?: true
    predictedDNF?: true
  }

  export type PredictionMaxAggregateInputType = {
    id?: true
    teamId?: true
    driverId?: true
    predictedPosition?: true
    predictedDNF?: true
  }

  export type PredictionCountAggregateInputType = {
    id?: true
    teamId?: true
    driverId?: true
    predictedPosition?: true
    predictedDNF?: true
    _all?: true
  }

  export type PredictionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prediction to aggregate.
     */
    where?: PredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Predictions
    **/
    _count?: true | PredictionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PredictionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PredictionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PredictionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PredictionMaxAggregateInputType
  }

  export type GetPredictionAggregateType<T extends PredictionAggregateArgs> = {
        [P in keyof T & keyof AggregatePrediction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrediction[P]>
      : GetScalarType<T[P], AggregatePrediction[P]>
  }




  export type PredictionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredictionWhereInput
    orderBy?: PredictionOrderByWithAggregationInput | PredictionOrderByWithAggregationInput[]
    by: PredictionScalarFieldEnum[] | PredictionScalarFieldEnum
    having?: PredictionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PredictionCountAggregateInputType | true
    _avg?: PredictionAvgAggregateInputType
    _sum?: PredictionSumAggregateInputType
    _min?: PredictionMinAggregateInputType
    _max?: PredictionMaxAggregateInputType
  }

  export type PredictionGroupByOutputType = {
    id: number
    teamId: number
    driverId: number
    predictedPosition: number | null
    predictedDNF: boolean
    _count: PredictionCountAggregateOutputType | null
    _avg: PredictionAvgAggregateOutputType | null
    _sum: PredictionSumAggregateOutputType | null
    _min: PredictionMinAggregateOutputType | null
    _max: PredictionMaxAggregateOutputType | null
  }

  type GetPredictionGroupByPayload<T extends PredictionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PredictionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PredictionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PredictionGroupByOutputType[P]>
            : GetScalarType<T[P], PredictionGroupByOutputType[P]>
        }
      >
    >


  export type PredictionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    driverId?: boolean
    predictedPosition?: boolean
    predictedDNF?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prediction"]>

  export type PredictionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    driverId?: boolean
    predictedPosition?: boolean
    predictedDNF?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prediction"]>

  export type PredictionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    driverId?: boolean
    predictedPosition?: boolean
    predictedDNF?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prediction"]>

  export type PredictionSelectScalar = {
    id?: boolean
    teamId?: boolean
    driverId?: boolean
    predictedPosition?: boolean
    predictedDNF?: boolean
  }

  export type PredictionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamId" | "driverId" | "predictedPosition" | "predictedDNF", ExtArgs["result"]["prediction"]>
  export type PredictionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type PredictionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type PredictionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }

  export type $PredictionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prediction"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      driver: Prisma.$DriverPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teamId: number
      driverId: number
      predictedPosition: number | null
      predictedDNF: boolean
    }, ExtArgs["result"]["prediction"]>
    composites: {}
  }

  type PredictionGetPayload<S extends boolean | null | undefined | PredictionDefaultArgs> = $Result.GetResult<Prisma.$PredictionPayload, S>

  type PredictionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PredictionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PredictionCountAggregateInputType | true
    }

  export interface PredictionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prediction'], meta: { name: 'Prediction' } }
    /**
     * Find zero or one Prediction that matches the filter.
     * @param {PredictionFindUniqueArgs} args - Arguments to find a Prediction
     * @example
     * // Get one Prediction
     * const prediction = await prisma.prediction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PredictionFindUniqueArgs>(args: SelectSubset<T, PredictionFindUniqueArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prediction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PredictionFindUniqueOrThrowArgs} args - Arguments to find a Prediction
     * @example
     * // Get one Prediction
     * const prediction = await prisma.prediction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PredictionFindUniqueOrThrowArgs>(args: SelectSubset<T, PredictionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prediction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionFindFirstArgs} args - Arguments to find a Prediction
     * @example
     * // Get one Prediction
     * const prediction = await prisma.prediction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PredictionFindFirstArgs>(args?: SelectSubset<T, PredictionFindFirstArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prediction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionFindFirstOrThrowArgs} args - Arguments to find a Prediction
     * @example
     * // Get one Prediction
     * const prediction = await prisma.prediction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PredictionFindFirstOrThrowArgs>(args?: SelectSubset<T, PredictionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Predictions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Predictions
     * const predictions = await prisma.prediction.findMany()
     * 
     * // Get first 10 Predictions
     * const predictions = await prisma.prediction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const predictionWithIdOnly = await prisma.prediction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PredictionFindManyArgs>(args?: SelectSubset<T, PredictionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prediction.
     * @param {PredictionCreateArgs} args - Arguments to create a Prediction.
     * @example
     * // Create one Prediction
     * const Prediction = await prisma.prediction.create({
     *   data: {
     *     // ... data to create a Prediction
     *   }
     * })
     * 
     */
    create<T extends PredictionCreateArgs>(args: SelectSubset<T, PredictionCreateArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Predictions.
     * @param {PredictionCreateManyArgs} args - Arguments to create many Predictions.
     * @example
     * // Create many Predictions
     * const prediction = await prisma.prediction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PredictionCreateManyArgs>(args?: SelectSubset<T, PredictionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Predictions and returns the data saved in the database.
     * @param {PredictionCreateManyAndReturnArgs} args - Arguments to create many Predictions.
     * @example
     * // Create many Predictions
     * const prediction = await prisma.prediction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Predictions and only return the `id`
     * const predictionWithIdOnly = await prisma.prediction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PredictionCreateManyAndReturnArgs>(args?: SelectSubset<T, PredictionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prediction.
     * @param {PredictionDeleteArgs} args - Arguments to delete one Prediction.
     * @example
     * // Delete one Prediction
     * const Prediction = await prisma.prediction.delete({
     *   where: {
     *     // ... filter to delete one Prediction
     *   }
     * })
     * 
     */
    delete<T extends PredictionDeleteArgs>(args: SelectSubset<T, PredictionDeleteArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prediction.
     * @param {PredictionUpdateArgs} args - Arguments to update one Prediction.
     * @example
     * // Update one Prediction
     * const prediction = await prisma.prediction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PredictionUpdateArgs>(args: SelectSubset<T, PredictionUpdateArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Predictions.
     * @param {PredictionDeleteManyArgs} args - Arguments to filter Predictions to delete.
     * @example
     * // Delete a few Predictions
     * const { count } = await prisma.prediction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PredictionDeleteManyArgs>(args?: SelectSubset<T, PredictionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Predictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Predictions
     * const prediction = await prisma.prediction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PredictionUpdateManyArgs>(args: SelectSubset<T, PredictionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Predictions and returns the data updated in the database.
     * @param {PredictionUpdateManyAndReturnArgs} args - Arguments to update many Predictions.
     * @example
     * // Update many Predictions
     * const prediction = await prisma.prediction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Predictions and only return the `id`
     * const predictionWithIdOnly = await prisma.prediction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PredictionUpdateManyAndReturnArgs>(args: SelectSubset<T, PredictionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prediction.
     * @param {PredictionUpsertArgs} args - Arguments to update or create a Prediction.
     * @example
     * // Update or create a Prediction
     * const prediction = await prisma.prediction.upsert({
     *   create: {
     *     // ... data to create a Prediction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prediction we want to update
     *   }
     * })
     */
    upsert<T extends PredictionUpsertArgs>(args: SelectSubset<T, PredictionUpsertArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Predictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionCountArgs} args - Arguments to filter Predictions to count.
     * @example
     * // Count the number of Predictions
     * const count = await prisma.prediction.count({
     *   where: {
     *     // ... the filter for the Predictions we want to count
     *   }
     * })
    **/
    count<T extends PredictionCountArgs>(
      args?: Subset<T, PredictionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PredictionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PredictionAggregateArgs>(args: Subset<T, PredictionAggregateArgs>): Prisma.PrismaPromise<GetPredictionAggregateType<T>>

    /**
     * Group by Prediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PredictionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PredictionGroupByArgs['orderBy'] }
        : { orderBy?: PredictionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PredictionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPredictionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prediction model
   */
  readonly fields: PredictionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prediction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PredictionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    driver<T extends DriverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverDefaultArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prediction model
   */
  interface PredictionFieldRefs {
    readonly id: FieldRef<"Prediction", 'Int'>
    readonly teamId: FieldRef<"Prediction", 'Int'>
    readonly driverId: FieldRef<"Prediction", 'Int'>
    readonly predictedPosition: FieldRef<"Prediction", 'Int'>
    readonly predictedDNF: FieldRef<"Prediction", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Prediction findUnique
   */
  export type PredictionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter, which Prediction to fetch.
     */
    where: PredictionWhereUniqueInput
  }

  /**
   * Prediction findUniqueOrThrow
   */
  export type PredictionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter, which Prediction to fetch.
     */
    where: PredictionWhereUniqueInput
  }

  /**
   * Prediction findFirst
   */
  export type PredictionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter, which Prediction to fetch.
     */
    where?: PredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Predictions.
     */
    cursor?: PredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Predictions.
     */
    distinct?: PredictionScalarFieldEnum | PredictionScalarFieldEnum[]
  }

  /**
   * Prediction findFirstOrThrow
   */
  export type PredictionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter, which Prediction to fetch.
     */
    where?: PredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Predictions.
     */
    cursor?: PredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Predictions.
     */
    distinct?: PredictionScalarFieldEnum | PredictionScalarFieldEnum[]
  }

  /**
   * Prediction findMany
   */
  export type PredictionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter, which Predictions to fetch.
     */
    where?: PredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Predictions.
     */
    cursor?: PredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Predictions.
     */
    distinct?: PredictionScalarFieldEnum | PredictionScalarFieldEnum[]
  }

  /**
   * Prediction create
   */
  export type PredictionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * The data needed to create a Prediction.
     */
    data: XOR<PredictionCreateInput, PredictionUncheckedCreateInput>
  }

  /**
   * Prediction createMany
   */
  export type PredictionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Predictions.
     */
    data: PredictionCreateManyInput | PredictionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prediction createManyAndReturn
   */
  export type PredictionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * The data used to create many Predictions.
     */
    data: PredictionCreateManyInput | PredictionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prediction update
   */
  export type PredictionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * The data needed to update a Prediction.
     */
    data: XOR<PredictionUpdateInput, PredictionUncheckedUpdateInput>
    /**
     * Choose, which Prediction to update.
     */
    where: PredictionWhereUniqueInput
  }

  /**
   * Prediction updateMany
   */
  export type PredictionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Predictions.
     */
    data: XOR<PredictionUpdateManyMutationInput, PredictionUncheckedUpdateManyInput>
    /**
     * Filter which Predictions to update
     */
    where?: PredictionWhereInput
    /**
     * Limit how many Predictions to update.
     */
    limit?: number
  }

  /**
   * Prediction updateManyAndReturn
   */
  export type PredictionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * The data used to update Predictions.
     */
    data: XOR<PredictionUpdateManyMutationInput, PredictionUncheckedUpdateManyInput>
    /**
     * Filter which Predictions to update
     */
    where?: PredictionWhereInput
    /**
     * Limit how many Predictions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prediction upsert
   */
  export type PredictionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * The filter to search for the Prediction to update in case it exists.
     */
    where: PredictionWhereUniqueInput
    /**
     * In case the Prediction found by the `where` argument doesn't exist, create a new Prediction with this data.
     */
    create: XOR<PredictionCreateInput, PredictionUncheckedCreateInput>
    /**
     * In case the Prediction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PredictionUpdateInput, PredictionUncheckedUpdateInput>
  }

  /**
   * Prediction delete
   */
  export type PredictionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
    /**
     * Filter which Prediction to delete.
     */
    where: PredictionWhereUniqueInput
  }

  /**
   * Prediction deleteMany
   */
  export type PredictionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Predictions to delete
     */
    where?: PredictionWhereInput
    /**
     * Limit how many Predictions to delete.
     */
    limit?: number
  }

  /**
   * Prediction without action
   */
  export type PredictionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PredictionInclude<ExtArgs> | null
  }


  /**
   * Model RaceResult
   */

  export type AggregateRaceResult = {
    _count: RaceResultCountAggregateOutputType | null
    _avg: RaceResultAvgAggregateOutputType | null
    _sum: RaceResultSumAggregateOutputType | null
    _min: RaceResultMinAggregateOutputType | null
    _max: RaceResultMaxAggregateOutputType | null
  }

  export type RaceResultAvgAggregateOutputType = {
    id: number | null
    raceId: number | null
    driverId: number | null
    finishPosition: number | null
  }

  export type RaceResultSumAggregateOutputType = {
    id: number | null
    raceId: number | null
    driverId: number | null
    finishPosition: number | null
  }

  export type RaceResultMinAggregateOutputType = {
    id: number | null
    raceId: number | null
    driverId: number | null
    finishPosition: number | null
    dnf: boolean | null
    fastestLap: boolean | null
  }

  export type RaceResultMaxAggregateOutputType = {
    id: number | null
    raceId: number | null
    driverId: number | null
    finishPosition: number | null
    dnf: boolean | null
    fastestLap: boolean | null
  }

  export type RaceResultCountAggregateOutputType = {
    id: number
    raceId: number
    driverId: number
    finishPosition: number
    dnf: number
    fastestLap: number
    _all: number
  }


  export type RaceResultAvgAggregateInputType = {
    id?: true
    raceId?: true
    driverId?: true
    finishPosition?: true
  }

  export type RaceResultSumAggregateInputType = {
    id?: true
    raceId?: true
    driverId?: true
    finishPosition?: true
  }

  export type RaceResultMinAggregateInputType = {
    id?: true
    raceId?: true
    driverId?: true
    finishPosition?: true
    dnf?: true
    fastestLap?: true
  }

  export type RaceResultMaxAggregateInputType = {
    id?: true
    raceId?: true
    driverId?: true
    finishPosition?: true
    dnf?: true
    fastestLap?: true
  }

  export type RaceResultCountAggregateInputType = {
    id?: true
    raceId?: true
    driverId?: true
    finishPosition?: true
    dnf?: true
    fastestLap?: true
    _all?: true
  }

  export type RaceResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaceResult to aggregate.
     */
    where?: RaceResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceResults to fetch.
     */
    orderBy?: RaceResultOrderByWithRelationInput | RaceResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RaceResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RaceResults
    **/
    _count?: true | RaceResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RaceResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RaceResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RaceResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RaceResultMaxAggregateInputType
  }

  export type GetRaceResultAggregateType<T extends RaceResultAggregateArgs> = {
        [P in keyof T & keyof AggregateRaceResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRaceResult[P]>
      : GetScalarType<T[P], AggregateRaceResult[P]>
  }




  export type RaceResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RaceResultWhereInput
    orderBy?: RaceResultOrderByWithAggregationInput | RaceResultOrderByWithAggregationInput[]
    by: RaceResultScalarFieldEnum[] | RaceResultScalarFieldEnum
    having?: RaceResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RaceResultCountAggregateInputType | true
    _avg?: RaceResultAvgAggregateInputType
    _sum?: RaceResultSumAggregateInputType
    _min?: RaceResultMinAggregateInputType
    _max?: RaceResultMaxAggregateInputType
  }

  export type RaceResultGroupByOutputType = {
    id: number
    raceId: number
    driverId: number
    finishPosition: number | null
    dnf: boolean
    fastestLap: boolean
    _count: RaceResultCountAggregateOutputType | null
    _avg: RaceResultAvgAggregateOutputType | null
    _sum: RaceResultSumAggregateOutputType | null
    _min: RaceResultMinAggregateOutputType | null
    _max: RaceResultMaxAggregateOutputType | null
  }

  type GetRaceResultGroupByPayload<T extends RaceResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RaceResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RaceResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RaceResultGroupByOutputType[P]>
            : GetScalarType<T[P], RaceResultGroupByOutputType[P]>
        }
      >
    >


  export type RaceResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raceId?: boolean
    driverId?: boolean
    finishPosition?: boolean
    dnf?: boolean
    fastestLap?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceResult"]>

  export type RaceResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raceId?: boolean
    driverId?: boolean
    finishPosition?: boolean
    dnf?: boolean
    fastestLap?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceResult"]>

  export type RaceResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    raceId?: boolean
    driverId?: boolean
    finishPosition?: boolean
    dnf?: boolean
    fastestLap?: boolean
    race?: boolean | RaceDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["raceResult"]>

  export type RaceResultSelectScalar = {
    id?: boolean
    raceId?: boolean
    driverId?: boolean
    finishPosition?: boolean
    dnf?: boolean
    fastestLap?: boolean
  }

  export type RaceResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "raceId" | "driverId" | "finishPosition" | "dnf" | "fastestLap", ExtArgs["result"]["raceResult"]>
  export type RaceResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type RaceResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type RaceResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    race?: boolean | RaceDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }

  export type $RaceResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RaceResult"
    objects: {
      race: Prisma.$RacePayload<ExtArgs>
      driver: Prisma.$DriverPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      raceId: number
      driverId: number
      finishPosition: number | null
      dnf: boolean
      fastestLap: boolean
    }, ExtArgs["result"]["raceResult"]>
    composites: {}
  }

  type RaceResultGetPayload<S extends boolean | null | undefined | RaceResultDefaultArgs> = $Result.GetResult<Prisma.$RaceResultPayload, S>

  type RaceResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RaceResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RaceResultCountAggregateInputType | true
    }

  export interface RaceResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RaceResult'], meta: { name: 'RaceResult' } }
    /**
     * Find zero or one RaceResult that matches the filter.
     * @param {RaceResultFindUniqueArgs} args - Arguments to find a RaceResult
     * @example
     * // Get one RaceResult
     * const raceResult = await prisma.raceResult.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RaceResultFindUniqueArgs>(args: SelectSubset<T, RaceResultFindUniqueArgs<ExtArgs>>): Prisma__RaceResultClient<$Result.GetResult<Prisma.$RaceResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RaceResult that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RaceResultFindUniqueOrThrowArgs} args - Arguments to find a RaceResult
     * @example
     * // Get one RaceResult
     * const raceResult = await prisma.raceResult.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RaceResultFindUniqueOrThrowArgs>(args: SelectSubset<T, RaceResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RaceResultClient<$Result.GetResult<Prisma.$RaceResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaceResult that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceResultFindFirstArgs} args - Arguments to find a RaceResult
     * @example
     * // Get one RaceResult
     * const raceResult = await prisma.raceResult.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RaceResultFindFirstArgs>(args?: SelectSubset<T, RaceResultFindFirstArgs<ExtArgs>>): Prisma__RaceResultClient<$Result.GetResult<Prisma.$RaceResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RaceResult that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceResultFindFirstOrThrowArgs} args - Arguments to find a RaceResult
     * @example
     * // Get one RaceResult
     * const raceResult = await prisma.raceResult.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RaceResultFindFirstOrThrowArgs>(args?: SelectSubset<T, RaceResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__RaceResultClient<$Result.GetResult<Prisma.$RaceResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RaceResults that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RaceResults
     * const raceResults = await prisma.raceResult.findMany()
     * 
     * // Get first 10 RaceResults
     * const raceResults = await prisma.raceResult.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const raceResultWithIdOnly = await prisma.raceResult.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RaceResultFindManyArgs>(args?: SelectSubset<T, RaceResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RaceResult.
     * @param {RaceResultCreateArgs} args - Arguments to create a RaceResult.
     * @example
     * // Create one RaceResult
     * const RaceResult = await prisma.raceResult.create({
     *   data: {
     *     // ... data to create a RaceResult
     *   }
     * })
     * 
     */
    create<T extends RaceResultCreateArgs>(args: SelectSubset<T, RaceResultCreateArgs<ExtArgs>>): Prisma__RaceResultClient<$Result.GetResult<Prisma.$RaceResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RaceResults.
     * @param {RaceResultCreateManyArgs} args - Arguments to create many RaceResults.
     * @example
     * // Create many RaceResults
     * const raceResult = await prisma.raceResult.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RaceResultCreateManyArgs>(args?: SelectSubset<T, RaceResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RaceResults and returns the data saved in the database.
     * @param {RaceResultCreateManyAndReturnArgs} args - Arguments to create many RaceResults.
     * @example
     * // Create many RaceResults
     * const raceResult = await prisma.raceResult.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RaceResults and only return the `id`
     * const raceResultWithIdOnly = await prisma.raceResult.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RaceResultCreateManyAndReturnArgs>(args?: SelectSubset<T, RaceResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RaceResult.
     * @param {RaceResultDeleteArgs} args - Arguments to delete one RaceResult.
     * @example
     * // Delete one RaceResult
     * const RaceResult = await prisma.raceResult.delete({
     *   where: {
     *     // ... filter to delete one RaceResult
     *   }
     * })
     * 
     */
    delete<T extends RaceResultDeleteArgs>(args: SelectSubset<T, RaceResultDeleteArgs<ExtArgs>>): Prisma__RaceResultClient<$Result.GetResult<Prisma.$RaceResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RaceResult.
     * @param {RaceResultUpdateArgs} args - Arguments to update one RaceResult.
     * @example
     * // Update one RaceResult
     * const raceResult = await prisma.raceResult.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RaceResultUpdateArgs>(args: SelectSubset<T, RaceResultUpdateArgs<ExtArgs>>): Prisma__RaceResultClient<$Result.GetResult<Prisma.$RaceResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RaceResults.
     * @param {RaceResultDeleteManyArgs} args - Arguments to filter RaceResults to delete.
     * @example
     * // Delete a few RaceResults
     * const { count } = await prisma.raceResult.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RaceResultDeleteManyArgs>(args?: SelectSubset<T, RaceResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaceResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RaceResults
     * const raceResult = await prisma.raceResult.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RaceResultUpdateManyArgs>(args: SelectSubset<T, RaceResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RaceResults and returns the data updated in the database.
     * @param {RaceResultUpdateManyAndReturnArgs} args - Arguments to update many RaceResults.
     * @example
     * // Update many RaceResults
     * const raceResult = await prisma.raceResult.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RaceResults and only return the `id`
     * const raceResultWithIdOnly = await prisma.raceResult.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RaceResultUpdateManyAndReturnArgs>(args: SelectSubset<T, RaceResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RaceResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RaceResult.
     * @param {RaceResultUpsertArgs} args - Arguments to update or create a RaceResult.
     * @example
     * // Update or create a RaceResult
     * const raceResult = await prisma.raceResult.upsert({
     *   create: {
     *     // ... data to create a RaceResult
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RaceResult we want to update
     *   }
     * })
     */
    upsert<T extends RaceResultUpsertArgs>(args: SelectSubset<T, RaceResultUpsertArgs<ExtArgs>>): Prisma__RaceResultClient<$Result.GetResult<Prisma.$RaceResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RaceResults.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceResultCountArgs} args - Arguments to filter RaceResults to count.
     * @example
     * // Count the number of RaceResults
     * const count = await prisma.raceResult.count({
     *   where: {
     *     // ... the filter for the RaceResults we want to count
     *   }
     * })
    **/
    count<T extends RaceResultCountArgs>(
      args?: Subset<T, RaceResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RaceResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RaceResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RaceResultAggregateArgs>(args: Subset<T, RaceResultAggregateArgs>): Prisma.PrismaPromise<GetRaceResultAggregateType<T>>

    /**
     * Group by RaceResult.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RaceResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RaceResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RaceResultGroupByArgs['orderBy'] }
        : { orderBy?: RaceResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RaceResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRaceResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RaceResult model
   */
  readonly fields: RaceResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RaceResult.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RaceResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    race<T extends RaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RaceDefaultArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    driver<T extends DriverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverDefaultArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RaceResult model
   */
  interface RaceResultFieldRefs {
    readonly id: FieldRef<"RaceResult", 'Int'>
    readonly raceId: FieldRef<"RaceResult", 'Int'>
    readonly driverId: FieldRef<"RaceResult", 'Int'>
    readonly finishPosition: FieldRef<"RaceResult", 'Int'>
    readonly dnf: FieldRef<"RaceResult", 'Boolean'>
    readonly fastestLap: FieldRef<"RaceResult", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * RaceResult findUnique
   */
  export type RaceResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultInclude<ExtArgs> | null
    /**
     * Filter, which RaceResult to fetch.
     */
    where: RaceResultWhereUniqueInput
  }

  /**
   * RaceResult findUniqueOrThrow
   */
  export type RaceResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultInclude<ExtArgs> | null
    /**
     * Filter, which RaceResult to fetch.
     */
    where: RaceResultWhereUniqueInput
  }

  /**
   * RaceResult findFirst
   */
  export type RaceResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultInclude<ExtArgs> | null
    /**
     * Filter, which RaceResult to fetch.
     */
    where?: RaceResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceResults to fetch.
     */
    orderBy?: RaceResultOrderByWithRelationInput | RaceResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaceResults.
     */
    cursor?: RaceResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaceResults.
     */
    distinct?: RaceResultScalarFieldEnum | RaceResultScalarFieldEnum[]
  }

  /**
   * RaceResult findFirstOrThrow
   */
  export type RaceResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultInclude<ExtArgs> | null
    /**
     * Filter, which RaceResult to fetch.
     */
    where?: RaceResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceResults to fetch.
     */
    orderBy?: RaceResultOrderByWithRelationInput | RaceResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RaceResults.
     */
    cursor?: RaceResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaceResults.
     */
    distinct?: RaceResultScalarFieldEnum | RaceResultScalarFieldEnum[]
  }

  /**
   * RaceResult findMany
   */
  export type RaceResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultInclude<ExtArgs> | null
    /**
     * Filter, which RaceResults to fetch.
     */
    where?: RaceResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RaceResults to fetch.
     */
    orderBy?: RaceResultOrderByWithRelationInput | RaceResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RaceResults.
     */
    cursor?: RaceResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RaceResults from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RaceResults.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RaceResults.
     */
    distinct?: RaceResultScalarFieldEnum | RaceResultScalarFieldEnum[]
  }

  /**
   * RaceResult create
   */
  export type RaceResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultInclude<ExtArgs> | null
    /**
     * The data needed to create a RaceResult.
     */
    data: XOR<RaceResultCreateInput, RaceResultUncheckedCreateInput>
  }

  /**
   * RaceResult createMany
   */
  export type RaceResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RaceResults.
     */
    data: RaceResultCreateManyInput | RaceResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RaceResult createManyAndReturn
   */
  export type RaceResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * The data used to create many RaceResults.
     */
    data: RaceResultCreateManyInput | RaceResultCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaceResult update
   */
  export type RaceResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultInclude<ExtArgs> | null
    /**
     * The data needed to update a RaceResult.
     */
    data: XOR<RaceResultUpdateInput, RaceResultUncheckedUpdateInput>
    /**
     * Choose, which RaceResult to update.
     */
    where: RaceResultWhereUniqueInput
  }

  /**
   * RaceResult updateMany
   */
  export type RaceResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RaceResults.
     */
    data: XOR<RaceResultUpdateManyMutationInput, RaceResultUncheckedUpdateManyInput>
    /**
     * Filter which RaceResults to update
     */
    where?: RaceResultWhereInput
    /**
     * Limit how many RaceResults to update.
     */
    limit?: number
  }

  /**
   * RaceResult updateManyAndReturn
   */
  export type RaceResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * The data used to update RaceResults.
     */
    data: XOR<RaceResultUpdateManyMutationInput, RaceResultUncheckedUpdateManyInput>
    /**
     * Filter which RaceResults to update
     */
    where?: RaceResultWhereInput
    /**
     * Limit how many RaceResults to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RaceResult upsert
   */
  export type RaceResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultInclude<ExtArgs> | null
    /**
     * The filter to search for the RaceResult to update in case it exists.
     */
    where: RaceResultWhereUniqueInput
    /**
     * In case the RaceResult found by the `where` argument doesn't exist, create a new RaceResult with this data.
     */
    create: XOR<RaceResultCreateInput, RaceResultUncheckedCreateInput>
    /**
     * In case the RaceResult was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RaceResultUpdateInput, RaceResultUncheckedUpdateInput>
  }

  /**
   * RaceResult delete
   */
  export type RaceResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultInclude<ExtArgs> | null
    /**
     * Filter which RaceResult to delete.
     */
    where: RaceResultWhereUniqueInput
  }

  /**
   * RaceResult deleteMany
   */
  export type RaceResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RaceResults to delete
     */
    where?: RaceResultWhereInput
    /**
     * Limit how many RaceResults to delete.
     */
    limit?: number
  }

  /**
   * RaceResult without action
   */
  export type RaceResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RaceResult
     */
    select?: RaceResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RaceResult
     */
    omit?: RaceResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RaceResultInclude<ExtArgs> | null
  }


  /**
   * Model Points
   */

  export type AggregatePoints = {
    _count: PointsCountAggregateOutputType | null
    _avg: PointsAvgAggregateOutputType | null
    _sum: PointsSumAggregateOutputType | null
    _min: PointsMinAggregateOutputType | null
    _max: PointsMaxAggregateOutputType | null
  }

  export type PointsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    raceId: number | null
    leagueId: number | null
    totalPts: number | null
  }

  export type PointsSumAggregateOutputType = {
    id: number | null
    userId: number | null
    raceId: number | null
    leagueId: number | null
    totalPts: number | null
  }

  export type PointsMinAggregateOutputType = {
    id: number | null
    userId: number | null
    raceId: number | null
    leagueId: number | null
    totalPts: number | null
  }

  export type PointsMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    raceId: number | null
    leagueId: number | null
    totalPts: number | null
  }

  export type PointsCountAggregateOutputType = {
    id: number
    userId: number
    raceId: number
    leagueId: number
    totalPts: number
    breakdown: number
    _all: number
  }


  export type PointsAvgAggregateInputType = {
    id?: true
    userId?: true
    raceId?: true
    leagueId?: true
    totalPts?: true
  }

  export type PointsSumAggregateInputType = {
    id?: true
    userId?: true
    raceId?: true
    leagueId?: true
    totalPts?: true
  }

  export type PointsMinAggregateInputType = {
    id?: true
    userId?: true
    raceId?: true
    leagueId?: true
    totalPts?: true
  }

  export type PointsMaxAggregateInputType = {
    id?: true
    userId?: true
    raceId?: true
    leagueId?: true
    totalPts?: true
  }

  export type PointsCountAggregateInputType = {
    id?: true
    userId?: true
    raceId?: true
    leagueId?: true
    totalPts?: true
    breakdown?: true
    _all?: true
  }

  export type PointsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Points to aggregate.
     */
    where?: PointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointsOrderByWithRelationInput | PointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Points
    **/
    _count?: true | PointsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PointsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PointsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointsMaxAggregateInputType
  }

  export type GetPointsAggregateType<T extends PointsAggregateArgs> = {
        [P in keyof T & keyof AggregatePoints]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoints[P]>
      : GetScalarType<T[P], AggregatePoints[P]>
  }




  export type PointsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointsWhereInput
    orderBy?: PointsOrderByWithAggregationInput | PointsOrderByWithAggregationInput[]
    by: PointsScalarFieldEnum[] | PointsScalarFieldEnum
    having?: PointsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointsCountAggregateInputType | true
    _avg?: PointsAvgAggregateInputType
    _sum?: PointsSumAggregateInputType
    _min?: PointsMinAggregateInputType
    _max?: PointsMaxAggregateInputType
  }

  export type PointsGroupByOutputType = {
    id: number
    userId: number
    raceId: number
    leagueId: number
    totalPts: number
    breakdown: JsonValue | null
    _count: PointsCountAggregateOutputType | null
    _avg: PointsAvgAggregateOutputType | null
    _sum: PointsSumAggregateOutputType | null
    _min: PointsMinAggregateOutputType | null
    _max: PointsMaxAggregateOutputType | null
  }

  type GetPointsGroupByPayload<T extends PointsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointsGroupByOutputType[P]>
            : GetScalarType<T[P], PointsGroupByOutputType[P]>
        }
      >
    >


  export type PointsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    raceId?: boolean
    leagueId?: boolean
    totalPts?: boolean
    breakdown?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    race?: boolean | RaceDefaultArgs<ExtArgs>
    league?: boolean | LeagueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["points"]>

  export type PointsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    raceId?: boolean
    leagueId?: boolean
    totalPts?: boolean
    breakdown?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    race?: boolean | RaceDefaultArgs<ExtArgs>
    league?: boolean | LeagueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["points"]>

  export type PointsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    raceId?: boolean
    leagueId?: boolean
    totalPts?: boolean
    breakdown?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    race?: boolean | RaceDefaultArgs<ExtArgs>
    league?: boolean | LeagueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["points"]>

  export type PointsSelectScalar = {
    id?: boolean
    userId?: boolean
    raceId?: boolean
    leagueId?: boolean
    totalPts?: boolean
    breakdown?: boolean
  }

  export type PointsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "raceId" | "leagueId" | "totalPts" | "breakdown", ExtArgs["result"]["points"]>
  export type PointsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    race?: boolean | RaceDefaultArgs<ExtArgs>
    league?: boolean | LeagueDefaultArgs<ExtArgs>
  }
  export type PointsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    race?: boolean | RaceDefaultArgs<ExtArgs>
    league?: boolean | LeagueDefaultArgs<ExtArgs>
  }
  export type PointsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    race?: boolean | RaceDefaultArgs<ExtArgs>
    league?: boolean | LeagueDefaultArgs<ExtArgs>
  }

  export type $PointsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Points"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      race: Prisma.$RacePayload<ExtArgs>
      league: Prisma.$LeaguePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      raceId: number
      leagueId: number
      totalPts: number
      breakdown: Prisma.JsonValue | null
    }, ExtArgs["result"]["points"]>
    composites: {}
  }

  type PointsGetPayload<S extends boolean | null | undefined | PointsDefaultArgs> = $Result.GetResult<Prisma.$PointsPayload, S>

  type PointsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PointsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PointsCountAggregateInputType | true
    }

  export interface PointsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Points'], meta: { name: 'Points' } }
    /**
     * Find zero or one Points that matches the filter.
     * @param {PointsFindUniqueArgs} args - Arguments to find a Points
     * @example
     * // Get one Points
     * const points = await prisma.points.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointsFindUniqueArgs>(args: SelectSubset<T, PointsFindUniqueArgs<ExtArgs>>): Prisma__PointsClient<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Points that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PointsFindUniqueOrThrowArgs} args - Arguments to find a Points
     * @example
     * // Get one Points
     * const points = await prisma.points.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointsFindUniqueOrThrowArgs>(args: SelectSubset<T, PointsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PointsClient<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Points that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsFindFirstArgs} args - Arguments to find a Points
     * @example
     * // Get one Points
     * const points = await prisma.points.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointsFindFirstArgs>(args?: SelectSubset<T, PointsFindFirstArgs<ExtArgs>>): Prisma__PointsClient<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Points that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsFindFirstOrThrowArgs} args - Arguments to find a Points
     * @example
     * // Get one Points
     * const points = await prisma.points.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointsFindFirstOrThrowArgs>(args?: SelectSubset<T, PointsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PointsClient<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Points that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Points
     * const points = await prisma.points.findMany()
     * 
     * // Get first 10 Points
     * const points = await prisma.points.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pointsWithIdOnly = await prisma.points.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PointsFindManyArgs>(args?: SelectSubset<T, PointsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Points.
     * @param {PointsCreateArgs} args - Arguments to create a Points.
     * @example
     * // Create one Points
     * const Points = await prisma.points.create({
     *   data: {
     *     // ... data to create a Points
     *   }
     * })
     * 
     */
    create<T extends PointsCreateArgs>(args: SelectSubset<T, PointsCreateArgs<ExtArgs>>): Prisma__PointsClient<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Points.
     * @param {PointsCreateManyArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const points = await prisma.points.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PointsCreateManyArgs>(args?: SelectSubset<T, PointsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Points and returns the data saved in the database.
     * @param {PointsCreateManyAndReturnArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const points = await prisma.points.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Points and only return the `id`
     * const pointsWithIdOnly = await prisma.points.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PointsCreateManyAndReturnArgs>(args?: SelectSubset<T, PointsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Points.
     * @param {PointsDeleteArgs} args - Arguments to delete one Points.
     * @example
     * // Delete one Points
     * const Points = await prisma.points.delete({
     *   where: {
     *     // ... filter to delete one Points
     *   }
     * })
     * 
     */
    delete<T extends PointsDeleteArgs>(args: SelectSubset<T, PointsDeleteArgs<ExtArgs>>): Prisma__PointsClient<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Points.
     * @param {PointsUpdateArgs} args - Arguments to update one Points.
     * @example
     * // Update one Points
     * const points = await prisma.points.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PointsUpdateArgs>(args: SelectSubset<T, PointsUpdateArgs<ExtArgs>>): Prisma__PointsClient<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Points.
     * @param {PointsDeleteManyArgs} args - Arguments to filter Points to delete.
     * @example
     * // Delete a few Points
     * const { count } = await prisma.points.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PointsDeleteManyArgs>(args?: SelectSubset<T, PointsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Points
     * const points = await prisma.points.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PointsUpdateManyArgs>(args: SelectSubset<T, PointsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points and returns the data updated in the database.
     * @param {PointsUpdateManyAndReturnArgs} args - Arguments to update many Points.
     * @example
     * // Update many Points
     * const points = await prisma.points.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Points and only return the `id`
     * const pointsWithIdOnly = await prisma.points.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PointsUpdateManyAndReturnArgs>(args: SelectSubset<T, PointsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Points.
     * @param {PointsUpsertArgs} args - Arguments to update or create a Points.
     * @example
     * // Update or create a Points
     * const points = await prisma.points.upsert({
     *   create: {
     *     // ... data to create a Points
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Points we want to update
     *   }
     * })
     */
    upsert<T extends PointsUpsertArgs>(args: SelectSubset<T, PointsUpsertArgs<ExtArgs>>): Prisma__PointsClient<$Result.GetResult<Prisma.$PointsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsCountArgs} args - Arguments to filter Points to count.
     * @example
     * // Count the number of Points
     * const count = await prisma.points.count({
     *   where: {
     *     // ... the filter for the Points we want to count
     *   }
     * })
    **/
    count<T extends PointsCountArgs>(
      args?: Subset<T, PointsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PointsAggregateArgs>(args: Subset<T, PointsAggregateArgs>): Prisma.PrismaPromise<GetPointsAggregateType<T>>

    /**
     * Group by Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PointsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointsGroupByArgs['orderBy'] }
        : { orderBy?: PointsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PointsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Points model
   */
  readonly fields: PointsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Points.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    race<T extends RaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RaceDefaultArgs<ExtArgs>>): Prisma__RaceClient<$Result.GetResult<Prisma.$RacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    league<T extends LeagueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeagueDefaultArgs<ExtArgs>>): Prisma__LeagueClient<$Result.GetResult<Prisma.$LeaguePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Points model
   */
  interface PointsFieldRefs {
    readonly id: FieldRef<"Points", 'Int'>
    readonly userId: FieldRef<"Points", 'Int'>
    readonly raceId: FieldRef<"Points", 'Int'>
    readonly leagueId: FieldRef<"Points", 'Int'>
    readonly totalPts: FieldRef<"Points", 'Int'>
    readonly breakdown: FieldRef<"Points", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Points findUnique
   */
  export type PointsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    /**
     * Filter, which Points to fetch.
     */
    where: PointsWhereUniqueInput
  }

  /**
   * Points findUniqueOrThrow
   */
  export type PointsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    /**
     * Filter, which Points to fetch.
     */
    where: PointsWhereUniqueInput
  }

  /**
   * Points findFirst
   */
  export type PointsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    /**
     * Filter, which Points to fetch.
     */
    where?: PointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointsOrderByWithRelationInput | PointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointsScalarFieldEnum | PointsScalarFieldEnum[]
  }

  /**
   * Points findFirstOrThrow
   */
  export type PointsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    /**
     * Filter, which Points to fetch.
     */
    where?: PointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointsOrderByWithRelationInput | PointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointsScalarFieldEnum | PointsScalarFieldEnum[]
  }

  /**
   * Points findMany
   */
  export type PointsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    /**
     * Filter, which Points to fetch.
     */
    where?: PointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointsOrderByWithRelationInput | PointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Points.
     */
    cursor?: PointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointsScalarFieldEnum | PointsScalarFieldEnum[]
  }

  /**
   * Points create
   */
  export type PointsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    /**
     * The data needed to create a Points.
     */
    data: XOR<PointsCreateInput, PointsUncheckedCreateInput>
  }

  /**
   * Points createMany
   */
  export type PointsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Points.
     */
    data: PointsCreateManyInput | PointsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Points createManyAndReturn
   */
  export type PointsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * The data used to create many Points.
     */
    data: PointsCreateManyInput | PointsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Points update
   */
  export type PointsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    /**
     * The data needed to update a Points.
     */
    data: XOR<PointsUpdateInput, PointsUncheckedUpdateInput>
    /**
     * Choose, which Points to update.
     */
    where: PointsWhereUniqueInput
  }

  /**
   * Points updateMany
   */
  export type PointsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Points.
     */
    data: XOR<PointsUpdateManyMutationInput, PointsUncheckedUpdateManyInput>
    /**
     * Filter which Points to update
     */
    where?: PointsWhereInput
    /**
     * Limit how many Points to update.
     */
    limit?: number
  }

  /**
   * Points updateManyAndReturn
   */
  export type PointsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * The data used to update Points.
     */
    data: XOR<PointsUpdateManyMutationInput, PointsUncheckedUpdateManyInput>
    /**
     * Filter which Points to update
     */
    where?: PointsWhereInput
    /**
     * Limit how many Points to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Points upsert
   */
  export type PointsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    /**
     * The filter to search for the Points to update in case it exists.
     */
    where: PointsWhereUniqueInput
    /**
     * In case the Points found by the `where` argument doesn't exist, create a new Points with this data.
     */
    create: XOR<PointsCreateInput, PointsUncheckedCreateInput>
    /**
     * In case the Points was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointsUpdateInput, PointsUncheckedUpdateInput>
  }

  /**
   * Points delete
   */
  export type PointsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
    /**
     * Filter which Points to delete.
     */
    where: PointsWhereUniqueInput
  }

  /**
   * Points deleteMany
   */
  export type PointsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Points to delete
     */
    where?: PointsWhereInput
    /**
     * Limit how many Points to delete.
     */
    limit?: number
  }

  /**
   * Points without action
   */
  export type PointsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Points
     */
    select?: PointsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Points
     */
    omit?: PointsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    phone_no: 'phone_no',
    created_at: 'created_at',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LeagueScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    league_type: 'league_type'
  };

  export type LeagueScalarFieldEnum = (typeof LeagueScalarFieldEnum)[keyof typeof LeagueScalarFieldEnum]


  export const LeagueMemberScalarFieldEnum: {
    id: 'id',
    leagueId: 'leagueId',
    userId: 'userId',
    joinedAt: 'joinedAt'
  };

  export type LeagueMemberScalarFieldEnum = (typeof LeagueMemberScalarFieldEnum)[keyof typeof LeagueMemberScalarFieldEnum]


  export const DriverScalarFieldEnum: {
    id: 'id',
    name: 'name',
    number: 'number',
    active: 'active',
    price: 'price',
    points: 'points',
    constructorId: 'constructorId'
  };

  export type DriverScalarFieldEnum = (typeof DriverScalarFieldEnum)[keyof typeof DriverScalarFieldEnum]


  export const ConstructorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    active: 'active',
    price: 'price',
    points: 'points'
  };

  export type ConstructorScalarFieldEnum = (typeof ConstructorScalarFieldEnum)[keyof typeof ConstructorScalarFieldEnum]


  export const RaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    circuit: 'circuit',
    raceDate: 'raceDate',
    season: 'season',
    raceStart: 'raceStart',
    raceEnd: 'raceEnd',
    status: 'status'
  };

  export type RaceScalarFieldEnum = (typeof RaceScalarFieldEnum)[keyof typeof RaceScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    raceId: 'raceId',
    leagueId: 'leagueId',
    locked: 'locked',
    constructorId: 'constructorId'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const PredictionScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    driverId: 'driverId',
    predictedPosition: 'predictedPosition',
    predictedDNF: 'predictedDNF'
  };

  export type PredictionScalarFieldEnum = (typeof PredictionScalarFieldEnum)[keyof typeof PredictionScalarFieldEnum]


  export const RaceResultScalarFieldEnum: {
    id: 'id',
    raceId: 'raceId',
    driverId: 'driverId',
    finishPosition: 'finishPosition',
    dnf: 'dnf',
    fastestLap: 'fastestLap'
  };

  export type RaceResultScalarFieldEnum = (typeof RaceResultScalarFieldEnum)[keyof typeof RaceResultScalarFieldEnum]


  export const PointsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    raceId: 'raceId',
    leagueId: 'leagueId',
    totalPts: 'totalPts',
    breakdown: 'breakdown'
  };

  export type PointsScalarFieldEnum = (typeof PointsScalarFieldEnum)[keyof typeof PointsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'LeagueType'
   */
  export type EnumLeagueTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeagueType'>
    


  /**
   * Reference to a field of type 'LeagueType[]'
   */
  export type ListEnumLeagueTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeagueType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'RaceStatus'
   */
  export type EnumRaceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RaceStatus'>
    


  /**
   * Reference to a field of type 'RaceStatus[]'
   */
  export type ListEnumRaceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RaceStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone_no?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    ownedLeagues?: LeagueListRelationFilter
    memberships?: LeagueMemberListRelationFilter
    teams?: TeamListRelationFilter
    points?: PointsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_no?: SortOrder
    created_at?: SortOrder
    role?: SortOrder
    ownedLeagues?: LeagueOrderByRelationAggregateInput
    memberships?: LeagueMemberOrderByRelationAggregateInput
    teams?: TeamOrderByRelationAggregateInput
    points?: PointsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    phone_no?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    ownedLeagues?: LeagueListRelationFilter
    memberships?: LeagueMemberListRelationFilter
    teams?: TeamListRelationFilter
    points?: PointsListRelationFilter
  }, "id" | "username" | "email" | "phone_no">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_no?: SortOrder
    created_at?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone_no?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
  }

  export type LeagueWhereInput = {
    AND?: LeagueWhereInput | LeagueWhereInput[]
    OR?: LeagueWhereInput[]
    NOT?: LeagueWhereInput | LeagueWhereInput[]
    id?: IntFilter<"League"> | number
    name?: StringFilter<"League"> | string
    code?: StringFilter<"League"> | string
    ownerId?: IntNullableFilter<"League"> | number | null
    createdAt?: DateTimeFilter<"League"> | Date | string
    league_type?: EnumLeagueTypeFilter<"League"> | $Enums.LeagueType
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    members?: LeagueMemberListRelationFilter
    points?: PointsListRelationFilter
    teams?: TeamListRelationFilter
  }

  export type LeagueOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    league_type?: SortOrder
    owner?: UserOrderByWithRelationInput
    members?: LeagueMemberOrderByRelationAggregateInput
    points?: PointsOrderByRelationAggregateInput
    teams?: TeamOrderByRelationAggregateInput
  }

  export type LeagueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: LeagueWhereInput | LeagueWhereInput[]
    OR?: LeagueWhereInput[]
    NOT?: LeagueWhereInput | LeagueWhereInput[]
    name?: StringFilter<"League"> | string
    ownerId?: IntNullableFilter<"League"> | number | null
    createdAt?: DateTimeFilter<"League"> | Date | string
    league_type?: EnumLeagueTypeFilter<"League"> | $Enums.LeagueType
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    members?: LeagueMemberListRelationFilter
    points?: PointsListRelationFilter
    teams?: TeamListRelationFilter
  }, "id" | "code">

  export type LeagueOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    ownerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    league_type?: SortOrder
    _count?: LeagueCountOrderByAggregateInput
    _avg?: LeagueAvgOrderByAggregateInput
    _max?: LeagueMaxOrderByAggregateInput
    _min?: LeagueMinOrderByAggregateInput
    _sum?: LeagueSumOrderByAggregateInput
  }

  export type LeagueScalarWhereWithAggregatesInput = {
    AND?: LeagueScalarWhereWithAggregatesInput | LeagueScalarWhereWithAggregatesInput[]
    OR?: LeagueScalarWhereWithAggregatesInput[]
    NOT?: LeagueScalarWhereWithAggregatesInput | LeagueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"League"> | number
    name?: StringWithAggregatesFilter<"League"> | string
    code?: StringWithAggregatesFilter<"League"> | string
    ownerId?: IntNullableWithAggregatesFilter<"League"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"League"> | Date | string
    league_type?: EnumLeagueTypeWithAggregatesFilter<"League"> | $Enums.LeagueType
  }

  export type LeagueMemberWhereInput = {
    AND?: LeagueMemberWhereInput | LeagueMemberWhereInput[]
    OR?: LeagueMemberWhereInput[]
    NOT?: LeagueMemberWhereInput | LeagueMemberWhereInput[]
    id?: IntFilter<"LeagueMember"> | number
    leagueId?: IntFilter<"LeagueMember"> | number
    userId?: IntFilter<"LeagueMember"> | number
    joinedAt?: DateTimeFilter<"LeagueMember"> | Date | string
    league?: XOR<LeagueScalarRelationFilter, LeagueWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LeagueMemberOrderByWithRelationInput = {
    id?: SortOrder
    leagueId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    league?: LeagueOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type LeagueMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    leagueId_userId?: LeagueMemberLeagueIdUserIdCompoundUniqueInput
    AND?: LeagueMemberWhereInput | LeagueMemberWhereInput[]
    OR?: LeagueMemberWhereInput[]
    NOT?: LeagueMemberWhereInput | LeagueMemberWhereInput[]
    leagueId?: IntFilter<"LeagueMember"> | number
    userId?: IntFilter<"LeagueMember"> | number
    joinedAt?: DateTimeFilter<"LeagueMember"> | Date | string
    league?: XOR<LeagueScalarRelationFilter, LeagueWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "leagueId_userId">

  export type LeagueMemberOrderByWithAggregationInput = {
    id?: SortOrder
    leagueId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
    _count?: LeagueMemberCountOrderByAggregateInput
    _avg?: LeagueMemberAvgOrderByAggregateInput
    _max?: LeagueMemberMaxOrderByAggregateInput
    _min?: LeagueMemberMinOrderByAggregateInput
    _sum?: LeagueMemberSumOrderByAggregateInput
  }

  export type LeagueMemberScalarWhereWithAggregatesInput = {
    AND?: LeagueMemberScalarWhereWithAggregatesInput | LeagueMemberScalarWhereWithAggregatesInput[]
    OR?: LeagueMemberScalarWhereWithAggregatesInput[]
    NOT?: LeagueMemberScalarWhereWithAggregatesInput | LeagueMemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LeagueMember"> | number
    leagueId?: IntWithAggregatesFilter<"LeagueMember"> | number
    userId?: IntWithAggregatesFilter<"LeagueMember"> | number
    joinedAt?: DateTimeWithAggregatesFilter<"LeagueMember"> | Date | string
  }

  export type DriverWhereInput = {
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    id?: IntFilter<"Driver"> | number
    name?: StringFilter<"Driver"> | string
    number?: IntNullableFilter<"Driver"> | number | null
    active?: BoolFilter<"Driver"> | boolean
    price?: FloatFilter<"Driver"> | number
    points?: IntFilter<"Driver"> | number
    constructorId?: IntNullableFilter<"Driver"> | number | null
    predictions?: PredictionListRelationFilter
    raceResults?: RaceResultListRelationFilter
  }

  export type DriverOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrderInput | SortOrder
    active?: SortOrder
    price?: SortOrder
    points?: SortOrder
    constructorId?: SortOrderInput | SortOrder
    predictions?: PredictionOrderByRelationAggregateInput
    raceResults?: RaceResultOrderByRelationAggregateInput
  }

  export type DriverWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    name?: StringFilter<"Driver"> | string
    number?: IntNullableFilter<"Driver"> | number | null
    active?: BoolFilter<"Driver"> | boolean
    price?: FloatFilter<"Driver"> | number
    points?: IntFilter<"Driver"> | number
    constructorId?: IntNullableFilter<"Driver"> | number | null
    predictions?: PredictionListRelationFilter
    raceResults?: RaceResultListRelationFilter
  }, "id">

  export type DriverOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrderInput | SortOrder
    active?: SortOrder
    price?: SortOrder
    points?: SortOrder
    constructorId?: SortOrderInput | SortOrder
    _count?: DriverCountOrderByAggregateInput
    _avg?: DriverAvgOrderByAggregateInput
    _max?: DriverMaxOrderByAggregateInput
    _min?: DriverMinOrderByAggregateInput
    _sum?: DriverSumOrderByAggregateInput
  }

  export type DriverScalarWhereWithAggregatesInput = {
    AND?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    OR?: DriverScalarWhereWithAggregatesInput[]
    NOT?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Driver"> | number
    name?: StringWithAggregatesFilter<"Driver"> | string
    number?: IntNullableWithAggregatesFilter<"Driver"> | number | null
    active?: BoolWithAggregatesFilter<"Driver"> | boolean
    price?: FloatWithAggregatesFilter<"Driver"> | number
    points?: IntWithAggregatesFilter<"Driver"> | number
    constructorId?: IntNullableWithAggregatesFilter<"Driver"> | number | null
  }

  export type ConstructorWhereInput = {
    AND?: ConstructorWhereInput | ConstructorWhereInput[]
    OR?: ConstructorWhereInput[]
    NOT?: ConstructorWhereInput | ConstructorWhereInput[]
    id?: IntFilter<"Constructor"> | number
    name?: StringFilter<"Constructor"> | string
    active?: BoolFilter<"Constructor"> | boolean
    price?: FloatFilter<"Constructor"> | number
    points?: IntFilter<"Constructor"> | number
    drivers?: DriverListRelationFilter
    teams?: TeamListRelationFilter
  }

  export type ConstructorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    price?: SortOrder
    points?: SortOrder
    drivers?: DriverOrderByRelationAggregateInput
    teams?: TeamOrderByRelationAggregateInput
  }

  export type ConstructorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConstructorWhereInput | ConstructorWhereInput[]
    OR?: ConstructorWhereInput[]
    NOT?: ConstructorWhereInput | ConstructorWhereInput[]
    name?: StringFilter<"Constructor"> | string
    active?: BoolFilter<"Constructor"> | boolean
    price?: FloatFilter<"Constructor"> | number
    points?: IntFilter<"Constructor"> | number
    drivers?: DriverListRelationFilter
    teams?: TeamListRelationFilter
  }, "id">

  export type ConstructorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    price?: SortOrder
    points?: SortOrder
    _count?: ConstructorCountOrderByAggregateInput
    _avg?: ConstructorAvgOrderByAggregateInput
    _max?: ConstructorMaxOrderByAggregateInput
    _min?: ConstructorMinOrderByAggregateInput
    _sum?: ConstructorSumOrderByAggregateInput
  }

  export type ConstructorScalarWhereWithAggregatesInput = {
    AND?: ConstructorScalarWhereWithAggregatesInput | ConstructorScalarWhereWithAggregatesInput[]
    OR?: ConstructorScalarWhereWithAggregatesInput[]
    NOT?: ConstructorScalarWhereWithAggregatesInput | ConstructorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Constructor"> | number
    name?: StringWithAggregatesFilter<"Constructor"> | string
    active?: BoolWithAggregatesFilter<"Constructor"> | boolean
    price?: FloatWithAggregatesFilter<"Constructor"> | number
    points?: IntWithAggregatesFilter<"Constructor"> | number
  }

  export type RaceWhereInput = {
    AND?: RaceWhereInput | RaceWhereInput[]
    OR?: RaceWhereInput[]
    NOT?: RaceWhereInput | RaceWhereInput[]
    id?: IntFilter<"Race"> | number
    name?: StringFilter<"Race"> | string
    circuit?: StringNullableFilter<"Race"> | string | null
    raceDate?: DateTimeFilter<"Race"> | Date | string
    season?: IntFilter<"Race"> | number
    raceStart?: DateTimeFilter<"Race"> | Date | string
    raceEnd?: DateTimeNullableFilter<"Race"> | Date | string | null
    status?: EnumRaceStatusFilter<"Race"> | $Enums.RaceStatus
    teams?: TeamListRelationFilter
    raceResults?: RaceResultListRelationFilter
    points?: PointsListRelationFilter
  }

  export type RaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    circuit?: SortOrderInput | SortOrder
    raceDate?: SortOrder
    season?: SortOrder
    raceStart?: SortOrder
    raceEnd?: SortOrderInput | SortOrder
    status?: SortOrder
    teams?: TeamOrderByRelationAggregateInput
    raceResults?: RaceResultOrderByRelationAggregateInput
    points?: PointsOrderByRelationAggregateInput
  }

  export type RaceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RaceWhereInput | RaceWhereInput[]
    OR?: RaceWhereInput[]
    NOT?: RaceWhereInput | RaceWhereInput[]
    name?: StringFilter<"Race"> | string
    circuit?: StringNullableFilter<"Race"> | string | null
    raceDate?: DateTimeFilter<"Race"> | Date | string
    season?: IntFilter<"Race"> | number
    raceStart?: DateTimeFilter<"Race"> | Date | string
    raceEnd?: DateTimeNullableFilter<"Race"> | Date | string | null
    status?: EnumRaceStatusFilter<"Race"> | $Enums.RaceStatus
    teams?: TeamListRelationFilter
    raceResults?: RaceResultListRelationFilter
    points?: PointsListRelationFilter
  }, "id">

  export type RaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    circuit?: SortOrderInput | SortOrder
    raceDate?: SortOrder
    season?: SortOrder
    raceStart?: SortOrder
    raceEnd?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: RaceCountOrderByAggregateInput
    _avg?: RaceAvgOrderByAggregateInput
    _max?: RaceMaxOrderByAggregateInput
    _min?: RaceMinOrderByAggregateInput
    _sum?: RaceSumOrderByAggregateInput
  }

  export type RaceScalarWhereWithAggregatesInput = {
    AND?: RaceScalarWhereWithAggregatesInput | RaceScalarWhereWithAggregatesInput[]
    OR?: RaceScalarWhereWithAggregatesInput[]
    NOT?: RaceScalarWhereWithAggregatesInput | RaceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Race"> | number
    name?: StringWithAggregatesFilter<"Race"> | string
    circuit?: StringNullableWithAggregatesFilter<"Race"> | string | null
    raceDate?: DateTimeWithAggregatesFilter<"Race"> | Date | string
    season?: IntWithAggregatesFilter<"Race"> | number
    raceStart?: DateTimeWithAggregatesFilter<"Race"> | Date | string
    raceEnd?: DateTimeNullableWithAggregatesFilter<"Race"> | Date | string | null
    status?: EnumRaceStatusWithAggregatesFilter<"Race"> | $Enums.RaceStatus
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: IntFilter<"Team"> | number
    userId?: IntFilter<"Team"> | number
    raceId?: IntFilter<"Team"> | number
    leagueId?: IntFilter<"Team"> | number
    locked?: BoolFilter<"Team"> | boolean
    constructorId?: IntNullableFilter<"Team"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    league?: XOR<LeagueScalarRelationFilter, LeagueWhereInput>
    predictions?: PredictionListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    raceId?: SortOrder
    leagueId?: SortOrder
    locked?: SortOrder
    constructorId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    race?: RaceOrderByWithRelationInput
    league?: LeagueOrderByWithRelationInput
    predictions?: PredictionOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_raceId_leagueId?: TeamUserIdRaceIdLeagueIdCompoundUniqueInput
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    userId?: IntFilter<"Team"> | number
    raceId?: IntFilter<"Team"> | number
    leagueId?: IntFilter<"Team"> | number
    locked?: BoolFilter<"Team"> | boolean
    constructorId?: IntNullableFilter<"Team"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    league?: XOR<LeagueScalarRelationFilter, LeagueWhereInput>
    predictions?: PredictionListRelationFilter
  }, "id" | "userId_raceId_leagueId">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    raceId?: SortOrder
    leagueId?: SortOrder
    locked?: SortOrder
    constructorId?: SortOrderInput | SortOrder
    _count?: TeamCountOrderByAggregateInput
    _avg?: TeamAvgOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
    _sum?: TeamSumOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Team"> | number
    userId?: IntWithAggregatesFilter<"Team"> | number
    raceId?: IntWithAggregatesFilter<"Team"> | number
    leagueId?: IntWithAggregatesFilter<"Team"> | number
    locked?: BoolWithAggregatesFilter<"Team"> | boolean
    constructorId?: IntNullableWithAggregatesFilter<"Team"> | number | null
  }

  export type PredictionWhereInput = {
    AND?: PredictionWhereInput | PredictionWhereInput[]
    OR?: PredictionWhereInput[]
    NOT?: PredictionWhereInput | PredictionWhereInput[]
    id?: IntFilter<"Prediction"> | number
    teamId?: IntFilter<"Prediction"> | number
    driverId?: IntFilter<"Prediction"> | number
    predictedPosition?: IntNullableFilter<"Prediction"> | number | null
    predictedDNF?: BoolFilter<"Prediction"> | boolean
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }

  export type PredictionOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    driverId?: SortOrder
    predictedPosition?: SortOrderInput | SortOrder
    predictedDNF?: SortOrder
    team?: TeamOrderByWithRelationInput
    driver?: DriverOrderByWithRelationInput
  }

  export type PredictionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    teamId_driverId?: PredictionTeamIdDriverIdCompoundUniqueInput
    AND?: PredictionWhereInput | PredictionWhereInput[]
    OR?: PredictionWhereInput[]
    NOT?: PredictionWhereInput | PredictionWhereInput[]
    teamId?: IntFilter<"Prediction"> | number
    driverId?: IntFilter<"Prediction"> | number
    predictedPosition?: IntNullableFilter<"Prediction"> | number | null
    predictedDNF?: BoolFilter<"Prediction"> | boolean
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }, "id" | "teamId_driverId">

  export type PredictionOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    driverId?: SortOrder
    predictedPosition?: SortOrderInput | SortOrder
    predictedDNF?: SortOrder
    _count?: PredictionCountOrderByAggregateInput
    _avg?: PredictionAvgOrderByAggregateInput
    _max?: PredictionMaxOrderByAggregateInput
    _min?: PredictionMinOrderByAggregateInput
    _sum?: PredictionSumOrderByAggregateInput
  }

  export type PredictionScalarWhereWithAggregatesInput = {
    AND?: PredictionScalarWhereWithAggregatesInput | PredictionScalarWhereWithAggregatesInput[]
    OR?: PredictionScalarWhereWithAggregatesInput[]
    NOT?: PredictionScalarWhereWithAggregatesInput | PredictionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Prediction"> | number
    teamId?: IntWithAggregatesFilter<"Prediction"> | number
    driverId?: IntWithAggregatesFilter<"Prediction"> | number
    predictedPosition?: IntNullableWithAggregatesFilter<"Prediction"> | number | null
    predictedDNF?: BoolWithAggregatesFilter<"Prediction"> | boolean
  }

  export type RaceResultWhereInput = {
    AND?: RaceResultWhereInput | RaceResultWhereInput[]
    OR?: RaceResultWhereInput[]
    NOT?: RaceResultWhereInput | RaceResultWhereInput[]
    id?: IntFilter<"RaceResult"> | number
    raceId?: IntFilter<"RaceResult"> | number
    driverId?: IntFilter<"RaceResult"> | number
    finishPosition?: IntNullableFilter<"RaceResult"> | number | null
    dnf?: BoolFilter<"RaceResult"> | boolean
    fastestLap?: BoolFilter<"RaceResult"> | boolean
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }

  export type RaceResultOrderByWithRelationInput = {
    id?: SortOrder
    raceId?: SortOrder
    driverId?: SortOrder
    finishPosition?: SortOrderInput | SortOrder
    dnf?: SortOrder
    fastestLap?: SortOrder
    race?: RaceOrderByWithRelationInput
    driver?: DriverOrderByWithRelationInput
  }

  export type RaceResultWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    raceId_driverId?: RaceResultRaceIdDriverIdCompoundUniqueInput
    AND?: RaceResultWhereInput | RaceResultWhereInput[]
    OR?: RaceResultWhereInput[]
    NOT?: RaceResultWhereInput | RaceResultWhereInput[]
    raceId?: IntFilter<"RaceResult"> | number
    driverId?: IntFilter<"RaceResult"> | number
    finishPosition?: IntNullableFilter<"RaceResult"> | number | null
    dnf?: BoolFilter<"RaceResult"> | boolean
    fastestLap?: BoolFilter<"RaceResult"> | boolean
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }, "id" | "raceId_driverId">

  export type RaceResultOrderByWithAggregationInput = {
    id?: SortOrder
    raceId?: SortOrder
    driverId?: SortOrder
    finishPosition?: SortOrderInput | SortOrder
    dnf?: SortOrder
    fastestLap?: SortOrder
    _count?: RaceResultCountOrderByAggregateInput
    _avg?: RaceResultAvgOrderByAggregateInput
    _max?: RaceResultMaxOrderByAggregateInput
    _min?: RaceResultMinOrderByAggregateInput
    _sum?: RaceResultSumOrderByAggregateInput
  }

  export type RaceResultScalarWhereWithAggregatesInput = {
    AND?: RaceResultScalarWhereWithAggregatesInput | RaceResultScalarWhereWithAggregatesInput[]
    OR?: RaceResultScalarWhereWithAggregatesInput[]
    NOT?: RaceResultScalarWhereWithAggregatesInput | RaceResultScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RaceResult"> | number
    raceId?: IntWithAggregatesFilter<"RaceResult"> | number
    driverId?: IntWithAggregatesFilter<"RaceResult"> | number
    finishPosition?: IntNullableWithAggregatesFilter<"RaceResult"> | number | null
    dnf?: BoolWithAggregatesFilter<"RaceResult"> | boolean
    fastestLap?: BoolWithAggregatesFilter<"RaceResult"> | boolean
  }

  export type PointsWhereInput = {
    AND?: PointsWhereInput | PointsWhereInput[]
    OR?: PointsWhereInput[]
    NOT?: PointsWhereInput | PointsWhereInput[]
    id?: IntFilter<"Points"> | number
    userId?: IntFilter<"Points"> | number
    raceId?: IntFilter<"Points"> | number
    leagueId?: IntFilter<"Points"> | number
    totalPts?: IntFilter<"Points"> | number
    breakdown?: JsonNullableFilter<"Points">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    league?: XOR<LeagueScalarRelationFilter, LeagueWhereInput>
  }

  export type PointsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    raceId?: SortOrder
    leagueId?: SortOrder
    totalPts?: SortOrder
    breakdown?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    race?: RaceOrderByWithRelationInput
    league?: LeagueOrderByWithRelationInput
  }

  export type PointsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_raceId_leagueId?: PointsUserIdRaceIdLeagueIdCompoundUniqueInput
    AND?: PointsWhereInput | PointsWhereInput[]
    OR?: PointsWhereInput[]
    NOT?: PointsWhereInput | PointsWhereInput[]
    userId?: IntFilter<"Points"> | number
    raceId?: IntFilter<"Points"> | number
    leagueId?: IntFilter<"Points"> | number
    totalPts?: IntFilter<"Points"> | number
    breakdown?: JsonNullableFilter<"Points">
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    race?: XOR<RaceScalarRelationFilter, RaceWhereInput>
    league?: XOR<LeagueScalarRelationFilter, LeagueWhereInput>
  }, "id" | "userId_raceId_leagueId">

  export type PointsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    raceId?: SortOrder
    leagueId?: SortOrder
    totalPts?: SortOrder
    breakdown?: SortOrderInput | SortOrder
    _count?: PointsCountOrderByAggregateInput
    _avg?: PointsAvgOrderByAggregateInput
    _max?: PointsMaxOrderByAggregateInput
    _min?: PointsMinOrderByAggregateInput
    _sum?: PointsSumOrderByAggregateInput
  }

  export type PointsScalarWhereWithAggregatesInput = {
    AND?: PointsScalarWhereWithAggregatesInput | PointsScalarWhereWithAggregatesInput[]
    OR?: PointsScalarWhereWithAggregatesInput[]
    NOT?: PointsScalarWhereWithAggregatesInput | PointsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Points"> | number
    userId?: IntWithAggregatesFilter<"Points"> | number
    raceId?: IntWithAggregatesFilter<"Points"> | number
    leagueId?: IntWithAggregatesFilter<"Points"> | number
    totalPts?: IntWithAggregatesFilter<"Points"> | number
    breakdown?: JsonNullableWithAggregatesFilter<"Points">
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    phone_no: string
    created_at?: Date | string
    role?: $Enums.Role
    ownedLeagues?: LeagueCreateNestedManyWithoutOwnerInput
    memberships?: LeagueMemberCreateNestedManyWithoutUserInput
    teams?: TeamCreateNestedManyWithoutUserInput
    points?: PointsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    phone_no: string
    created_at?: Date | string
    role?: $Enums.Role
    ownedLeagues?: LeagueUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: LeagueMemberUncheckedCreateNestedManyWithoutUserInput
    teams?: TeamUncheckedCreateNestedManyWithoutUserInput
    points?: PointsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_no?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ownedLeagues?: LeagueUpdateManyWithoutOwnerNestedInput
    memberships?: LeagueMemberUpdateManyWithoutUserNestedInput
    teams?: TeamUpdateManyWithoutUserNestedInput
    points?: PointsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_no?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ownedLeagues?: LeagueUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: LeagueMemberUncheckedUpdateManyWithoutUserNestedInput
    teams?: TeamUncheckedUpdateManyWithoutUserNestedInput
    points?: PointsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    phone_no: string
    created_at?: Date | string
    role?: $Enums.Role
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_no?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_no?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type LeagueCreateInput = {
    name: string
    code: string
    createdAt?: Date | string
    league_type?: $Enums.LeagueType
    owner?: UserCreateNestedOneWithoutOwnedLeaguesInput
    members?: LeagueMemberCreateNestedManyWithoutLeagueInput
    points?: PointsCreateNestedManyWithoutLeagueInput
    teams?: TeamCreateNestedManyWithoutLeagueInput
  }

  export type LeagueUncheckedCreateInput = {
    id?: number
    name: string
    code: string
    ownerId?: number | null
    createdAt?: Date | string
    league_type?: $Enums.LeagueType
    members?: LeagueMemberUncheckedCreateNestedManyWithoutLeagueInput
    points?: PointsUncheckedCreateNestedManyWithoutLeagueInput
    teams?: TeamUncheckedCreateNestedManyWithoutLeagueInput
  }

  export type LeagueUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    league_type?: EnumLeagueTypeFieldUpdateOperationsInput | $Enums.LeagueType
    owner?: UserUpdateOneWithoutOwnedLeaguesNestedInput
    members?: LeagueMemberUpdateManyWithoutLeagueNestedInput
    points?: PointsUpdateManyWithoutLeagueNestedInput
    teams?: TeamUpdateManyWithoutLeagueNestedInput
  }

  export type LeagueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    league_type?: EnumLeagueTypeFieldUpdateOperationsInput | $Enums.LeagueType
    members?: LeagueMemberUncheckedUpdateManyWithoutLeagueNestedInput
    points?: PointsUncheckedUpdateManyWithoutLeagueNestedInput
    teams?: TeamUncheckedUpdateManyWithoutLeagueNestedInput
  }

  export type LeagueCreateManyInput = {
    id?: number
    name: string
    code: string
    ownerId?: number | null
    createdAt?: Date | string
    league_type?: $Enums.LeagueType
  }

  export type LeagueUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    league_type?: EnumLeagueTypeFieldUpdateOperationsInput | $Enums.LeagueType
  }

  export type LeagueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    league_type?: EnumLeagueTypeFieldUpdateOperationsInput | $Enums.LeagueType
  }

  export type LeagueMemberCreateInput = {
    joinedAt?: Date | string
    league: LeagueCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type LeagueMemberUncheckedCreateInput = {
    id?: number
    leagueId: number
    userId: number
    joinedAt?: Date | string
  }

  export type LeagueMemberUpdateInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    league?: LeagueUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type LeagueMemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    leagueId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeagueMemberCreateManyInput = {
    id?: number
    leagueId: number
    userId: number
    joinedAt?: Date | string
  }

  export type LeagueMemberUpdateManyMutationInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeagueMemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    leagueId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverCreateInput = {
    name: string
    number?: number | null
    active?: boolean
    price?: number
    points?: number
    predictions?: PredictionCreateNestedManyWithoutDriverInput
    raceResults?: RaceResultCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateInput = {
    id?: number
    name: string
    number?: number | null
    active?: boolean
    price?: number
    points?: number
    constructorId?: number | null
    predictions?: PredictionUncheckedCreateNestedManyWithoutDriverInput
    raceResults?: RaceResultUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    predictions?: PredictionUpdateManyWithoutDriverNestedInput
    raceResults?: RaceResultUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    constructorId?: NullableIntFieldUpdateOperationsInput | number | null
    predictions?: PredictionUncheckedUpdateManyWithoutDriverNestedInput
    raceResults?: RaceResultUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverCreateManyInput = {
    id?: number
    name: string
    number?: number | null
    active?: boolean
    price?: number
    points?: number
    constructorId?: number | null
  }

  export type DriverUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type DriverUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    constructorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ConstructorCreateInput = {
    name: string
    active?: boolean
    price?: number
    points?: number
    drivers?: DriverCreateNestedManyWithoutConstructorInput
    teams?: TeamCreateNestedManyWithoutConstructorInput
  }

  export type ConstructorUncheckedCreateInput = {
    id?: number
    name: string
    active?: boolean
    price?: number
    points?: number
    drivers?: DriverUncheckedCreateNestedManyWithoutConstructorInput
    teams?: TeamUncheckedCreateNestedManyWithoutConstructorInput
  }

  export type ConstructorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    drivers?: DriverUpdateManyWithoutConstructorNestedInput
    teams?: TeamUpdateManyWithoutConstructorNestedInput
  }

  export type ConstructorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    drivers?: DriverUncheckedUpdateManyWithoutConstructorNestedInput
    teams?: TeamUncheckedUpdateManyWithoutConstructorNestedInput
  }

  export type ConstructorCreateManyInput = {
    id?: number
    name: string
    active?: boolean
    price?: number
    points?: number
  }

  export type ConstructorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type ConstructorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type RaceCreateInput = {
    name: string
    circuit?: string | null
    raceDate: Date | string
    season: number
    raceStart: Date | string
    raceEnd?: Date | string | null
    status?: $Enums.RaceStatus
    teams?: TeamCreateNestedManyWithoutRaceInput
    raceResults?: RaceResultCreateNestedManyWithoutRaceInput
    points?: PointsCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateInput = {
    id?: number
    name: string
    circuit?: string | null
    raceDate: Date | string
    season: number
    raceStart: Date | string
    raceEnd?: Date | string | null
    status?: $Enums.RaceStatus
    teams?: TeamUncheckedCreateNestedManyWithoutRaceInput
    raceResults?: RaceResultUncheckedCreateNestedManyWithoutRaceInput
    points?: PointsUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    circuit?: NullableStringFieldUpdateOperationsInput | string | null
    raceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    season?: IntFieldUpdateOperationsInput | number
    raceStart?: DateTimeFieldUpdateOperationsInput | Date | string
    raceEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRaceStatusFieldUpdateOperationsInput | $Enums.RaceStatus
    teams?: TeamUpdateManyWithoutRaceNestedInput
    raceResults?: RaceResultUpdateManyWithoutRaceNestedInput
    points?: PointsUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    circuit?: NullableStringFieldUpdateOperationsInput | string | null
    raceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    season?: IntFieldUpdateOperationsInput | number
    raceStart?: DateTimeFieldUpdateOperationsInput | Date | string
    raceEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRaceStatusFieldUpdateOperationsInput | $Enums.RaceStatus
    teams?: TeamUncheckedUpdateManyWithoutRaceNestedInput
    raceResults?: RaceResultUncheckedUpdateManyWithoutRaceNestedInput
    points?: PointsUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type RaceCreateManyInput = {
    id?: number
    name: string
    circuit?: string | null
    raceDate: Date | string
    season: number
    raceStart: Date | string
    raceEnd?: Date | string | null
    status?: $Enums.RaceStatus
  }

  export type RaceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    circuit?: NullableStringFieldUpdateOperationsInput | string | null
    raceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    season?: IntFieldUpdateOperationsInput | number
    raceStart?: DateTimeFieldUpdateOperationsInput | Date | string
    raceEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRaceStatusFieldUpdateOperationsInput | $Enums.RaceStatus
  }

  export type RaceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    circuit?: NullableStringFieldUpdateOperationsInput | string | null
    raceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    season?: IntFieldUpdateOperationsInput | number
    raceStart?: DateTimeFieldUpdateOperationsInput | Date | string
    raceEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRaceStatusFieldUpdateOperationsInput | $Enums.RaceStatus
  }

  export type TeamCreateInput = {
    locked?: boolean
    user: UserCreateNestedOneWithoutTeamsInput
    race: RaceCreateNestedOneWithoutTeamsInput
    league: LeagueCreateNestedOneWithoutTeamsInput
    predictions?: PredictionCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: number
    userId: number
    raceId: number
    leagueId: number
    locked?: boolean
    constructorId?: number | null
    predictions?: PredictionUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    locked?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutTeamsNestedInput
    race?: RaceUpdateOneRequiredWithoutTeamsNestedInput
    league?: LeagueUpdateOneRequiredWithoutTeamsNestedInput
    predictions?: PredictionUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    raceId?: IntFieldUpdateOperationsInput | number
    leagueId?: IntFieldUpdateOperationsInput | number
    locked?: BoolFieldUpdateOperationsInput | boolean
    constructorId?: NullableIntFieldUpdateOperationsInput | number | null
    predictions?: PredictionUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: number
    userId: number
    raceId: number
    leagueId: number
    locked?: boolean
    constructorId?: number | null
  }

  export type TeamUpdateManyMutationInput = {
    locked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    raceId?: IntFieldUpdateOperationsInput | number
    leagueId?: IntFieldUpdateOperationsInput | number
    locked?: BoolFieldUpdateOperationsInput | boolean
    constructorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PredictionCreateInput = {
    predictedPosition?: number | null
    predictedDNF?: boolean
    team: TeamCreateNestedOneWithoutPredictionsInput
    driver: DriverCreateNestedOneWithoutPredictionsInput
  }

  export type PredictionUncheckedCreateInput = {
    id?: number
    teamId: number
    driverId: number
    predictedPosition?: number | null
    predictedDNF?: boolean
  }

  export type PredictionUpdateInput = {
    predictedPosition?: NullableIntFieldUpdateOperationsInput | number | null
    predictedDNF?: BoolFieldUpdateOperationsInput | boolean
    team?: TeamUpdateOneRequiredWithoutPredictionsNestedInput
    driver?: DriverUpdateOneRequiredWithoutPredictionsNestedInput
  }

  export type PredictionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    predictedPosition?: NullableIntFieldUpdateOperationsInput | number | null
    predictedDNF?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PredictionCreateManyInput = {
    id?: number
    teamId: number
    driverId: number
    predictedPosition?: number | null
    predictedDNF?: boolean
  }

  export type PredictionUpdateManyMutationInput = {
    predictedPosition?: NullableIntFieldUpdateOperationsInput | number | null
    predictedDNF?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PredictionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    predictedPosition?: NullableIntFieldUpdateOperationsInput | number | null
    predictedDNF?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RaceResultCreateInput = {
    finishPosition?: number | null
    dnf?: boolean
    fastestLap?: boolean
    race: RaceCreateNestedOneWithoutRaceResultsInput
    driver: DriverCreateNestedOneWithoutRaceResultsInput
  }

  export type RaceResultUncheckedCreateInput = {
    id?: number
    raceId: number
    driverId: number
    finishPosition?: number | null
    dnf?: boolean
    fastestLap?: boolean
  }

  export type RaceResultUpdateInput = {
    finishPosition?: NullableIntFieldUpdateOperationsInput | number | null
    dnf?: BoolFieldUpdateOperationsInput | boolean
    fastestLap?: BoolFieldUpdateOperationsInput | boolean
    race?: RaceUpdateOneRequiredWithoutRaceResultsNestedInput
    driver?: DriverUpdateOneRequiredWithoutRaceResultsNestedInput
  }

  export type RaceResultUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    raceId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    finishPosition?: NullableIntFieldUpdateOperationsInput | number | null
    dnf?: BoolFieldUpdateOperationsInput | boolean
    fastestLap?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RaceResultCreateManyInput = {
    id?: number
    raceId: number
    driverId: number
    finishPosition?: number | null
    dnf?: boolean
    fastestLap?: boolean
  }

  export type RaceResultUpdateManyMutationInput = {
    finishPosition?: NullableIntFieldUpdateOperationsInput | number | null
    dnf?: BoolFieldUpdateOperationsInput | boolean
    fastestLap?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RaceResultUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    raceId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    finishPosition?: NullableIntFieldUpdateOperationsInput | number | null
    dnf?: BoolFieldUpdateOperationsInput | boolean
    fastestLap?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PointsCreateInput = {
    totalPts?: number
    breakdown?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutPointsInput
    race: RaceCreateNestedOneWithoutPointsInput
    league: LeagueCreateNestedOneWithoutPointsInput
  }

  export type PointsUncheckedCreateInput = {
    id?: number
    userId: number
    raceId: number
    leagueId: number
    totalPts?: number
    breakdown?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PointsUpdateInput = {
    totalPts?: IntFieldUpdateOperationsInput | number
    breakdown?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutPointsNestedInput
    race?: RaceUpdateOneRequiredWithoutPointsNestedInput
    league?: LeagueUpdateOneRequiredWithoutPointsNestedInput
  }

  export type PointsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    raceId?: IntFieldUpdateOperationsInput | number
    leagueId?: IntFieldUpdateOperationsInput | number
    totalPts?: IntFieldUpdateOperationsInput | number
    breakdown?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PointsCreateManyInput = {
    id?: number
    userId: number
    raceId: number
    leagueId: number
    totalPts?: number
    breakdown?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PointsUpdateManyMutationInput = {
    totalPts?: IntFieldUpdateOperationsInput | number
    breakdown?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PointsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    raceId?: IntFieldUpdateOperationsInput | number
    leagueId?: IntFieldUpdateOperationsInput | number
    totalPts?: IntFieldUpdateOperationsInput | number
    breakdown?: NullableJsonNullValueInput | InputJsonValue
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type LeagueListRelationFilter = {
    every?: LeagueWhereInput
    some?: LeagueWhereInput
    none?: LeagueWhereInput
  }

  export type LeagueMemberListRelationFilter = {
    every?: LeagueMemberWhereInput
    some?: LeagueMemberWhereInput
    none?: LeagueMemberWhereInput
  }

  export type TeamListRelationFilter = {
    every?: TeamWhereInput
    some?: TeamWhereInput
    none?: TeamWhereInput
  }

  export type PointsListRelationFilter = {
    every?: PointsWhereInput
    some?: PointsWhereInput
    none?: PointsWhereInput
  }

  export type LeagueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeagueMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PointsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_no?: SortOrder
    created_at?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_no?: SortOrder
    created_at?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_no?: SortOrder
    created_at?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumLeagueTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LeagueType | EnumLeagueTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeagueType[] | ListEnumLeagueTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeagueType[] | ListEnumLeagueTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeagueTypeFilter<$PrismaModel> | $Enums.LeagueType
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LeagueCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    league_type?: SortOrder
  }

  export type LeagueAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type LeagueMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    league_type?: SortOrder
  }

  export type LeagueMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    league_type?: SortOrder
  }

  export type LeagueSumOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumLeagueTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeagueType | EnumLeagueTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeagueType[] | ListEnumLeagueTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeagueType[] | ListEnumLeagueTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeagueTypeWithAggregatesFilter<$PrismaModel> | $Enums.LeagueType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeagueTypeFilter<$PrismaModel>
    _max?: NestedEnumLeagueTypeFilter<$PrismaModel>
  }

  export type LeagueScalarRelationFilter = {
    is?: LeagueWhereInput
    isNot?: LeagueWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LeagueMemberLeagueIdUserIdCompoundUniqueInput = {
    leagueId: number
    userId: number
  }

  export type LeagueMemberCountOrderByAggregateInput = {
    id?: SortOrder
    leagueId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type LeagueMemberAvgOrderByAggregateInput = {
    id?: SortOrder
    leagueId?: SortOrder
    userId?: SortOrder
  }

  export type LeagueMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    leagueId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type LeagueMemberMinOrderByAggregateInput = {
    id?: SortOrder
    leagueId?: SortOrder
    userId?: SortOrder
    joinedAt?: SortOrder
  }

  export type LeagueMemberSumOrderByAggregateInput = {
    id?: SortOrder
    leagueId?: SortOrder
    userId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ConstructorNullableScalarRelationFilter = {
    is?: ConstructorWhereInput | null
    isNot?: ConstructorWhereInput | null
  }

  export type PredictionListRelationFilter = {
    every?: PredictionWhereInput
    some?: PredictionWhereInput
    none?: PredictionWhereInput
  }

  export type RaceResultListRelationFilter = {
    every?: RaceResultWhereInput
    some?: RaceResultWhereInput
    none?: RaceResultWhereInput
  }

  export type PredictionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RaceResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DriverCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    active?: SortOrder
    price?: SortOrder
    points?: SortOrder
    constructorId?: SortOrder
  }

  export type DriverAvgOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    price?: SortOrder
    points?: SortOrder
    constructorId?: SortOrder
  }

  export type DriverMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    active?: SortOrder
    price?: SortOrder
    points?: SortOrder
    constructorId?: SortOrder
  }

  export type DriverMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    number?: SortOrder
    active?: SortOrder
    price?: SortOrder
    points?: SortOrder
    constructorId?: SortOrder
  }

  export type DriverSumOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    price?: SortOrder
    points?: SortOrder
    constructorId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DriverListRelationFilter = {
    every?: DriverWhereInput
    some?: DriverWhereInput
    none?: DriverWhereInput
  }

  export type DriverOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConstructorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    price?: SortOrder
    points?: SortOrder
  }

  export type ConstructorAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    points?: SortOrder
  }

  export type ConstructorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    price?: SortOrder
    points?: SortOrder
  }

  export type ConstructorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    active?: SortOrder
    price?: SortOrder
    points?: SortOrder
  }

  export type ConstructorSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    points?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRaceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RaceStatus | EnumRaceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RaceStatus[] | ListEnumRaceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RaceStatus[] | ListEnumRaceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRaceStatusFilter<$PrismaModel> | $Enums.RaceStatus
  }

  export type RaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    circuit?: SortOrder
    raceDate?: SortOrder
    season?: SortOrder
    raceStart?: SortOrder
    raceEnd?: SortOrder
    status?: SortOrder
  }

  export type RaceAvgOrderByAggregateInput = {
    id?: SortOrder
    season?: SortOrder
  }

  export type RaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    circuit?: SortOrder
    raceDate?: SortOrder
    season?: SortOrder
    raceStart?: SortOrder
    raceEnd?: SortOrder
    status?: SortOrder
  }

  export type RaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    circuit?: SortOrder
    raceDate?: SortOrder
    season?: SortOrder
    raceStart?: SortOrder
    raceEnd?: SortOrder
    status?: SortOrder
  }

  export type RaceSumOrderByAggregateInput = {
    id?: SortOrder
    season?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRaceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RaceStatus | EnumRaceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RaceStatus[] | ListEnumRaceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RaceStatus[] | ListEnumRaceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRaceStatusWithAggregatesFilter<$PrismaModel> | $Enums.RaceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRaceStatusFilter<$PrismaModel>
    _max?: NestedEnumRaceStatusFilter<$PrismaModel>
  }

  export type RaceScalarRelationFilter = {
    is?: RaceWhereInput
    isNot?: RaceWhereInput
  }

  export type TeamUserIdRaceIdLeagueIdCompoundUniqueInput = {
    userId: number
    raceId: number
    leagueId: number
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    raceId?: SortOrder
    leagueId?: SortOrder
    locked?: SortOrder
    constructorId?: SortOrder
  }

  export type TeamAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    raceId?: SortOrder
    leagueId?: SortOrder
    constructorId?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    raceId?: SortOrder
    leagueId?: SortOrder
    locked?: SortOrder
    constructorId?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    raceId?: SortOrder
    leagueId?: SortOrder
    locked?: SortOrder
    constructorId?: SortOrder
  }

  export type TeamSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    raceId?: SortOrder
    leagueId?: SortOrder
    constructorId?: SortOrder
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type DriverScalarRelationFilter = {
    is?: DriverWhereInput
    isNot?: DriverWhereInput
  }

  export type PredictionTeamIdDriverIdCompoundUniqueInput = {
    teamId: number
    driverId: number
  }

  export type PredictionCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    driverId?: SortOrder
    predictedPosition?: SortOrder
    predictedDNF?: SortOrder
  }

  export type PredictionAvgOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    driverId?: SortOrder
    predictedPosition?: SortOrder
  }

  export type PredictionMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    driverId?: SortOrder
    predictedPosition?: SortOrder
    predictedDNF?: SortOrder
  }

  export type PredictionMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    driverId?: SortOrder
    predictedPosition?: SortOrder
    predictedDNF?: SortOrder
  }

  export type PredictionSumOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    driverId?: SortOrder
    predictedPosition?: SortOrder
  }

  export type RaceResultRaceIdDriverIdCompoundUniqueInput = {
    raceId: number
    driverId: number
  }

  export type RaceResultCountOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    driverId?: SortOrder
    finishPosition?: SortOrder
    dnf?: SortOrder
    fastestLap?: SortOrder
  }

  export type RaceResultAvgOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    driverId?: SortOrder
    finishPosition?: SortOrder
  }

  export type RaceResultMaxOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    driverId?: SortOrder
    finishPosition?: SortOrder
    dnf?: SortOrder
    fastestLap?: SortOrder
  }

  export type RaceResultMinOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    driverId?: SortOrder
    finishPosition?: SortOrder
    dnf?: SortOrder
    fastestLap?: SortOrder
  }

  export type RaceResultSumOrderByAggregateInput = {
    id?: SortOrder
    raceId?: SortOrder
    driverId?: SortOrder
    finishPosition?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PointsUserIdRaceIdLeagueIdCompoundUniqueInput = {
    userId: number
    raceId: number
    leagueId: number
  }

  export type PointsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    raceId?: SortOrder
    leagueId?: SortOrder
    totalPts?: SortOrder
    breakdown?: SortOrder
  }

  export type PointsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    raceId?: SortOrder
    leagueId?: SortOrder
    totalPts?: SortOrder
  }

  export type PointsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    raceId?: SortOrder
    leagueId?: SortOrder
    totalPts?: SortOrder
  }

  export type PointsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    raceId?: SortOrder
    leagueId?: SortOrder
    totalPts?: SortOrder
  }

  export type PointsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    raceId?: SortOrder
    leagueId?: SortOrder
    totalPts?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type LeagueCreateNestedManyWithoutOwnerInput = {
    create?: XOR<LeagueCreateWithoutOwnerInput, LeagueUncheckedCreateWithoutOwnerInput> | LeagueCreateWithoutOwnerInput[] | LeagueUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LeagueCreateOrConnectWithoutOwnerInput | LeagueCreateOrConnectWithoutOwnerInput[]
    createMany?: LeagueCreateManyOwnerInputEnvelope
    connect?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
  }

  export type LeagueMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<LeagueMemberCreateWithoutUserInput, LeagueMemberUncheckedCreateWithoutUserInput> | LeagueMemberCreateWithoutUserInput[] | LeagueMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeagueMemberCreateOrConnectWithoutUserInput | LeagueMemberCreateOrConnectWithoutUserInput[]
    createMany?: LeagueMemberCreateManyUserInputEnvelope
    connect?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[]
  }

  export type TeamCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamCreateWithoutUserInput, TeamUncheckedCreateWithoutUserInput> | TeamCreateWithoutUserInput[] | TeamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutUserInput | TeamCreateOrConnectWithoutUserInput[]
    createMany?: TeamCreateManyUserInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type PointsCreateNestedManyWithoutUserInput = {
    create?: XOR<PointsCreateWithoutUserInput, PointsUncheckedCreateWithoutUserInput> | PointsCreateWithoutUserInput[] | PointsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointsCreateOrConnectWithoutUserInput | PointsCreateOrConnectWithoutUserInput[]
    createMany?: PointsCreateManyUserInputEnvelope
    connect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
  }

  export type LeagueUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<LeagueCreateWithoutOwnerInput, LeagueUncheckedCreateWithoutOwnerInput> | LeagueCreateWithoutOwnerInput[] | LeagueUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LeagueCreateOrConnectWithoutOwnerInput | LeagueCreateOrConnectWithoutOwnerInput[]
    createMany?: LeagueCreateManyOwnerInputEnvelope
    connect?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
  }

  export type LeagueMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LeagueMemberCreateWithoutUserInput, LeagueMemberUncheckedCreateWithoutUserInput> | LeagueMemberCreateWithoutUserInput[] | LeagueMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeagueMemberCreateOrConnectWithoutUserInput | LeagueMemberCreateOrConnectWithoutUserInput[]
    createMany?: LeagueMemberCreateManyUserInputEnvelope
    connect?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamCreateWithoutUserInput, TeamUncheckedCreateWithoutUserInput> | TeamCreateWithoutUserInput[] | TeamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutUserInput | TeamCreateOrConnectWithoutUserInput[]
    createMany?: TeamCreateManyUserInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type PointsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PointsCreateWithoutUserInput, PointsUncheckedCreateWithoutUserInput> | PointsCreateWithoutUserInput[] | PointsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointsCreateOrConnectWithoutUserInput | PointsCreateOrConnectWithoutUserInput[]
    createMany?: PointsCreateManyUserInputEnvelope
    connect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type LeagueUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<LeagueCreateWithoutOwnerInput, LeagueUncheckedCreateWithoutOwnerInput> | LeagueCreateWithoutOwnerInput[] | LeagueUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LeagueCreateOrConnectWithoutOwnerInput | LeagueCreateOrConnectWithoutOwnerInput[]
    upsert?: LeagueUpsertWithWhereUniqueWithoutOwnerInput | LeagueUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: LeagueCreateManyOwnerInputEnvelope
    set?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
    disconnect?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
    delete?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
    connect?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
    update?: LeagueUpdateWithWhereUniqueWithoutOwnerInput | LeagueUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: LeagueUpdateManyWithWhereWithoutOwnerInput | LeagueUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: LeagueScalarWhereInput | LeagueScalarWhereInput[]
  }

  export type LeagueMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeagueMemberCreateWithoutUserInput, LeagueMemberUncheckedCreateWithoutUserInput> | LeagueMemberCreateWithoutUserInput[] | LeagueMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeagueMemberCreateOrConnectWithoutUserInput | LeagueMemberCreateOrConnectWithoutUserInput[]
    upsert?: LeagueMemberUpsertWithWhereUniqueWithoutUserInput | LeagueMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeagueMemberCreateManyUserInputEnvelope
    set?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[]
    disconnect?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[]
    delete?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[]
    connect?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[]
    update?: LeagueMemberUpdateWithWhereUniqueWithoutUserInput | LeagueMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeagueMemberUpdateManyWithWhereWithoutUserInput | LeagueMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeagueMemberScalarWhereInput | LeagueMemberScalarWhereInput[]
  }

  export type TeamUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamCreateWithoutUserInput, TeamUncheckedCreateWithoutUserInput> | TeamCreateWithoutUserInput[] | TeamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutUserInput | TeamCreateOrConnectWithoutUserInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutUserInput | TeamUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamCreateManyUserInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutUserInput | TeamUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutUserInput | TeamUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type PointsUpdateManyWithoutUserNestedInput = {
    create?: XOR<PointsCreateWithoutUserInput, PointsUncheckedCreateWithoutUserInput> | PointsCreateWithoutUserInput[] | PointsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointsCreateOrConnectWithoutUserInput | PointsCreateOrConnectWithoutUserInput[]
    upsert?: PointsUpsertWithWhereUniqueWithoutUserInput | PointsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PointsCreateManyUserInputEnvelope
    set?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    disconnect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    delete?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    connect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    update?: PointsUpdateWithWhereUniqueWithoutUserInput | PointsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PointsUpdateManyWithWhereWithoutUserInput | PointsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PointsScalarWhereInput | PointsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LeagueUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<LeagueCreateWithoutOwnerInput, LeagueUncheckedCreateWithoutOwnerInput> | LeagueCreateWithoutOwnerInput[] | LeagueUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: LeagueCreateOrConnectWithoutOwnerInput | LeagueCreateOrConnectWithoutOwnerInput[]
    upsert?: LeagueUpsertWithWhereUniqueWithoutOwnerInput | LeagueUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: LeagueCreateManyOwnerInputEnvelope
    set?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
    disconnect?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
    delete?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
    connect?: LeagueWhereUniqueInput | LeagueWhereUniqueInput[]
    update?: LeagueUpdateWithWhereUniqueWithoutOwnerInput | LeagueUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: LeagueUpdateManyWithWhereWithoutOwnerInput | LeagueUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: LeagueScalarWhereInput | LeagueScalarWhereInput[]
  }

  export type LeagueMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeagueMemberCreateWithoutUserInput, LeagueMemberUncheckedCreateWithoutUserInput> | LeagueMemberCreateWithoutUserInput[] | LeagueMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeagueMemberCreateOrConnectWithoutUserInput | LeagueMemberCreateOrConnectWithoutUserInput[]
    upsert?: LeagueMemberUpsertWithWhereUniqueWithoutUserInput | LeagueMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeagueMemberCreateManyUserInputEnvelope
    set?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[]
    disconnect?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[]
    delete?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[]
    connect?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[]
    update?: LeagueMemberUpdateWithWhereUniqueWithoutUserInput | LeagueMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeagueMemberUpdateManyWithWhereWithoutUserInput | LeagueMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeagueMemberScalarWhereInput | LeagueMemberScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamCreateWithoutUserInput, TeamUncheckedCreateWithoutUserInput> | TeamCreateWithoutUserInput[] | TeamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutUserInput | TeamCreateOrConnectWithoutUserInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutUserInput | TeamUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamCreateManyUserInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutUserInput | TeamUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutUserInput | TeamUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type PointsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PointsCreateWithoutUserInput, PointsUncheckedCreateWithoutUserInput> | PointsCreateWithoutUserInput[] | PointsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointsCreateOrConnectWithoutUserInput | PointsCreateOrConnectWithoutUserInput[]
    upsert?: PointsUpsertWithWhereUniqueWithoutUserInput | PointsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PointsCreateManyUserInputEnvelope
    set?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    disconnect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    delete?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    connect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    update?: PointsUpdateWithWhereUniqueWithoutUserInput | PointsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PointsUpdateManyWithWhereWithoutUserInput | PointsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PointsScalarWhereInput | PointsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOwnedLeaguesInput = {
    create?: XOR<UserCreateWithoutOwnedLeaguesInput, UserUncheckedCreateWithoutOwnedLeaguesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedLeaguesInput
    connect?: UserWhereUniqueInput
  }

  export type LeagueMemberCreateNestedManyWithoutLeagueInput = {
    create?: XOR<LeagueMemberCreateWithoutLeagueInput, LeagueMemberUncheckedCreateWithoutLeagueInput> | LeagueMemberCreateWithoutLeagueInput[] | LeagueMemberUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: LeagueMemberCreateOrConnectWithoutLeagueInput | LeagueMemberCreateOrConnectWithoutLeagueInput[]
    createMany?: LeagueMemberCreateManyLeagueInputEnvelope
    connect?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[]
  }

  export type PointsCreateNestedManyWithoutLeagueInput = {
    create?: XOR<PointsCreateWithoutLeagueInput, PointsUncheckedCreateWithoutLeagueInput> | PointsCreateWithoutLeagueInput[] | PointsUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: PointsCreateOrConnectWithoutLeagueInput | PointsCreateOrConnectWithoutLeagueInput[]
    createMany?: PointsCreateManyLeagueInputEnvelope
    connect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
  }

  export type TeamCreateNestedManyWithoutLeagueInput = {
    create?: XOR<TeamCreateWithoutLeagueInput, TeamUncheckedCreateWithoutLeagueInput> | TeamCreateWithoutLeagueInput[] | TeamUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutLeagueInput | TeamCreateOrConnectWithoutLeagueInput[]
    createMany?: TeamCreateManyLeagueInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type LeagueMemberUncheckedCreateNestedManyWithoutLeagueInput = {
    create?: XOR<LeagueMemberCreateWithoutLeagueInput, LeagueMemberUncheckedCreateWithoutLeagueInput> | LeagueMemberCreateWithoutLeagueInput[] | LeagueMemberUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: LeagueMemberCreateOrConnectWithoutLeagueInput | LeagueMemberCreateOrConnectWithoutLeagueInput[]
    createMany?: LeagueMemberCreateManyLeagueInputEnvelope
    connect?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[]
  }

  export type PointsUncheckedCreateNestedManyWithoutLeagueInput = {
    create?: XOR<PointsCreateWithoutLeagueInput, PointsUncheckedCreateWithoutLeagueInput> | PointsCreateWithoutLeagueInput[] | PointsUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: PointsCreateOrConnectWithoutLeagueInput | PointsCreateOrConnectWithoutLeagueInput[]
    createMany?: PointsCreateManyLeagueInputEnvelope
    connect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutLeagueInput = {
    create?: XOR<TeamCreateWithoutLeagueInput, TeamUncheckedCreateWithoutLeagueInput> | TeamCreateWithoutLeagueInput[] | TeamUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutLeagueInput | TeamCreateOrConnectWithoutLeagueInput[]
    createMany?: TeamCreateManyLeagueInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type EnumLeagueTypeFieldUpdateOperationsInput = {
    set?: $Enums.LeagueType
  }

  export type UserUpdateOneWithoutOwnedLeaguesNestedInput = {
    create?: XOR<UserCreateWithoutOwnedLeaguesInput, UserUncheckedCreateWithoutOwnedLeaguesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedLeaguesInput
    upsert?: UserUpsertWithoutOwnedLeaguesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedLeaguesInput, UserUpdateWithoutOwnedLeaguesInput>, UserUncheckedUpdateWithoutOwnedLeaguesInput>
  }

  export type LeagueMemberUpdateManyWithoutLeagueNestedInput = {
    create?: XOR<LeagueMemberCreateWithoutLeagueInput, LeagueMemberUncheckedCreateWithoutLeagueInput> | LeagueMemberCreateWithoutLeagueInput[] | LeagueMemberUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: LeagueMemberCreateOrConnectWithoutLeagueInput | LeagueMemberCreateOrConnectWithoutLeagueInput[]
    upsert?: LeagueMemberUpsertWithWhereUniqueWithoutLeagueInput | LeagueMemberUpsertWithWhereUniqueWithoutLeagueInput[]
    createMany?: LeagueMemberCreateManyLeagueInputEnvelope
    set?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[]
    disconnect?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[]
    delete?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[]
    connect?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[]
    update?: LeagueMemberUpdateWithWhereUniqueWithoutLeagueInput | LeagueMemberUpdateWithWhereUniqueWithoutLeagueInput[]
    updateMany?: LeagueMemberUpdateManyWithWhereWithoutLeagueInput | LeagueMemberUpdateManyWithWhereWithoutLeagueInput[]
    deleteMany?: LeagueMemberScalarWhereInput | LeagueMemberScalarWhereInput[]
  }

  export type PointsUpdateManyWithoutLeagueNestedInput = {
    create?: XOR<PointsCreateWithoutLeagueInput, PointsUncheckedCreateWithoutLeagueInput> | PointsCreateWithoutLeagueInput[] | PointsUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: PointsCreateOrConnectWithoutLeagueInput | PointsCreateOrConnectWithoutLeagueInput[]
    upsert?: PointsUpsertWithWhereUniqueWithoutLeagueInput | PointsUpsertWithWhereUniqueWithoutLeagueInput[]
    createMany?: PointsCreateManyLeagueInputEnvelope
    set?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    disconnect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    delete?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    connect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    update?: PointsUpdateWithWhereUniqueWithoutLeagueInput | PointsUpdateWithWhereUniqueWithoutLeagueInput[]
    updateMany?: PointsUpdateManyWithWhereWithoutLeagueInput | PointsUpdateManyWithWhereWithoutLeagueInput[]
    deleteMany?: PointsScalarWhereInput | PointsScalarWhereInput[]
  }

  export type TeamUpdateManyWithoutLeagueNestedInput = {
    create?: XOR<TeamCreateWithoutLeagueInput, TeamUncheckedCreateWithoutLeagueInput> | TeamCreateWithoutLeagueInput[] | TeamUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutLeagueInput | TeamCreateOrConnectWithoutLeagueInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutLeagueInput | TeamUpsertWithWhereUniqueWithoutLeagueInput[]
    createMany?: TeamCreateManyLeagueInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutLeagueInput | TeamUpdateWithWhereUniqueWithoutLeagueInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutLeagueInput | TeamUpdateManyWithWhereWithoutLeagueInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LeagueMemberUncheckedUpdateManyWithoutLeagueNestedInput = {
    create?: XOR<LeagueMemberCreateWithoutLeagueInput, LeagueMemberUncheckedCreateWithoutLeagueInput> | LeagueMemberCreateWithoutLeagueInput[] | LeagueMemberUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: LeagueMemberCreateOrConnectWithoutLeagueInput | LeagueMemberCreateOrConnectWithoutLeagueInput[]
    upsert?: LeagueMemberUpsertWithWhereUniqueWithoutLeagueInput | LeagueMemberUpsertWithWhereUniqueWithoutLeagueInput[]
    createMany?: LeagueMemberCreateManyLeagueInputEnvelope
    set?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[]
    disconnect?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[]
    delete?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[]
    connect?: LeagueMemberWhereUniqueInput | LeagueMemberWhereUniqueInput[]
    update?: LeagueMemberUpdateWithWhereUniqueWithoutLeagueInput | LeagueMemberUpdateWithWhereUniqueWithoutLeagueInput[]
    updateMany?: LeagueMemberUpdateManyWithWhereWithoutLeagueInput | LeagueMemberUpdateManyWithWhereWithoutLeagueInput[]
    deleteMany?: LeagueMemberScalarWhereInput | LeagueMemberScalarWhereInput[]
  }

  export type PointsUncheckedUpdateManyWithoutLeagueNestedInput = {
    create?: XOR<PointsCreateWithoutLeagueInput, PointsUncheckedCreateWithoutLeagueInput> | PointsCreateWithoutLeagueInput[] | PointsUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: PointsCreateOrConnectWithoutLeagueInput | PointsCreateOrConnectWithoutLeagueInput[]
    upsert?: PointsUpsertWithWhereUniqueWithoutLeagueInput | PointsUpsertWithWhereUniqueWithoutLeagueInput[]
    createMany?: PointsCreateManyLeagueInputEnvelope
    set?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    disconnect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    delete?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    connect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    update?: PointsUpdateWithWhereUniqueWithoutLeagueInput | PointsUpdateWithWhereUniqueWithoutLeagueInput[]
    updateMany?: PointsUpdateManyWithWhereWithoutLeagueInput | PointsUpdateManyWithWhereWithoutLeagueInput[]
    deleteMany?: PointsScalarWhereInput | PointsScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutLeagueNestedInput = {
    create?: XOR<TeamCreateWithoutLeagueInput, TeamUncheckedCreateWithoutLeagueInput> | TeamCreateWithoutLeagueInput[] | TeamUncheckedCreateWithoutLeagueInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutLeagueInput | TeamCreateOrConnectWithoutLeagueInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutLeagueInput | TeamUpsertWithWhereUniqueWithoutLeagueInput[]
    createMany?: TeamCreateManyLeagueInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutLeagueInput | TeamUpdateWithWhereUniqueWithoutLeagueInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutLeagueInput | TeamUpdateManyWithWhereWithoutLeagueInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type LeagueCreateNestedOneWithoutMembersInput = {
    create?: XOR<LeagueCreateWithoutMembersInput, LeagueUncheckedCreateWithoutMembersInput>
    connectOrCreate?: LeagueCreateOrConnectWithoutMembersInput
    connect?: LeagueWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type LeagueUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<LeagueCreateWithoutMembersInput, LeagueUncheckedCreateWithoutMembersInput>
    connectOrCreate?: LeagueCreateOrConnectWithoutMembersInput
    upsert?: LeagueUpsertWithoutMembersInput
    connect?: LeagueWhereUniqueInput
    update?: XOR<XOR<LeagueUpdateToOneWithWhereWithoutMembersInput, LeagueUpdateWithoutMembersInput>, LeagueUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type ConstructorCreateNestedOneWithoutDriversInput = {
    create?: XOR<ConstructorCreateWithoutDriversInput, ConstructorUncheckedCreateWithoutDriversInput>
    connectOrCreate?: ConstructorCreateOrConnectWithoutDriversInput
    connect?: ConstructorWhereUniqueInput
  }

  export type PredictionCreateNestedManyWithoutDriverInput = {
    create?: XOR<PredictionCreateWithoutDriverInput, PredictionUncheckedCreateWithoutDriverInput> | PredictionCreateWithoutDriverInput[] | PredictionUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutDriverInput | PredictionCreateOrConnectWithoutDriverInput[]
    createMany?: PredictionCreateManyDriverInputEnvelope
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
  }

  export type RaceResultCreateNestedManyWithoutDriverInput = {
    create?: XOR<RaceResultCreateWithoutDriverInput, RaceResultUncheckedCreateWithoutDriverInput> | RaceResultCreateWithoutDriverInput[] | RaceResultUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RaceResultCreateOrConnectWithoutDriverInput | RaceResultCreateOrConnectWithoutDriverInput[]
    createMany?: RaceResultCreateManyDriverInputEnvelope
    connect?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
  }

  export type PredictionUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<PredictionCreateWithoutDriverInput, PredictionUncheckedCreateWithoutDriverInput> | PredictionCreateWithoutDriverInput[] | PredictionUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutDriverInput | PredictionCreateOrConnectWithoutDriverInput[]
    createMany?: PredictionCreateManyDriverInputEnvelope
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
  }

  export type RaceResultUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<RaceResultCreateWithoutDriverInput, RaceResultUncheckedCreateWithoutDriverInput> | RaceResultCreateWithoutDriverInput[] | RaceResultUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RaceResultCreateOrConnectWithoutDriverInput | RaceResultCreateOrConnectWithoutDriverInput[]
    createMany?: RaceResultCreateManyDriverInputEnvelope
    connect?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ConstructorUpdateOneWithoutDriversNestedInput = {
    create?: XOR<ConstructorCreateWithoutDriversInput, ConstructorUncheckedCreateWithoutDriversInput>
    connectOrCreate?: ConstructorCreateOrConnectWithoutDriversInput
    upsert?: ConstructorUpsertWithoutDriversInput
    disconnect?: ConstructorWhereInput | boolean
    delete?: ConstructorWhereInput | boolean
    connect?: ConstructorWhereUniqueInput
    update?: XOR<XOR<ConstructorUpdateToOneWithWhereWithoutDriversInput, ConstructorUpdateWithoutDriversInput>, ConstructorUncheckedUpdateWithoutDriversInput>
  }

  export type PredictionUpdateManyWithoutDriverNestedInput = {
    create?: XOR<PredictionCreateWithoutDriverInput, PredictionUncheckedCreateWithoutDriverInput> | PredictionCreateWithoutDriverInput[] | PredictionUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutDriverInput | PredictionCreateOrConnectWithoutDriverInput[]
    upsert?: PredictionUpsertWithWhereUniqueWithoutDriverInput | PredictionUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: PredictionCreateManyDriverInputEnvelope
    set?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    disconnect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    delete?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    update?: PredictionUpdateWithWhereUniqueWithoutDriverInput | PredictionUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: PredictionUpdateManyWithWhereWithoutDriverInput | PredictionUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: PredictionScalarWhereInput | PredictionScalarWhereInput[]
  }

  export type RaceResultUpdateManyWithoutDriverNestedInput = {
    create?: XOR<RaceResultCreateWithoutDriverInput, RaceResultUncheckedCreateWithoutDriverInput> | RaceResultCreateWithoutDriverInput[] | RaceResultUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RaceResultCreateOrConnectWithoutDriverInput | RaceResultCreateOrConnectWithoutDriverInput[]
    upsert?: RaceResultUpsertWithWhereUniqueWithoutDriverInput | RaceResultUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: RaceResultCreateManyDriverInputEnvelope
    set?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    disconnect?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    delete?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    connect?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    update?: RaceResultUpdateWithWhereUniqueWithoutDriverInput | RaceResultUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: RaceResultUpdateManyWithWhereWithoutDriverInput | RaceResultUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: RaceResultScalarWhereInput | RaceResultScalarWhereInput[]
  }

  export type PredictionUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<PredictionCreateWithoutDriverInput, PredictionUncheckedCreateWithoutDriverInput> | PredictionCreateWithoutDriverInput[] | PredictionUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutDriverInput | PredictionCreateOrConnectWithoutDriverInput[]
    upsert?: PredictionUpsertWithWhereUniqueWithoutDriverInput | PredictionUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: PredictionCreateManyDriverInputEnvelope
    set?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    disconnect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    delete?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    update?: PredictionUpdateWithWhereUniqueWithoutDriverInput | PredictionUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: PredictionUpdateManyWithWhereWithoutDriverInput | PredictionUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: PredictionScalarWhereInput | PredictionScalarWhereInput[]
  }

  export type RaceResultUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<RaceResultCreateWithoutDriverInput, RaceResultUncheckedCreateWithoutDriverInput> | RaceResultCreateWithoutDriverInput[] | RaceResultUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RaceResultCreateOrConnectWithoutDriverInput | RaceResultCreateOrConnectWithoutDriverInput[]
    upsert?: RaceResultUpsertWithWhereUniqueWithoutDriverInput | RaceResultUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: RaceResultCreateManyDriverInputEnvelope
    set?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    disconnect?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    delete?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    connect?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    update?: RaceResultUpdateWithWhereUniqueWithoutDriverInput | RaceResultUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: RaceResultUpdateManyWithWhereWithoutDriverInput | RaceResultUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: RaceResultScalarWhereInput | RaceResultScalarWhereInput[]
  }

  export type DriverCreateNestedManyWithoutConstructorInput = {
    create?: XOR<DriverCreateWithoutConstructorInput, DriverUncheckedCreateWithoutConstructorInput> | DriverCreateWithoutConstructorInput[] | DriverUncheckedCreateWithoutConstructorInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutConstructorInput | DriverCreateOrConnectWithoutConstructorInput[]
    createMany?: DriverCreateManyConstructorInputEnvelope
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
  }

  export type TeamCreateNestedManyWithoutConstructorInput = {
    create?: XOR<TeamCreateWithoutConstructorInput, TeamUncheckedCreateWithoutConstructorInput> | TeamCreateWithoutConstructorInput[] | TeamUncheckedCreateWithoutConstructorInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutConstructorInput | TeamCreateOrConnectWithoutConstructorInput[]
    createMany?: TeamCreateManyConstructorInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type DriverUncheckedCreateNestedManyWithoutConstructorInput = {
    create?: XOR<DriverCreateWithoutConstructorInput, DriverUncheckedCreateWithoutConstructorInput> | DriverCreateWithoutConstructorInput[] | DriverUncheckedCreateWithoutConstructorInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutConstructorInput | DriverCreateOrConnectWithoutConstructorInput[]
    createMany?: DriverCreateManyConstructorInputEnvelope
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutConstructorInput = {
    create?: XOR<TeamCreateWithoutConstructorInput, TeamUncheckedCreateWithoutConstructorInput> | TeamCreateWithoutConstructorInput[] | TeamUncheckedCreateWithoutConstructorInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutConstructorInput | TeamCreateOrConnectWithoutConstructorInput[]
    createMany?: TeamCreateManyConstructorInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type DriverUpdateManyWithoutConstructorNestedInput = {
    create?: XOR<DriverCreateWithoutConstructorInput, DriverUncheckedCreateWithoutConstructorInput> | DriverCreateWithoutConstructorInput[] | DriverUncheckedCreateWithoutConstructorInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutConstructorInput | DriverCreateOrConnectWithoutConstructorInput[]
    upsert?: DriverUpsertWithWhereUniqueWithoutConstructorInput | DriverUpsertWithWhereUniqueWithoutConstructorInput[]
    createMany?: DriverCreateManyConstructorInputEnvelope
    set?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    disconnect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    delete?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    update?: DriverUpdateWithWhereUniqueWithoutConstructorInput | DriverUpdateWithWhereUniqueWithoutConstructorInput[]
    updateMany?: DriverUpdateManyWithWhereWithoutConstructorInput | DriverUpdateManyWithWhereWithoutConstructorInput[]
    deleteMany?: DriverScalarWhereInput | DriverScalarWhereInput[]
  }

  export type TeamUpdateManyWithoutConstructorNestedInput = {
    create?: XOR<TeamCreateWithoutConstructorInput, TeamUncheckedCreateWithoutConstructorInput> | TeamCreateWithoutConstructorInput[] | TeamUncheckedCreateWithoutConstructorInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutConstructorInput | TeamCreateOrConnectWithoutConstructorInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutConstructorInput | TeamUpsertWithWhereUniqueWithoutConstructorInput[]
    createMany?: TeamCreateManyConstructorInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutConstructorInput | TeamUpdateWithWhereUniqueWithoutConstructorInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutConstructorInput | TeamUpdateManyWithWhereWithoutConstructorInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type DriverUncheckedUpdateManyWithoutConstructorNestedInput = {
    create?: XOR<DriverCreateWithoutConstructorInput, DriverUncheckedCreateWithoutConstructorInput> | DriverCreateWithoutConstructorInput[] | DriverUncheckedCreateWithoutConstructorInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutConstructorInput | DriverCreateOrConnectWithoutConstructorInput[]
    upsert?: DriverUpsertWithWhereUniqueWithoutConstructorInput | DriverUpsertWithWhereUniqueWithoutConstructorInput[]
    createMany?: DriverCreateManyConstructorInputEnvelope
    set?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    disconnect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    delete?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    update?: DriverUpdateWithWhereUniqueWithoutConstructorInput | DriverUpdateWithWhereUniqueWithoutConstructorInput[]
    updateMany?: DriverUpdateManyWithWhereWithoutConstructorInput | DriverUpdateManyWithWhereWithoutConstructorInput[]
    deleteMany?: DriverScalarWhereInput | DriverScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutConstructorNestedInput = {
    create?: XOR<TeamCreateWithoutConstructorInput, TeamUncheckedCreateWithoutConstructorInput> | TeamCreateWithoutConstructorInput[] | TeamUncheckedCreateWithoutConstructorInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutConstructorInput | TeamCreateOrConnectWithoutConstructorInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutConstructorInput | TeamUpsertWithWhereUniqueWithoutConstructorInput[]
    createMany?: TeamCreateManyConstructorInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutConstructorInput | TeamUpdateWithWhereUniqueWithoutConstructorInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutConstructorInput | TeamUpdateManyWithWhereWithoutConstructorInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type TeamCreateNestedManyWithoutRaceInput = {
    create?: XOR<TeamCreateWithoutRaceInput, TeamUncheckedCreateWithoutRaceInput> | TeamCreateWithoutRaceInput[] | TeamUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutRaceInput | TeamCreateOrConnectWithoutRaceInput[]
    createMany?: TeamCreateManyRaceInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type RaceResultCreateNestedManyWithoutRaceInput = {
    create?: XOR<RaceResultCreateWithoutRaceInput, RaceResultUncheckedCreateWithoutRaceInput> | RaceResultCreateWithoutRaceInput[] | RaceResultUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceResultCreateOrConnectWithoutRaceInput | RaceResultCreateOrConnectWithoutRaceInput[]
    createMany?: RaceResultCreateManyRaceInputEnvelope
    connect?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
  }

  export type PointsCreateNestedManyWithoutRaceInput = {
    create?: XOR<PointsCreateWithoutRaceInput, PointsUncheckedCreateWithoutRaceInput> | PointsCreateWithoutRaceInput[] | PointsUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: PointsCreateOrConnectWithoutRaceInput | PointsCreateOrConnectWithoutRaceInput[]
    createMany?: PointsCreateManyRaceInputEnvelope
    connect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutRaceInput = {
    create?: XOR<TeamCreateWithoutRaceInput, TeamUncheckedCreateWithoutRaceInput> | TeamCreateWithoutRaceInput[] | TeamUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutRaceInput | TeamCreateOrConnectWithoutRaceInput[]
    createMany?: TeamCreateManyRaceInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type RaceResultUncheckedCreateNestedManyWithoutRaceInput = {
    create?: XOR<RaceResultCreateWithoutRaceInput, RaceResultUncheckedCreateWithoutRaceInput> | RaceResultCreateWithoutRaceInput[] | RaceResultUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceResultCreateOrConnectWithoutRaceInput | RaceResultCreateOrConnectWithoutRaceInput[]
    createMany?: RaceResultCreateManyRaceInputEnvelope
    connect?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
  }

  export type PointsUncheckedCreateNestedManyWithoutRaceInput = {
    create?: XOR<PointsCreateWithoutRaceInput, PointsUncheckedCreateWithoutRaceInput> | PointsCreateWithoutRaceInput[] | PointsUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: PointsCreateOrConnectWithoutRaceInput | PointsCreateOrConnectWithoutRaceInput[]
    createMany?: PointsCreateManyRaceInputEnvelope
    connect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRaceStatusFieldUpdateOperationsInput = {
    set?: $Enums.RaceStatus
  }

  export type TeamUpdateManyWithoutRaceNestedInput = {
    create?: XOR<TeamCreateWithoutRaceInput, TeamUncheckedCreateWithoutRaceInput> | TeamCreateWithoutRaceInput[] | TeamUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutRaceInput | TeamCreateOrConnectWithoutRaceInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutRaceInput | TeamUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: TeamCreateManyRaceInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutRaceInput | TeamUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutRaceInput | TeamUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type RaceResultUpdateManyWithoutRaceNestedInput = {
    create?: XOR<RaceResultCreateWithoutRaceInput, RaceResultUncheckedCreateWithoutRaceInput> | RaceResultCreateWithoutRaceInput[] | RaceResultUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceResultCreateOrConnectWithoutRaceInput | RaceResultCreateOrConnectWithoutRaceInput[]
    upsert?: RaceResultUpsertWithWhereUniqueWithoutRaceInput | RaceResultUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: RaceResultCreateManyRaceInputEnvelope
    set?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    disconnect?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    delete?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    connect?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    update?: RaceResultUpdateWithWhereUniqueWithoutRaceInput | RaceResultUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: RaceResultUpdateManyWithWhereWithoutRaceInput | RaceResultUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: RaceResultScalarWhereInput | RaceResultScalarWhereInput[]
  }

  export type PointsUpdateManyWithoutRaceNestedInput = {
    create?: XOR<PointsCreateWithoutRaceInput, PointsUncheckedCreateWithoutRaceInput> | PointsCreateWithoutRaceInput[] | PointsUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: PointsCreateOrConnectWithoutRaceInput | PointsCreateOrConnectWithoutRaceInput[]
    upsert?: PointsUpsertWithWhereUniqueWithoutRaceInput | PointsUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: PointsCreateManyRaceInputEnvelope
    set?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    disconnect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    delete?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    connect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    update?: PointsUpdateWithWhereUniqueWithoutRaceInput | PointsUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: PointsUpdateManyWithWhereWithoutRaceInput | PointsUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: PointsScalarWhereInput | PointsScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutRaceNestedInput = {
    create?: XOR<TeamCreateWithoutRaceInput, TeamUncheckedCreateWithoutRaceInput> | TeamCreateWithoutRaceInput[] | TeamUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutRaceInput | TeamCreateOrConnectWithoutRaceInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutRaceInput | TeamUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: TeamCreateManyRaceInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutRaceInput | TeamUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutRaceInput | TeamUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type RaceResultUncheckedUpdateManyWithoutRaceNestedInput = {
    create?: XOR<RaceResultCreateWithoutRaceInput, RaceResultUncheckedCreateWithoutRaceInput> | RaceResultCreateWithoutRaceInput[] | RaceResultUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: RaceResultCreateOrConnectWithoutRaceInput | RaceResultCreateOrConnectWithoutRaceInput[]
    upsert?: RaceResultUpsertWithWhereUniqueWithoutRaceInput | RaceResultUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: RaceResultCreateManyRaceInputEnvelope
    set?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    disconnect?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    delete?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    connect?: RaceResultWhereUniqueInput | RaceResultWhereUniqueInput[]
    update?: RaceResultUpdateWithWhereUniqueWithoutRaceInput | RaceResultUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: RaceResultUpdateManyWithWhereWithoutRaceInput | RaceResultUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: RaceResultScalarWhereInput | RaceResultScalarWhereInput[]
  }

  export type PointsUncheckedUpdateManyWithoutRaceNestedInput = {
    create?: XOR<PointsCreateWithoutRaceInput, PointsUncheckedCreateWithoutRaceInput> | PointsCreateWithoutRaceInput[] | PointsUncheckedCreateWithoutRaceInput[]
    connectOrCreate?: PointsCreateOrConnectWithoutRaceInput | PointsCreateOrConnectWithoutRaceInput[]
    upsert?: PointsUpsertWithWhereUniqueWithoutRaceInput | PointsUpsertWithWhereUniqueWithoutRaceInput[]
    createMany?: PointsCreateManyRaceInputEnvelope
    set?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    disconnect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    delete?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    connect?: PointsWhereUniqueInput | PointsWhereUniqueInput[]
    update?: PointsUpdateWithWhereUniqueWithoutRaceInput | PointsUpdateWithWhereUniqueWithoutRaceInput[]
    updateMany?: PointsUpdateManyWithWhereWithoutRaceInput | PointsUpdateManyWithWhereWithoutRaceInput[]
    deleteMany?: PointsScalarWhereInput | PointsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTeamsInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput
    connect?: UserWhereUniqueInput
  }

  export type RaceCreateNestedOneWithoutTeamsInput = {
    create?: XOR<RaceCreateWithoutTeamsInput, RaceUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: RaceCreateOrConnectWithoutTeamsInput
    connect?: RaceWhereUniqueInput
  }

  export type LeagueCreateNestedOneWithoutTeamsInput = {
    create?: XOR<LeagueCreateWithoutTeamsInput, LeagueUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: LeagueCreateOrConnectWithoutTeamsInput
    connect?: LeagueWhereUniqueInput
  }

  export type ConstructorCreateNestedOneWithoutTeamsInput = {
    create?: XOR<ConstructorCreateWithoutTeamsInput, ConstructorUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: ConstructorCreateOrConnectWithoutTeamsInput
    connect?: ConstructorWhereUniqueInput
  }

  export type PredictionCreateNestedManyWithoutTeamInput = {
    create?: XOR<PredictionCreateWithoutTeamInput, PredictionUncheckedCreateWithoutTeamInput> | PredictionCreateWithoutTeamInput[] | PredictionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutTeamInput | PredictionCreateOrConnectWithoutTeamInput[]
    createMany?: PredictionCreateManyTeamInputEnvelope
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
  }

  export type PredictionUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<PredictionCreateWithoutTeamInput, PredictionUncheckedCreateWithoutTeamInput> | PredictionCreateWithoutTeamInput[] | PredictionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutTeamInput | PredictionCreateOrConnectWithoutTeamInput[]
    createMany?: PredictionCreateManyTeamInputEnvelope
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamsInput
    upsert?: UserUpsertWithoutTeamsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeamsInput, UserUpdateWithoutTeamsInput>, UserUncheckedUpdateWithoutTeamsInput>
  }

  export type RaceUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<RaceCreateWithoutTeamsInput, RaceUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: RaceCreateOrConnectWithoutTeamsInput
    upsert?: RaceUpsertWithoutTeamsInput
    connect?: RaceWhereUniqueInput
    update?: XOR<XOR<RaceUpdateToOneWithWhereWithoutTeamsInput, RaceUpdateWithoutTeamsInput>, RaceUncheckedUpdateWithoutTeamsInput>
  }

  export type LeagueUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<LeagueCreateWithoutTeamsInput, LeagueUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: LeagueCreateOrConnectWithoutTeamsInput
    upsert?: LeagueUpsertWithoutTeamsInput
    connect?: LeagueWhereUniqueInput
    update?: XOR<XOR<LeagueUpdateToOneWithWhereWithoutTeamsInput, LeagueUpdateWithoutTeamsInput>, LeagueUncheckedUpdateWithoutTeamsInput>
  }

  export type ConstructorUpdateOneWithoutTeamsNestedInput = {
    create?: XOR<ConstructorCreateWithoutTeamsInput, ConstructorUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: ConstructorCreateOrConnectWithoutTeamsInput
    upsert?: ConstructorUpsertWithoutTeamsInput
    disconnect?: ConstructorWhereInput | boolean
    delete?: ConstructorWhereInput | boolean
    connect?: ConstructorWhereUniqueInput
    update?: XOR<XOR<ConstructorUpdateToOneWithWhereWithoutTeamsInput, ConstructorUpdateWithoutTeamsInput>, ConstructorUncheckedUpdateWithoutTeamsInput>
  }

  export type PredictionUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PredictionCreateWithoutTeamInput, PredictionUncheckedCreateWithoutTeamInput> | PredictionCreateWithoutTeamInput[] | PredictionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutTeamInput | PredictionCreateOrConnectWithoutTeamInput[]
    upsert?: PredictionUpsertWithWhereUniqueWithoutTeamInput | PredictionUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PredictionCreateManyTeamInputEnvelope
    set?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    disconnect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    delete?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    update?: PredictionUpdateWithWhereUniqueWithoutTeamInput | PredictionUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PredictionUpdateManyWithWhereWithoutTeamInput | PredictionUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PredictionScalarWhereInput | PredictionScalarWhereInput[]
  }

  export type PredictionUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PredictionCreateWithoutTeamInput, PredictionUncheckedCreateWithoutTeamInput> | PredictionCreateWithoutTeamInput[] | PredictionUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PredictionCreateOrConnectWithoutTeamInput | PredictionCreateOrConnectWithoutTeamInput[]
    upsert?: PredictionUpsertWithWhereUniqueWithoutTeamInput | PredictionUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PredictionCreateManyTeamInputEnvelope
    set?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    disconnect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    delete?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    connect?: PredictionWhereUniqueInput | PredictionWhereUniqueInput[]
    update?: PredictionUpdateWithWhereUniqueWithoutTeamInput | PredictionUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PredictionUpdateManyWithWhereWithoutTeamInput | PredictionUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PredictionScalarWhereInput | PredictionScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutPredictionsInput = {
    create?: XOR<TeamCreateWithoutPredictionsInput, TeamUncheckedCreateWithoutPredictionsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPredictionsInput
    connect?: TeamWhereUniqueInput
  }

  export type DriverCreateNestedOneWithoutPredictionsInput = {
    create?: XOR<DriverCreateWithoutPredictionsInput, DriverUncheckedCreateWithoutPredictionsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutPredictionsInput
    connect?: DriverWhereUniqueInput
  }

  export type TeamUpdateOneRequiredWithoutPredictionsNestedInput = {
    create?: XOR<TeamCreateWithoutPredictionsInput, TeamUncheckedCreateWithoutPredictionsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPredictionsInput
    upsert?: TeamUpsertWithoutPredictionsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutPredictionsInput, TeamUpdateWithoutPredictionsInput>, TeamUncheckedUpdateWithoutPredictionsInput>
  }

  export type DriverUpdateOneRequiredWithoutPredictionsNestedInput = {
    create?: XOR<DriverCreateWithoutPredictionsInput, DriverUncheckedCreateWithoutPredictionsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutPredictionsInput
    upsert?: DriverUpsertWithoutPredictionsInput
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutPredictionsInput, DriverUpdateWithoutPredictionsInput>, DriverUncheckedUpdateWithoutPredictionsInput>
  }

  export type RaceCreateNestedOneWithoutRaceResultsInput = {
    create?: XOR<RaceCreateWithoutRaceResultsInput, RaceUncheckedCreateWithoutRaceResultsInput>
    connectOrCreate?: RaceCreateOrConnectWithoutRaceResultsInput
    connect?: RaceWhereUniqueInput
  }

  export type DriverCreateNestedOneWithoutRaceResultsInput = {
    create?: XOR<DriverCreateWithoutRaceResultsInput, DriverUncheckedCreateWithoutRaceResultsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutRaceResultsInput
    connect?: DriverWhereUniqueInput
  }

  export type RaceUpdateOneRequiredWithoutRaceResultsNestedInput = {
    create?: XOR<RaceCreateWithoutRaceResultsInput, RaceUncheckedCreateWithoutRaceResultsInput>
    connectOrCreate?: RaceCreateOrConnectWithoutRaceResultsInput
    upsert?: RaceUpsertWithoutRaceResultsInput
    connect?: RaceWhereUniqueInput
    update?: XOR<XOR<RaceUpdateToOneWithWhereWithoutRaceResultsInput, RaceUpdateWithoutRaceResultsInput>, RaceUncheckedUpdateWithoutRaceResultsInput>
  }

  export type DriverUpdateOneRequiredWithoutRaceResultsNestedInput = {
    create?: XOR<DriverCreateWithoutRaceResultsInput, DriverUncheckedCreateWithoutRaceResultsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutRaceResultsInput
    upsert?: DriverUpsertWithoutRaceResultsInput
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutRaceResultsInput, DriverUpdateWithoutRaceResultsInput>, DriverUncheckedUpdateWithoutRaceResultsInput>
  }

  export type UserCreateNestedOneWithoutPointsInput = {
    create?: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointsInput
    connect?: UserWhereUniqueInput
  }

  export type RaceCreateNestedOneWithoutPointsInput = {
    create?: XOR<RaceCreateWithoutPointsInput, RaceUncheckedCreateWithoutPointsInput>
    connectOrCreate?: RaceCreateOrConnectWithoutPointsInput
    connect?: RaceWhereUniqueInput
  }

  export type LeagueCreateNestedOneWithoutPointsInput = {
    create?: XOR<LeagueCreateWithoutPointsInput, LeagueUncheckedCreateWithoutPointsInput>
    connectOrCreate?: LeagueCreateOrConnectWithoutPointsInput
    connect?: LeagueWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPointsNestedInput = {
    create?: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointsInput
    upsert?: UserUpsertWithoutPointsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPointsInput, UserUpdateWithoutPointsInput>, UserUncheckedUpdateWithoutPointsInput>
  }

  export type RaceUpdateOneRequiredWithoutPointsNestedInput = {
    create?: XOR<RaceCreateWithoutPointsInput, RaceUncheckedCreateWithoutPointsInput>
    connectOrCreate?: RaceCreateOrConnectWithoutPointsInput
    upsert?: RaceUpsertWithoutPointsInput
    connect?: RaceWhereUniqueInput
    update?: XOR<XOR<RaceUpdateToOneWithWhereWithoutPointsInput, RaceUpdateWithoutPointsInput>, RaceUncheckedUpdateWithoutPointsInput>
  }

  export type LeagueUpdateOneRequiredWithoutPointsNestedInput = {
    create?: XOR<LeagueCreateWithoutPointsInput, LeagueUncheckedCreateWithoutPointsInput>
    connectOrCreate?: LeagueCreateOrConnectWithoutPointsInput
    upsert?: LeagueUpsertWithoutPointsInput
    connect?: LeagueWhereUniqueInput
    update?: XOR<XOR<LeagueUpdateToOneWithWhereWithoutPointsInput, LeagueUpdateWithoutPointsInput>, LeagueUncheckedUpdateWithoutPointsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumLeagueTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LeagueType | EnumLeagueTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeagueType[] | ListEnumLeagueTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeagueType[] | ListEnumLeagueTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeagueTypeFilter<$PrismaModel> | $Enums.LeagueType
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumLeagueTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeagueType | EnumLeagueTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeagueType[] | ListEnumLeagueTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeagueType[] | ListEnumLeagueTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeagueTypeWithAggregatesFilter<$PrismaModel> | $Enums.LeagueType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeagueTypeFilter<$PrismaModel>
    _max?: NestedEnumLeagueTypeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRaceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RaceStatus | EnumRaceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RaceStatus[] | ListEnumRaceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RaceStatus[] | ListEnumRaceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRaceStatusFilter<$PrismaModel> | $Enums.RaceStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRaceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RaceStatus | EnumRaceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RaceStatus[] | ListEnumRaceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RaceStatus[] | ListEnumRaceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRaceStatusWithAggregatesFilter<$PrismaModel> | $Enums.RaceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRaceStatusFilter<$PrismaModel>
    _max?: NestedEnumRaceStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LeagueCreateWithoutOwnerInput = {
    name: string
    code: string
    createdAt?: Date | string
    league_type?: $Enums.LeagueType
    members?: LeagueMemberCreateNestedManyWithoutLeagueInput
    points?: PointsCreateNestedManyWithoutLeagueInput
    teams?: TeamCreateNestedManyWithoutLeagueInput
  }

  export type LeagueUncheckedCreateWithoutOwnerInput = {
    id?: number
    name: string
    code: string
    createdAt?: Date | string
    league_type?: $Enums.LeagueType
    members?: LeagueMemberUncheckedCreateNestedManyWithoutLeagueInput
    points?: PointsUncheckedCreateNestedManyWithoutLeagueInput
    teams?: TeamUncheckedCreateNestedManyWithoutLeagueInput
  }

  export type LeagueCreateOrConnectWithoutOwnerInput = {
    where: LeagueWhereUniqueInput
    create: XOR<LeagueCreateWithoutOwnerInput, LeagueUncheckedCreateWithoutOwnerInput>
  }

  export type LeagueCreateManyOwnerInputEnvelope = {
    data: LeagueCreateManyOwnerInput | LeagueCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type LeagueMemberCreateWithoutUserInput = {
    joinedAt?: Date | string
    league: LeagueCreateNestedOneWithoutMembersInput
  }

  export type LeagueMemberUncheckedCreateWithoutUserInput = {
    id?: number
    leagueId: number
    joinedAt?: Date | string
  }

  export type LeagueMemberCreateOrConnectWithoutUserInput = {
    where: LeagueMemberWhereUniqueInput
    create: XOR<LeagueMemberCreateWithoutUserInput, LeagueMemberUncheckedCreateWithoutUserInput>
  }

  export type LeagueMemberCreateManyUserInputEnvelope = {
    data: LeagueMemberCreateManyUserInput | LeagueMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeamCreateWithoutUserInput = {
    locked?: boolean
    race: RaceCreateNestedOneWithoutTeamsInput
    league: LeagueCreateNestedOneWithoutTeamsInput
    predictions?: PredictionCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutUserInput = {
    id?: number
    raceId: number
    leagueId: number
    locked?: boolean
    constructorId?: number | null
    predictions?: PredictionUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutUserInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutUserInput, TeamUncheckedCreateWithoutUserInput>
  }

  export type TeamCreateManyUserInputEnvelope = {
    data: TeamCreateManyUserInput | TeamCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PointsCreateWithoutUserInput = {
    totalPts?: number
    breakdown?: NullableJsonNullValueInput | InputJsonValue
    race: RaceCreateNestedOneWithoutPointsInput
    league: LeagueCreateNestedOneWithoutPointsInput
  }

  export type PointsUncheckedCreateWithoutUserInput = {
    id?: number
    raceId: number
    leagueId: number
    totalPts?: number
    breakdown?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PointsCreateOrConnectWithoutUserInput = {
    where: PointsWhereUniqueInput
    create: XOR<PointsCreateWithoutUserInput, PointsUncheckedCreateWithoutUserInput>
  }

  export type PointsCreateManyUserInputEnvelope = {
    data: PointsCreateManyUserInput | PointsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LeagueUpsertWithWhereUniqueWithoutOwnerInput = {
    where: LeagueWhereUniqueInput
    update: XOR<LeagueUpdateWithoutOwnerInput, LeagueUncheckedUpdateWithoutOwnerInput>
    create: XOR<LeagueCreateWithoutOwnerInput, LeagueUncheckedCreateWithoutOwnerInput>
  }

  export type LeagueUpdateWithWhereUniqueWithoutOwnerInput = {
    where: LeagueWhereUniqueInput
    data: XOR<LeagueUpdateWithoutOwnerInput, LeagueUncheckedUpdateWithoutOwnerInput>
  }

  export type LeagueUpdateManyWithWhereWithoutOwnerInput = {
    where: LeagueScalarWhereInput
    data: XOR<LeagueUpdateManyMutationInput, LeagueUncheckedUpdateManyWithoutOwnerInput>
  }

  export type LeagueScalarWhereInput = {
    AND?: LeagueScalarWhereInput | LeagueScalarWhereInput[]
    OR?: LeagueScalarWhereInput[]
    NOT?: LeagueScalarWhereInput | LeagueScalarWhereInput[]
    id?: IntFilter<"League"> | number
    name?: StringFilter<"League"> | string
    code?: StringFilter<"League"> | string
    ownerId?: IntNullableFilter<"League"> | number | null
    createdAt?: DateTimeFilter<"League"> | Date | string
    league_type?: EnumLeagueTypeFilter<"League"> | $Enums.LeagueType
  }

  export type LeagueMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: LeagueMemberWhereUniqueInput
    update: XOR<LeagueMemberUpdateWithoutUserInput, LeagueMemberUncheckedUpdateWithoutUserInput>
    create: XOR<LeagueMemberCreateWithoutUserInput, LeagueMemberUncheckedCreateWithoutUserInput>
  }

  export type LeagueMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: LeagueMemberWhereUniqueInput
    data: XOR<LeagueMemberUpdateWithoutUserInput, LeagueMemberUncheckedUpdateWithoutUserInput>
  }

  export type LeagueMemberUpdateManyWithWhereWithoutUserInput = {
    where: LeagueMemberScalarWhereInput
    data: XOR<LeagueMemberUpdateManyMutationInput, LeagueMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type LeagueMemberScalarWhereInput = {
    AND?: LeagueMemberScalarWhereInput | LeagueMemberScalarWhereInput[]
    OR?: LeagueMemberScalarWhereInput[]
    NOT?: LeagueMemberScalarWhereInput | LeagueMemberScalarWhereInput[]
    id?: IntFilter<"LeagueMember"> | number
    leagueId?: IntFilter<"LeagueMember"> | number
    userId?: IntFilter<"LeagueMember"> | number
    joinedAt?: DateTimeFilter<"LeagueMember"> | Date | string
  }

  export type TeamUpsertWithWhereUniqueWithoutUserInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutUserInput, TeamUncheckedUpdateWithoutUserInput>
    create: XOR<TeamCreateWithoutUserInput, TeamUncheckedCreateWithoutUserInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutUserInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutUserInput, TeamUncheckedUpdateWithoutUserInput>
  }

  export type TeamUpdateManyWithWhereWithoutUserInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutUserInput>
  }

  export type TeamScalarWhereInput = {
    AND?: TeamScalarWhereInput | TeamScalarWhereInput[]
    OR?: TeamScalarWhereInput[]
    NOT?: TeamScalarWhereInput | TeamScalarWhereInput[]
    id?: IntFilter<"Team"> | number
    userId?: IntFilter<"Team"> | number
    raceId?: IntFilter<"Team"> | number
    leagueId?: IntFilter<"Team"> | number
    locked?: BoolFilter<"Team"> | boolean
    constructorId?: IntNullableFilter<"Team"> | number | null
  }

  export type PointsUpsertWithWhereUniqueWithoutUserInput = {
    where: PointsWhereUniqueInput
    update: XOR<PointsUpdateWithoutUserInput, PointsUncheckedUpdateWithoutUserInput>
    create: XOR<PointsCreateWithoutUserInput, PointsUncheckedCreateWithoutUserInput>
  }

  export type PointsUpdateWithWhereUniqueWithoutUserInput = {
    where: PointsWhereUniqueInput
    data: XOR<PointsUpdateWithoutUserInput, PointsUncheckedUpdateWithoutUserInput>
  }

  export type PointsUpdateManyWithWhereWithoutUserInput = {
    where: PointsScalarWhereInput
    data: XOR<PointsUpdateManyMutationInput, PointsUncheckedUpdateManyWithoutUserInput>
  }

  export type PointsScalarWhereInput = {
    AND?: PointsScalarWhereInput | PointsScalarWhereInput[]
    OR?: PointsScalarWhereInput[]
    NOT?: PointsScalarWhereInput | PointsScalarWhereInput[]
    id?: IntFilter<"Points"> | number
    userId?: IntFilter<"Points"> | number
    raceId?: IntFilter<"Points"> | number
    leagueId?: IntFilter<"Points"> | number
    totalPts?: IntFilter<"Points"> | number
    breakdown?: JsonNullableFilter<"Points">
  }

  export type UserCreateWithoutOwnedLeaguesInput = {
    username: string
    email: string
    password: string
    phone_no: string
    created_at?: Date | string
    role?: $Enums.Role
    memberships?: LeagueMemberCreateNestedManyWithoutUserInput
    teams?: TeamCreateNestedManyWithoutUserInput
    points?: PointsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedLeaguesInput = {
    id?: number
    username: string
    email: string
    password: string
    phone_no: string
    created_at?: Date | string
    role?: $Enums.Role
    memberships?: LeagueMemberUncheckedCreateNestedManyWithoutUserInput
    teams?: TeamUncheckedCreateNestedManyWithoutUserInput
    points?: PointsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedLeaguesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedLeaguesInput, UserUncheckedCreateWithoutOwnedLeaguesInput>
  }

  export type LeagueMemberCreateWithoutLeagueInput = {
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type LeagueMemberUncheckedCreateWithoutLeagueInput = {
    id?: number
    userId: number
    joinedAt?: Date | string
  }

  export type LeagueMemberCreateOrConnectWithoutLeagueInput = {
    where: LeagueMemberWhereUniqueInput
    create: XOR<LeagueMemberCreateWithoutLeagueInput, LeagueMemberUncheckedCreateWithoutLeagueInput>
  }

  export type LeagueMemberCreateManyLeagueInputEnvelope = {
    data: LeagueMemberCreateManyLeagueInput | LeagueMemberCreateManyLeagueInput[]
    skipDuplicates?: boolean
  }

  export type PointsCreateWithoutLeagueInput = {
    totalPts?: number
    breakdown?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutPointsInput
    race: RaceCreateNestedOneWithoutPointsInput
  }

  export type PointsUncheckedCreateWithoutLeagueInput = {
    id?: number
    userId: number
    raceId: number
    totalPts?: number
    breakdown?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PointsCreateOrConnectWithoutLeagueInput = {
    where: PointsWhereUniqueInput
    create: XOR<PointsCreateWithoutLeagueInput, PointsUncheckedCreateWithoutLeagueInput>
  }

  export type PointsCreateManyLeagueInputEnvelope = {
    data: PointsCreateManyLeagueInput | PointsCreateManyLeagueInput[]
    skipDuplicates?: boolean
  }

  export type TeamCreateWithoutLeagueInput = {
    locked?: boolean
    user: UserCreateNestedOneWithoutTeamsInput
    race: RaceCreateNestedOneWithoutTeamsInput
    predictions?: PredictionCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutLeagueInput = {
    id?: number
    userId: number
    raceId: number
    locked?: boolean
    constructorId?: number | null
    predictions?: PredictionUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutLeagueInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutLeagueInput, TeamUncheckedCreateWithoutLeagueInput>
  }

  export type TeamCreateManyLeagueInputEnvelope = {
    data: TeamCreateManyLeagueInput | TeamCreateManyLeagueInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedLeaguesInput = {
    update: XOR<UserUpdateWithoutOwnedLeaguesInput, UserUncheckedUpdateWithoutOwnedLeaguesInput>
    create: XOR<UserCreateWithoutOwnedLeaguesInput, UserUncheckedCreateWithoutOwnedLeaguesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedLeaguesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedLeaguesInput, UserUncheckedUpdateWithoutOwnedLeaguesInput>
  }

  export type UserUpdateWithoutOwnedLeaguesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_no?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    memberships?: LeagueMemberUpdateManyWithoutUserNestedInput
    teams?: TeamUpdateManyWithoutUserNestedInput
    points?: PointsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedLeaguesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_no?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    memberships?: LeagueMemberUncheckedUpdateManyWithoutUserNestedInput
    teams?: TeamUncheckedUpdateManyWithoutUserNestedInput
    points?: PointsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LeagueMemberUpsertWithWhereUniqueWithoutLeagueInput = {
    where: LeagueMemberWhereUniqueInput
    update: XOR<LeagueMemberUpdateWithoutLeagueInput, LeagueMemberUncheckedUpdateWithoutLeagueInput>
    create: XOR<LeagueMemberCreateWithoutLeagueInput, LeagueMemberUncheckedCreateWithoutLeagueInput>
  }

  export type LeagueMemberUpdateWithWhereUniqueWithoutLeagueInput = {
    where: LeagueMemberWhereUniqueInput
    data: XOR<LeagueMemberUpdateWithoutLeagueInput, LeagueMemberUncheckedUpdateWithoutLeagueInput>
  }

  export type LeagueMemberUpdateManyWithWhereWithoutLeagueInput = {
    where: LeagueMemberScalarWhereInput
    data: XOR<LeagueMemberUpdateManyMutationInput, LeagueMemberUncheckedUpdateManyWithoutLeagueInput>
  }

  export type PointsUpsertWithWhereUniqueWithoutLeagueInput = {
    where: PointsWhereUniqueInput
    update: XOR<PointsUpdateWithoutLeagueInput, PointsUncheckedUpdateWithoutLeagueInput>
    create: XOR<PointsCreateWithoutLeagueInput, PointsUncheckedCreateWithoutLeagueInput>
  }

  export type PointsUpdateWithWhereUniqueWithoutLeagueInput = {
    where: PointsWhereUniqueInput
    data: XOR<PointsUpdateWithoutLeagueInput, PointsUncheckedUpdateWithoutLeagueInput>
  }

  export type PointsUpdateManyWithWhereWithoutLeagueInput = {
    where: PointsScalarWhereInput
    data: XOR<PointsUpdateManyMutationInput, PointsUncheckedUpdateManyWithoutLeagueInput>
  }

  export type TeamUpsertWithWhereUniqueWithoutLeagueInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutLeagueInput, TeamUncheckedUpdateWithoutLeagueInput>
    create: XOR<TeamCreateWithoutLeagueInput, TeamUncheckedCreateWithoutLeagueInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutLeagueInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutLeagueInput, TeamUncheckedUpdateWithoutLeagueInput>
  }

  export type TeamUpdateManyWithWhereWithoutLeagueInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutLeagueInput>
  }

  export type LeagueCreateWithoutMembersInput = {
    name: string
    code: string
    createdAt?: Date | string
    league_type?: $Enums.LeagueType
    owner?: UserCreateNestedOneWithoutOwnedLeaguesInput
    points?: PointsCreateNestedManyWithoutLeagueInput
    teams?: TeamCreateNestedManyWithoutLeagueInput
  }

  export type LeagueUncheckedCreateWithoutMembersInput = {
    id?: number
    name: string
    code: string
    ownerId?: number | null
    createdAt?: Date | string
    league_type?: $Enums.LeagueType
    points?: PointsUncheckedCreateNestedManyWithoutLeagueInput
    teams?: TeamUncheckedCreateNestedManyWithoutLeagueInput
  }

  export type LeagueCreateOrConnectWithoutMembersInput = {
    where: LeagueWhereUniqueInput
    create: XOR<LeagueCreateWithoutMembersInput, LeagueUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutMembershipsInput = {
    username: string
    email: string
    password: string
    phone_no: string
    created_at?: Date | string
    role?: $Enums.Role
    ownedLeagues?: LeagueCreateNestedManyWithoutOwnerInput
    teams?: TeamCreateNestedManyWithoutUserInput
    points?: PointsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: number
    username: string
    email: string
    password: string
    phone_no: string
    created_at?: Date | string
    role?: $Enums.Role
    ownedLeagues?: LeagueUncheckedCreateNestedManyWithoutOwnerInput
    teams?: TeamUncheckedCreateNestedManyWithoutUserInput
    points?: PointsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type LeagueUpsertWithoutMembersInput = {
    update: XOR<LeagueUpdateWithoutMembersInput, LeagueUncheckedUpdateWithoutMembersInput>
    create: XOR<LeagueCreateWithoutMembersInput, LeagueUncheckedCreateWithoutMembersInput>
    where?: LeagueWhereInput
  }

  export type LeagueUpdateToOneWithWhereWithoutMembersInput = {
    where?: LeagueWhereInput
    data: XOR<LeagueUpdateWithoutMembersInput, LeagueUncheckedUpdateWithoutMembersInput>
  }

  export type LeagueUpdateWithoutMembersInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    league_type?: EnumLeagueTypeFieldUpdateOperationsInput | $Enums.LeagueType
    owner?: UserUpdateOneWithoutOwnedLeaguesNestedInput
    points?: PointsUpdateManyWithoutLeagueNestedInput
    teams?: TeamUpdateManyWithoutLeagueNestedInput
  }

  export type LeagueUncheckedUpdateWithoutMembersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    league_type?: EnumLeagueTypeFieldUpdateOperationsInput | $Enums.LeagueType
    points?: PointsUncheckedUpdateManyWithoutLeagueNestedInput
    teams?: TeamUncheckedUpdateManyWithoutLeagueNestedInput
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_no?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ownedLeagues?: LeagueUpdateManyWithoutOwnerNestedInput
    teams?: TeamUpdateManyWithoutUserNestedInput
    points?: PointsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_no?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ownedLeagues?: LeagueUncheckedUpdateManyWithoutOwnerNestedInput
    teams?: TeamUncheckedUpdateManyWithoutUserNestedInput
    points?: PointsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ConstructorCreateWithoutDriversInput = {
    name: string
    active?: boolean
    price?: number
    points?: number
    teams?: TeamCreateNestedManyWithoutConstructorInput
  }

  export type ConstructorUncheckedCreateWithoutDriversInput = {
    id?: number
    name: string
    active?: boolean
    price?: number
    points?: number
    teams?: TeamUncheckedCreateNestedManyWithoutConstructorInput
  }

  export type ConstructorCreateOrConnectWithoutDriversInput = {
    where: ConstructorWhereUniqueInput
    create: XOR<ConstructorCreateWithoutDriversInput, ConstructorUncheckedCreateWithoutDriversInput>
  }

  export type PredictionCreateWithoutDriverInput = {
    predictedPosition?: number | null
    predictedDNF?: boolean
    team: TeamCreateNestedOneWithoutPredictionsInput
  }

  export type PredictionUncheckedCreateWithoutDriverInput = {
    id?: number
    teamId: number
    predictedPosition?: number | null
    predictedDNF?: boolean
  }

  export type PredictionCreateOrConnectWithoutDriverInput = {
    where: PredictionWhereUniqueInput
    create: XOR<PredictionCreateWithoutDriverInput, PredictionUncheckedCreateWithoutDriverInput>
  }

  export type PredictionCreateManyDriverInputEnvelope = {
    data: PredictionCreateManyDriverInput | PredictionCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type RaceResultCreateWithoutDriverInput = {
    finishPosition?: number | null
    dnf?: boolean
    fastestLap?: boolean
    race: RaceCreateNestedOneWithoutRaceResultsInput
  }

  export type RaceResultUncheckedCreateWithoutDriverInput = {
    id?: number
    raceId: number
    finishPosition?: number | null
    dnf?: boolean
    fastestLap?: boolean
  }

  export type RaceResultCreateOrConnectWithoutDriverInput = {
    where: RaceResultWhereUniqueInput
    create: XOR<RaceResultCreateWithoutDriverInput, RaceResultUncheckedCreateWithoutDriverInput>
  }

  export type RaceResultCreateManyDriverInputEnvelope = {
    data: RaceResultCreateManyDriverInput | RaceResultCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type ConstructorUpsertWithoutDriversInput = {
    update: XOR<ConstructorUpdateWithoutDriversInput, ConstructorUncheckedUpdateWithoutDriversInput>
    create: XOR<ConstructorCreateWithoutDriversInput, ConstructorUncheckedCreateWithoutDriversInput>
    where?: ConstructorWhereInput
  }

  export type ConstructorUpdateToOneWithWhereWithoutDriversInput = {
    where?: ConstructorWhereInput
    data: XOR<ConstructorUpdateWithoutDriversInput, ConstructorUncheckedUpdateWithoutDriversInput>
  }

  export type ConstructorUpdateWithoutDriversInput = {
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    teams?: TeamUpdateManyWithoutConstructorNestedInput
  }

  export type ConstructorUncheckedUpdateWithoutDriversInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    teams?: TeamUncheckedUpdateManyWithoutConstructorNestedInput
  }

  export type PredictionUpsertWithWhereUniqueWithoutDriverInput = {
    where: PredictionWhereUniqueInput
    update: XOR<PredictionUpdateWithoutDriverInput, PredictionUncheckedUpdateWithoutDriverInput>
    create: XOR<PredictionCreateWithoutDriverInput, PredictionUncheckedCreateWithoutDriverInput>
  }

  export type PredictionUpdateWithWhereUniqueWithoutDriverInput = {
    where: PredictionWhereUniqueInput
    data: XOR<PredictionUpdateWithoutDriverInput, PredictionUncheckedUpdateWithoutDriverInput>
  }

  export type PredictionUpdateManyWithWhereWithoutDriverInput = {
    where: PredictionScalarWhereInput
    data: XOR<PredictionUpdateManyMutationInput, PredictionUncheckedUpdateManyWithoutDriverInput>
  }

  export type PredictionScalarWhereInput = {
    AND?: PredictionScalarWhereInput | PredictionScalarWhereInput[]
    OR?: PredictionScalarWhereInput[]
    NOT?: PredictionScalarWhereInput | PredictionScalarWhereInput[]
    id?: IntFilter<"Prediction"> | number
    teamId?: IntFilter<"Prediction"> | number
    driverId?: IntFilter<"Prediction"> | number
    predictedPosition?: IntNullableFilter<"Prediction"> | number | null
    predictedDNF?: BoolFilter<"Prediction"> | boolean
  }

  export type RaceResultUpsertWithWhereUniqueWithoutDriverInput = {
    where: RaceResultWhereUniqueInput
    update: XOR<RaceResultUpdateWithoutDriverInput, RaceResultUncheckedUpdateWithoutDriverInput>
    create: XOR<RaceResultCreateWithoutDriverInput, RaceResultUncheckedCreateWithoutDriverInput>
  }

  export type RaceResultUpdateWithWhereUniqueWithoutDriverInput = {
    where: RaceResultWhereUniqueInput
    data: XOR<RaceResultUpdateWithoutDriverInput, RaceResultUncheckedUpdateWithoutDriverInput>
  }

  export type RaceResultUpdateManyWithWhereWithoutDriverInput = {
    where: RaceResultScalarWhereInput
    data: XOR<RaceResultUpdateManyMutationInput, RaceResultUncheckedUpdateManyWithoutDriverInput>
  }

  export type RaceResultScalarWhereInput = {
    AND?: RaceResultScalarWhereInput | RaceResultScalarWhereInput[]
    OR?: RaceResultScalarWhereInput[]
    NOT?: RaceResultScalarWhereInput | RaceResultScalarWhereInput[]
    id?: IntFilter<"RaceResult"> | number
    raceId?: IntFilter<"RaceResult"> | number
    driverId?: IntFilter<"RaceResult"> | number
    finishPosition?: IntNullableFilter<"RaceResult"> | number | null
    dnf?: BoolFilter<"RaceResult"> | boolean
    fastestLap?: BoolFilter<"RaceResult"> | boolean
  }

  export type DriverCreateWithoutConstructorInput = {
    name: string
    number?: number | null
    active?: boolean
    price?: number
    points?: number
    predictions?: PredictionCreateNestedManyWithoutDriverInput
    raceResults?: RaceResultCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateWithoutConstructorInput = {
    id?: number
    name: string
    number?: number | null
    active?: boolean
    price?: number
    points?: number
    predictions?: PredictionUncheckedCreateNestedManyWithoutDriverInput
    raceResults?: RaceResultUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutConstructorInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutConstructorInput, DriverUncheckedCreateWithoutConstructorInput>
  }

  export type DriverCreateManyConstructorInputEnvelope = {
    data: DriverCreateManyConstructorInput | DriverCreateManyConstructorInput[]
    skipDuplicates?: boolean
  }

  export type TeamCreateWithoutConstructorInput = {
    locked?: boolean
    user: UserCreateNestedOneWithoutTeamsInput
    race: RaceCreateNestedOneWithoutTeamsInput
    league: LeagueCreateNestedOneWithoutTeamsInput
    predictions?: PredictionCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutConstructorInput = {
    id?: number
    userId: number
    raceId: number
    leagueId: number
    locked?: boolean
    predictions?: PredictionUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutConstructorInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutConstructorInput, TeamUncheckedCreateWithoutConstructorInput>
  }

  export type TeamCreateManyConstructorInputEnvelope = {
    data: TeamCreateManyConstructorInput | TeamCreateManyConstructorInput[]
    skipDuplicates?: boolean
  }

  export type DriverUpsertWithWhereUniqueWithoutConstructorInput = {
    where: DriverWhereUniqueInput
    update: XOR<DriverUpdateWithoutConstructorInput, DriverUncheckedUpdateWithoutConstructorInput>
    create: XOR<DriverCreateWithoutConstructorInput, DriverUncheckedCreateWithoutConstructorInput>
  }

  export type DriverUpdateWithWhereUniqueWithoutConstructorInput = {
    where: DriverWhereUniqueInput
    data: XOR<DriverUpdateWithoutConstructorInput, DriverUncheckedUpdateWithoutConstructorInput>
  }

  export type DriverUpdateManyWithWhereWithoutConstructorInput = {
    where: DriverScalarWhereInput
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyWithoutConstructorInput>
  }

  export type DriverScalarWhereInput = {
    AND?: DriverScalarWhereInput | DriverScalarWhereInput[]
    OR?: DriverScalarWhereInput[]
    NOT?: DriverScalarWhereInput | DriverScalarWhereInput[]
    id?: IntFilter<"Driver"> | number
    name?: StringFilter<"Driver"> | string
    number?: IntNullableFilter<"Driver"> | number | null
    active?: BoolFilter<"Driver"> | boolean
    price?: FloatFilter<"Driver"> | number
    points?: IntFilter<"Driver"> | number
    constructorId?: IntNullableFilter<"Driver"> | number | null
  }

  export type TeamUpsertWithWhereUniqueWithoutConstructorInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutConstructorInput, TeamUncheckedUpdateWithoutConstructorInput>
    create: XOR<TeamCreateWithoutConstructorInput, TeamUncheckedCreateWithoutConstructorInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutConstructorInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutConstructorInput, TeamUncheckedUpdateWithoutConstructorInput>
  }

  export type TeamUpdateManyWithWhereWithoutConstructorInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutConstructorInput>
  }

  export type TeamCreateWithoutRaceInput = {
    locked?: boolean
    user: UserCreateNestedOneWithoutTeamsInput
    league: LeagueCreateNestedOneWithoutTeamsInput
    predictions?: PredictionCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutRaceInput = {
    id?: number
    userId: number
    leagueId: number
    locked?: boolean
    constructorId?: number | null
    predictions?: PredictionUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutRaceInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutRaceInput, TeamUncheckedCreateWithoutRaceInput>
  }

  export type TeamCreateManyRaceInputEnvelope = {
    data: TeamCreateManyRaceInput | TeamCreateManyRaceInput[]
    skipDuplicates?: boolean
  }

  export type RaceResultCreateWithoutRaceInput = {
    finishPosition?: number | null
    dnf?: boolean
    fastestLap?: boolean
    driver: DriverCreateNestedOneWithoutRaceResultsInput
  }

  export type RaceResultUncheckedCreateWithoutRaceInput = {
    id?: number
    driverId: number
    finishPosition?: number | null
    dnf?: boolean
    fastestLap?: boolean
  }

  export type RaceResultCreateOrConnectWithoutRaceInput = {
    where: RaceResultWhereUniqueInput
    create: XOR<RaceResultCreateWithoutRaceInput, RaceResultUncheckedCreateWithoutRaceInput>
  }

  export type RaceResultCreateManyRaceInputEnvelope = {
    data: RaceResultCreateManyRaceInput | RaceResultCreateManyRaceInput[]
    skipDuplicates?: boolean
  }

  export type PointsCreateWithoutRaceInput = {
    totalPts?: number
    breakdown?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutPointsInput
    league: LeagueCreateNestedOneWithoutPointsInput
  }

  export type PointsUncheckedCreateWithoutRaceInput = {
    id?: number
    userId: number
    leagueId: number
    totalPts?: number
    breakdown?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PointsCreateOrConnectWithoutRaceInput = {
    where: PointsWhereUniqueInput
    create: XOR<PointsCreateWithoutRaceInput, PointsUncheckedCreateWithoutRaceInput>
  }

  export type PointsCreateManyRaceInputEnvelope = {
    data: PointsCreateManyRaceInput | PointsCreateManyRaceInput[]
    skipDuplicates?: boolean
  }

  export type TeamUpsertWithWhereUniqueWithoutRaceInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutRaceInput, TeamUncheckedUpdateWithoutRaceInput>
    create: XOR<TeamCreateWithoutRaceInput, TeamUncheckedCreateWithoutRaceInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutRaceInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutRaceInput, TeamUncheckedUpdateWithoutRaceInput>
  }

  export type TeamUpdateManyWithWhereWithoutRaceInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutRaceInput>
  }

  export type RaceResultUpsertWithWhereUniqueWithoutRaceInput = {
    where: RaceResultWhereUniqueInput
    update: XOR<RaceResultUpdateWithoutRaceInput, RaceResultUncheckedUpdateWithoutRaceInput>
    create: XOR<RaceResultCreateWithoutRaceInput, RaceResultUncheckedCreateWithoutRaceInput>
  }

  export type RaceResultUpdateWithWhereUniqueWithoutRaceInput = {
    where: RaceResultWhereUniqueInput
    data: XOR<RaceResultUpdateWithoutRaceInput, RaceResultUncheckedUpdateWithoutRaceInput>
  }

  export type RaceResultUpdateManyWithWhereWithoutRaceInput = {
    where: RaceResultScalarWhereInput
    data: XOR<RaceResultUpdateManyMutationInput, RaceResultUncheckedUpdateManyWithoutRaceInput>
  }

  export type PointsUpsertWithWhereUniqueWithoutRaceInput = {
    where: PointsWhereUniqueInput
    update: XOR<PointsUpdateWithoutRaceInput, PointsUncheckedUpdateWithoutRaceInput>
    create: XOR<PointsCreateWithoutRaceInput, PointsUncheckedCreateWithoutRaceInput>
  }

  export type PointsUpdateWithWhereUniqueWithoutRaceInput = {
    where: PointsWhereUniqueInput
    data: XOR<PointsUpdateWithoutRaceInput, PointsUncheckedUpdateWithoutRaceInput>
  }

  export type PointsUpdateManyWithWhereWithoutRaceInput = {
    where: PointsScalarWhereInput
    data: XOR<PointsUpdateManyMutationInput, PointsUncheckedUpdateManyWithoutRaceInput>
  }

  export type UserCreateWithoutTeamsInput = {
    username: string
    email: string
    password: string
    phone_no: string
    created_at?: Date | string
    role?: $Enums.Role
    ownedLeagues?: LeagueCreateNestedManyWithoutOwnerInput
    memberships?: LeagueMemberCreateNestedManyWithoutUserInput
    points?: PointsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeamsInput = {
    id?: number
    username: string
    email: string
    password: string
    phone_no: string
    created_at?: Date | string
    role?: $Enums.Role
    ownedLeagues?: LeagueUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: LeagueMemberUncheckedCreateNestedManyWithoutUserInput
    points?: PointsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeamsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
  }

  export type RaceCreateWithoutTeamsInput = {
    name: string
    circuit?: string | null
    raceDate: Date | string
    season: number
    raceStart: Date | string
    raceEnd?: Date | string | null
    status?: $Enums.RaceStatus
    raceResults?: RaceResultCreateNestedManyWithoutRaceInput
    points?: PointsCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateWithoutTeamsInput = {
    id?: number
    name: string
    circuit?: string | null
    raceDate: Date | string
    season: number
    raceStart: Date | string
    raceEnd?: Date | string | null
    status?: $Enums.RaceStatus
    raceResults?: RaceResultUncheckedCreateNestedManyWithoutRaceInput
    points?: PointsUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceCreateOrConnectWithoutTeamsInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutTeamsInput, RaceUncheckedCreateWithoutTeamsInput>
  }

  export type LeagueCreateWithoutTeamsInput = {
    name: string
    code: string
    createdAt?: Date | string
    league_type?: $Enums.LeagueType
    owner?: UserCreateNestedOneWithoutOwnedLeaguesInput
    members?: LeagueMemberCreateNestedManyWithoutLeagueInput
    points?: PointsCreateNestedManyWithoutLeagueInput
  }

  export type LeagueUncheckedCreateWithoutTeamsInput = {
    id?: number
    name: string
    code: string
    ownerId?: number | null
    createdAt?: Date | string
    league_type?: $Enums.LeagueType
    members?: LeagueMemberUncheckedCreateNestedManyWithoutLeagueInput
    points?: PointsUncheckedCreateNestedManyWithoutLeagueInput
  }

  export type LeagueCreateOrConnectWithoutTeamsInput = {
    where: LeagueWhereUniqueInput
    create: XOR<LeagueCreateWithoutTeamsInput, LeagueUncheckedCreateWithoutTeamsInput>
  }

  export type ConstructorCreateWithoutTeamsInput = {
    name: string
    active?: boolean
    price?: number
    points?: number
    drivers?: DriverCreateNestedManyWithoutConstructorInput
  }

  export type ConstructorUncheckedCreateWithoutTeamsInput = {
    id?: number
    name: string
    active?: boolean
    price?: number
    points?: number
    drivers?: DriverUncheckedCreateNestedManyWithoutConstructorInput
  }

  export type ConstructorCreateOrConnectWithoutTeamsInput = {
    where: ConstructorWhereUniqueInput
    create: XOR<ConstructorCreateWithoutTeamsInput, ConstructorUncheckedCreateWithoutTeamsInput>
  }

  export type PredictionCreateWithoutTeamInput = {
    predictedPosition?: number | null
    predictedDNF?: boolean
    driver: DriverCreateNestedOneWithoutPredictionsInput
  }

  export type PredictionUncheckedCreateWithoutTeamInput = {
    id?: number
    driverId: number
    predictedPosition?: number | null
    predictedDNF?: boolean
  }

  export type PredictionCreateOrConnectWithoutTeamInput = {
    where: PredictionWhereUniqueInput
    create: XOR<PredictionCreateWithoutTeamInput, PredictionUncheckedCreateWithoutTeamInput>
  }

  export type PredictionCreateManyTeamInputEnvelope = {
    data: PredictionCreateManyTeamInput | PredictionCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTeamsInput = {
    update: XOR<UserUpdateWithoutTeamsInput, UserUncheckedUpdateWithoutTeamsInput>
    create: XOR<UserCreateWithoutTeamsInput, UserUncheckedCreateWithoutTeamsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeamsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeamsInput, UserUncheckedUpdateWithoutTeamsInput>
  }

  export type UserUpdateWithoutTeamsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_no?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ownedLeagues?: LeagueUpdateManyWithoutOwnerNestedInput
    memberships?: LeagueMemberUpdateManyWithoutUserNestedInput
    points?: PointsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_no?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ownedLeagues?: LeagueUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: LeagueMemberUncheckedUpdateManyWithoutUserNestedInput
    points?: PointsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RaceUpsertWithoutTeamsInput = {
    update: XOR<RaceUpdateWithoutTeamsInput, RaceUncheckedUpdateWithoutTeamsInput>
    create: XOR<RaceCreateWithoutTeamsInput, RaceUncheckedCreateWithoutTeamsInput>
    where?: RaceWhereInput
  }

  export type RaceUpdateToOneWithWhereWithoutTeamsInput = {
    where?: RaceWhereInput
    data: XOR<RaceUpdateWithoutTeamsInput, RaceUncheckedUpdateWithoutTeamsInput>
  }

  export type RaceUpdateWithoutTeamsInput = {
    name?: StringFieldUpdateOperationsInput | string
    circuit?: NullableStringFieldUpdateOperationsInput | string | null
    raceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    season?: IntFieldUpdateOperationsInput | number
    raceStart?: DateTimeFieldUpdateOperationsInput | Date | string
    raceEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRaceStatusFieldUpdateOperationsInput | $Enums.RaceStatus
    raceResults?: RaceResultUpdateManyWithoutRaceNestedInput
    points?: PointsUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateWithoutTeamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    circuit?: NullableStringFieldUpdateOperationsInput | string | null
    raceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    season?: IntFieldUpdateOperationsInput | number
    raceStart?: DateTimeFieldUpdateOperationsInput | Date | string
    raceEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRaceStatusFieldUpdateOperationsInput | $Enums.RaceStatus
    raceResults?: RaceResultUncheckedUpdateManyWithoutRaceNestedInput
    points?: PointsUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type LeagueUpsertWithoutTeamsInput = {
    update: XOR<LeagueUpdateWithoutTeamsInput, LeagueUncheckedUpdateWithoutTeamsInput>
    create: XOR<LeagueCreateWithoutTeamsInput, LeagueUncheckedCreateWithoutTeamsInput>
    where?: LeagueWhereInput
  }

  export type LeagueUpdateToOneWithWhereWithoutTeamsInput = {
    where?: LeagueWhereInput
    data: XOR<LeagueUpdateWithoutTeamsInput, LeagueUncheckedUpdateWithoutTeamsInput>
  }

  export type LeagueUpdateWithoutTeamsInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    league_type?: EnumLeagueTypeFieldUpdateOperationsInput | $Enums.LeagueType
    owner?: UserUpdateOneWithoutOwnedLeaguesNestedInput
    members?: LeagueMemberUpdateManyWithoutLeagueNestedInput
    points?: PointsUpdateManyWithoutLeagueNestedInput
  }

  export type LeagueUncheckedUpdateWithoutTeamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    league_type?: EnumLeagueTypeFieldUpdateOperationsInput | $Enums.LeagueType
    members?: LeagueMemberUncheckedUpdateManyWithoutLeagueNestedInput
    points?: PointsUncheckedUpdateManyWithoutLeagueNestedInput
  }

  export type ConstructorUpsertWithoutTeamsInput = {
    update: XOR<ConstructorUpdateWithoutTeamsInput, ConstructorUncheckedUpdateWithoutTeamsInput>
    create: XOR<ConstructorCreateWithoutTeamsInput, ConstructorUncheckedCreateWithoutTeamsInput>
    where?: ConstructorWhereInput
  }

  export type ConstructorUpdateToOneWithWhereWithoutTeamsInput = {
    where?: ConstructorWhereInput
    data: XOR<ConstructorUpdateWithoutTeamsInput, ConstructorUncheckedUpdateWithoutTeamsInput>
  }

  export type ConstructorUpdateWithoutTeamsInput = {
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    drivers?: DriverUpdateManyWithoutConstructorNestedInput
  }

  export type ConstructorUncheckedUpdateWithoutTeamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    drivers?: DriverUncheckedUpdateManyWithoutConstructorNestedInput
  }

  export type PredictionUpsertWithWhereUniqueWithoutTeamInput = {
    where: PredictionWhereUniqueInput
    update: XOR<PredictionUpdateWithoutTeamInput, PredictionUncheckedUpdateWithoutTeamInput>
    create: XOR<PredictionCreateWithoutTeamInput, PredictionUncheckedCreateWithoutTeamInput>
  }

  export type PredictionUpdateWithWhereUniqueWithoutTeamInput = {
    where: PredictionWhereUniqueInput
    data: XOR<PredictionUpdateWithoutTeamInput, PredictionUncheckedUpdateWithoutTeamInput>
  }

  export type PredictionUpdateManyWithWhereWithoutTeamInput = {
    where: PredictionScalarWhereInput
    data: XOR<PredictionUpdateManyMutationInput, PredictionUncheckedUpdateManyWithoutTeamInput>
  }

  export type TeamCreateWithoutPredictionsInput = {
    locked?: boolean
    user: UserCreateNestedOneWithoutTeamsInput
    race: RaceCreateNestedOneWithoutTeamsInput
    league: LeagueCreateNestedOneWithoutTeamsInput
  }

  export type TeamUncheckedCreateWithoutPredictionsInput = {
    id?: number
    userId: number
    raceId: number
    leagueId: number
    locked?: boolean
    constructorId?: number | null
  }

  export type TeamCreateOrConnectWithoutPredictionsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutPredictionsInput, TeamUncheckedCreateWithoutPredictionsInput>
  }

  export type DriverCreateWithoutPredictionsInput = {
    name: string
    number?: number | null
    active?: boolean
    price?: number
    points?: number
    raceResults?: RaceResultCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateWithoutPredictionsInput = {
    id?: number
    name: string
    number?: number | null
    active?: boolean
    price?: number
    points?: number
    constructorId?: number | null
    raceResults?: RaceResultUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutPredictionsInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutPredictionsInput, DriverUncheckedCreateWithoutPredictionsInput>
  }

  export type TeamUpsertWithoutPredictionsInput = {
    update: XOR<TeamUpdateWithoutPredictionsInput, TeamUncheckedUpdateWithoutPredictionsInput>
    create: XOR<TeamCreateWithoutPredictionsInput, TeamUncheckedCreateWithoutPredictionsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutPredictionsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutPredictionsInput, TeamUncheckedUpdateWithoutPredictionsInput>
  }

  export type TeamUpdateWithoutPredictionsInput = {
    locked?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutTeamsNestedInput
    race?: RaceUpdateOneRequiredWithoutTeamsNestedInput
    league?: LeagueUpdateOneRequiredWithoutTeamsNestedInput
  }

  export type TeamUncheckedUpdateWithoutPredictionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    raceId?: IntFieldUpdateOperationsInput | number
    leagueId?: IntFieldUpdateOperationsInput | number
    locked?: BoolFieldUpdateOperationsInput | boolean
    constructorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DriverUpsertWithoutPredictionsInput = {
    update: XOR<DriverUpdateWithoutPredictionsInput, DriverUncheckedUpdateWithoutPredictionsInput>
    create: XOR<DriverCreateWithoutPredictionsInput, DriverUncheckedCreateWithoutPredictionsInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutPredictionsInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutPredictionsInput, DriverUncheckedUpdateWithoutPredictionsInput>
  }

  export type DriverUpdateWithoutPredictionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    raceResults?: RaceResultUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateWithoutPredictionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    constructorId?: NullableIntFieldUpdateOperationsInput | number | null
    raceResults?: RaceResultUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type RaceCreateWithoutRaceResultsInput = {
    name: string
    circuit?: string | null
    raceDate: Date | string
    season: number
    raceStart: Date | string
    raceEnd?: Date | string | null
    status?: $Enums.RaceStatus
    teams?: TeamCreateNestedManyWithoutRaceInput
    points?: PointsCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateWithoutRaceResultsInput = {
    id?: number
    name: string
    circuit?: string | null
    raceDate: Date | string
    season: number
    raceStart: Date | string
    raceEnd?: Date | string | null
    status?: $Enums.RaceStatus
    teams?: TeamUncheckedCreateNestedManyWithoutRaceInput
    points?: PointsUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceCreateOrConnectWithoutRaceResultsInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutRaceResultsInput, RaceUncheckedCreateWithoutRaceResultsInput>
  }

  export type DriverCreateWithoutRaceResultsInput = {
    name: string
    number?: number | null
    active?: boolean
    price?: number
    points?: number
    predictions?: PredictionCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateWithoutRaceResultsInput = {
    id?: number
    name: string
    number?: number | null
    active?: boolean
    price?: number
    points?: number
    constructorId?: number | null
    predictions?: PredictionUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutRaceResultsInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutRaceResultsInput, DriverUncheckedCreateWithoutRaceResultsInput>
  }

  export type RaceUpsertWithoutRaceResultsInput = {
    update: XOR<RaceUpdateWithoutRaceResultsInput, RaceUncheckedUpdateWithoutRaceResultsInput>
    create: XOR<RaceCreateWithoutRaceResultsInput, RaceUncheckedCreateWithoutRaceResultsInput>
    where?: RaceWhereInput
  }

  export type RaceUpdateToOneWithWhereWithoutRaceResultsInput = {
    where?: RaceWhereInput
    data: XOR<RaceUpdateWithoutRaceResultsInput, RaceUncheckedUpdateWithoutRaceResultsInput>
  }

  export type RaceUpdateWithoutRaceResultsInput = {
    name?: StringFieldUpdateOperationsInput | string
    circuit?: NullableStringFieldUpdateOperationsInput | string | null
    raceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    season?: IntFieldUpdateOperationsInput | number
    raceStart?: DateTimeFieldUpdateOperationsInput | Date | string
    raceEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRaceStatusFieldUpdateOperationsInput | $Enums.RaceStatus
    teams?: TeamUpdateManyWithoutRaceNestedInput
    points?: PointsUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateWithoutRaceResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    circuit?: NullableStringFieldUpdateOperationsInput | string | null
    raceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    season?: IntFieldUpdateOperationsInput | number
    raceStart?: DateTimeFieldUpdateOperationsInput | Date | string
    raceEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRaceStatusFieldUpdateOperationsInput | $Enums.RaceStatus
    teams?: TeamUncheckedUpdateManyWithoutRaceNestedInput
    points?: PointsUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type DriverUpsertWithoutRaceResultsInput = {
    update: XOR<DriverUpdateWithoutRaceResultsInput, DriverUncheckedUpdateWithoutRaceResultsInput>
    create: XOR<DriverCreateWithoutRaceResultsInput, DriverUncheckedCreateWithoutRaceResultsInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutRaceResultsInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutRaceResultsInput, DriverUncheckedUpdateWithoutRaceResultsInput>
  }

  export type DriverUpdateWithoutRaceResultsInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    predictions?: PredictionUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateWithoutRaceResultsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    constructorId?: NullableIntFieldUpdateOperationsInput | number | null
    predictions?: PredictionUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type UserCreateWithoutPointsInput = {
    username: string
    email: string
    password: string
    phone_no: string
    created_at?: Date | string
    role?: $Enums.Role
    ownedLeagues?: LeagueCreateNestedManyWithoutOwnerInput
    memberships?: LeagueMemberCreateNestedManyWithoutUserInput
    teams?: TeamCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPointsInput = {
    id?: number
    username: string
    email: string
    password: string
    phone_no: string
    created_at?: Date | string
    role?: $Enums.Role
    ownedLeagues?: LeagueUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: LeagueMemberUncheckedCreateNestedManyWithoutUserInput
    teams?: TeamUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPointsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
  }

  export type RaceCreateWithoutPointsInput = {
    name: string
    circuit?: string | null
    raceDate: Date | string
    season: number
    raceStart: Date | string
    raceEnd?: Date | string | null
    status?: $Enums.RaceStatus
    teams?: TeamCreateNestedManyWithoutRaceInput
    raceResults?: RaceResultCreateNestedManyWithoutRaceInput
  }

  export type RaceUncheckedCreateWithoutPointsInput = {
    id?: number
    name: string
    circuit?: string | null
    raceDate: Date | string
    season: number
    raceStart: Date | string
    raceEnd?: Date | string | null
    status?: $Enums.RaceStatus
    teams?: TeamUncheckedCreateNestedManyWithoutRaceInput
    raceResults?: RaceResultUncheckedCreateNestedManyWithoutRaceInput
  }

  export type RaceCreateOrConnectWithoutPointsInput = {
    where: RaceWhereUniqueInput
    create: XOR<RaceCreateWithoutPointsInput, RaceUncheckedCreateWithoutPointsInput>
  }

  export type LeagueCreateWithoutPointsInput = {
    name: string
    code: string
    createdAt?: Date | string
    league_type?: $Enums.LeagueType
    owner?: UserCreateNestedOneWithoutOwnedLeaguesInput
    members?: LeagueMemberCreateNestedManyWithoutLeagueInput
    teams?: TeamCreateNestedManyWithoutLeagueInput
  }

  export type LeagueUncheckedCreateWithoutPointsInput = {
    id?: number
    name: string
    code: string
    ownerId?: number | null
    createdAt?: Date | string
    league_type?: $Enums.LeagueType
    members?: LeagueMemberUncheckedCreateNestedManyWithoutLeagueInput
    teams?: TeamUncheckedCreateNestedManyWithoutLeagueInput
  }

  export type LeagueCreateOrConnectWithoutPointsInput = {
    where: LeagueWhereUniqueInput
    create: XOR<LeagueCreateWithoutPointsInput, LeagueUncheckedCreateWithoutPointsInput>
  }

  export type UserUpsertWithoutPointsInput = {
    update: XOR<UserUpdateWithoutPointsInput, UserUncheckedUpdateWithoutPointsInput>
    create: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPointsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPointsInput, UserUncheckedUpdateWithoutPointsInput>
  }

  export type UserUpdateWithoutPointsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_no?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ownedLeagues?: LeagueUpdateManyWithoutOwnerNestedInput
    memberships?: LeagueMemberUpdateManyWithoutUserNestedInput
    teams?: TeamUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_no?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    ownedLeagues?: LeagueUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: LeagueMemberUncheckedUpdateManyWithoutUserNestedInput
    teams?: TeamUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RaceUpsertWithoutPointsInput = {
    update: XOR<RaceUpdateWithoutPointsInput, RaceUncheckedUpdateWithoutPointsInput>
    create: XOR<RaceCreateWithoutPointsInput, RaceUncheckedCreateWithoutPointsInput>
    where?: RaceWhereInput
  }

  export type RaceUpdateToOneWithWhereWithoutPointsInput = {
    where?: RaceWhereInput
    data: XOR<RaceUpdateWithoutPointsInput, RaceUncheckedUpdateWithoutPointsInput>
  }

  export type RaceUpdateWithoutPointsInput = {
    name?: StringFieldUpdateOperationsInput | string
    circuit?: NullableStringFieldUpdateOperationsInput | string | null
    raceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    season?: IntFieldUpdateOperationsInput | number
    raceStart?: DateTimeFieldUpdateOperationsInput | Date | string
    raceEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRaceStatusFieldUpdateOperationsInput | $Enums.RaceStatus
    teams?: TeamUpdateManyWithoutRaceNestedInput
    raceResults?: RaceResultUpdateManyWithoutRaceNestedInput
  }

  export type RaceUncheckedUpdateWithoutPointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    circuit?: NullableStringFieldUpdateOperationsInput | string | null
    raceDate?: DateTimeFieldUpdateOperationsInput | Date | string
    season?: IntFieldUpdateOperationsInput | number
    raceStart?: DateTimeFieldUpdateOperationsInput | Date | string
    raceEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRaceStatusFieldUpdateOperationsInput | $Enums.RaceStatus
    teams?: TeamUncheckedUpdateManyWithoutRaceNestedInput
    raceResults?: RaceResultUncheckedUpdateManyWithoutRaceNestedInput
  }

  export type LeagueUpsertWithoutPointsInput = {
    update: XOR<LeagueUpdateWithoutPointsInput, LeagueUncheckedUpdateWithoutPointsInput>
    create: XOR<LeagueCreateWithoutPointsInput, LeagueUncheckedCreateWithoutPointsInput>
    where?: LeagueWhereInput
  }

  export type LeagueUpdateToOneWithWhereWithoutPointsInput = {
    where?: LeagueWhereInput
    data: XOR<LeagueUpdateWithoutPointsInput, LeagueUncheckedUpdateWithoutPointsInput>
  }

  export type LeagueUpdateWithoutPointsInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    league_type?: EnumLeagueTypeFieldUpdateOperationsInput | $Enums.LeagueType
    owner?: UserUpdateOneWithoutOwnedLeaguesNestedInput
    members?: LeagueMemberUpdateManyWithoutLeagueNestedInput
    teams?: TeamUpdateManyWithoutLeagueNestedInput
  }

  export type LeagueUncheckedUpdateWithoutPointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    ownerId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    league_type?: EnumLeagueTypeFieldUpdateOperationsInput | $Enums.LeagueType
    members?: LeagueMemberUncheckedUpdateManyWithoutLeagueNestedInput
    teams?: TeamUncheckedUpdateManyWithoutLeagueNestedInput
  }

  export type LeagueCreateManyOwnerInput = {
    id?: number
    name: string
    code: string
    createdAt?: Date | string
    league_type?: $Enums.LeagueType
  }

  export type LeagueMemberCreateManyUserInput = {
    id?: number
    leagueId: number
    joinedAt?: Date | string
  }

  export type TeamCreateManyUserInput = {
    id?: number
    raceId: number
    leagueId: number
    locked?: boolean
    constructorId?: number | null
  }

  export type PointsCreateManyUserInput = {
    id?: number
    raceId: number
    leagueId: number
    totalPts?: number
    breakdown?: NullableJsonNullValueInput | InputJsonValue
  }

  export type LeagueUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    league_type?: EnumLeagueTypeFieldUpdateOperationsInput | $Enums.LeagueType
    members?: LeagueMemberUpdateManyWithoutLeagueNestedInput
    points?: PointsUpdateManyWithoutLeagueNestedInput
    teams?: TeamUpdateManyWithoutLeagueNestedInput
  }

  export type LeagueUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    league_type?: EnumLeagueTypeFieldUpdateOperationsInput | $Enums.LeagueType
    members?: LeagueMemberUncheckedUpdateManyWithoutLeagueNestedInput
    points?: PointsUncheckedUpdateManyWithoutLeagueNestedInput
    teams?: TeamUncheckedUpdateManyWithoutLeagueNestedInput
  }

  export type LeagueUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    league_type?: EnumLeagueTypeFieldUpdateOperationsInput | $Enums.LeagueType
  }

  export type LeagueMemberUpdateWithoutUserInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    league?: LeagueUpdateOneRequiredWithoutMembersNestedInput
  }

  export type LeagueMemberUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    leagueId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeagueMemberUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    leagueId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUpdateWithoutUserInput = {
    locked?: BoolFieldUpdateOperationsInput | boolean
    race?: RaceUpdateOneRequiredWithoutTeamsNestedInput
    league?: LeagueUpdateOneRequiredWithoutTeamsNestedInput
    predictions?: PredictionUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    raceId?: IntFieldUpdateOperationsInput | number
    leagueId?: IntFieldUpdateOperationsInput | number
    locked?: BoolFieldUpdateOperationsInput | boolean
    constructorId?: NullableIntFieldUpdateOperationsInput | number | null
    predictions?: PredictionUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    raceId?: IntFieldUpdateOperationsInput | number
    leagueId?: IntFieldUpdateOperationsInput | number
    locked?: BoolFieldUpdateOperationsInput | boolean
    constructorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PointsUpdateWithoutUserInput = {
    totalPts?: IntFieldUpdateOperationsInput | number
    breakdown?: NullableJsonNullValueInput | InputJsonValue
    race?: RaceUpdateOneRequiredWithoutPointsNestedInput
    league?: LeagueUpdateOneRequiredWithoutPointsNestedInput
  }

  export type PointsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    raceId?: IntFieldUpdateOperationsInput | number
    leagueId?: IntFieldUpdateOperationsInput | number
    totalPts?: IntFieldUpdateOperationsInput | number
    breakdown?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PointsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    raceId?: IntFieldUpdateOperationsInput | number
    leagueId?: IntFieldUpdateOperationsInput | number
    totalPts?: IntFieldUpdateOperationsInput | number
    breakdown?: NullableJsonNullValueInput | InputJsonValue
  }

  export type LeagueMemberCreateManyLeagueInput = {
    id?: number
    userId: number
    joinedAt?: Date | string
  }

  export type PointsCreateManyLeagueInput = {
    id?: number
    userId: number
    raceId: number
    totalPts?: number
    breakdown?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TeamCreateManyLeagueInput = {
    id?: number
    userId: number
    raceId: number
    locked?: boolean
    constructorId?: number | null
  }

  export type LeagueMemberUpdateWithoutLeagueInput = {
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type LeagueMemberUncheckedUpdateWithoutLeagueInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeagueMemberUncheckedUpdateManyWithoutLeagueInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointsUpdateWithoutLeagueInput = {
    totalPts?: IntFieldUpdateOperationsInput | number
    breakdown?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutPointsNestedInput
    race?: RaceUpdateOneRequiredWithoutPointsNestedInput
  }

  export type PointsUncheckedUpdateWithoutLeagueInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    raceId?: IntFieldUpdateOperationsInput | number
    totalPts?: IntFieldUpdateOperationsInput | number
    breakdown?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PointsUncheckedUpdateManyWithoutLeagueInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    raceId?: IntFieldUpdateOperationsInput | number
    totalPts?: IntFieldUpdateOperationsInput | number
    breakdown?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TeamUpdateWithoutLeagueInput = {
    locked?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutTeamsNestedInput
    race?: RaceUpdateOneRequiredWithoutTeamsNestedInput
    predictions?: PredictionUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutLeagueInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    raceId?: IntFieldUpdateOperationsInput | number
    locked?: BoolFieldUpdateOperationsInput | boolean
    constructorId?: NullableIntFieldUpdateOperationsInput | number | null
    predictions?: PredictionUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutLeagueInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    raceId?: IntFieldUpdateOperationsInput | number
    locked?: BoolFieldUpdateOperationsInput | boolean
    constructorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PredictionCreateManyDriverInput = {
    id?: number
    teamId: number
    predictedPosition?: number | null
    predictedDNF?: boolean
  }

  export type RaceResultCreateManyDriverInput = {
    id?: number
    raceId: number
    finishPosition?: number | null
    dnf?: boolean
    fastestLap?: boolean
  }

  export type PredictionUpdateWithoutDriverInput = {
    predictedPosition?: NullableIntFieldUpdateOperationsInput | number | null
    predictedDNF?: BoolFieldUpdateOperationsInput | boolean
    team?: TeamUpdateOneRequiredWithoutPredictionsNestedInput
  }

  export type PredictionUncheckedUpdateWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    predictedPosition?: NullableIntFieldUpdateOperationsInput | number | null
    predictedDNF?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PredictionUncheckedUpdateManyWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    predictedPosition?: NullableIntFieldUpdateOperationsInput | number | null
    predictedDNF?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RaceResultUpdateWithoutDriverInput = {
    finishPosition?: NullableIntFieldUpdateOperationsInput | number | null
    dnf?: BoolFieldUpdateOperationsInput | boolean
    fastestLap?: BoolFieldUpdateOperationsInput | boolean
    race?: RaceUpdateOneRequiredWithoutRaceResultsNestedInput
  }

  export type RaceResultUncheckedUpdateWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    raceId?: IntFieldUpdateOperationsInput | number
    finishPosition?: NullableIntFieldUpdateOperationsInput | number | null
    dnf?: BoolFieldUpdateOperationsInput | boolean
    fastestLap?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RaceResultUncheckedUpdateManyWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    raceId?: IntFieldUpdateOperationsInput | number
    finishPosition?: NullableIntFieldUpdateOperationsInput | number | null
    dnf?: BoolFieldUpdateOperationsInput | boolean
    fastestLap?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DriverCreateManyConstructorInput = {
    id?: number
    name: string
    number?: number | null
    active?: boolean
    price?: number
    points?: number
  }

  export type TeamCreateManyConstructorInput = {
    id?: number
    userId: number
    raceId: number
    leagueId: number
    locked?: boolean
  }

  export type DriverUpdateWithoutConstructorInput = {
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    predictions?: PredictionUpdateManyWithoutDriverNestedInput
    raceResults?: RaceResultUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateWithoutConstructorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    predictions?: PredictionUncheckedUpdateManyWithoutDriverNestedInput
    raceResults?: RaceResultUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateManyWithoutConstructorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    number?: NullableIntFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    price?: FloatFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
  }

  export type TeamUpdateWithoutConstructorInput = {
    locked?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutTeamsNestedInput
    race?: RaceUpdateOneRequiredWithoutTeamsNestedInput
    league?: LeagueUpdateOneRequiredWithoutTeamsNestedInput
    predictions?: PredictionUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutConstructorInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    raceId?: IntFieldUpdateOperationsInput | number
    leagueId?: IntFieldUpdateOperationsInput | number
    locked?: BoolFieldUpdateOperationsInput | boolean
    predictions?: PredictionUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutConstructorInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    raceId?: IntFieldUpdateOperationsInput | number
    leagueId?: IntFieldUpdateOperationsInput | number
    locked?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TeamCreateManyRaceInput = {
    id?: number
    userId: number
    leagueId: number
    locked?: boolean
    constructorId?: number | null
  }

  export type RaceResultCreateManyRaceInput = {
    id?: number
    driverId: number
    finishPosition?: number | null
    dnf?: boolean
    fastestLap?: boolean
  }

  export type PointsCreateManyRaceInput = {
    id?: number
    userId: number
    leagueId: number
    totalPts?: number
    breakdown?: NullableJsonNullValueInput | InputJsonValue
  }

  export type TeamUpdateWithoutRaceInput = {
    locked?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutTeamsNestedInput
    league?: LeagueUpdateOneRequiredWithoutTeamsNestedInput
    predictions?: PredictionUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutRaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    leagueId?: IntFieldUpdateOperationsInput | number
    locked?: BoolFieldUpdateOperationsInput | boolean
    constructorId?: NullableIntFieldUpdateOperationsInput | number | null
    predictions?: PredictionUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutRaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    leagueId?: IntFieldUpdateOperationsInput | number
    locked?: BoolFieldUpdateOperationsInput | boolean
    constructorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RaceResultUpdateWithoutRaceInput = {
    finishPosition?: NullableIntFieldUpdateOperationsInput | number | null
    dnf?: BoolFieldUpdateOperationsInput | boolean
    fastestLap?: BoolFieldUpdateOperationsInput | boolean
    driver?: DriverUpdateOneRequiredWithoutRaceResultsNestedInput
  }

  export type RaceResultUncheckedUpdateWithoutRaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    finishPosition?: NullableIntFieldUpdateOperationsInput | number | null
    dnf?: BoolFieldUpdateOperationsInput | boolean
    fastestLap?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RaceResultUncheckedUpdateManyWithoutRaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    finishPosition?: NullableIntFieldUpdateOperationsInput | number | null
    dnf?: BoolFieldUpdateOperationsInput | boolean
    fastestLap?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PointsUpdateWithoutRaceInput = {
    totalPts?: IntFieldUpdateOperationsInput | number
    breakdown?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutPointsNestedInput
    league?: LeagueUpdateOneRequiredWithoutPointsNestedInput
  }

  export type PointsUncheckedUpdateWithoutRaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    leagueId?: IntFieldUpdateOperationsInput | number
    totalPts?: IntFieldUpdateOperationsInput | number
    breakdown?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PointsUncheckedUpdateManyWithoutRaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    leagueId?: IntFieldUpdateOperationsInput | number
    totalPts?: IntFieldUpdateOperationsInput | number
    breakdown?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PredictionCreateManyTeamInput = {
    id?: number
    driverId: number
    predictedPosition?: number | null
    predictedDNF?: boolean
  }

  export type PredictionUpdateWithoutTeamInput = {
    predictedPosition?: NullableIntFieldUpdateOperationsInput | number | null
    predictedDNF?: BoolFieldUpdateOperationsInput | boolean
    driver?: DriverUpdateOneRequiredWithoutPredictionsNestedInput
  }

  export type PredictionUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    predictedPosition?: NullableIntFieldUpdateOperationsInput | number | null
    predictedDNF?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PredictionUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    predictedPosition?: NullableIntFieldUpdateOperationsInput | number | null
    predictedDNF?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}