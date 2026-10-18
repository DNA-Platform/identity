import { Chapter, Paragraph, Parenthetical, Synopsis, Title } from '@dna-platform/public';

export default () => (
    <Chapter>
        <Synopsis />
        <Title>
            <Parenthetical />
            [[ Synopsis ]]
        </Title>
        <Paragraph>
            The user sought help finding a specific Google search they conducted in December 2024 on their Windows
            computer using Chrome. They needed to locate this search to identify the date when an important event
            occurred. Claude provided two main approaches for retrieving this search history with precise timestamps.
            The first method involved using Chrome's built-in history feature accessible via Ctrl+H or chrome://history,
            which allows searching by keywords and filtering by date ranges. The second and recommended approach was
            using Google My Activity at myactivity.google.com, which provides more comprehensive search history that
            persists even if browser history is cleared. Claude explained that My Activity offers superior filtering
            options including date range selection and product-specific filters, shows searches from all devices linked
            to the user's Google account, and includes exact timestamps. The user mentioned having an Android device but
            confirmed the specific search was performed on their computer. Claude also noted that My Activity has data
            export capabilities if needed and offered to help narrow down the search if the user could recall specific
            keywords from their original query.
        </Paragraph>
    </Chapter>
);
