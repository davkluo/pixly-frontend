# Pixly Frontend
Photo sharing and gallery app with EXIF data extraction. Users can upload images, change images to black and white, resize images, extract EXIF data, and filter images.

The accompanying backend can be found [here](https://github.com/davkluo/pixly-backend).

[Live Demo Link](http://davids-pixly.surge.sh)

## Table of Contents

- [Motivation](#motivation)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Running the App](#running-the-app)
- [Viewing the App](#viewing-the-app)
- [Future Improvements](#future-improvements)

## Motivation

- Create a full-stack application where images can be uploaded and viewed
- Extract and display EXIF data from images
- Make simple edits to images prior to uploading
- Utilize Amazon S3 to store files

## Tech Stack

Built with React

## Setup

### Clone the repo

```bash
git clone git@github.com:davkluo/pixly-frontend.git
cd pixly-frontend
```

### Install dependencies

You will need `node` and `npm` installed globally on your machine.

```bash
npm install
```

### Set environment variables

```bash
cp .env.example .env
# open .env and modify the secret key environment variable
```

You will need to create an AWS bucket with public folder locations /pixly/images/originals and /pixly/images/thumbnails

## Running the App

```bash
npm start
```

## Viewing the App

Visit `http://localhost:3000` to view the app

## Future Improvements
- Write tests
- Add image tagging feature
- Add image filtering options for more EXIF categories
