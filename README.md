#React Dev

#Parcel
-Dev Build
-Local Server
-HMR=Hot Module Replacement(automatically refreshing page when saved)
-parcel uses a file watching algorithm written in C++ (for HMR)
-Giving faster build(caching)
-Image Optimisation
-Minification of file also(when send to production)
-Bundling
-compressing
-consistent hashing
-code splitting
-differencial bundling-to supprot older browser
-diagnostics behind the app
-Error Handling
-also gives a way to host our to HTTPS
-Tree Shaking-remove unused code for you
-Different build for dev and production bundles

#Namaste Food
/\*
Header
-logo
-Nav Items
Body
-Search
-RestaurantContainer
-RestaurantCard
-image
-name of restro
-start rating,cusines

Footer
-copyright
-links
-Address
-Contact
\*/

//React Hooks
(Normal Js Utility Fns)
-useState()-Superpowerful State Variables in react(should import it as named import)

- #React
  -uses Reconcilation Algorithm(react Fibre->new way of finding the diff and updated DOM)

representation of actual DOM(Virtual DOM)

Diff Algorithm(shows the difference b/t previous and new Virtual DOM and actual update the DOM on every render)

#Routing in Web App
-CLient side routing(in react client-side is using)
-Server Side routing(make a network call to move to other page)

//\* ----Mounting
Constructor(with Dummy data )
Render(Dummy)

   <HTML Dummy>
ComponentDidMount
   <API call>
   <this.setState>->State variable is updated

----Update
render(API data)

  <HTML (new API data)>
  ComponentDid Update
*//

use return to unmount in react component //like this
useEffect(()=>{
setInterval(()={
console.log("react")
},1000);

return()=>{

}
})

#Redux Toolkit
-Install @reduxjs/toolkit and react-redux
-Build our store
-Connect our store to our app
-Slice (cartSlice)
-dispatch(action)
-Selector

#types of testing that developer can do
-Unit Testing(to test the a perticular unit(like testing a nav bar) of the application)
-Integration Testing(testing of integrated components or parts of application)
-End to end testing(e2e testing)(when user enters the application till the user exit the application)

#Setting up Testing Library
-install react testing library
-installed jest
-installed babel dependencies
-Configure Babel
-Configure parcel config file to disable default babel transpilation
-jest configuration(jsdom(used for testing environment beacause browser don't provide the testing environment)npx jest --init)
-Install jsdom library
-Install @babel/preset-react-to make JSX work in test cases
-Include @babel/preset-react inside my babel config
-Include @testing-library/jest-dom
