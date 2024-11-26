# Letphil Website

```
letphil website to show testimonials, courses offered, contact us, and other information.
```

## installation

```
npm install


-> if first time without package.json
- npm install -D tailwindcss postcss autoprefixer daisyui@latest dotenv
- npm install react-hook-form react-firebase-hooks firebase axios react-router-dom
```

## run

```
npm run dev
```

## deploy

```
github actions will deploy on : main
-> s3 bucket will be updated
-> cloudfront will be updated
-> website will be updated

push on main branch

```

## deploy other way

```
docker compose up -d
```

### setup react-router

      npm install react-router-dom

      index.js
      import { BrowserRouter as Router } from "react-router-dom";

      App.js
      import { Route, Switch } from "react-router-dom";

      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>

#### setup tailwind[https://tailwindcss.com/docs/guides/vite]

    npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

    npx tailwindcss init -p

    tailwind.config.js
    ...
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ]

    index.css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

#### setup daisyui[https://daisyui.com/docs/install/]

    npm install daisyui --save-dev

    tailwind.config.js
      import daisyui from "daisyui"

      //...
      plugins: [
        daisyui,
      ],
