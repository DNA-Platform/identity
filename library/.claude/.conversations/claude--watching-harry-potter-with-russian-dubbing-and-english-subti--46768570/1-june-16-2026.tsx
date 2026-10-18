import { Chapter, Date, Paragraph, Title } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action, Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[16 June 2026](2026-06-16)</Date>
        </Dated>
        <Title>[[ 16 June 2026 ]]</Title>
        <Message
            at="2026-06-16T14:51:14.917131Z"
        >
            <Origin>019ed0ea-3b85-7ae5-bad1-16fa8880aae1</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Does Amazon Prime has movies that might be dubbed in Russian where I could put on English subtitles? We want
                to watch Harry Potter with the kids and they need Russian
            </Paragraph>
        </Message>
        <Message
            at="2026-06-16T14:51:38.559918Z"
        >
            <Origin>019ed0ea-3b85-717f-91b9-59dac8147f49</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched the web for “Amazon Prime Video Russian audio dubbing availability”</Action>
            <Paragraph>
                The honest answer for Harry Potter specifically: probably not reliably, and it's worth checking before you
                count on it.
            </Paragraph>
            <Paragraph>
                Here's how it actually works. On Prime Video, audio and subtitle tracks are set per title and vary by
                region, not by the service as a whole. So "does Prime have Russian dubs" has no single answer — each film
                has its own track list. The Harry Potter films are Warner Bros titles, and on Prime they're almost always
                rent/buy (not included with your Prime subscription), and the bundled audio tracks tend to be limited to the
                storefront's main languages. From Georgia, your storefront likely won't carry a Russian dub for them, and
                combining "Russian audio + English subtitles" on the same Warner title is the kind of mix that's frequently
                missing even when each track exists separately.
            </Paragraph>
            <Paragraph>
                The reliable way to verify, before committing: open the Harry Potter title page on Prime, and look at the
                "Audio languages" and "Subtitles" lists shown on the detail page. If Russian isn't listed there, it won't
                appear during playback. During playback you'd tap the speech-bubble/CC icon to switch tracks, but it only
                offers what's listed.
            </Paragraph>
            <Paragraph>
                For your actual goal — kids watching in Russian, you reading English subtitles — Prime is a weak bet for
                Harry Potter. A few stronger options worth knowing:
            </Paragraph>
            <Paragraph>
                Russian streaming services have the official Russian-language Harry Potter dubs as their default and often
                carry English subtitle tracks too — these are the natural home for that exact audio/subtitle combination.
                Kinopoisk and Okko are the main ones, though access and payment from Georgia can be fiddly.
            </Paragraph>
            <Paragraph>
                If you'd rather stay in the Amazon ecosystem, you can sometimes find a specific title's track list faster
                than browsing — want me to check what audio and subtitle languages are listed for the Harry Potter films on
                a particular Prime storefront? If you tell me which Prime region your account uses (US, UK, or the
                Georgian/regional one), I can look at what's actually offered.
            </Paragraph>
        </Message>
    </Chapter>
);
