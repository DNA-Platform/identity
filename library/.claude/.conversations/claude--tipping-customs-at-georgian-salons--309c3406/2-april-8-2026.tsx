import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[8 April 2026](2026-04-08)</Date>
        </Dated>
        <Title>[[ 8 April 2026 ]]</Title>
        <Message
            at="2026-04-08T09:12:04.098617Z"
        >
            <Origin>019d6c5c-eec4-7564-91b1-354bc4c4acd6</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Just testing my connection. Can you please reply so I know that we can talk?</Paragraph>
        </Message>
        <Message
            at="2026-04-08T09:12:05.496917Z"
        >
            <Origin>019d6c5c-eec4-7b04-bc70-264744cd6161</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>Here and working fine.</Paragraph>
        </Message>
    </Chapter>
);
