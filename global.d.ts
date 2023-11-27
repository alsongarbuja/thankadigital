export type mongooseConnection = {
  conn: null | typeof import("mongoose");
  promise: null | Promise<typeof import("mongoose")>;
};

declare global {
  var mongoose: mongooseConnection;
}

export {};