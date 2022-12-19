declare global {
    namespace NodeJS {
      interface ProcessEnv {
        
        NODE_ENV: 'development' | 'production';
        PORT?: string;
        ALGO_API_ID: string;
        ALOG_SEARCH_ONLY_KEY: string;
      }
    }
  }
  
  // If this file has no import/export statements (i.e. is a script)
  // convert it into a module by adding an empty export statement.
  export {}