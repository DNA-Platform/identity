import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[28 August 2025](2025-08-28)</Date>
        </Dated>
        <Title>[[ 28 August 2025 ]]</Title>
        <Message
            at="2025-08-28T23:59:49.588641Z"
        >
            <Origin>45e0e3ef-e6dd-4103-bcdf-4630bb4aa519</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Okay we are going to be developing Semantic Reference Theory from the top down. Assume it is a work in
                progress. You can learn about it from the project documents. I'd like to explore a method for comprehending
                meaning that might help us axiomize it. Can you catch up and write 20 paragraphs on what sort of thing
                semantic reference theory is and what we hope to accomplish with it?
            </Paragraph>
        </Message>
    </Chapter>
);
