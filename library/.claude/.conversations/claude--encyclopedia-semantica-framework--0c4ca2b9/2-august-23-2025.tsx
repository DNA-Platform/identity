import { Bold, Chapter, Date, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[23 August 2025](2025-08-23)</Date>
        </Dated>
        <Title>[[ 23 August 2025 ]]</Title>
        <Message
            at="2025-08-23T23:36:13.752848Z"
        >
            <Origin>df98e18a-5674-4518-ae38-02c874f57b55</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                As local variables, can you have TSX components with lowercase names? Or are lowercase names exclusively
                reserved for HTML elements
            </Paragraph>
        </Message>
        <Message
            at="2025-08-23T23:36:26.751922Z"
        >
            <Origin>59c6d29c-2e36-4f6a-b18d-f807a199ee1c</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Lowercase JSX names are <Word>
                    <Bold />
                    exclusively reserved for HTML/intrinsic elements
                </Word>. Even local variables must be uppercase for React components:
            </Paragraph>
            <CodeBox
                language="tsx"
            >
                {`// This WORKS - uppercase variable
const MyComponent = paragraph;  // paragraph is a React component
<MyComponent />  // ✅ Works

// This FAILS - lowercase variable
const mycomponent = paragraph;
<mycomponent />  // ❌ TypeScript error: Property 'mycomponent' does not exist on JSX.IntrinsicElements`}
            </CodeBox>
            <Paragraph>React's rule is simple:</Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Lowercase
                    </Word> = HTML element (must exist in JSX.IntrinsicElements)
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Uppercase
                    </Word> = React component
                </Line>
            </Paragraph>
            <Paragraph>This is hardcoded into how JSX transforms:</Paragraph>
            <CodeBox
                language="tsx"
            >
                {`<div />       // Becomes: React.createElement('div')
<MyComp />    // Becomes: React.createElement(MyComp)`}
            </CodeBox>
            <Paragraph>
                So for your Chemistry framework, you must use uppercase names for the exported components:
            </Paragraph>
            <CodeBox
                language="tsx"
            >
                {`export class Paragraph extends Section { ... }
export const ParagraphComponent = new Paragraph().render();
// or
export const Paragraph = new Paragraph().render();  // Name collision with class though`}
            </CodeBox>
            <Paragraph>The lowercase idea won't work with JSX unfortunately.</Paragraph>
        </Message>
        <Message
            at="2025-08-23T23:41:37.754686Z"
        >
            <Origin>22e693b2-77b9-4216-b97c-eaa05a628de1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Ugh so I need a suffix like Model to distinguish them? That's annoying... Can we think of something clean
                and elegant to delineate? Interfaces like IWhatever can be an inspiration, if there is a good one. Model as
                a suffix suffices but it's annoying. Any other inspiration to draw from? Hungarian syntax or things from
                other languages / frameworks?
            </Paragraph>
        </Message>
        <Message
            at="2025-08-23T23:41:51.721188Z"
        >
            <Origin>488909e8-d3b0-43cd-ad92-e2d4ff7412eb</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here are some elegant patterns to consider:</Paragraph>
            <Heading>1. The $ Prefix (jQuery/Observable inspiration)</Heading>
            <CodeBox
                language="tsx"
            >
                {`export class Paragraph extends Section { ... }
export const $Paragraph = new Paragraph().render();
// Usage: <$Paragraph />`}
            </CodeBox>
            <Heading>2. The _ Suffix (minimal, clean)</Heading>
            <CodeBox
                language="tsx"
            >
                {`export class Paragraph extends Section { ... }
export const Paragraph_ = new Paragraph().render();
// Usage: <Paragraph_ />`}
            </CodeBox>
            <Heading>3. Use namespace pattern (TypeScript native)</Heading>
            <CodeBox
                language="tsx"
            >
                {`export class Paragraph extends Section { ... }
export namespace Paragraph {
  export const Component = new Paragraph().render();
}
// Usage: <Paragraph.Component />`}
            </CodeBox>
            <Heading>4. The "Use" prefix (hooks convention, but for instances)</Heading>
            <CodeBox
                language="tsx"
            >
                {`export class Paragraph extends Section { ... }
export const UseParagraph = new Paragraph().render();
// Usage: <UseParagraph />`}
            </CodeBox>
            <Heading>5. Just "C" prefix (for Component)</Heading>
            <CodeBox
                language="tsx"
            >
                {`export class Paragraph extends Section { ... }
export const CParagraph = new Paragraph().render();
// Usage: <CParagraph />`}
            </CodeBox>
            <Paragraph>
                My favorite is the <Word>
                    <Bold />
                    $
                </Word> prefix - it's:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Single character</Line>
                <Line>Visually distinct</Line>
                <Line>Has precedent (jQuery for "enhanced" objects)</Line>
                <Line>Suggests "instance of"</Line>
                <Line>
                    Clean in JSX: <Word>
                        <Verbatim />
                        &lt;$Paragraph /&gt;
                    </Word>
                </Line>
            </Paragraph>
            <Paragraph>What do you think?</Paragraph>
        </Message>
        <Message
            at="2025-08-23T23:42:35.465495Z"
        >
            <Origin>8a211e05-cd66-4ad6-9a5b-67e28b673c60</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Me too! It is a JavaScript native way to delineate things like this. It feels okay for this. No one is using
                jQuery with Chemistry and React
            </Paragraph>
        </Message>
        <Message
            at="2025-08-23T23:42:48.936152Z"
        >
            <Origin>25ea742a-aee5-4991-a7a4-be32732aa671</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Perfect! The <Word>
                    <Verbatim />
                    $
                </Word> prefix it is. It's actually quite elegant for Chemistry:
            </Paragraph>
            <CodeBox
                language="tsx"
            >
                {`// Section.tsx
'use client'

export class Section extends Writing { ... }
export class Paragraph extends Section { ... }

// The $ prefix means "Chemistry instance component"
export const $Section = new Section().render();
export const $Paragraph = new Paragraph().render();

export default $Section;`}
            </CodeBox>
            <Paragraph>Usage becomes very clean:</Paragraph>
            <CodeBox
                language="tsx"
            >
                {`// Import for rendering
import { $Paragraph, $Section } from './Section';
<$Paragraph />
<$Section />

// Import for types/instanceof
import { Paragraph, Section } from './Section';
if (instance instanceof Paragraph) { ... }`}
            </CodeBox>
            <Paragraph>And in your page:</Paragraph>
            <CodeBox
                language="tsx"
            >
                {`import { $Book, $Chapter } from '../code/writing/collections/BookComponents';

export default function Page() {
  return <$Book />;
}`}
            </CodeBox>
            <Paragraph>
                The <Word>
                    <Verbatim />
                    $
                </Word> effectively means "rendered Chemistry instance" - it's like a sigil that indicates this is the
                component version, not the class. Very JavaScript-y and no conflicts with any modern patterns!
            </Paragraph>
            <Paragraph>
                Want to try updating a few files with this pattern to see if it resolves the circular dependencies?
            </Paragraph>
        </Message>
        <Message
            at="2025-08-23T23:43:00.937339Z"
        >
            <Origin>6b553f66-e896-4bc0-8c26-5cae8910e838</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Haha no you have it backwards. We want to preserve the elegance of the markdown no?</Paragraph>
        </Message>
        <Message
            at="2025-08-23T23:43:13.854763Z"
        >
            <Origin>65c57758-f29f-4db1-a0ff-6cdea96e0cc5</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>OH! You're absolutely right! Keep the clean names for the components:</Paragraph>
            <CodeBox
                language="tsx"
            >
                {`// Section.tsx
'use client'

export class $Section extends Writing { ... }  // $ prefix for the CLASS
export class $Paragraph extends $Section { ... }

// Clean names for the components
export const Section = new $Section().render();
export const Paragraph = new $Paragraph().render();

export default Section;`}
            </CodeBox>
            <Paragraph>Usage is beautifully clean:</Paragraph>
            <CodeBox
                language="tsx"
            >
                {`// Clean JSX
import { Paragraph, Section } from './Section';
<Paragraph />
<Section />

// When you need the class
import { $Paragraph, $Section } from './Section';
if (instance instanceof $Paragraph) { ... }`}
            </CodeBox>
            <Paragraph>
                The <Word>
                    <Verbatim />
                    $
                </Word> prefix on the class means "this is the Chemistry model/class", while the clean name is what you
                actually use in JSX. This preserves the elegant, readable markup:
            </Paragraph>
            <CodeBox
                language="tsx"
            >
                {`<Book>
  <Chapter>
    <Paragraph>
      Beautiful, clean JSX with no noise!
    </Paragraph>
  </Chapter>
</Book>`}
            </CodeBox>
            <Paragraph>
                Much better! The <Word>
                    <Verbatim />
                    $
                </Word> is hidden in the implementation details, not in the markup.
            </Paragraph>
        </Message>
        <Message
            at="2025-08-23T23:44:55.241528Z"
        >
            <Origin>4fcda365-470d-48cb-ad93-9ce5903c1ed5</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>How do you export a const if it is not the default? Is there an easy way?</Paragraph>
        </Message>
        <Message
            at="2025-08-23T23:45:05.944037Z"
        >
            <Origin>0d832eb5-5e99-4038-a086-b6d2b49c2323</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Yes! For named exports of const, you have a couple options:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 1: Export inline with declaration
                </Word>
            </Paragraph>
            <CodeBox
                language="tsx"
            >
                {`export const Paragraph = new $Paragraph().render();`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 2: Export list at the bottom
                </Word>
            </Paragraph>
            <CodeBox
                language="tsx"
            >
                {`const Paragraph = new $Paragraph().render();
const Section = new $Section().render();

export { Paragraph, Section };`}
            </CodeBox>
            <Paragraph>
                <Word>
                    <Bold />
                    Option 3: Mix of both
                </Word>
            </Paragraph>
            <CodeBox
                language="tsx"
            >
                {`export const Paragraph = new $Paragraph().render();
export const Section = new $Section().render();
export default Section;  // One can still be default`}
            </CodeBox>
            <Paragraph>
                For your Chemistry pattern, Option 1 is probably cleanest - export inline as you create each component:
            </Paragraph>
            <CodeBox
                language="tsx"
            >
                {`'use client'

export class $Section extends Writing { ... }
export class $Paragraph extends $Section { ... }

export const Section = new $Section().render();
export const Paragraph = new $Paragraph().render();
export default Section;`}
            </CodeBox>
            <Paragraph>Then importing is clean:</Paragraph>
            <CodeBox
                language="tsx"
            >
                {`import Section, { Paragraph } from './Section';  // default and named
// or
import { Section, Paragraph } from './Section';  // just named`}
            </CodeBox>
        </Message>
        <Message
            at="2025-08-23T23:49:19.516690Z"
        >
            <Origin>cf2ae2ba-29c8-43bf-bfbf-2e1959a79486</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Right but now we can do import &#123; Section, $Section &#125; depending on which you are using. That gives
                us a clean way to model
            </Paragraph>
        </Message>
        <Message
            at="2025-08-23T23:49:31.092765Z"
        >
            <Origin>95f298af-8a07-40aa-8ea3-579cf297daaf</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Exactly! That's the perfect pattern for Chemistry. You get clean, explicit imports based on what you need:
            </Paragraph>
            <CodeBox
                language="tsx"
            >
                {`// Section.tsx
'use client'

export class $Section extends Writing { ... }
export class $Paragraph extends $Section { ... }

export const Section = new $Section().render();
export const Paragraph = new $Paragraph().render();`}
            </CodeBox>
            <Paragraph>Then your imports are self-documenting:</Paragraph>
            <CodeBox
                language="tsx"
            >
                {`${''}// When you need to render components
import { Section, Paragraph } from './Section';
<Section />
<Paragraph />

// When you need the classes for instanceof or typing
import { $Section, $Paragraph } from './Section';
if (instance instanceof $Paragraph) { ... }
chapters: $Chapter[] = [];

// When you need both
import { Paragraph, $Paragraph } from './Section';`}
            </CodeBox>
            <Paragraph>This solves all your problems:</Paragraph>
            <Paragraph>
                <List />
                <Line>Clean JSX with no prefixes</Line>
                <Line>Clear distinction between class and component</Line>
                <Line>No naming conflicts</Line>
                <Line>Can export both from the same file</Line>
                <Line>Breaks circular dependencies when grouped properly</Line>
            </Paragraph>
            <Paragraph>
                The <Word>
                    <Verbatim />
                    $
                </Word> prefix becomes your Chemistry convention: <Word>
                    <Verbatim />
                    $
                </Word> = the class/model, plain = the component. Perfect!
            </Paragraph>
        </Message>
        <Message
            at="2025-08-23T23:56:11.094974Z"
        >
            <Origin>612a2be7-4dd3-421e-a847-702b3ce76911</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay now here's a fun idea. I have a sense of this but I am not sure it is obvious to implement. Suppose
                each Chemical has a signature, like this:
            </Paragraph>
            <Paragraph>Book cover: $Cover title: $Title chapters: $Chapter&#91;&#93;</Paragraph>
            <Paragraph>
                Try to imagine we use the childChemicals (which I have renamed just children). We want a way of specifying
                that if a Cover is found in the Children it is assigned to cover. The chapters are assigned in order to
                chapters. If there is no Cover perhaps, there is an error. In C# I could accomplish this with reflection or
                attributes. If there is a settable property with a type, when the children are enumerated, assign the
                property. We don't have that kind of reflection in TypeScript. Is there another way to accomplish this -
                perhaps through a configuration that uses lambdas as selectors of the properties?
            </Paragraph>
        </Message>
        <Message
            at="2025-08-23T23:56:26.906861Z"
        >
            <Origin>5ba99217-afeb-476a-a6b0-e03821b15b95</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Great idea! You could create a declarative binding system using lambdas. Here's a clean approach:
            </Paragraph>
            <CodeBox
                language="tsx"
            >
                {`${''}export class $Book extends Collection<$Chapter> {
  cover?: $Cover;
  title?: $Title;
  chapters: $Chapter[] = [];

  // Define the binding rules
  static bindings = [
    {
      match: (child: any) => child instanceof $Cover,
      assign: (book: $Book, child: $Cover) => {
        if (book.cover) throw new Error("Book already has a cover");
        book.cover = child;
        child.owner = book;
      }
    },
    {
      match: (child: any) => child instanceof $Title,
      assign: (book: $Book, child: $Title) => {
        book.title = child;
        child.owner = book;
      }
    },
    {
      match: (child: any) => child instanceof $Chapter,
      assign: (book: $Book, child: $Chapter) => {
        book.chapters.push(child);
        child.book = book;
        child.number = book.chapters.length;
      }
    }
  ];

  processChildren(): void {
    if (!this.children) return;
    
    this.children.forEach((child: any) => {
      const binding = $Book.bindings.find(b => b.match(child));
      if (binding) {
        binding.assign(this, child);
      }
    });
  }
}`}
            </CodeBox>
            <Paragraph>Or even cleaner with a decorator-like pattern:</Paragraph>
            <CodeBox
                language="tsx"
            >
                {`${''}export class $Book extends Collection<$Chapter> {
  @bindChild($Cover, { required: true, single: true })
  cover?: $Cover;
  
  @bindChild($Title)
  title?: $Title;
  
  @bindChild($Chapter, { multiple: true, ordered: true })
  chapters: $Chapter[] = [];
}`}
            </CodeBox>
            <Paragraph>Would either of these patterns work for Chemistry?</Paragraph>
        </Message>
        <Message
            at="2025-08-23T23:57:35.334611Z"
        >
            <Origin>55728f16-7027-42f0-8dcd-18a46f2c6a30</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Seems verbose, no? Can't the key be the class (instanceof would work off of that) and then the value is some
                sort of configuration that makes the simplest cases easy
            </Paragraph>
        </Message>
        <Message
            at="2025-08-23T23:57:51.592457Z"
        >
            <Origin>cdd14550-368d-4e6d-827f-ebc60e692e6e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Absolutely! Much cleaner. Here's a simpler approach using a Map:</Paragraph>
            <CodeBox
                language="tsx"
            >
                {`${''}export class $Book extends Collection<$Chapter> {
  cover?: $Cover;
  title?: $Title;
  chapters: $Chapter[] = [];

  // Class -> property name (or array property name)
  static childBindings = new Map([
    [$Cover, 'cover'],
    [$Title, 'title'],
    [$Chapter, 'chapters'],  // Automatically handles arrays
  ]);

  processChildren(): void {
    if (!this.children) return;
    
    this.children.forEach((child: any) => {
      for (const [ChildClass, propName] of $Book.childBindings) {
        if (child instanceof ChildClass) {
          const prop = (this as any)[propName];
          
          // Auto-detect array vs single
          if (Array.isArray(prop)) {
            prop.push(child);
          } else {
            (this as any)[propName] = child;
          }
          
          child.owner = this;
          break;
        }
      }
    });
  }
}`}
            </CodeBox>
            <Paragraph>Or even simpler with just an object:</Paragraph>
            <CodeBox
                language="tsx"
            >
                {`${''}export class $Book extends Collection<$Chapter> {
  cover?: $Cover;
  title?: $Title;  
  chapters: $Chapter[] = [];

  childBindings = {
    $Cover: 'cover',
    $Title: 'title',
    $Chapter: 'chapters'
  };
}`}
            </CodeBox>
            <Paragraph>
                The framework could handle the rest - if the property is an array, append; if not, assign. Simple cases are
                just a one-liner mapping!
            </Paragraph>
        </Message>
        <Message
            at="2025-08-23T23:59:15.683376Z"
        >
            <Origin>2512fa05-0e11-4ef4-908f-0220baf243e0</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Don't we want something strongly typed? Closer to &#91;$Cover, () =&gt; this.cover&#93;? Perhaps that can't
                work quite like that but I'd like something closer
            </Paragraph>
        </Message>
        <Message
            at="2025-08-23T23:59:32.236248Z"
        >
            <Origin>03ca6683-5f88-4909-8fe6-895095a4d095</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Yes! You want type safety. Here's a strongly-typed approach:</Paragraph>
            <CodeBox
                language="tsx"
            >
                {`${''}export class $Book extends Collection<$Chapter> {
  cover?: $Cover;
  title?: $Title;
  chapters: $Chapter[] = [];

  childBindings = [
    [$Cover, (child: $Cover) => { this.cover = child; }],
    [$Title, (child: $Title) => { this.title = child; }],
    [$Chapter, (child: $Chapter) => { this.chapters.push(child); }],
  ] as const;

  processChildren(): void {
    if (!this.children) return;
    
    this.children.forEach((child: any) => {
      for (const [ChildClass, setter] of this.childBindings) {
        if (child instanceof ChildClass) {
          setter(child);
          child.owner = this;
          break;
        }
      }
    });
  }
}`}
            </CodeBox>
            <Paragraph>Or with a helper for even cleaner syntax:</Paragraph>
            <CodeBox
                language="tsx"
            >
                {`${''}export class $Book extends Collection<$Chapter> {
  cover?: $Cover;
  title?: $Title;
  chapters: $Chapter[] = [];

  childBindings = [
    this.bind($Cover, c => this.cover = c),
    this.bind($Title, t => this.title = t),
    this.bind($Chapter, ch => this.chapters.push(ch)),
  ];

  // Helper method in base Chemical class
  bind<T>(Class: new() => T, setter: (instance: T) => void) {
    return [Class, setter] as const;
  }
}`}
            </CodeBox>
            <Paragraph>This gives you full type safety - the lambda knows the exact type of the child!</Paragraph>
        </Message>
    </Chapter>
);
