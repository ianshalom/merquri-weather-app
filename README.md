# Project Name & Tech Stack - Merquri Weather App

This is a weather application built using React + Typescript, Redux, React Query and Axios. For styling, I used styled-components. The idea behind my choice for the tech stack was to test some new technologies (like React Query since it is gaining in popularity) and to also practice technologies that I haven't used in a while like React and Typescript.

Whilst I am aware that it is an overkill to use both React Query and Redux for state management, I wanted to see how both technologies could possibly be tied together as I am quite intrigued with the simplicity in React Query's data fetching and caching abilities. As for Redux, I wanted to try out Redux Toolkit and leverage it's central store and hooks to update and fetch the search history data and display it on the front end.

I tried to keep my folder structure as simple and reusable as possible whilst maintaining a clear separation of concerns. For instance, components and UI folders will only be used for displaying data, containers to handle and data etc.

As for styling, I kept it simple by using styled components.

# Installation and Setup

This project was bootstrapped with Vite (React + Typescript).

To run the project, first do an npm install and do an npm run dev.

To run the weather api locally, you will need to add this environment variable VITE_WEATHER_API_KEY={apiKey} to your env file.

Once you the app locally, you will be greeted with a simple home page that features a search field for you to query for a particular location's weather data (country or city). Also at the top, you will have an option to toggle between light and dark mode.

Any time you search for a location's data and if the request succeeds, that particular location's weather data will appear in the search result and search history section. While it is retrieving the data, you should be able to see a loading spinner, if the request fails, you will see a simple error message stating that no data was found for that particular location.

In the search history section, you will have the ability to refetch a particular location's data to get the latest weather data or remove it from the history.

# Reflection

I had a lot fun building this weather app and leveraging the technologies that I selected for my tech stack. I originally wanted to just stick to using Redux with a middleware (like thunks or saga) to handle side effects but wanted to give React Query a go. React Query requires significantly less boilerplate code to get started as compared to Redux with Thunks and Redux Saga.

The main issues I ran into was react query' automatic caching when I wanted to fetch data I previously fetched. I tried configuring the staleTime but to no avail. Also, I was trying to find a better way of updating the store after retrieving new country data other than using useEffect to wait for a change in its dependencies before I update the store, something i am more familiar with doing using Redux Saga. I guess a bit more practice will and research will give me a better idea of how to optimise this.

All in all, I am quite pleased to have been able to work on this app and I am looking forward to receiving your feedback on how I can improve. Thank you.
