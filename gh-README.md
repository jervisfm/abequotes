# abequotes
Abe Quotes Web Archive

Archive for a dearest friend that had [passed away](https://www.youtube.com/watch?v=g4nv-mCx-WQ). Original site is at https://abequotes.firebaseapp.com/

## Changes
We updated the `quotesCtrl.js` file under abe-quotes_file so that it loads our local
JSON data for archiving purposes.

Note also that the `abe_quotes.js`  have precedence in loading data over `abe-quotes-data.json` fetch.

## Opening Local site
To open this site locally, just open the `index.html` file

Simlarly for deployment on GH, one should use the `index.html` entry point file. 

One about Github pages is that the initial path component has to be repo name so in this case, it's `/abequotes` if using absolute URIs. For simplicity, we apply relative URI paths to resources.

## Status / Progress
- Confirmed that local data JSON working.
- Update image URIs: done and confirmed working.
- Confirmed Local website loading is working. 

## Future Consideration
- TODO: Explore compressing images/ folder for faster site loading.