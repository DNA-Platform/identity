import { Bold, Chapter, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { CodeBox, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-02-13T14:32:03.267780Z"
        >
            <Origin>019c576a-7f58-711b-92b2-b25cd9737a51</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                How do I configure SSH key for github on my windows computer. I have git for windows installed
            </Paragraph>
        </Message>
        <Message
            at="2026-02-13T14:32:10.666628Z"
        >
            <Origin>019c576a-7f58-711b-92b2-b25d44d700b7</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here's how to set it up:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    1. Generate an SSH key
                </Word>
            </Paragraph>
            <Paragraph>Open Git Bash and run:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`ssh-keygen -t ed25519 -C "your_email@example.com"`}
            </CodeBox>
            <Paragraph>Press Enter to accept the default file location, then set a passphrase (or leave blank).</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    2. Start the SSH agent and add your key
                </Word>
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    3. Copy the public key
                </Word>
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`clip < ~/.ssh/id_ed25519.pub`}
            </CodeBox>
            <Paragraph>This copies it to your clipboard.</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    4. Add the key to GitHub
                </Word>
            </Paragraph>
            <Paragraph>
                Go to <Word>
                    <Bold />
                    GitHub → Settings → SSH and GPG keys → New SSH key
                </Word>, give it a title, paste the key, and save.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    5. Test it
                </Word>
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`ssh -T git@github.com`}
            </CodeBox>
            <Paragraph>You should see a message like "Hi username! You've successfully authenticated."</Paragraph>
            <Paragraph>
                After that, make sure you clone repos using the SSH URL format (<Word>
                    <Verbatim />
                    git@github.com:user/repo.git
                </Word>) rather than HTTPS. If you have existing repos using HTTPS, you can switch them with:
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`git remote set-url origin git@github.com:user/repo.git`}
            </CodeBox>
        </Message>
        <Message
            at="2026-02-13T14:55:30.287137Z"
        >
            <Origin>019c577f-f7a2-7621-9ad6-bd6ab0f36618</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                How do I install npm after node is installed? Or is it isnalled with node? Do I have to update it?
            </Paragraph>
        </Message>
        <Message
            at="2026-02-13T14:55:35.450566Z"
        >
            <Origin>019c577f-f7a2-7621-9ad6-bd6b4e30a935</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                npm comes bundled with Node.js, so if you've installed Node you already have it. You can verify by running:
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`node -v
npm -v`}
            </CodeBox>
            <Paragraph>
                As for updating — npm can fall behind the version bundled with Node. You can update it with:
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`npm install -g npm@latest`}
            </CodeBox>
            <Paragraph>
                That said, you generally don't need to rush to update npm unless something specifically requires a newer
                version. The version that ships with your Node installation is usually fine.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-13T14:56:21.006561Z"
        >
            <Origin>019c5780-bdbf-7290-a55c-a300d7019c7c</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>I'm getting this from my command prompt in vscode windows:</Paragraph>
            <Paragraph>
                PS C:\Source\dna-platform\chemistry&gt; npm npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded
                because running scripts is disabled on this system. For more information, see about_Execution_Policies at
                https:/go.microsoft.com/fwlink/?LinkID=135170. At line:1 char:1
            </Paragraph>
            <Paragraph>
                <List />
                <Line>npm</Line>
                <Line>~~~</Line>
                <Paragraph>
                    <List />
                    <Line>CategoryInfo          : SecurityError: (:) &#91;&#93;, PSSecurityException</Line>
                    <Line>FullyQualifiedErrorId : UnauthorizedAccess</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>PS C:\Source\dna-platform\chemistry&gt;</Paragraph>
        </Message>
        <Message
            at="2026-02-13T14:56:25.830789Z"
        >
            <Origin>019c5780-bdbf-7290-a55c-a301ce5e35ae</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                This is a PowerShell execution policy issue. The quickest fix is to run this in your VS Code terminal:
            </Paragraph>
            <CodeBox
                language="powershell"
            >
                {`Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`}
            </CodeBox>
            <Paragraph>
                Then try <Word>
                    <Verbatim />
                    npm
                </Word> again. That allows locally-created scripts to run while still requiring remote scripts to be signed.
            </Paragraph>
            <Paragraph>
                Alternatively, you can switch your VS Code default terminal to Git Bash instead of PowerShell — click the
                dropdown arrow next to the <Word>
                    <Bold />
                    +
                </Word> icon in the terminal panel and select <Word>
                    <Bold />
                    Git Bash
                </Word>. You won't hit this issue there.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-13T15:07:46.188823Z"
        >
            <Origin>019c578b-321f-72f6-bfa7-97763da5a8ec</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>My TypeScript tsconfig is giving me this error:</Paragraph>
            <Paragraph>
                Cannot find type definition file for 'estree'. The file is in the program because: Entry point for implicit
                type library 'estree'
            </Paragraph>
        </Message>
        <Message
            at="2026-02-13T15:07:55.606887Z"
        >
            <Origin>019c578b-321f-72f6-bfa7-97777243cdbb</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                This usually happens when something in your <Word>
                    <Verbatim />
                    node_modules
                </Word> references <Word>
                    <Verbatim />
                    @types/estree
                </Word> but it's not installed, or your <Word>
                    <Verbatim />
                    tsconfig.json
                </Word> <Word>
                    <Verbatim />
                    types
                </Word> or <Word>
                    <Verbatim />
                    typeRoots
                </Word> configuration is picking it up unexpectedly.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Quick fix — install the types:
                </Word>
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`npm install --save-dev @types/estree`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    If that doesn't resolve it
                </Word>, check your <Word>
                    <Verbatim />
                    tsconfig.json
                </Word> for a <Word>
                    <Verbatim />
                    types
                </Word> field. If you have one like:
            </Paragraph>
            <CodeBox
                language="json"
            >
                {`${''}"types": ["node", "jest"]`}
            </CodeBox>
            <Paragraph>
                TypeScript will only look for those specific types but still scan <Word>
                    <Verbatim />
                    typeRoots
                </Word> for everything. You can either add <Word>
                    <Verbatim />
                    "estree"
                </Word> to that list, or figure out which dependency is pulling it in and whether you actually need it.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    If you want to just suppress it
                </Word>, you can also try adding <Word>
                    <Verbatim />
                    skipLibCheck
                </Word>:
            </Paragraph>
            <CodeBox
                language="json"
            >
                {`{
  "compilerOptions": {
    "skipLibCheck": true
  }
}`}
            </CodeBox>
            <Paragraph>
                This skips type-checking of <Word>
                    <Verbatim />
                    .d.ts
                </Word> files entirely, which is a common setting in many projects and can also speed up compilation. It
                doesn't fix the root cause but is a pragmatic solution if the error isn't affecting your actual code.
            </Paragraph>
        </Message>
        <Message
            at="2026-02-13T15:08:20.207521Z"
        >
            <Origin>019c578b-b6ca-77f7-ab35-4b4f09f5c2de</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <CodeBox
                language="jsonc"
            >
                {`${''}{
  "compilerOptions": {
    "target": "ES2020",
    "jsx": "preserve",
    "module": "esnext",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "incremental": true,
    "experimentalDecorators": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  },
  "include": [
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".site/types/**/*.ts",
    "next-env.d.ts",
    "site/types/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}

`}
            </CodeBox>
        </Message>
        <Message
            at="2026-02-13T15:08:31.007183Z"
        >
            <Origin>019c578b-b6cb-772b-ab7b-c68ba3320d9c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                You already have <Word>
                    <Verbatim />
                    skipLibCheck: true
                </Word>, so the issue is that TypeScript is auto-discovering <Word>
                    <Verbatim />
                    @types/estree
                </Word> in your <Word>
                    <Verbatim />
                    node_modules/@types
                </Word> folder. Since you don't have a <Word>
                    <Verbatim />
                    types
                </Word> field in <Word>
                    <Verbatim />
                    compilerOptions
                </Word>, TypeScript automatically includes <Word>
                    <Bold />
                    all
                </Word> <Word>
                    <Verbatim />
                    @types/*
                </Word> packages it finds.
            </Paragraph>
            <Paragraph>
                The cleanest fix is to add a <Word>
                    <Verbatim />
                    types
                </Word> field to limit what gets auto-included:
            </Paragraph>
            <CodeBox
                language="jsonc"
            >
                {`${''}"compilerOptions": {
    // ...existing options...
    "types": ["node", "react", "react-dom"]
}`}
            </CodeBox>
            <Paragraph>
                Adjust that list to include only the type packages your project actually needs. This stops TypeScript from
                auto-loading every <Word>
                    <Verbatim />
                    @types/*
                </Word> package in <Word>
                    <Verbatim />
                    node_modules
                </Word>, which is where the phantom <Word>
                    <Verbatim />
                    estree
                </Word> reference is coming from.
            </Paragraph>
            <Paragraph>Alternatively, just install it and move on:</Paragraph>
            <CodeBox
                language="bash"
            >
                {`npm install --save-dev @types/estree`}
            </CodeBox>
        </Message>
        <Message
            at="2026-02-13T15:09:30.499677Z"
        >
            <Origin>019c578c-c997-71ef-ae60-a73f5b9f5d94</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Adding types didn't sole the problem. Better to research it more thoroughly</Paragraph>
        </Message>
        <Message
            at="2026-02-13T15:10:10.286451Z"
        >
            <Origin>019c578c-c997-71ef-ae60-a740d36302a2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Cannot find type definition file estree tsconfig”</Action>
            <Action>Searched the web for “nextjs "cannot find type definition file" estree typeRoots fix”</Action>
            <Action>Fetched https://github.com/vercel/next.js/discussions/37457</Action>
            <Action>
                Searched the web for “typescript estree "implicit type library" include node_modules broad glob”
            </Action>
            <Action>
                Searched the web for “typescript "entry point for implicit type library" estree @types folder missing
                index.d.ts”
            </Action>
            <Paragraph>Here's what's happening and the most reliable fixes:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Root cause:
                </Word> TypeScript automatically scans every folder inside <Word>
                    <Verbatim />
                    node_modules/@types/
                </Word> and tries to load each one as an implicit type library. If a folder exists there (like <Word>
                    <Verbatim />
                    estree
                </Word>) but doesn't contain a proper <Word>
                    <Verbatim />
                    index.d.ts
                </Word> at its root, you get this error. Some dependency in your project is pulling in <Word>
                    <Verbatim />
                    @types/estree
                </Word> with a structure TypeScript doesn't like. The <Word>
                    <Verbatim />
                    skipLibCheck
                </Word> option only skips <Word>
                    <Emphasis />
                    checking
                </Word> <Word>
                    <Verbatim />
                    .d.ts
                </Word> files — it doesn't prevent TypeScript from trying to <Word>
                    <Emphasis />
                    find
                </Word> them.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Fix 1 — Nuke and reinstall node_modules:
                </Word>
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`rm -rf node_modules
rm package-lock.json
npm install`}
            </CodeBox>
            <Paragraph>
                This often resolves it because a corrupted or partially-installed <Word>
                    <Verbatim />
                    @types/estree
                </Word> package gets cleanly reinstalled.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Fix 2 — Check what's actually in the estree types folder:
                </Word>
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`ls node_modules/@types/estree/`}
            </CodeBox>
            <Paragraph>
                If there's no <Word>
                    <Verbatim />
                    index.d.ts
                </Word> directly in that folder, that's your problem. Installing it explicitly should fix the structure:
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`npm install --save-dev @types/estree`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Fix 3 — Restrict typeRoots (the nuclear option):
                </Word> Add this to your <Word>
                    <Verbatim />
                    compilerOptions
                </Word>:
            </Paragraph>
            <CodeBox
                language="json"
            >
                {`${''}"typeRoots": []`}
            </CodeBox>
            <Paragraph>
                This tells TypeScript to not auto-discover any type roots at all. Your explicitly imported types will still
                work, but nothing gets implicitly loaded. This is aggressive but effective.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Fix 4 — If you're in a monorepo or have hoisted dependencies:
                </Word> Check if there's a nested <Word>
                    <Verbatim />
                    node_modules/@types/estree
                </Word> somewhere up the directory tree that TypeScript is finding. Run:
            </Paragraph>
            <CodeBox
                language="bash"
            >
                {`npm ls @types/estree`}
            </CodeBox>
            <Paragraph>
                This shows which package is pulling it in. If it's an indirect dependency, you may need to add it as an
                explicit devDependency so npm installs the full package properly.
            </Paragraph>
            <Paragraph>I'd start with Fix 1, then check Fix 2 if it persists.</Paragraph>
        </Message>
        <Message
            at="2026-02-13T15:12:00.974261Z"
        >
            <Origin>019c578f-154d-7597-ad63-5833788a7e86</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I'm on windows. I always am. Please give a solution. Adding the package doesnt change the tsconfig error
            </Paragraph>
        </Message>
        <Message
            at="2026-02-13T15:12:08.833637Z"
        >
            <Origin>019c578f-154d-7597-ad63-5834146d40bf</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Right, sorry about that. Let's diagnose it properly. Run these in PowerShell:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 1 — Check what's actually in there:
                </Word>
            </Paragraph>
            <CodeBox
                language="powershell"
            >
                {`dir node_modules\\@types\\estree`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 2 — Check who's pulling it in:
                </Word>
            </Paragraph>
            <CodeBox
                language="powershell"
            >
                {`npm ls @types/estree`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Step 3 — Try the clean reinstall:
                </Word>
            </Paragraph>
            <CodeBox
                language="powershell"
            >
                {`Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install`}
            </CodeBox>
            <Paragraph>
                If the error still persists after that, try adding the empty <Word>
                    <Verbatim />
                    typeRoots
                </Word> to your tsconfig:
            </Paragraph>
            <CodeBox
                language="json"
            >
                {`${''}"typeRoots": []`}
            </CodeBox>
            <Paragraph>
                And if <Word>
                    <Emphasis />
                    that
                </Word> doesn't work either, restart VS Code completely (not just reload window — fully quit and reopen).
                The TypeScript language server in VS Code caches aggressively and sometimes holds onto stale errors even
                after the underlying issue is fixed.
            </Paragraph>
            <Paragraph>Let me know what the output of steps 1 and 2 shows and we can narrow it down from there.</Paragraph>
        </Message>
    </Chapter>
);
