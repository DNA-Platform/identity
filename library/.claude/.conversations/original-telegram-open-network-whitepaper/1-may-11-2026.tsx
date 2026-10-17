import { Chapter, Date, Emphasis, Line, List, Paragraph, Title, Word } from '@dna-platform/public';
import { Dated, Message, Speaker } from '../../../.manual/.book';
import { Action } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Dated>
            <Date>[11 May 2026](2026-05-11)</Date>
        </Dated>
        <Title>[[ 11 May 2026 ]]</Title>
        <Message
            at="2026-05-11T16:04:42.515673Z"
        >
            <Speaker>$[[ Doug ]]( Dougs Story )</Speaker>
            <Paragraph>
                Find me the original wallpaper for TON that Nikolai wrote. The one on the open network foundation page says
                based on the work of him and it’s a rewrite, but you found me the original before.
            </Paragraph>
        </Message>
        <Message
            at="2026-05-11T16:05:00.096012Z"
        >
            <Speaker>$[[ Claude ]]( Dougs Claude )</Speaker>
            <Action>Searched past conversations for “Nikolai Durov original TON whitepaper”</Action>
            <Action>
                Searched the web for “Nikolai Durov "Telegram Open Network" whitepaper 132 pages original December 2017 pdf”
            </Action>
            <Paragraph>
                The original is Nikolai's 132-page technical overview, <Word>
                    <Emphasis />
                    Telegram Open Network
                </Word>, dated December 3, 2017. Direct PDFs:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>https://www.docdroid.net/JtdY7Jg/ton-pdf</Line>
                <Line>
                    https://ton-blockchain.github.io/docs/ton.pdf (the canonical mirror referenced by nLab and Wikipedia's
                    Wayback archive)
                </Line>
            </Paragraph>
            <Paragraph>
                For the rest of the original Durov-authored stack, same authorship, not the foundation rewrites:
            </Paragraph>
            <Paragraph>
                <List />
                <Line>
                    <Word>
                        <Emphasis />
                        Telegram Open Network Blockchain
                    </Word> (Sep 2018, 121 pp.) — https://ton.org/tblkch.pdf
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Telegram Open Network Virtual Machine
                    </Word> (Sep 2018, 148 pp.) — https://ton.org/tvm.pdf
                </Line>
                <Line>
                    <Word>
                        <Emphasis />
                        Catchain Consensus: An Outline
                    </Word> — https://ton.org/catchain.pdf
                </Line>
            </Paragraph>
            <Paragraph>
                The nLab page is the cleanest single index to all four:
                http://nlab-pages.s3.us-east-2.amazonaws.com/nlab/show/Telegram+Open+Network
            </Paragraph>
        </Message>
    </Chapter>
);
