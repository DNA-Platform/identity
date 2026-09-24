// The page chapter 07 is measured against: Format and Theme drawn for a reader.
// Run: node 07-public-drive-the-writing--drive.mjs 07-public-drive-the-writing--page.jsx
import { createRoot } from 'react-dom/client';
import { $, styled } from '@dna-platform/chemistry';
import { Writing, Paragraph, $Format, $Theme } from '../../package/dist/lib.js';

const Quotation = styled.blockquote`
    border-left: 8px solid ${props => props.theme.rule || 'silver'};
    color: ${props => props.theme.ink || 'black'};
    padding: 12px 18px;
    margin: 18px 0;
    font-family: Georgia, serif;
    font-size: 20px;
`;

class $Quoted extends $Format { format = Quotation; }
class $Ruled extends $Theme { values = { rule: 'rgb(0, 0, 255)', ink: 'rgb(0, 0, 128)' }; }
class $Inked extends $Theme { values = { ink: 'rgb(0, 128, 0)' }; }

const Quoted = $($Quoted);
const Ruled = $($Ruled);
const Inked = $($Inked);

const writing = $(
    <Writing>
        <Paragraph>the writing a reader sees <Quoted /></Paragraph>
        <Ruled />
    </Writing>
);
const Drawn = $(writing);

createRoot(document.getElementById('root')).render(
    <div style={{ padding: 24, background: 'white' }}>
        <Drawn />
    </div>
);

const quote = () => document.querySelector('blockquote');
const style = () => getComputedStyle(quote());
const rule = () => style().borderLeftColor + ' ' + style().borderLeftWidth;
const ink = () => style().color;

window.__page = [
    {
        step: 'the written theme',
        check: () => [
            ['the writing is drawn as the format\'s element', quote() && quote().tagName, 'BLOCKQUOTE'],
            ['the reader sees the text', quote().innerText.startsWith('the writing a reader sees'), true],
            ['the theme\'s rule is painted', rule(), 'rgb(0, 0, 255) 8px'],
            ['the theme\'s ink is painted', ink(), 'rgb(0, 0, 128)'],
            ['the format\'s own rules are painted beside it', style().fontSize, '20px'],
        ],
    },
    {
        step: 'a theme presented over it',
        act: () => { writing.$is = Inked; },
        check: () => [
            ['the front theme wins the ink it names', ink(), 'rgb(0, 128, 0)'],
            ['and inherits the rule it does not name', rule(), 'rgb(0, 0, 255) 8px'],
        ],
    },
    {
        step: 'the presented theme taken away',
        act: () => { writing.$is = []; },
        check: () => [
            ['it goes back to the WRITTEN theme, not the format\'s defaults', rule(), 'rgb(0, 0, 255) 8px'],
            ['and its ink with it, which is the round trip', ink(), 'rgb(0, 0, 128)'],
            ['the element is still the format\'s', quote().tagName, 'BLOCKQUOTE'],
        ],
    },
];
