import { readConfig, setUser } from './config';
function main() {
  setUser('TestUser');
  const cfg = readConfig();
  console.log(cfg);
}

main();
