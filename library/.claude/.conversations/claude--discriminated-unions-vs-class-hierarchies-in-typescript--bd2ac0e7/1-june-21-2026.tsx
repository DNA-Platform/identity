import { Chapter, Date, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[21 June 2026](2026-06-21)</Date>
        </Dated>
        <Title>[[ 21 June 2026 ]]</Title>
        <Message
            at="2026-06-21T12:07:20.109901Z"
        >
            <Origin>019eea13-f52b-7b54-8d0f-5ba0e2ee1ddc</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Briefly: when should I prefer a discriminated union over a class hierarchy in TypeScript? One or two
                sentences — no need to search the web.
            </Paragraph>
        </Message>
        <Message
            at="2026-06-21T12:07:24.331017Z"
        >
            <Origin>019eea13-f52b-7c1f-8e7d-91b2ec4f1738</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Prefer a discriminated union when the set of variants is closed and known up front and the operations on
                them keep growing—you get exhaustive checking at every <Word>
                    <Verbatim />
                    switch
                </Word> and all the logic lives where you can see it. Reach for a class hierarchy when the variants are
                open-ended (third parties may add new ones) and each type's behavior is naturally self-contained, so adding
                a subclass shouldn't force edits across existing code.
            </Paragraph>
        </Message>
    </Chapter>
);
