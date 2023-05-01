# NextJs
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
                
