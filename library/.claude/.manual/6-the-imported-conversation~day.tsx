import { Bold, Chapter, Date, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Artifact, Attachment } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[21 March 2025](2025-03-21)</Date>
        </Dated>
        <Title>[[ 21 March 2025 ]]</Title>
        <Message
            at="2025-03-21T17:51:17.196966Z"
        >
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
            at="2025-03-21T17:54:04.112399Z"
        >
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
            </Paragraph>
        </Message>
        <Message
            at="2025-03-21T18:13:37.117896Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Artifact
                identifier="quantum-computing-reality-check.v1"
                type=".md"
                artifact="instagram-post"
                place="quantum-computing-reality-check-v1"
            >
                Made the artifact “Quantum Computing Reality Check”
            </Artifact>
            <Paragraph>
                Here's your Instagram post highlighting the reality of quantum computing progress versus encryption
                standards. I've formatted it for social media with key points, emoji for visual interest, and relevant
                hashtags.
            </Paragraph>
        </Message>
    </Chapter>
);
