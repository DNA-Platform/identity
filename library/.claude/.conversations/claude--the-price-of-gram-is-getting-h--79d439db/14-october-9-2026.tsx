import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[9 October 2026](2026-10-09)</Date>
        </Dated>
        <Title>[[ 9 October 2026 ]]</Title>
        <Message
            at="2026-10-09T08:56:45.415818Z"
        >
            <Origin>e7915798-39a4-47e2-8a5b-d59d0ed6f5ea</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>When is Pavel's birthday?</Paragraph>
        </Message>
        <Message
            at="2026-10-09T08:56:51.435477Z"
        >
            <Origin>e733e77c-931c-4f30-aa67-2ebe980c1e81</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>October 10 — he turns 42 tomorrow.</Paragraph>
        </Message>
    </Chapter>
);
