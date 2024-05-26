# Eurocamp technical test

## Description

This project is a technical test that interacts with the eurocamp api and displays users, parcs, and bookings, whilst handling errors.

## Installation

To install the project, follow these steps:

1. Clone the repository: `git clone git@github.com:Nathanavie/eurocamp-client.git`
2. Navigate into the project directory: `cd eurocamp-client`
3. Install dependencies: `npm install`

## Running the Project

NOTE: This project requires the eurocamp api to be running on http://localhost:3001/

To run the project:

1. Install dependencies `npm install`
2. Start the development server: `npm run dev`
3. Open your browser and navigate to `http://localhost:3000`

## Project Overview

This project uses NextJS's App Router, it handles fetching data via server components using the Native fetch Web API, it handles testing components using jest and react testing library and achieves 100% coverage.

## Suggestions for Improvement

1. Implement search via BE query rather
   a. This was not implemented via the FE due to the potential of BE pagination being included (meaning search would then be handled via the api also)

2. Add e2e tests
   a. Cypress or playwright rather than just the unit test coverage.
