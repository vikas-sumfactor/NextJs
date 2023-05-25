# NextJs

# Section 2

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

# Section 3


# Start section-3 from here -
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

# Section 4

# Routing

2 Rules of Routing:
1) Page needs to be react component.
2)  Componenet needs to be exported by default.

Next.js has a file-based routing system. When a file is added to the page’s directory of our Next Project, it is treated as a route

Types of Routing

1) Index Routes: The index.js files in our pages directory are automatically routed to the root directory.
  For Example: If we create a file in the pages directory named index.js . Then it could be accessed by going to http://localhost:3000/

2) Nested Routes: If we create a nested folder structure, our routes will also be structured in the same manner. 
  For Example:  If we create a new folder called users and create a new file called about.js within it, we can access this file by visiting                  http://localhost:3000/users/about
  
3) Dynamic Routes: We can also accept URL parameters and create dynamic routes using the bracket syntax. 
   For Example: If we create a new page in the pages directory called [id].js then the component exported from this file,
    could access the parameter id and render content accordingly. This can be accessed by going to localhost:3000/<Any Dynamic Id> 
  we can also use hook useRouter()
  
 
  
  Linking between different routes: Next.js allows us to do client-side navigation using the Link component. 
                                    It has a property called href that points to a known page
  
  
  # Section 5
  
  # Styling 
https://nextjs.org/docs/pages/building-your-application/styling
  
  
  # Section 6
  
  
  # SEO

Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.

1) Crawling: “following your links”. A process which is done by search engine bots to discover publicly available web pages.

2) Indexing: “adding webpages into Google search”. When search engine crawlers visit any link is crawling and when crawlers save or index 
              that links in search engine database is called indexing.

3) Ranking: Provide the pieces of content that will best answer a searcher's query, which means that results are ordered by most relevant to least relevant.
  
  
  # Section 7
  
  # Project Component Architecture 

# getStaticProps

https://nextjs.org/docs/basic-features/data-fetching/get-static-props

# getStaticPaths


https://nextjs.org/docs/basic-features/data-fetching/get-static-paths

# Falllback

fallback false: return 404 page


fallback true: find and load if found then show and if not show error

  
  # Section 8
  
  # GeoLocation API

# Hooks
  
  
  # Section 9
  
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


# REST API

# Serverless Function
  
  
  
  # section 10
  
  
  AirTable
The Airtable API provides a simple way of accessing your data. Whether it's contacts, sales leads, inventory, applicant information or todo items, the vocabulary of the interactions closely matches your data structure. You will use your table names to address tables, column names to access data stored in those columns. In other words, the Airtable API is your own RESTful API for your base.
  
  
  
  # Section 11
  
  #SWR
  
  npm install swr
  
  
  # section 12
  
    # NEXTJSAPP
  1) npm run dev : for developement server
  
  2) npm run build => npm run start : for production server
  
  # cloud ready app
  
  # env variables:
  we need to put key and values of our private data while depolying in env variables sections


                           
              
