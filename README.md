# NextJs
Nextjs: full stack framework/React production framework.
Nextjs allows render content on the server/client both.
# Benefits of NextJs
1) Different Rendering Techniques
a) static site generation(blog type static data)
b) server side rendering(dyanmic data comes from api and fetch)
c) incremental site regeneration(static+server)=> best

2) Performance
a) code splitting: divide big code to small chunks and use particular to show on webpages
b) minifying files: remove extraspace and charcters 
c) image optimization: using next image component it make resposnive automatically
d) pre fetch assests

3) File Based Routing : When a file is added to the “pages” directory, it's automatically available as a route.
                        no need of installing extra package like in react
4) SEO
5) Serverless function :The function which takes the req and returns the response on the server but without hosting it on any server is basically a serverless function.
                           Inside the pages directory, craete api folder its contains serverless function.
                           
6) Fast Refresh : detect changes/error instantly  

Start section-3 from here -
# SetUp
Step 1.

If you don’t have Node.js installed, then install using this link and switch to the LTS vesrion

https://nodejs.org/en

Step 2.

npx create-next-app@latest
# or
yarn create next-app
# or
pnpm create next-app


Step 2 optional:

If you want to start with a TypeScript project you can use the --typescript flag:

npx create-next-app@latest --typescript
# or
yarn create next-app --typescript
# or
pnpm create next-app --typescript

After the installation is complete:

Step 3.

Run npm run dev or yarn dev or pnpm dev to start the development server on http://localhost:3000
Visit http://localhost:3000 to view your application
Edit pages/index.js and see the updated result in your browser



# CSS Modules

1)global.css: applicable for whole application.

2)filename.moudle.css

Next.js has built-in support for CSS Modules using the filename.module.css extension.

CSS Modules locally scope CSS by automatically creating a unique class name. This allows you to use the same class name in different files without worrying about collisions.


syntax : 
<div className={style.classname}>hello world</div>
called as a object className={style.classname}

































