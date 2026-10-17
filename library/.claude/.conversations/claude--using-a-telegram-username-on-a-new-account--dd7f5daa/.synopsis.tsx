import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The person sought help understanding how to use a Telegram username purchased on Fragment (the TON
            blockchain-based username marketplace) with a new Telegram account on Windows desktop. Claude explained that
            Fragment usernames are NFT assets stored in a TON wallet and must be assigned to an existing Telegram
            account rather than automatically creating one. Claude walked through two account creation paths: using a
            regular SIM number or purchasing a +888 anonymous number through Fragment, detailing the login code
            retrieval process for each and how to assign the Fragment username afterward via either the Fragment website
            or Telegram's Settings → Edit Profile → Username interface.
        </Paragraph>
    </Chapter>
);
