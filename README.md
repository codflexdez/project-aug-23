## Interactive Prototype GMS Web App

For instance this a single page application that provide a client side routing with the static data.

The purpose of creating this interactive app prototype is to showcase the latest advancements in UX/UI development while incorporating essential functionality. This prototype serves as a flexible platform for efficiently refining both design and functionality based on client feedback and user experience. As a result, this iterative approach streamlines the development process and enhances seamless integration into production.  

Moreover, this functional prototype has the potential for further enhancement and integration with APIs using technologies such as Node.js or Next.js on the server side. This integration enables clients to interact with dynamic data, creating more realistic and practical scenarios and providing a more immersive and representative experience of the actual application.



#### Project structure

> gms/                      
├── public/
│   ├── img/
│   ├──index.html
├── src/
│   ├── components/
│   │   ├── sections/
│   │   ├── ui-elements/ 
│   │   └── All pages 
│   └── css/
│   │   ├── main.css
│   │ 
│   ├── App.js; data.json; index.js
│
└── package.json; package-lock.json


##### Ui-Element
1. <u>AlertBox</u> - the validation message alert shows when the condition to login is not met
2. <u>FilterModal</u> - modal popup rendering filter options and loads 3 pages accessible from the sidebar navigation
3. <u>Footer</u> - loads inside the PendingEmailsPage, SurveyPage, UpgradePage and GuestProfilePage. The footer getting the useLocation state parameter and changes the its title. 
4. <u>GmsSearch</u> - loads inside the HomePage. Its intetended functionality to search informtion that can be found in each page profile (clickable tabs on the HomePage)
5. <u>InfoModal</u> - Renders additional booking info and accessible by clicking on the info icon from the PendingEmailsPage. For now it has only demonstration info same for all guests. 
6. <u>OptionBanner</u> - Renders on each selected checkbox from PendingEmailsPage and SurveyPage guest's data table. Shows the export/ delete buttons. Export button renders conditionally only on SurveyPage. 
7. <u>QstFilterModal</u> - same as FilterModal, except that it renders conditionly filters corresponding to either SurveyPage or UpgradePage.
8. <u>Selector</u> - The select tag with options. A repiting element through the app.  

##### Sections

1. <u>BookingList</u> Imports data object from App.js and loads the table content (onto SurveyPage and UpgradePage) conditionally on location << pathname >>.

2. 


#### Installation instruction

- copy the project locally 
- from terminal inside the copied directory execute <code> npm install </code>
- As for dependencies: there is a CDN link to fontawesome-4.7 on public/index.html
  it can be also installed <code>npm i fontawesome-4.7</code> then make import to index.js 
- then from <b>/gms</b> execute <code> npm start </code>
