import { Chapter, Line, List, Paragraph, Title } from '@dna-platform/public';
import { CodeBox, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2024-11-01T04:02:45.265337Z"
        >
            <Origin>87ed384a-cf53-43b3-a674-d64560b46787</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Tell me about gnome, Chomsky linguistics and programming languages</Paragraph>
        </Message>
        <Message
            at="2024-11-01T04:02:45.265337Z"
        >
            <Origin>732371f6-8b02-4ed8-9b6d-bb79c96314cc</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me break this down into related but distinct topics, since there's an interesting connection between
                them.
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Chomsky's Linguistics:</Line>
            </Paragraph>
            <Paragraph>
                Noam Chomsky revolutionized linguistics with his theory of Universal Grammar, suggesting that humans have an
                innate capacity for language acquisition. His most significant contributions to linguistics include:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    The concept of generative grammar, which describes how finite rules can generate infinite grammatical
                    sentences
                </Line>
                <Line>The Chomsky Hierarchy of formal languages, which classifies grammars by their generative power</Line>
                <Line>The distinction between deep structure and surface structure in language</Line>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Programming Languages and Chomsky:</Line>
            </Paragraph>
            <Paragraph>Chomsky's work directly influenced computer science and programming language design:</Paragraph>
            <Paragraph>
                <List />
                <Line>The Chomsky Hierarchy is fundamental to compiler design and formal language theory</Line>
                <Line>
                    Context-free grammars (Type-2 in the Chomsky Hierarchy) are used to define programming language syntax
                </Line>
                <Line>
                    BNF (Backus-Naur Form) notation, used to describe programming language syntax, was influenced by
                    Chomskyan ideas
                </Line>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>GNOME:</Line>
            </Paragraph>
            <Paragraph>
                GNOME (GNU Network Object Model Environment) is a desktop environment for Unix-like operating systems that:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Emphasizes usability and accessibility</Line>
                <Line>Is built using GTK (originally GIMP Toolkit)</Line>
                <Line>Uses a component-based architecture</Line>
                <Line>Is part of the GNU Project</Line>
                <Line>Follows a human interface guidelines document for consistent design</Line>
            </Paragraph>
            <Paragraph>
                The interesting connection is that both programming languages and human languages can be described using
                formal grammars from Chomsky's work. For example, a programming language like Python uses context-free
                grammar rules similar to how Chomsky described natural language syntax.
            </Paragraph>
            <Paragraph>Would you like me to elaborate on any of these aspects?</Paragraph>
        </Message>
        <Message
            at="2024-11-01T04:04:16.213040Z"
        >
            <Origin>077e5aa2-94e6-4fe6-a0a8-e289b10332de</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Is he russian</Paragraph>
        </Message>
        <Message
            at="2024-11-01T04:04:16.213040Z"
        >
            <Origin>2abcdc79-4251-4959-9335-e281eea8bd1d</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                No, Noam Chomsky is American, not Russian. He was born in Philadelphia, Pennsylvania in 1928 to Jewish
                parents who were actually immigrants from Eastern Europe (his father was from Ukraine, which was then part
                of the Russian Empire).
            </Paragraph>
            <Paragraph>
                His birth name is Avram Noam Chomsky and he grew up in Philadelphia speaking Hebrew and English. He became
                interested in linguistics and anarchist politics at a young age, partly influenced by his father who was a
                Hebrew scholar.
            </Paragraph>
            <Paragraph>
                He's spent most of his academic career at MIT (Massachusetts Institute of Technology), where he began
                teaching in 1955 and is now Professor Emeritus. While his surname might sound Russian/Slavic to some, it's
                actually derived from the Hebrew name "Chaim."
            </Paragraph>
            <Paragraph>
                Chomsky is still active today at 95 years old, known both for his groundbreaking work in linguistics and for
                his political activism and criticism of US foreign policy. He's currently a Laureate Professor at the
                University of Arizona.
            </Paragraph>
        </Message>
        <Message
            at="2024-11-01T04:06:24.062193Z"
        >
            <Origin>c552a7f8-c33e-4c60-a849-92743530cefa</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>So whst are chpmsky type heirarchy. What ate the yhpes of languages</Paragraph>
        </Message>
        <Message
            at="2024-11-01T04:06:24.062193Z"
        >
            <Origin>1e889f10-fc4b-4da9-87de-0d96b0a32cde</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me explain Chomsky's Hierarchy of formal languages, going from most restrictive (Type-3) to least
                restrictive (Type-0):
            </Paragraph>
            <Paragraph>Type-3: Regular Languages</Paragraph>
            <Paragraph>
                <List />
                <Line>Simplest form</Line>
                <Line>Can be recognized by finite state machines</Line>
                <Line>Examples:</Line>
                <Paragraph>
                    <List />
                    <Line>Basic patterns like phone numbers, emails</Line>
                    <Line>Regular expressions</Line>
                    <Line>Simple tokens in programming languages</Line>
                </Paragraph>
                <Line>Grammar rules like: A → aB or A → a</Line>
            </Paragraph>
            <Paragraph>Type-2: Context-Free Languages</Paragraph>
            <Paragraph>
                <List />
                <Line>Can handle nested structures</Line>
                <Line>Recognized by pushdown automata</Line>
                <Line>Examples:</Line>
                <Paragraph>
                    <List />
                    <Line>Most programming language syntax</Line>
                    <Line>Mathematical expressions</Line>
                    <Line>Nested parentheses</Line>
                </Paragraph>
                <Line>Grammar rules like: A → BC or A → aB</Line>
            </Paragraph>
            <Paragraph>Type-1: Context-Sensitive Languages</Paragraph>
            <Paragraph>
                <List />
                <Line>Rules can depend on surrounding context</Line>
                <Line>Recognized by linear-bounded automata</Line>
                <Line>Examples:</Line>
                <Paragraph>
                    <List />
                    <Line>Natural language aspects</Line>
                    <Line>Some programming language features requiring context</Line>
                </Paragraph>
                <Line>Grammar rules like: αAβ → αγβ</Line>
            </Paragraph>
            <Paragraph>Type-0: Recursively Enumerable Languages</Paragraph>
            <Paragraph>
                <List />
                <Line>Most general form</Line>
                <Line>Recognized by Turing machines</Line>
                <Line>Can describe any computable process</Line>
                <Line>No restrictions on grammar rules</Line>
                <Line>Examples:</Line>
                <Paragraph>
                    <List />
                    <Line>Full programming languages</Line>
                    <Line>Complex computational problems</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>Key relationships:</Paragraph>
            <CodeBox>
                {`Type-3 ⊂ Type-2 ⊂ Type-1 ⊂ Type-0
(Regular ⊂ Context-Free ⊂ Context-Sensitive ⊂ Recursively Enumerable)`}
            </CodeBox>
            <Paragraph>This hierarchy is fundamental in:</Paragraph>
            <Paragraph>
                <List />
                <Line>Compiler design</Line>
                <Line>Programming language theory</Line>
                <Line>Computational linguistics</Line>
                <Line>Automata theory</Line>
            </Paragraph>
            <Paragraph>Would you like me to elaborate on any specific type or their practical applications?</Paragraph>
        </Message>
        <Message
            at="2024-11-01T04:06:48.745448Z"
        >
            <Origin>f10ddbbe-2756-4ce1-b130-fe70f7691d61</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Did he know computability</Paragraph>
        </Message>
        <Message
            at="2024-11-01T04:06:48.745448Z"
        >
            <Origin>74ce942c-b5ba-4ca2-93f7-89b2dd9487d9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Yes, Chomsky was very familiar with computability theory and his work significantly intersected with it,
                though he wasn't primarily a computability theorist. Here's the key context:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Historical Timing:</Line>
                <Line>Chomsky developed his theories in the 1950s, after the foundational work of:</Line>
                <Paragraph>
                    <List />
                    <Line>Alan Turing (1936) on computability</Line>
                    <Line>Alonzo Church (1936) on lambda calculus</Line>
                    <Line>Emil Post's work on formal systems</Line>
                </Paragraph>
                <Line>He was well aware of these developments and incorporated them into his linguistic theories</Line>
                <Line>Key Connections:</Line>
                <Line>His formal language hierarchy directly maps to different types of automata:</Line>
                <Paragraph>
                    <List />
                    <Line>Type-3 → Finite State Machines</Line>
                    <Line>Type-2 → Pushdown Automata</Line>
                    <Line>Type-1 → Linear Bounded Automata</Line>
                    <Line>Type-0 → Turing Machines</Line>
                </Paragraph>
                <Line>Influence on Computer Science:</Line>
                <Line>His work became fundamental to theoretical computer science</Line>
                <Line>The connection between formal languages and automata theory is now a core part of CS education</Line>
                <Line>His ideas influenced early work on:</Line>
                <Paragraph>
                    <List />
                    <Line>Compiler design</Line>
                    <Line>Programming language theory</Line>
                    <Line>Formal verification</Line>
                </Paragraph>
                <Line>Direct Collaboration:</Line>
                <Line>Chomsky worked at MIT during the early days of computer science</Line>
                <Line>He interacted with many early computer scientists</Line>
                <Line>His ideas were quickly adopted by computer scientists working on language processing</Line>
            </Paragraph>
            <Paragraph>
                While Chomsky's primary focus was linguistics, his understanding of computability theory helped him create a
                formal mathematical framework for describing language that proved invaluable to both linguistics and
                computer science.
            </Paragraph>
        </Message>
        <Message
            at="2024-11-01T04:09:24.224099Z"
        >
            <Origin>2f7d4f6f-42bc-4ba9-868a-e4eeeb7cbdd8</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Did he name type zero recursively numerable?</Paragraph>
        </Message>
        <Message
            at="2024-11-01T04:09:24.224099Z"
        >
            <Origin>c11b8993-5d0c-430a-a9ab-398e505c32ed</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                No, Chomsky did not personally coin the term "recursively enumerable." This term comes from earlier work in
                computability theory and mathematical logic.
            </Paragraph>
            <Paragraph>
                The term "recursively enumerable" (also called "computably enumerable") was developed in the 1930s and
                1940s, primarily through the work of mathematicians and logicians like:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>Emil Post</Line>
                <Line>Alan Turing</Line>
                <Line>Stephen Kleene</Line>
                <Line>Alonzo Church</Line>
            </Paragraph>
            <Paragraph>
                When Chomsky developed his hierarchy in the 1950s, he was working with concepts that were already
                established in mathematical logic. He organized and classified formal languages into his hierarchy, but used
                the existing terminology from computability theory.
            </Paragraph>
            <Paragraph>
                The connection between Type-0 languages and recursively enumerable sets was made because both are recognized
                by Turing machines, but the term "recursively enumerable" predates Chomsky's work on formal language theory.
            </Paragraph>
            <Paragraph>
                This is a good example of how Chomsky incorporated existing mathematical concepts from computability theory
                into his linguistic framework, rather than creating entirely new terminology. His innovation was more in the
                systematic classification and its application to linguistics rather than in naming the categories
                themselves.
            </Paragraph>
        </Message>
        <Message
            at="2024-11-01T04:09:51.614065Z"
        >
            <Origin>b12204a1-bb50-4c6d-8ce4-652ef2c41772</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>So what did he name them and how did he decide to characterize each one?</Paragraph>
        </Message>
        <Message
            at="2024-11-01T04:09:51.614065Z"
        >
            <Origin>f3d27be7-f702-41bd-b4e0-b66d2d7450de</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Chomsky originally characterized these grammars in his 1956 paper "Three Models for the Description of
                Language" and expanded in his 1959 paper "On Certain Formal Properties of Grammars." He actually numbered
                them in the opposite order from how we commonly refer to them today.
            </Paragraph>
            <Paragraph>Originally they were:</Paragraph>
            <Paragraph>
                <List />
                <Line>Type 0: Unrestricted grammars (not originally called recursively enumerable)</Line>
                <Line>Type 1: Context-sensitive grammars</Line>
                <Line>Type 2: Context-free grammars</Line>
                <Line>Type 3: Regular/Finite state grammars</Line>
            </Paragraph>
            <Paragraph>He characterized them based on the form of their production rules:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Unrestricted (Type 0):</Line>
                <Line>No restrictions on production rules</Line>
                <Line>Form: α → β where α and β are any strings of terminals and non-terminals</Line>
                <Line>Context-sensitive (Type 1):</Line>
                <Line>Production rules: αAβ → αγβ</Line>
                <Line>Key insight: replacements depend on surrounding context</Line>
                <Line>The produced string can't be shorter than the original</Line>
                <Line>Context-free (Type 2):</Line>
                <Line>Production rules: A → γ</Line>
                <Line>Where A is a single non-terminal</Line>
                <Line>The replacement can happen regardless of context</Line>
                <Line>Regular/Finite state (Type 3):</Line>
                <Line>Production rules: A → aB or A → a</Line>
                <Line>Most restricted form</Line>
                <Line>Linear structure with no nesting</Line>
            </Paragraph>
            <Paragraph>
                His characterization was based on studying natural language patterns and formalizing what types of rules
                would be needed to generate different linguistic structures. The mathematical precision of these definitions
                made them immediately useful in computer science.
            </Paragraph>
            <Paragraph>
                The numbering from 0-3 reflects increasing restrictions on the form of rules, with Type 0 being the most
                general and Type 3 the most restricted.
            </Paragraph>
            <Paragraph>
                Interestingly, while we now associate each type with a corresponding automaton (Turing machine, linear
                bounded automaton, pushdown automaton, finite automaton), these connections were developed gradually through
                the work of various researchers in the following years, not all by Chomsky himself.
            </Paragraph>
        </Message>
        <Message
            at="2024-11-01T04:10:54.677807Z"
        >
            <Origin>0790c306-a930-414f-81cb-2523f8968a1f</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>So if type zero is the most unrestricted is that the touring machine one?</Paragraph>
        </Message>
        <Message
            at="2024-11-01T04:10:54.677807Z"
        >
            <Origin>b4991005-810b-4ebd-98c6-eaceabdd2b1a</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Yes, exactly! Type 0 (unrestricted) grammars correspond to Turing machines. Here's why:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Equivalence:</Line>
                <Line>A language is Type 0 ⟺ It can be recognized by a Turing machine</Line>
                <Line>This means Type 0 languages = recursively enumerable languages</Line>
                <Line>Power:</Line>
                <Line>Type 0 grammars are the most powerful</Line>
                <Line>They can generate any language that can be computationally enumerated</Line>
                <Line>No restrictions on production rules (α → β)</Line>
                <Line>Can model any computable process</Line>
                <Line>Hierarchy relationship:</Line>
            </Paragraph>
            <CodeBox>
                {`Type 3 (Regular) ⊂ Type 2 (Context-free) ⊂ Type 1 (Context-sensitive) ⊂ Type 0 (Turing-complete)`}
            </CodeBox>
            <Paragraph>
                <List ordered />
                <Line>Key insight:</Line>
                <Line>Each type corresponds to a simpler machine than a Turing machine:</Line>
                <Paragraph>
                    <List />
                    <Line>Type 3 → Finite State Machine (most restricted)</Line>
                    <Line>Type 2 → Pushdown Automaton</Line>
                    <Line>Type 1 → Linear Bounded Automaton</Line>
                    <Line>Type 0 → Turing Machine (most powerful)</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                This is why Type 0 is particularly important in computability theory - it represents the theoretical limit
                of what can be computed. Any problem that can be solved by a computer can be expressed as a Type 0 grammar,
                though not all Type 0 problems can be solved (due to the halting problem).
            </Paragraph>
        </Message>
        <Message
            at="2024-11-01T04:11:58.270133Z"
        >
            <Origin>7c4977ad-60a3-490d-b1e6-76ddb4afae17</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>He called thpe 3 regular?</Paragraph>
        </Message>
        <Message
            at="2024-11-01T04:11:58.270133Z"
        >
            <Origin>fab27f65-afae-4c72-9f3e-3134defc95ee</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                No, the term "regular" came later. Chomsky originally called Type 3 grammars "finite state" grammars,
                reflecting their connection to finite state machines/automata.
            </Paragraph>
            <Paragraph>
                The term "regular" became common later through the work of other computer scientists and mathematicians,
                particularly as the concept of regular expressions developed. The evolution went something like this:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Chomsky's original terminology (1956):</Line>
                <Line>Type 3: Finite state grammar</Line>
                <Line>Type 2: Context-free</Line>
                <Line>Type 1: Context-sensitive</Line>
                <Line>Type 0: Unrestricted</Line>
                <Line>Modern equivalent terms:</Line>
                <Line>Type 3: Regular/Finite state</Line>
                <Line>Type 2: Context-free</Line>
                <Line>Type 1: Context-sensitive</Line>
                <Line>Type 0: Unrestricted/Recursively enumerable</Line>
            </Paragraph>
            <Paragraph>The term "regular" became popular because:</Paragraph>
            <Paragraph>
                <List />
                <Line>It better described the mathematical properties of these languages</Line>
                <Line>It aligned with related concepts like "regular expressions" and "regular sets"</Line>
                <Line>The term was used in automata theory and formal language theory</Line>
            </Paragraph>
            <Paragraph>
                So while we commonly say "regular grammar" today, Chomsky himself used "finite state grammar" in his
                original work, emphasizing the connection to finite state machines.
            </Paragraph>
        </Message>
        <Message
            at="2024-11-01T04:13:37.563036Z"
        >
            <Origin>8fa87a4c-9f7e-4343-92fa-6bdcae581150</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What was the movir abou alan thring</Paragraph>
        </Message>
        <Message
            at="2024-11-01T04:13:37.563036Z"
        >
            <Origin>1063cbca-fa17-401a-b542-e2f877fd3778</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                "The Imitation Game" (2014) was the major film about Alan Turing, starring Benedict Cumberbatch as Turing
                and Keira Knightley as Joan Clarke. The film covered several key aspects of Turing's life:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>Main focus:</Line>
                <Line>His work at Bletchley Park breaking the Nazi Enigma code during WWII</Line>
                <Line>Development of the "Bombe" machine to decrypt German messages</Line>
                <Line>His relationship with Joan Clarke, another codebreaker</Line>
                <Line>Personal story:</Line>
                <Line>His struggles as a gay man in a time when homosexuality was illegal in Britain</Line>
                <Line>His early life and school years (shown in flashbacks)</Line>
                <Line>
                    His tragic end after being prosecuted for homosexuality and forced to undergo chemical castration
                </Line>
                <Line>His death in 1954 (believed to be suicide)</Line>
                <Line>Historical impact:</Line>
                <Line>Shows the importance of his work in helping the Allies win WWII</Line>
                <Line>Touches on his theoretical work in computing (though less extensively)</Line>
                <Line>Highlights the injustice of his treatment by British authorities</Line>
            </Paragraph>
            <Paragraph>
                The film's title comes from Turing's "Imitation Game," which later became known as the Turing Test for
                artificial intelligence. While critically acclaimed and winning several awards, some historians have noted
                that it takes certain liberties with historical facts and oversimplifies some aspects of Turing's life and
                work.
            </Paragraph>
            <Paragraph>
                In 2009, then-Prime Minister Gordon Brown made a public apology for Turing's treatment, and in 2013, Queen
                Elizabeth II granted him a posthumous pardon. The film helped bring wider public attention to both Turing's
                crucial wartime work and the historical persecution of LGBTQ+ people.
            </Paragraph>
        </Message>
        <Message
            at="2024-11-01T04:18:25.551931Z"
        >
            <Origin>d775576d-625a-459f-ac3a-c05bd8adf9cf</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>So when Chomsky made his universal grammar, was he trying to add to Alan Turing’s theory?</Paragraph>
        </Message>
        <Message
            at="2024-11-01T04:18:25.551931Z"
        >
            <Origin>15dec4a9-daf2-4c78-9ad7-5696fc79670e</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                No, Chomsky wasn't directly trying to add to Turing's theory - he was actually approaching language from a
                different angle. However, there's an interesting connection in their work:
            </Paragraph>
            <Paragraph>Turing's Focus (1930s):</Paragraph>
            <Paragraph>
                <List />
                <Line>Computation and mechanical procedures</Line>
                <Line>What machines can/cannot compute</Line>
                <Line>Universal computation</Line>
                <Line>Focused on mathematical logic and computability</Line>
            </Paragraph>
            <Paragraph>Chomsky's Focus (1950s):</Paragraph>
            <Paragraph>
                <List />
                <Line>How humans acquire and process language</Line>
                <Line>Innate linguistic capabilities</Line>
                <Line>Universal features across all human languages</Line>
                <Line>Focused on cognitive and linguistic structures</Line>
            </Paragraph>
            <Paragraph>The Connection:</Paragraph>
            <Paragraph>
                <List />
                <Line>Both were interested in "universal" properties</Line>
                <Paragraph>
                    <List />
                    <Line>Turing: Universal computation</Line>
                    <Line>Chomsky: Universal grammar</Line>
                </Paragraph>
                <Line>Both used formal systems</Line>
                <Line>Both influenced computer science</Line>
            </Paragraph>
            <Paragraph>Key Difference:</Paragraph>
            <Paragraph>
                <List />
                <Line>Turing asked: "What can be computed?"</Line>
                <Line>Chomsky asked: "How do humans naturally acquire language?"</Line>
            </Paragraph>
            <Paragraph>
                While Chomsky used mathematical tools similar to those in computability theory, his Universal Grammar theory
                was more about:
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>How children can learn any language so quickly</Line>
                <Line>Why all human languages share certain properties</Line>
                <Line>What mental structures must exist to make this possible</Line>
            </Paragraph>
            <Paragraph>
                He wasn't trying to extend Turing's work, though his formal language hierarchy ended up being very relevant
                to computer science and complemented Turing's ideas about computation.
            </Paragraph>
        </Message>
    </Chapter>
);
