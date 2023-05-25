# angular-puzzle
Create a front-end angular application with routes
 - ✅ Create a route which is available to anyone, like home page. Use the path /home
 - ✅ Create a route which can only be accessed by logged in admin user. Use the path /admin. Add a link on the admin page which take user to /home
 - ✅ Create a route which can only be accessed by an logged in user which is not admin. Use the path /user. Add a link on the user page which take user to /home
 - ✅ Prevent access to either path /admin or /user if they are not logged in and take user to sign in page. Login path is /login
 - ✅ Create a login page (path /login) which takes user's user id and credential and calls a backend-end api to complete login. Have 2 buttons on the page to login as 2 different user.
   - ✅  Button 1 to login as normal-user. When the button is clicked, call backend api https://demo6308572.mockable.io/student/user
   -  ✅ Button 2 to login as admin. When the button is clicked, call backend api https://demo6308572.mockable.io/student/admin
 -  ✅ after login is complete, take user to either /admin path or /user path depending upon the response of the api call. If the response comes with role = admin, then take user to /admin page, if the response comes with role= user, then take user to /user page.
store.
 - ✅ Create a service which tracks user's logged in status and stores response of the login api in step 5.
 - Add interceptor to add authorization token to any api call, when the api is called when user is logged in.
 - ✅ Add links Admin/User/login, which navigates user to paths /admin. /user, /login respectively.
    - If user is not signed in, hide user and admin link
    - if user is signed as user, only show link user
    - if user is signed as admin, only show link admin
    - if user is signed in as either admin or user, hide login link
 - ✅ Add a button on home page which calls api http://demo6308572.mockable.io/student/account and shows the response on the same page
 - Add a button on admin page which calls api http://demo6308572.mockable.io/student/grades and shows the response on the same page
 - Add a button on user page which calls api  http://demo6308572.mockable.io/student/address and shows the response on the same page
 - ✅ Add links Admin/User/login on home page, which navigates user to paths /admin. /user, /login respectively.
    - If user is not signed in, hide user and admin link
    - if user is signed as user, only show link user
    - if user is signed as admin, only show link admin
    - if user is signed in as either admin or user, hide login link
 - Show logged in user information on each page if user is logged in.