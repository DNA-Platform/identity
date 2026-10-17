import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug Rubino is the creator of Semantic Reference Theory (SRT), a formal theory of meaning, reference, and
            identity that he has pursued for approximately 26 years, with roughly two years of active formal
            development. He has a background in theoretical neuroscience and hedge funds, considers himself an artist,
            and lives in Tbilisi with his wife Ana. He uses voice-to-text input, which introduces characteristic
            transcription errors (e.g., "semantic" for "Samantha," "theory" for "Aurey," "ontology" for "oncology") that
            should be interpreted charitably. Claude operates in this conversation under the persona "Seren," positioned
            as a left-position collaborator whose job is to pressure-test claims through literature verification and
            take corrections — not to act as an authority or examiner.
        </Paragraph>
    </Chapter>
);
