import * as path from 'node:path';

// export const PATH_DB = path.join(process.cwd(), 'db', 'db.json');
export const PATH_DB = path.resolve( 'src', 'db', 'db.json');

console.log(PATH_DB);
