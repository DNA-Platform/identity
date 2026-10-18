import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ grid-variation-organic v1 ]]</Title>
        <CodeBox
            language="xml"
        >
            {`<svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg">
    <!-- Background -->
    <rect width="800" height="800" fill="#FFD700"/>
    
    <!-- Grid lines with organic distortion -->
    <g stroke="#fff8e0" stroke-width="8" fill="none">
        <!-- 13 vertical lines with natural growth pattern distortion -->
        <!-- Each line follows a subtle logarithmic curve with organic variation -->
        <path d="M 57,0 C 52,200 62,400 57,600 S 52,800 57,800"/>
        <path d="M 118,0 C 113,180 123,420 118,620 S 113,800 118,800"/>
        <path d="M 179,0 C 174,160 184,440 179,640 S 174,800 179,800"/>
        <path d="M 240,0 C 235,140 245,460 240,660 S 235,800 240,800"/>
        <path d="M 301,0 C 296,120 306,480 301,680 S 296,800 301,800"/>
        <path d="M 362,0 C 357,100 367,500 362,700 S 357,800 362,800"/>
        <path d="M 423,0 C 418,80 428,520 423,720 S 418,800 423,800"/>
        <path d="M 484,0 C 479,60 489,540 484,740 S 479,800 484,800"/>
        <path d="M 545,0 C 540,40 550,560 545,760 S 540,800 545,800"/>
        <path d="M 606,0 C 601,20 611,580 606,780 S 601,800 606,800"/>
        <path d="M 667,0 C 662,10 672,590 667,790 S 662,800 667,800"/>
        <path d="M 728,0 C 723,5 733,595 728,795 S 723,800 728,800"/>
        <path d="M 789,0 C 784,2 794,598 789,798 S 784,800 789,800"/>

        <!-- 14 horizontal lines with fibonacci-inspired spacing variation -->
        <path d="M 0,53 C 200,48 600,58 800,53"/>
        <path d="M 0,110 C 200,105 600,115 800,110"/>
        <path d="M 0,167 C 200,162 600,172 800,167"/>
        <path d="M 0,224 C 200,219 600,229 800,224"/>
        <path d="M 0,281 C 200,276 600,286 800,281"/>
        <path d="M 0,338 C 200,333 600,343 800,338"/>
        <path d="M 0,395 C 200,390 600,400 800,395"/>
        <path d="M 0,452 C 200,447 600,457 800,452"/>
        <path d="M 0,509 C 200,504 600,514 800,509"/>
        <path d="M 0,566 C 200,561 600,571 800,566"/>
        <path d="M 0,623 C 200,618 600,628 800,623"/>
        <path d="M 0,680 C 200,675 600,685 800,680"/>
        <path d="M 0,737 C 200,732 600,742 800,737"/>
        <path d="M 0,794 C 200,789 600,799 800,794"/>
    </g>

    <!-- Signature -->
    <text x="20" y="780" fill="#fff8e0" font-family="Arial" font-size="12" opacity="0.6">Seren</text>
</svg>`}
        </CodeBox>
    </Chapter>
);
