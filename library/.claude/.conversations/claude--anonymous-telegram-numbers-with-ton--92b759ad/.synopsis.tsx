import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person asked two questions related to Telegram and phone number privacy. The first question concerned
            purchasing Telegram anonymous numbers (+888 numbers) using TON cryptocurrency without being tied to a
            Russian phone number. Claude explained that Fragment (fragment.com), Telegram's official TON marketplace, is
            the platform for this, where +888 numbers are sold as NFTs paid in TON. Claude noted that the original
            direct-sale pricing of approximately 9 TON had ended, with secondary market prices now significantly higher,
            and that these numbers function only as Telegram login identifiers rather than real phone numbers usable for
            SMS or calls on other platforms. Claude also flagged potential geo-restrictions on Fragment depending on the
            user's location.
        </Paragraph>
    </Chapter>
);
