# Sanity Media Plugin - Electrolux Version (for Sanity Studio v3)

> This plugin is for **Sanity Studio v3**.  
> This is a forked version of Sanitys own [Media Plugin (v4.0.0)](https://github.com/sanity-io/sanity-plugin-media)

## What is it?

A convenient way to browse, manage and refine your [Sanity](https://www.sanity.io/) assets.

Use it standalone as a browser, or optionally hook it up as a [custom asset source](https://www.sanity.io/docs/custom-asset-sources) and use it to power both image and file selection too.

![Grid view](https://user-images.githubusercontent.com/209129/108927411-21aa7f00-7638-11eb-9cf7-334598ac4103.png)
_Default grid view_


_Asset details tab_          |  _Asset alt texts tab_
:-------------------------:|:-------------------------:
![first](https://private-user-images.githubusercontent.com/5981206/474436776-a6623072-00f4-4299-bba4-03db5fe708d0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQzOTM0NjYsIm5iZiI6MTc1NDM5MzE2NiwicGF0aCI6Ii81OTgxMjA2LzQ3NDQzNjc3Ni1hNjYyMzA3Mi0wMGY0LTQyOTktYmJhNC0wM2RiNWZlNzA4ZDAucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDgwNSUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA4MDVUMTEyNjA2WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9ZDdhMzZmMTA3ZmYzNGQwOTYzYWMzOWNiZWNiNDI0ZDFjMmI4Y2EyZTZmOGMwZGYzZTM5MGUyZmEwM2Q2OGQzMyZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.iPGMn1m_0w0xq58PyPcr_gaagfpd3GNulKVrPYMZ9KI)  |  ![second](https://private-user-images.githubusercontent.com/5981206/474436765-f3f1f586-8f6f-465f-b7fa-2b6248ca5897.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTQ0ODY2MTksIm5iZiI6MTc1NDQ4NjMxOSwicGF0aCI6Ii81OTgxMjA2LzQ3NDQzNjc2NS1mM2YxZjU4Ni04ZjZmLTQ2NWYtYjdmYS0yYjYyNDhjYTU4OTcucG5nP1gtQW16LUFsZ29yaXRobT1BV1M0LUhNQUMtU0hBMjU2JlgtQW16LUNyZWRlbnRpYWw9QUtJQVZDT0RZTFNBNTNQUUs0WkElMkYyMDI1MDgwNiUyRnVzLWVhc3QtMSUyRnMzJTJGYXdzNF9yZXF1ZXN0JlgtQW16LURhdGU9MjAyNTA4MDZUMTMxODM5WiZYLUFtei1FeHBpcmVzPTMwMCZYLUFtei1TaWduYXR1cmU9NTIxMWE1NDIwYzAyZGZiMjQ5MzIwNzZlMjU2ODc5ODllM2I4OGQ0NmFhZWM4MDBhZDI1MzU2OTdiYzE1ZDVlZCZYLUFtei1TaWduZWRIZWFkZXJzPWhvc3QifQ.-uXvSDO30mN2CEYftKTVwNWgcTTVvZb-mbFre_lg_1s)


## Features

#### Manage and organise your assets

- Support for batch uploads with drag and drop support
- Edit text fields native to Sanity's asset documents, such as `title`, `description`, `altTexts` and `originalFilename`
- View asset metadata and a limited subset of EXIF data, if present
- Tag your assets individually or in bulk
- Manage tags directly within the plugin
- Get previews for audio and video files
- Easily select and delete multiple assets in bulk

#### Granular search tools

- Refine your search with any combination of search facets such as filtering by tag name, asset usage, file size, orientation, type (and more)
- Use text search for a quick lookup by title, description and alt text

#### Built for large datasets and collaborative editing in mind

- Virtualized grid + tabular views for super speedy browsing, even with thousands of assets and tags
- Utilises Sanity's [real time updates](https://www.sanity.io/docs/realtime-updates) for live changes from other studio members

#### Fits right in with your Sanity studio

- Built with the same [UI components Sanity uses](https://www.sanity.io/ui) under the hood
- Fully responsive and mobile friendly

#### Added support for multi-language alt texts

- Define a list of available languages to enable multi-language alt texts for assets.
- See example of how to enable this feature [here](###plugin-config).

## Install (Sanity Studio v3)

In your Sanity project folder:

```sh
npm install --save sanity-plugin-media
```

or

```sh
yarn add sanity-plugin-media
```

## Usage

Add it as a plugin in your `sanity.config.ts` (or .js) file:

```js
import {media} from 'sanity-plugin-media'

export default defineConfig({
  // ...
  plugins: [media()]
})
```

This will enable the Media plugin as both a standalone tool (accessible in your studio menu) and as an additional asset source for your image and file fields.

### Customizing the asset source

You can configure your studio to use this asset source either exclusively, or conditionally enable it based on the type of asset (image or file).

```js
import {media, mediaAssetSource} from 'sanity-plugin-media'

export default defineConfig({
  // ...
  plugins: [media()],
  form: {
    // Don't use this plugin when selecting files only (but allow all other enabled asset sources)
    file: {
      assetSources: previousAssetSources => {
        return previousAssetSources.filter(assetSource => assetSource !== mediaAssetSource)
      }
    }
  }
})
```

### Plugin Config

```ts
// sanity.config.ts
export default defineConfig({
  //...
  plugins: [
    media({
      // { code: string; label: string, default?: boolean }[] - the list of languages used for alt texts
      // NOTE! Set only one language to default: true. 
      languages: [
        { code: 'en-US', label: 'English', default: true },
        { code: 'sv-SE', label: 'Swedish' },
        { code: 'fr-FR', label: 'French' },
        { code: 'de-DE', label: 'German' }
      ],
      creditLine: {
        enabled: true,
        // boolean - enables an optional "Credit Line" field in the plugin.
        // Used to store credits e.g. photographer, licence information
        excludeSources: ['unsplash'],
        // string | string[] - when used with 3rd party asset sources, you may
        // wish to prevent users overwriting the creditLine based on the `source.name`
      },
      maximumUploadSize: 10000000
      // number - maximum file size (in bytes) that can be uploaded through the plugin interface
    })
  ],
})
```

## Develop locally

### Test your plugin locally

In the plugin directory run this command:
```sh
npm run link-watch
```

This will set up your plugin to build whenever the code changes, and publish the package to a local yalc repository.

In the command log, there should be a note that reads something like this:

```sh
npx yalc add sanity-plugin-media-elux && npx yalc link sanity-plugin-media-elux && npm install
```

Run this command in the studio project directory and you should see something like this in the `package.json` file:

```
"sanity-plugin-media-elux": "file:.yalc/sanity-plugin-media-elux",
```

Which means you can safely use the local version of the plugin with this import:

```
import { media } from 'sanity-plugin-media-elux'
```
