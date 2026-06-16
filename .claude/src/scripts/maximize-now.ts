import { Claude } from '../claude.ts';
const app = new Claude();
async function main() {
  await app.launch();
  app.window.maximize();
  console.log('MAXIMIZED. Handle:', app.window.handle);
}
main().catch(e => { console.error(e.message); });
