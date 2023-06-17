
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV?:string;
    PORT?: string;
    CLIENT_URL?: string;
    MONGODB_URL?: string;
  }
}

