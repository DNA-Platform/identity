import { Bold, Chapter, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Message, Speaker, Verbatim } from '../../../.manual/.book';
import { Origin } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Title>[[ Conversation ]]</Title>
        <Message
            at="2026-01-21T23:17:37.294669Z"
        >
            <Origin>019be2d9-675a-76b1-ae37-0eca0a53d488</Origin>
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                I’m trying to find a Google search I made about a particular thing in December 2024. It will help me
                identify the date that something important happened. Is there a way to get this level of resolution on my
                search history from Google? I use chrome on a Windows computer. I have an android device too, but I did the
                search on my computer.
            </Paragraph>
        </Message>
        <Message
            at="2026-01-21T23:17:48.552978Z"
        >
            <Origin>019be2d9-675a-76b1-ae37-0ecbe99703dc</Origin>
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Paragraph>You have several options to find that specific December 2024 search:</Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    On your Windows computer (Chrome):
                </Word>
            </Paragraph>
            <Paragraph>
                <List ordered />
                <Line>
                    <Word>
                        <Bold />
                        Chrome History
                    </Word> - Press <Word>
                        <Verbatim />
                        Ctrl+H
                    </Word> or go to <Word>
                        <Verbatim />
                        chrome://history
                    </Word>
                </Line>
                <Paragraph>
                    <List />
                    <Line>Use the search box at the top to search for keywords from that search</Line>
                    <Line>Chrome history shows exact dates and times</Line>
                    <Line>You can filter by date range if you remember approximately when</Line>
                </Paragraph>
                <Line>
                    <Word>
                        <Bold />
                        Google My Activity
                    </Word> - More comprehensive
                </Line>
                <Paragraph>
                    <List />
                    <Line>
                        Go to <Word>
                            <Verbatim />
                            myactivity.google.com
                        </Word>
                    </Line>
                    <Line>Click "Filter by date &amp; product"</Line>
                    <Line>Select December 2024 as your date range</Line>
                    <Line>Filter by "Search" under products</Line>
                    <Line>This shows all Google searches tied to your account, even if browser history was cleared</Line>
                </Paragraph>
            </Paragraph>
            <Paragraph>
                <Word>
                    <Bold />
                    The Google My Activity approach is usually better
                </Word> because:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>It persists even if you clear Chrome history</Line>
                <Line>Shows searches from all devices logged into your Google account</Line>
                <Line>Has more robust filtering options</Line>
                <Line>Includes the exact timestamp</Line>
            </Paragraph>
            <Paragraph>
                Once you're in My Activity, you can scroll through December or use the search box there to find specific
                terms. Each entry shows the exact date and time you made that search.
            </Paragraph>
            <Paragraph>
                If you need to export this data for easier searching, My Activity also has a "Download your data" option,
                though that might be overkill for finding one search.
            </Paragraph>
            <Paragraph>
                Does the search involve any specific keywords you remember? That could help narrow it down quickly.
            </Paragraph>
        </Message>
    </Chapter>
);
