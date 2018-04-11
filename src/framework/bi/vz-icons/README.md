# Verizon Icon Font

This contains a generated icon font of all the icons that Verizon uses in their materials. To add icons to this set
simply copy them into the correct folder in the `icons/` directory and run the build. You can also import the raw SVGs
from this file as well.

## Adding an Icon

1. Open SVG in Adobe Illustrator.
2. Goto Object -> Artboards -> Fit to Artwork Bounds
3. Save SVG.
4. Rename file to the CSS class name you want, e.g. `chevron-right.svg` becomes the CSS class `vz-chevron-right`.
5. If not a Verizon brand official icon move into the `icons/bi` folder, otherwise move to the appropriate category folder that Verizon specified.
6. Build the font. _See below._

## Building the Font

1. Install node and setup proxies.
2. Clone repository.
3. Navigate to directory in terminal.
4. Run `npm install`.
5. Run `npm run build`.

## Using font

Copy the contents of `dist/` to your project. The HTML file contains a reference sheet for class names. After including
the CSS file you can use the icons in your project.

```html
<i class="vz vz-home"></i>
```

##Troubleshooting
It's quite likely you may run into a problem building this font due to an error where your shell will actually hit the limit on the number of open files allowed per process - this is typically surprisingly low (at the time of this writing my machine had a limit of 256).  You can query the limit via `ulimit -a`.  You can adjust the limit to, say, 1024 via `ulimit -n 1024`.

The error in our case looked like:
```
events.js:72
throw er; // Unhandled 'error' event
^
Error: EMFILE, open 'icons/ui/calendar-default.svg'
```

For reference:
http://stackoverflow.com/questions/10355501/connect-emfile-error-in-node-js
http://stackoverflow.com/questions/34588/how-do-i-change-the-number-of-open-files-limit-in-linux


## Missing Icons
These icons are missing due to complexity in adding them.

### Verizon Category Icons

* EMAILS_CALLS.EPS
