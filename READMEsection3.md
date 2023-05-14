# NextJs
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

































