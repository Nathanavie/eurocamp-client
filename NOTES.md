# TASK 1

## Database

Foreign keys are seemingly not used correctly for the bookings table - the user id in each row does not exist in the users table. Ensuring that the users are referenced correctly would allow bookings to more easily be referenced to users without the need of the user knowing the booking id.

It might be worth using indexes on columns that are frequently queried, such as parcs.

Adding documentation to document the database design is something else that could help in using the database as a developer, so that it is easy to find the tables, relationships and so on.

# Task 2

## Brief explanation of the latest practices in your respective field of expertise.

My field of expertise is frontend development using ReactJs and NextJs, including Typescript, GraphQL, and Testing.

### ReactJS

#### Components in ReactJS

ReactJS promotes a component-based architecture, which encourages the development of reusable pieces of UI.

Function Components in ReactJS are JavaScript functions that accept a single `props` object as an argument and return a React element.
They provide a simpler and more concise way to write components compared to Class Components.

#### React Hooks

React Hooks allow you to use state and other React features without writing a class. Some examples are: `useState`, `useEffect`, `useContext`, and `useReducer`.

- `useState`: This hook lets you add state to functional components.
- `useEffect`: This hook lets you perform side effects in function components.
- `useContext`: This hook lets you subscribe to React context without nesting props.
- `useReducer`: This hook is usually preferable to `useState` when there is complex state logic.

React 18 introduces more hooks and enhancements, and further improvements are expected in React 19.

In addition to these built-in hooks, you can also create custom hooks. Custom hooks allow you to extract component logic into reusable functions. This makes your components more readable and enables code sharing across multiple components.

#### State Management in ReactJS (useContext, Redux, and beyond)

State management is a crucial aspect of any React application. It determines how to store, manipulate, and distribute data across the app. There are several ways to handle state management in React, and the choice largely depends on the complexity and requirements of your application.

- **useContext**: The `useContext` Hook in React allows you to create global state without using third-party libraries. It's a built-in way to create and consume a React Context, which can be shared across multiple components. This is a great option for smaller applications or specific sections of larger apps where you need to share state.

- **Redux**: Redux is a predictable state container for JavaScript apps. It helps you manage global state in more complex applications. Redux has been the go-to solution for state management in the React ecosystem for a long time. However, it can be overkill for smaller applications or components due to its complexity and boilerplate.

- **React Query / SWR / Apollo GraphQL**: These are not traditional state management libraries, but they help manage asynchronous data fetching, caching, and synchronization with server state. They can replace or work alongside other state management solutions.

### NextJS

#### Server-Side Rendering (SSR) and Static Site Generation (SSG)

Next.js provides out-of-the-box support for both SSR and SSG. This allows you to optimize your application for performance and SEO. With Next.js, you can choose on a per-page basis whether you want to use SSR, SSG, or client-side rendering.

#### File-System Routing

##### Pages Router

Next.js uses a file-system based router built on the concept of pages. When a file is added to the `pages` directory, it's automatically available as a route.

##### App Router

Next.js also has a newer app router where inside of the `app` directory, there are directories for each page, which contain a `layout.tsx` and a `page.tsx`, which when including at least the `page.tsx` automatically is available as a route

### TypeScript

#### Static Typing

Static typing helps catch potential errors before the code is run. In TypeScript, you define the types of variables, function parameters, and object properties.

#### Interfaces and Types

Interfaces and Types allow you to define complex type structures. This is particularly useful when working with objects or functions that have a specific shape.

#### Generics

Generics provide a way to create reusable components that can work over a variety of types rather than a single one. This increases the flexibility of your code while keeping type safety.

#### Advanced Types

TypeScript offers advanced types like Union, Intersection, Literal, and more. These types allow you to create more specific type definitions, enhancing the robustness of your code.

### Apollo GraphQL

#### Apollo Client

Apollo Client is a state management tool that enables you to fetch, cache, and modify application data, all while automatically updating the UI. With Apollo Client, you can use GraphQL to handle data across all of the UI using the `useQuery` and `useMutation` hooks.

#### Declarative Data Fetching

Apollo allows you to declaratively fetch data, which means you describe the data you want, not how to get it. This makes your code more predictable and easier to understand.

#### Caching

Apollo Client comes with a powerful caching feature that allows you to cache your GraphQL data. This can significantly improve the performance of your application by avoiding unnecessary network requests.

### Testing (Jest and React Testing Library)

Testing is a crucial part of software development that ensures your code works as expected and prevents bugs from being deployed to production.

#### Jest

- **Zero-configuration**: Jest works out of the box with minimal setup, making it easy to add to any project.
- **Mocking and spying**: Jest provides functions to mock modules, timers, and even the current time.

#### React Testing Library

- **User-centric testing**: React Testing Library encourages developers to test your components as the user would, finding elements by their label text (just like a user would), not by their implementation details.
- **Integration with Jest**: React Testing Library integrates well with Jest, providing a seamless testing experience.
