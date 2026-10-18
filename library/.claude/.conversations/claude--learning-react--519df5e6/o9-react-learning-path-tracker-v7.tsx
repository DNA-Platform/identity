import { Bold, Chapter, Emphasis, Heading, Line, List, Paragraph, Section, Title, Word } from '@dna-platform/public';
import { Opaque } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ React Learning Path Tracker v7 ]]</Title>
        <Section>
            <Opaque />
            <Heading>React Learning Path Tracker at version 7</Heading>
            <Heading>React Learning Path for Chemistry Framework</Heading>
            <Heading>Progress Tracker</Heading>
            <Heading>✅ Completed Topics</Heading>
            <Paragraph>
                <Word>
                    <Emphasis />
                    (none yet)
                </Word>
            </Paragraph>
            <Heading>📚 Core Hooks (Essential)</Heading>
            <Paragraph>
                <List />
                <Line>
                    &#91; &#93; <Word>
                        <Bold />
                        useState
                    </Word> - Adds state to functional components; returns &#91;value, setter&#93; pair
                </Line>
                <Line>
                    &#91; &#93; <Word>
                        <Bold />
                        useEffect
                    </Word> - Runs side effects after render; handles lifecycle events like mount/unmount
                </Line>
                <Line>
                    &#91; &#93; <Word>
                        <Bold />
                        useMemo
                    </Word> - Memoizes expensive computations; recalculates only when dependencies change
                </Line>
                <Line>
                    &#91; &#93; <Word>
                        <Bold />
                        useCallback
                    </Word> - Memoizes functions to prevent recreation on every render
                </Line>
                <Line>
                    &#91; &#93; <Word>
                        <Bold />
                        useRef
                    </Word> - Creates mutable reference that persists across renders without triggering re-renders
                </Line>
                <Line>
                    &#91; &#93; <Word>
                        <Bold />
                        useContext
                    </Word> - Accesses React context values without prop drilling
                </Line>
            </Paragraph>
            <Heading>✅ Completed Topics</Heading>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Bold />
                        Props object
                    </Word> - Immutable object passed from parent; frozen at top level only
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Children prop
                    </Word> - Special prop containing nested JSX; can be elements, strings, arrays, or undefined
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        React elements
                    </Word> - Plain objects describing what to render; created by JSX or React.createElement
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        React nodes
                    </Word> - Valid render values: elements, strings, numbers, arrays, null, undefined
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Mount phase
                    </Word> - Component first appears; state initialized, first render, effects run
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Update phase
                    </Word> - Props/state change triggers re-render; cleanup then re-run effects
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Unmount phase
                    </Word> - Component removed; cleanup functions run, refs cleared
                </Line>
            </Paragraph>
            <Heading>🔄 Component Lifecycle</Heading>
            <Paragraph>
                <List />
                <Line>
                    &#91; &#93; <Word>
                        <Bold />
                        Mount phase
                    </Word> - Component first appears; state initialized, first render, effects run
                </Line>
                <Line>
                    &#91; &#93; <Word>
                        <Bold />
                        Update phase
                    </Word> - Props/state change triggers re-render; cleanup then re-run effects
                </Line>
                <Line>
                    &#91; &#93; <Word>
                        <Bold />
                        Unmount phase
                    </Word> - Component removed; cleanup functions run, refs cleared
                </Line>
            </Paragraph>
            <Heading>💾 State &amp; Rendering</Heading>
            <Paragraph>
                <List />
                <Line>
                    &#91; &#93; <Word>
                        <Bold />
                        State binding
                    </Word> - State is bound to component instance, not globally
                </Line>
                <Line>
                    &#91; &#93; <Word>
                        <Bold />
                        Re-render triggers
                    </Word> - State changes, prop changes, parent re-renders, context changes
                </Line>
                <Line>
                    &#91; &#93; <Word>
                        <Bold />
                        Render phase vs commit phase
                    </Word> - Calculate what changed vs actually update DOM
                </Line>
                <Line>
                    &#91; &#93; <Word>
                        <Bold />
                        Batching
                    </Word> - React groups multiple state updates into single re-render
                </Line>
            </Paragraph>
            <Heading>🎯 Advanced Patterns</Heading>
            <Paragraph>
                <List />
                <Line>
                    &#91; &#93; <Word>
                        <Bold />
                        Rules of Hooks
                    </Word> - Only call at top level, only in React functions
                </Line>
                <Line>
                    &#91; &#93; <Word>
                        <Bold />
                        Dependency arrays
                    </Word> - Control when effects/memos recalculate
                </Line>
                <Line>
                    &#91; &#93; <Word>
                        <Bold />
                        Cleanup functions
                    </Word> - Return from useEffect to clean up subscriptions/timers
                </Line>
                <Line>
                    &#91; &#93; <Word>
                        <Bold />
                        Custom hooks
                    </Word> - Extract component logic into reusable functions
                </Line>
            </Paragraph>
            <Heading>🆕 Topics to Add</Heading>
            <Paragraph>
                <Word>
                    <Emphasis />
                    (Add new topics here as we discover them)
                </Word>
            </Paragraph>
            <Heading>Study Notes</Heading>
            <Heading>Current Topic: Hooks</Heading>
            <Heading>Questions &amp; Answers</Heading>
            <Paragraph>
                <Word>
                    <Emphasis />
                    (We'll add Q&amp;A from our discussions here)
                </Word>
            </Paragraph>
            <Heading>Next Steps</Heading>
            <Paragraph>
                <List ordered />
                <Line>Choose a topic to start with (recommend useState or Props object)</Line>
                <Line>Work through examples in your Chemistry framework</Line>
                <Line>Add new topics as we discover gaps</Line>
                <Line>Move completed topics to the ✅ section</Line>
            </Paragraph>
        </Section>
    </Chapter>
);
