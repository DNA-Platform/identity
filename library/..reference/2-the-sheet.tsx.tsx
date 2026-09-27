import { $, select } from '@dna-platform/chemistry';
import { Book as BookSheet } from '@dna-platform/public';
import { $EncyclopediaTheme } from '@dna-platform/public/encyclopedia';

export class $LibraryTheme extends $EncyclopediaTheme {
    @select('.pd-header > .pd-section:not(.pd-menu)') brand_display = 'block';
    brand_alignSelf = 'center';
    brand_width = 'auto';
    brand_lineHeight = '1.25';
    brand_textDecoration = 'none';
    get brand_color() { return this.ink; }
    @select('.pd-header > .pd-section:has(> .pd-tiles)') markLink_display = 'block';
    @select('.pd-header > .pd-section:not(.pd-menu) > .pd-tiles') libraryMark_display = 'grid';
    libraryMark_placeItems = 'center';
    libraryMark_margin = '0';
    libraryMark_padding = '3px';
    libraryMark_width = 'fit-content';
    libraryMark_height = 'fit-content';
    libraryMark_lineHeight = '0';
    libraryMark_boxSizing = 'border-box';
    libraryMark_background = '#fdfcfa';
    libraryMark_border = '1px solid rgba(38, 34, 30, 0.2)';
    libraryMark_borderRadius = '1px';
    @select('.pd-header > .pd-section:not(.pd-menu) > .pd-tiles > .pd-image') libraryMarkPlate_display = 'block';
    @select('.pd-header > .pd-section:not(.pd-menu) > .pd-heading') markName_display = 'block';
    markName_margin = '0';
    markName_padding = '0';
    markName_border = 'none';
    markName_fontSize = '1.05em';
    markName_fontWeight = '400';
    markName_letterSpacing = '0.01em';
    markName_whiteSpace = 'nowrap';
    markName_lineHeight = '1.25';
    get markName_fontFamily() { return this.body; }
    @select('.pd-header > .pd-section:has(> .pd-tiles) > .pd-heading') markLinkName_display = 'none';
    @select('.pd-header > .pd-section:not(.pd-menu) > .pd-paragraph:not(.pd-heading):not(.pd-tiles)') markSaid_margin = '0';
    markSaid_fontSize = '0.6875em';
    markSaid_fontWeight = '400';
    markSaid_letterSpacing = '0.02em';
    markSaid_opacity = '0.62';
    markSaid_whiteSpace = 'nowrap';
    markSaid_overflow = 'hidden';
    markSaid_textOverflow = 'ellipsis';
    @select('.pd-header .pd-tiles > .pd-caption') markCaption_display = 'none';

    @select('.pd-book > .pd-chapter > .pd-cover > .pd-author') by_display = 'flex';
    by_alignItems = 'center';
    by_gridColumn = '2';
    by_gridRow = '3';
    by_position = 'relative';
    by_zIndex = '1';
    by_justifySelf = 'start';
    by_alignSelf = 'stretch';
    by_fontSize = '0.875em';
    by_lineHeight = '1.4';
    by_margin = '0';
    by_paddingBottom = '1px';

    @select('.pd-book > .pd-chapter > .pd-table-of-contents a.pd-meaning:empty, .pd-book .pd-title a.pd-meaning:empty') box_display = 'inline-block';
    box_width = '0.5rem';
    box_height = '0.5rem';
    box_padding = '0';
    box_verticalAlign = 'baseline';
    box_borderRadius = '1px';
    box_boxSizing = 'border-box';
    get box_border() { return `1px solid ${this.link}`; }
    @select('.pd-book > .pd-chapter > .pd-table-of-contents a.pd-meaning:empty') rowBox_marginLeft = '0.45rem';
    @select('.pd-book .pd-title a.pd-meaning:empty') titleBox_width = '0.45em';
    titleBox_height = '0.45em';
    titleBox_marginLeft = '0.35em';

    @select('.pd-book .pd-chapter .pd-toolbar > .pd-paragraph') tabRow_marginTop = '0';
    tabRow_marginBottom = '0';

    @select('.pd-book > .pd-chapter > .pd-table-of-contents .pd-heading') list_padding = '0';
    list_margin = '0 0 0.43em 0.857em';
    list_lineHeight = '1.6';
    list_fontSize = '1em';
    list_fontWeight = '500';
    list_width = 'auto';
    list_marginRight = '0';
    get list_borderBottom() { return `1px solid ${this.shade}`; }
    get list_color() { return this.jet; }
    @select('.pd-book > .pd-chapter > .pd-table-of-contents > .pd-section + .pd-section > .pd-heading') between_marginTop = '1.143em';
    @select('.pd-book > .pd-chapter > .pd-table-of-contents > .pd-section > .pd-paragraph:not(.pd-heading)') indent_paddingLeft = '0.857em';
    @select('.pd-book > .pd-chapter > .pd-table-of-contents .pd-paragraph:not(.pd-heading)') row_display = 'flex';
    row_alignItems = 'baseline';
    row_flexWrap = 'nowrap';
    @select('.pd-book > .pd-chapter > .pd-table-of-contents > .pd-section > .pd-paragraph:first-of-type .pd-meaning') rowFirst_fontWeight = '400';
    get rowFirst_color() { return this.link; }

    @select('@media (max-width: 1119px) {\n             .pd-book > .pd-chapter > .pd-table-of-contents {') narrow_display = 'block';
    narrow_gridColumn = '1 / -1';
    narrow_width = 'auto';
    narrow_maxWidth = '100%';
    narrow_margin = '0 0 1.5em';
    narrow_padding = '0 0 0.75em';
    get narrow_borderBottom() { return `1px solid ${this.quiet}`; }

}

export const LibraryTheme = $($LibraryTheme);

$LibraryTheme.$register(BookSheet);
