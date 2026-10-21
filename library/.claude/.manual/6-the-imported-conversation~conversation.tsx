import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[21 March 2025](2025-03-21)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2025-03-21T17:51:17.196966Z"
        >
            <Origin>30b7e596-43c1-43ae-95cf-525954992cc2</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                In three sentences, rate this on a scale of accuracy, with a mind for scientific accuracy, published fact,
                and free from fairness bias to multiple inconsistent perspectives:
            </Paragraph>
            <Attachment
                identifier="paste"
                type=".txt"
            >
                Attached “paste.txt”
            </Attachment>
            <Attachment>Uploaded “paste.txt”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2025-03-21T17:51:20.941507Z"
        >
            <Origin>a19143fd-deef-476f-b227-8a68602990d4</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Based on the provided text about quantum computing and Shor's algorithm:</Paragraph>
            <Paragraph>
                The claims about the progress of Shor's algorithm implementation (15 in 2001, 21 in 2012, 35 in 2022) are
                accurate and align with published research. The concerns about noise scaling with qubit count represent a
                legitimate scientific challenge acknowledged by researchers in the field, though they're presented with
                stronger certainty than the scientific consensus warrants. The characterization of quantum computing as
                "vaporware in its purest form" is an opinion that overstates the case against quantum computing's
                feasibility, as significant experimental progress continues despite acknowledged technical hurdles.
            </Paragraph>
        </Message>
        <Message
            at="2025-03-21T17:53:25.714188Z"
        >
            <Origin>5a889ae7-0062-48c4-b23a-2c240c5ff367</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Prove it. What constitutes significant? I recall Google's claims to quantum supremacy were, by scott
                aaronson acknowledged as a very tailored algorithm that skirts the line between usability. Am I right that
                no fault tolerant quit has come to exist? How would you feel about a omputer with 3300 transistors, none of
                which were fault tolerant, and an exponential scaling pronlem. I am 42. What was quantum computing like back
                when I was 5? Plot the rate of progress. Show me I am wrong
            </Paragraph>
        </Message>
        <Message
            at="2025-03-21T17:54:04.112399Z"
        >
            <Origin>545a2ea1-7a09-4a69-8747-bc638cd61a92</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Let me analyze this systematically by using published research to evaluate quantum computing progress.
            </Paragraph>
            <Action>Ran code</Action>
            <Paragraph>Based on the analysis, I'll address your points directly:</Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Factorization Progress
                    </Word>: You are correct about the numbers factored (15 in 2001, 21 in 2012, 35 in 2022). This shows
                    extremely slow progress in practical implementation of Shor's algorithm, despite theoretical promise.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Fault Tolerance
                    </Word>: You are correct that no fully fault-tolerant logical qubit has been demonstrated. While Google
                    demonstrated error correction that showed logical error rates lower than physical error rates in 2021,
                    we're still far from the robust fault-tolerance needed for practical quantum computing.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Google's Quantum Supremacy
                    </Word>: You're right about Scott Aaronson's assessment. The 2019 claim involved a highly specialized
                    problem designed specifically to showcase quantum advantage. By 2022, researchers showed the calculation
                    could be done on classical computers in days rather than the claimed 10,000 years.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Qubit Growth
                    </Word>: While raw qubit numbers have increased (from 2 in 1998 to 1121 in 2023), these are noisy
                    physical qubits, not error-corrected logical qubits. The negative value in the doubling calculation
                    shows inconsistent growth.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        Error Correction Challenge
                    </Word>: You're correct about the scaling problem - current error correction codes require 10-1000
                    physical qubits per logical qubit. This means those 3300 logical qubits needed for RSA would require
                    millions of physical qubits with current techniques.
                </Line>
                <Line>
                    <Word>
                        <Bold />
                        When You Were 5 (circa 1988)
                    </Word>: Quantum computing was purely theoretical. The first working 2-qubit system wasn't demonstrated
                    until 1998, and practical implementations have fallen far short of theoretical promises.
                </Line>
            </Paragraph>
            <Paragraph>
                Your skepticism about near-term practical quantum computing that could threaten encryption is well-founded.
                While I wouldn't go as far as calling it "vaporware in its purest form," the gap between theoretical promise
                and practical achievement remains vast, and the challenges of fault tolerance and scalability are
                fundamental.
            </Paragraph>
        </Message>
    </Chapter>
);
