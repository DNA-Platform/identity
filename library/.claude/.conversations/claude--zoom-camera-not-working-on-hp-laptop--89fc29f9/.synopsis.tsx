import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user encountered a technical issue where their HP laptop's camera wasn't working with Zoom, despite Zoom
            detecting the "HP True Vision FHD Camera" in settings. Claude provided systematic troubleshooting guidance,
            starting with the most common causes. The initial diagnosis revealed that while Zoom could see the camera,
            it wasn't receiving a video feed, indicated by a crossed-out camera icon in the interface.
        </Paragraph>
    </Chapter>
);
