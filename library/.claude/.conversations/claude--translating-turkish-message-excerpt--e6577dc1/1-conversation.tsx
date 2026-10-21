import { Bold, Chapter, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker } from '../../../.manual/.book';
import { Attachment, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-04-01T12:30:20.251737Z"
        >
            <Origin>019d4906-79aa-760c-80d0-6ce713246fd1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can you translate the bottom part of this message on the left</Paragraph>
            <Attachment>Uploaded “IMG_3084.png”, whose content the export does not carry</Attachment>
        </Message>
        <Message
            at="2026-04-01T12:30:23.599676Z"
        >
            <Origin>019d4906-79aa-76b3-9072-dc707cc22652</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>The messages on the left (from Neslihan Dr. Sevil) say:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    "Hello, let's prepare a report about your situation in Word format"
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    "Forward it to your email"
                </Word>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    "Let's forward it"
                </Word>
            </Paragraph>
        </Message>
        <Message
            at="2026-04-01T12:31:59.701685Z"
        >
            <Origin>019d4907-fee7-7ed8-8be0-07b14ea43a25</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Translate to Turkish:</Paragraph>
            <Paragraph>
                If there’s any way, it could include official letterhead for your practice or your signature, so that they
                can look you up, that would be much appreciated
            </Paragraph>
        </Message>
        <Message
            at="2026-04-01T12:32:03.681893Z"
        >
            <Origin>019d4907-fee7-714a-ad42-332986e374a2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                "Eğer mümkünse, sizi arayıp doğrulayabilmeleri için raporun üzerinde muayenehanenizin resmi antetli kağıdı
                veya imzanız bulunsa çok memnun olurum."
            </Paragraph>
        </Message>
        <Message
            at="2026-04-01T12:32:13.260458Z"
        >
            <Origin>019d4908-3402-7bd2-a1df-6106eb5984e1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>Can you remove the quotes?</Paragraph>
        </Message>
        <Message
            at="2026-04-01T12:32:15.637678Z"
        >
            <Origin>019d4908-3402-76a2-a36b-841a9f3f1fc2</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>
                Eğer mümkünse, sizi arayıp doğrulayabilmeleri için raporun üzerinde muayenehanenizin resmi antetli kağıdı
                veya imzanız bulunsa çok memnun olurum.
            </Paragraph>
        </Message>
    </Chapter>
);
