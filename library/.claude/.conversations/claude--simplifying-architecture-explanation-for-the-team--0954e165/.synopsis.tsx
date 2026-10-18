import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            Doug is building a TypeScript driver that automates Claude Desktop through Windows accessibility APIs,
            mouse, and keyboard inputs. The driver is not an API client but a model of a human interacting with the app.
            Doug leads a small development team that includes members named Arthur, Adam, Cathy, Queenie, and Libby. The
            conversation focused on two related problems: the team repeatedly re-derives organizational structure rather
            than internalizing the core constraint governing what the driver is allowed to express, and a significant
            amount of architectural decision-making from prior sessions was never written down.
        </Paragraph>
    </Chapter>
);
