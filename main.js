import { munge, resetStyles } from './js/munger';
import { stripAttributes, adjustStyle } from './js/adjuster';

window.addEventListener('load', () => {
    //TODO
    // 1. run stripAttributes()
    // 2. load and attach css reset
    //    -- loads from ./css
    // 3. run munge()
    // 4. load and attach other css files
    //    -- sourcing from URL
    //    -- sources are stored in localStorage
    // 5. run adjustStyle
    //    -- commands are defined from GUI
    //    -- commands are stored in localStorage

    stripAttributes();
    resetStyles();
    munge();


}, false);