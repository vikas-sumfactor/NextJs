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
                
