import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user inquired about the founders and architects behind World Liberty Financial (WLF), the cryptocurrency
            project associated with Trump. They specifically wanted to know about the people who actually set up the
            technical infrastructure, beyond the Trump family's involvement. Claude provided detailed information about
            Chase Herro and Zak Folkman, the actual architects behind WLF. Herro was described as a self-proclaimed
            "dirtbag of the internet" with a background including various failed internet ventures, weight-loss
            products, and get-rich-quick schemes, while Folkman previously ran "Date Hotter Girls LLC," a pickup artist
            business. Both were involved in Dough Finance, which was hacked for $2.5 million in July 2024, just two
            months before launching WLF with Trump branding.
        </Paragraph>
    </Chapter>
);
