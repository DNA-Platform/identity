import { Bold, Chapter, Date, Emphasis, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[10 February 2026](2026-02-10)</Date>
        </Dated>
        <Title>[[ 10 February 2026 ]]</Title>
        <Message
            at="2026-02-10T16:04:49.117502Z"
        >
            <Origin>019c484c-59ba-74f1-825c-d8e902475fe7</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Can you do some research on what are the canonical texts to learn grammar in English and then what is like a
                curriculum for learning grammar that I can follow in reasonably bite-size chunks with you? But here’s the
                fun thing that in the curriculum which I want you to make an editable artifact out of that I can put in the
                project so we can refer to it cause that will be fun, I want you to remember that I’m a computer programmer
                and I like specifications and formal systems and so I would like concepts to also be stated with grammatical
                precision while learning. So find the canonical text in this domain and really think about giving me a good
                education and then put together a summary of that education in bite-size chunks that perhaps could be
                learned in half an hour at a time in chats in this project so I can just say which one I’m up to and you can
                catch up by reading that document and finding the section and maybe doing some searching of other chats too
                to see that what we’ve covered so far so that we can keep learning!
            </Paragraph>
        </Message>
        <Message
            at="2026-02-10T16:08:31.148943Z"
        >
            <Origin>019c484c-59ba-72b8-8163-f10b68bedcf0</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “canonical English grammar textbooks linguistic reference”</Action>
            <Action>
                Searched the web for “Huddleston Pullum "Student's Introduction to English Grammar" curriculum topics”
            </Action>
            <Action>
                Searched the web for “best English grammar books formal linguistics Carnie Syntax Radford generative”
            </Action>
            <Paragraph>Now let me check what we've already explored together so I can build on that foundation:</Paragraph>
            <Action>Searched past conversations for “determiners reference operators grammar”</Action>
            <Action>Searched past conversations for “grammar parts of speech sentence structure syntax”</Action>
            <Action>Searched past conversations for “verb tense clause complement predicate”</Action>
            <Paragraph>Now I have everything I need. Let me build this curriculum document.</Paragraph>
            <Action>Read /mnt/skills/public/frontend-design/SKILL.md</Action>
            <Action>Created /home/claude/grammar-curriculum.md</Action>
            <Action>Ran cp /home/claude/grammar-curriculum.md /mnt/user-data/outputs/grammar-curriculum.md</Action>
            <Action>Presented files</Action>
            <Paragraph>Here's your curriculum. A few things about the design:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The canonical text
                </Word> is Huddleston &amp; Pullum's <Word>
                    <Emphasis />
                    A Student's Introduction to English Grammar
                </Word> (SIEG). It's the teaching version of CGEL, the definitive descriptive grammar of English — it won
                the Linguistic Society of America's top book award. Its killer feature for you: it rigorously separates
                formal categories (types) from functional roles (interfaces), which maps perfectly to how you already think.
                Carnie's <Word>
                    <Emphasis />
                    Syntax: A Generative Introduction
                </Word> is the supplement for when you want the formal generative machinery (phrase structure rules,
                movement, binding theory).
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The curriculum has 32 sessions across 8 modules
                </Word>, each designed for ~30 minutes. I've marked the sessions where we've already explored territory
                informally (the determiner/reference operator work from our previous conversation) as <Word>
                    <Verbatim />
                    &#91;~&#93;
                </Word> — partially covered. Those sessions have notes about what we established and what remains to
                formalize properly.
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    Appendix A
                </Word> maps every key linguistic term to a programming analogy. <Word>
                    <Bold />
                    Appendix B
                </Word> preserves the discoveries from our conversations so they don't get lost.
            </Paragraph>
            <Paragraph>
                To use it: upload it to the project, then just tell me "let's do Session 5" (or wherever you want to start)
                and I'll read the doc, check what we've covered, and pick up from there. You can also edit the checkboxes as
                we go.
            </Paragraph>
            <Paragraph>
                I'd suggest starting at Session 1 even though some of Module 3 is familiar — the foundations in Modules 1-2
                will give you the vocabulary and formal framework that makes everything else click faster.
            </Paragraph>
        </Message>
    </Chapter>
);
