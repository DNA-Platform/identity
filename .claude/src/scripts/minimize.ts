import { Claude } from '../claude.ts';
const app = new Claude();
async function main() {
  await app.launch();
  await app.window.minimize();
  console.log('Minimized');
}
main().catch(console.error);
