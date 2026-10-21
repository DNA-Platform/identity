import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[31 October 2024](2024-10-31)</Date>
        </Dated>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2024-10-31T16:03:47.970088Z"
        >
            <Origin>7d5a195e-3237-4a8d-b410-3991ddbf893b</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>What is this halloween costume?</Paragraph>
            <Attachment>Uploaded “image”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2024-10-31T16:03:47.970088Z"
        >
            <Origin>7493c34d-f81b-45e6-b508-e7039ff801b9</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Based on the white outfit with a red bowtie/cravat and what appears to be a Stay Puft Marshmallow Man face
                bag/mask (with the characteristic smiling face drawn on it), this appears to be a Stay Puft Marshmallow Man
                costume from Ghostbusters! The Stay Puft Marshmallow Man is the iconic giant marshmallow monster that
                appears as the final form of Gozer in the original Ghostbusters film. In these selfies, the person is
                wearing the characteristic white costume with sailor-style blue striped collar and red bow tie, and in one
                photo they're wearing what looks like a DIY mask with the character's smiling face.
            </Paragraph>
        </Message>
    </Chapter>
);
