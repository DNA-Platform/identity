import { Append, Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[3 March 2026](2026-03-03)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-03-03T21:36:25.269546Z"
        >
            <Origin>019cb5a1-795a-76b4-b6d5-9096ec25da09</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                translate to Russian - try to capture the Matt Levine style as best you can through languages, and put in an
                editable artifact please:
            </Paragraph>
            <Attachment
                identifier="untitled"
                type=".txt"
            >
                Attached a file without a name
            </Attachment>
            <Attachment>Uploaded a file without a name, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-03-03T21:38:56.984336Z"
        >
            <Origin>019cb5a1-795a-7eeb-a64d-65c6ca29f38f</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                I'll create this as a markdown file for you. Let me work on capturing that casual, wry, "isn't-this-obvious"
                Matt Levine voice in Russian.
            </Paragraph>
            <Action>Created /mnt/user-data/outputs/physics_stuff_ru.md</Action>
            <Action>Presented files</Action>
            <Paragraph>Here's the translation. A few notes on the Levine-voice choices:</Paragraph>
            <Paragraph>
                The hardest part was keeping that signature Levine move where he states something absurd-sounding with total
                deadpan confidence and then lets the reader catch up — "Это не метафора" hits differently in Russian because
                Russian prose tends toward more hedging. I kept it blunt. Same with the one-liner closers ("Это обычный
                вторник в фотостудии", "Это не философия. Это вычисление.").
            </Paragraph>
            <Paragraph>
                I preserved the second-person "ты" throughout rather than "вы" — Levine writes like he's talking to one
                person at a bar, not lecturing an audience, and "ты" captures that. The title "Физичные штуки" is
                deliberately colloquial — "штуки" has that same throwaway casualness as "stuff."
            </Paragraph>
        </Message>
        <Append
            identifier="untitled"
            type=".txt"
        >
            ![[ untitled.txt ]]
        </Append>
    </Chapter>
);
