import * as path from 'path';
import { foo } from './foo';

console.log(path.join(__dirname, 'index.js'));
foo();
