This is my submission
for [`KnowHow's React Technical Challenge (GIPHY)`](https://docs.google.com/document/d/1pZX0b__1hmBFycxk5TLVfUwaz8LlpBvYjV-OsXpvlOw/edit#)

## Getting Started

* First, pull the repo into an empty directory, fill in your `GIPHY` base URL and API key

```
Example base URL might look like this: api.giphy.com/v1/gifs

```

* Then install and run the development server (I used `Yarn`):

```zsh
git clone https://github.com/Julchu/KnowHowChallenge.git

yarn install && yarn dev

# If you need to run TS/ESLint error checking:
yarn type-check
yarn lint
```

# Results

* Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

* For this challenge, the requirements for other links only included `/bookmarks`

# Home page (`localhost:3000/`)

* You'll be greeted by a home page with a searchbar at the top, as well as a nav bar (or hamburger button for mobile) to
  navigate to other links
* Searching in the input box will query GIPHY's GIF search, and populate a grid underneath with relevant GIFs
* Each gif has a [+] symbol for you to save to your bookmarks

# Bookmarks page (`localhost:3000/bookmarks`)

* The bookmarks page is simpler, only featuring a clear button and a grid of your saved GIFs
* The clear button is placed next to your nav bar if you want to clear your saved GIFs