import { $ } from '@dna-platform/chemistry';
import { $DougsTheme } from '../.manual/.book';

export class $Paper extends $DougsTheme {
    font = "Georgia, 'Times New Roman', serif";
    size = '1.1rem';
    leading = '1.75';
    ink = '#1d1a16';
    paper = '#fbf9f3';
    link = '#6b5a3a';
    bar = '#191f3a';
    bright = '#c9cfe8';
}

export class $Night extends $Paper {
    ink = '#d9dcec';
    paper = '#191f3a';
    link = '#c8b98a';
    bar = '#0f1226';
}

export class $White extends $Paper {
    ink = '#111111';
    paper = '#ffffff';
    link = '#1c6a71';
    bar = '#e9eaee';
    bright = '#3a3f55';
}

export const Paper = $($Paper);
export const Night = $($Night);
export const White = $($White);
