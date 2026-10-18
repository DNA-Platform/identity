import { Bold, Chapter, Heading, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { CodeBox, Opaque, Verbatim } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Chemistry Framework: A Developer's Perspective v1 ]]</Title>
        <Section>
            <Opaque />
            <Heading>Chemistry Framework: A Developer's Perspective at version 1</Heading>
            <Heading>Chemistry Framework: A Developer's Perspective</Heading>
            <Heading>What Makes Chemistry Exciting</Heading>
            <Heading>1. The Death of Prop Drilling</Heading>
            <CodeBox
                language="typescript"
            >
                {`// No more of this nightmare
<GrandParent theme={theme}>
  <Parent theme={theme} user={user}>
    <Child theme={theme} user={user} onClick={handleClick}>
      <GrandChild theme={theme} user={user} onClick={handleClick} />
    </Child>
  </Parent>
</GrandParent>

// Chemistry: Objects know their relationships
class $GrandChild extends $Chemical {
  view() {
    return <div>{this.parent.parent.parent.theme}</div>
  }
}`}
            </CodeBox>
            <Heading>2. True UI Polymorphism</Heading>
            <Paragraph>Finally, actual inheritance for UI components:</Paragraph>
            <CodeBox
                language="typescript"
            >
                {`class $BaseModal extends $Chemical {
  open = false;
  $toggle() { this.open = !this.open; }
  view() { /* base modal */ }
}

class $ConfirmModal extends $BaseModal {
  $onConfirm() { /* override */ }
  view() { /* extends base with confirm buttons */ }
}

class $DangerConfirmModal extends $ConfirmModal {
  view() { 
    // Just override the styling, keep all behavior
    const { Modal } = this.components;
    return <Modal className="danger" />
  }
}`}
            </CodeBox>
            <Heading>3. Components That Actually Communicate</Heading>
            <CodeBox
                language="typescript"
            >
                {`${''}class $Form extends $Chemical {
  fields: $Field[] = [];
  
  $Form(...fields: $Child<$Field>[]) {
    this.fields = fields.map(f => {
      f.instance.form = this;  // Field knows its form!
      return f.instance;
    });
  }
  
  $validate() {
    return this.fields.every(f => f.valid);
  }
}

class $Field extends $Chemical {
  form?: $Form;
  
  $onChange(value: string) {
    this.value = value;
    this.form?.$validate();  // Field can trigger form validation!
  }
}`}
            </CodeBox>
            <Heading>Use Cases That Become Trivial</Heading>
            <Heading>Dynamic Form Generation</Heading>
            <CodeBox
                language="typescript"
            >
                {`${''}class $DynamicForm extends $Chemical {
  $DynamicForm(...fields: $Child<$Field>[]) {
    // Constructor receives actual field types at runtime
    // Polymorphism means TextField, DateField, SelectField all just work
    this.setupValidation(fields);
  }
  
  view() {
    const { Field } = this.components;
    return this.fields.map(f => <Field key={f.id} />);
  }
}

// Usage - the fields determine the form!
<DynamicForm>
  <TextField name="email" />
  <PasswordField name="password" />
  {showPhone && <PhoneField />}
</DynamicForm>`}
            </CodeBox>
            <Heading>Component Coordination Without Context</Heading>
            <CodeBox
                language="typescript"
            >
                {`class $VideoPlayer extends $Chemical {
  timeline?: $Timeline;
  controls?: $Controls;
  
  $VideoPlayer(timeline: $Child<$Timeline>, controls: $Child<$Controls>) {
    this.timeline = timeline.instance;
    this.controls = controls.instance;
    
    // They can reference each other!
    timeline.instance.player = this;
    controls.instance.timeline = timeline.instance;
  }
}`}
            </CodeBox>
            <Heading>Reusable Business Logic Through Inheritance</Heading>
            <CodeBox
                language="typescript"
            >
                {`${''}class $DataTable extends $Chemical {
  data: any[] = [];
  $sort(column: string) { /* sorting logic */ }
  $filter(term: string) { /* filter logic */ }
  $paginate(page: number) { /* pagination */ }
}

class $UserTable extends $DataTable {
  // Inherits ALL the table logic
  // Just override what's different
  renderCell(user: User, column: string) {
    if (column === 'avatar') return <Avatar user={user} />;
    return super.renderCell(user, column);
  }
}

class $AdminUserTable extends $UserTable {
  // Add admin features on top
  $ban(user: User) { /* admin only */ }
}`}
            </CodeBox>
            <Heading>How This Changes Development</Heading>
            <Heading>1. Thinking in Objects Again</Heading>
            <Paragraph>
                Instead of "how do I pass this prop down 5 levels" or "what's the right hook for this", I think "what object
                should own this data?" The answer is usually obvious.
            </Paragraph>
            <Heading>2. Refactoring Becomes Mechanical</Heading>
            <Paragraph>
                Extract a component? It's just moving methods to a new class. Share behavior? Extract a base class. No more
                untangling hook dependencies or rewriting effect chains.
            </Paragraph>
            <Heading>3. Testing Is Straightforward</Heading>
            <CodeBox
                language="typescript"
            >
                {`const form = new $Form();
const field = new $Field();
form.$Form(field);
field.$onChange('test');
expect(form.valid).toBe(true);
// No providers, no mocking hooks, just objects`}
            </CodeBox>
            <Heading>4. Code Reviews Focus on Business Logic</Heading>
            <Paragraph>
                No more debates about "should this be useCallback or useMemo" or "is this the right dependency array". Just
                "does this class model the domain correctly?"
            </Paragraph>
            <Heading>5. Junior Developers Can Contribute Immediately</Heading>
            <Paragraph>
                "Make the count go up when clicked" → <Word>
                    <Verbatim />
                    this.count++
                </Word> No learning curve about hooks, no footguns about stale closures. If they know basic OOP, they can
                contribute.
            </Paragraph>
            <Heading>The Killer Feature: It's Still React</Heading>
            <Paragraph>
                I can drop Chemistry components into any React app. My team doesn't need to migrate. We can use Chemistry
                for the complex parts and keep React for simple presentational components.
            </Paragraph>
            <CodeBox
                language="typescript"
            >
                {`// Regular React component
function App() {
  return (
    <div>
      <Header />  {/* Plain React */}
      <DataTable />  {/* Chemistry component - just works */}
      <Footer />  {/* Plain React */}
    </div>
  );
}`}
            </CodeBox>
            <Heading>What I'd Build With This</Heading>
            <Heading>1. A Real Component Library</Heading>
            <Paragraph>
                Not just styled variations, but behavioral inheritance trees. BaseButton → AsyncButton → RetryableButton →
                ExponentialBackoffButton.
            </Paragraph>
            <Heading>2. Complex Multi-Step Forms</Heading>
            <Paragraph>
                Where each step knows about previous steps, validation cascades properly, and I can serialize/restore the
                entire form state because it's just an object graph.
            </Paragraph>
            <Heading>3. Dashboard Framework</Heading>
            <Paragraph>
                Widgets that actually communicate. Charts that update when tables filter. Filters that know what data
                they're filtering. All without a global store.
            </Paragraph>
            <Heading>4. Collaborative Editor</Heading>
            <Paragraph>
                Where each content block is a Chemical that knows its position, can communicate with siblings, and the
                document structure is the actual object graph.
            </Paragraph>
            <Heading>The Bottom Line</Heading>
            <Paragraph>
                Chemistry doesn't make me learn a new way of thinking - it lets me use the OOP patterns I already know. It
                doesn't fight me when I want objects to communicate. It doesn't make me pretend functions are objects.
            </Paragraph>
            <Paragraph>
                Most importantly: <Word>
                    <Bold />
                    I can explain this to a new developer in 5 minutes
                </Word>, not 5 hours of "okay, so hooks have rules, and they run every render, but also they don't, and
                here's why your effect is firing twice..."
            </Paragraph>
            <Paragraph>This is what React should have been.</Paragraph>
        </Section>
    </Chapter>
);
