///: Demo — render a room from the REAL driver source, with no app running.
///: Proof that the screen model is derived from the code and not from a fixture:
///: it reads `.claude/src/**` as it exists on disk right now.
///:
///: Run: npx tsx cli/demo-room.ts [ConversationPage|HomePage|ProjectsPage|ProjectPage]

import { SURFACE_BY_NAME } from './surface.generated.ts';
import { describeScreen } from './describe.ts';
import { renderScreen } from './render.ts';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';


const surfaces = SURFACE_BY_NAME;
const want = process.argv[2] ?? 'ConversationPage';

// Stand in for the live page: the class name is the screen, and a property that is
// an object of a known class is a component that is really there.
function stub(screen: string, components: Record<string, string>): object {
  const holder: Record<string, unknown> = {};
  for (const [prop, cls] of Object.entries(components)) {
    const C = { [cls]: class {} }[cls];
    Object.defineProperty(C, 'name', { value: cls });
    holder[prop] = new C();
  }
  const Page = { [screen]: class {} }[screen];
  Object.defineProperty(Page, 'name', { value: screen });
  return Object.assign(new Page(), holder);
}

const STUBS: Record<string, object> = {
  ConversationPage: stub('ConversationPage', { composer: 'Composer', response: 'Response', artifacts: 'ArtifactPanel' }),
  HomePage: stub('HomePage', { composer: 'Composer', modelPicker: 'ModelPicker' }),
  ProjectsPage: stub('ProjectsPage', {}),
  ProjectPage: stub('ProjectPage', { composer: 'Composer' }),
};

const page = STUBS[want];
if (!page) {
  console.error(`Unknown screen "${want}". Try: ${Object.keys(STUBS).join(', ')}`);
  process.exit(1);
}

console.log(renderScreen(
  describeScreen(page, surfaces, 'claude.ai/chat/…(not read — no app touched)'),
));
