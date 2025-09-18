import { readConfig, setUser } from './config.js';
function main() {
    setUser('TestUser');
    const cfg = readConfig();
    console.log(cfg);
}
main();
