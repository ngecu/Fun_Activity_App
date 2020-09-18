What causes boredom? Is boredom a serious problem, or a firstworld problem? Should we worry about being bored, and try to avoid it? Is there a simple way to turn our boredom into productive activities? Is boredom a waste of time?

Although these are certainly not novel questions, they are more interesting now than ever before, with much of humanity in quarantine, and many of our fun and leisure activities on hold for the foreseeable future. 

In this video will build a full react application from scratch.This application will use an api to display some data.And that data will be activities to carry out during such difficult times which you may find them usefull.So lets check it out.

Without further ado lets get started

Am currently on my desktop and ill create my app directory in here,so ill open the terminal and run 
```
npx create-react-app fun_activity_app
```
As it installs,ill open my visual studio

Ok.Great.Now our basic react boilerplate is ready to go

Next is to customize the App.js file   

So what are we going to have in there?
```
Import React from ‘react’
```
Now we can create a class based component
```
import React, { Component } from 'react';


class App extends Component {
render() {
return (
<div className="app">
<div className="card">
<h1 className="activity">Activity:
<span className="heading">
{this.state.activity}
</span></h1>
<h1 className="type">Activity Type : <br/>
<span className="typeHeading">
{this.state.type}
</span>
</h1> 
<h1 className="participants">Participants: <br/>
<span className="participantsHeading">
{this.state.participants}
</span>
</h1> 
<span>FUN ACTIVITY</span>
</button>
</div>
</div>

);
}
}
```
of course we  need to return our component so: 
```
export default App;
```

Since we need to style lets import the style-sheet
```
import './App.css';
```
 
in this app component we will have a state.The state object is where you store property values that belongs to the component and when the state object changes, the component re-renders
So what state should our component have?
Well only three fields,ie activity,type and participants
```
  state = {
        activity:" ",
        type:" ",
        participants : " "
    }
```
Now comes the question on  where and how are we going to actually  call or make request from the api.If you remember how the final version looked liked,some random activity will be fetched.So we will use component did mount life cycle method.
So react components have several life cycle methods eg.render,component did mount,component did update and component did unmount.
For now the important one is definitely component did mount which is called after the component is rendered.This is where you run statements that requires that the component is already placed in the DOM.
Lets test it out with a console.log

And we will also import axios from ‘axios’.
```
import axios from ‘axios’;
```
But first we need to install it first,which we will use to make a get request to a certain api,so
```
npm install –save axios
```
As it installs lets start a new terminal and start our app by running npm start.
Our application should now pop up in our browser.Our app is up and running in our local host port 3000.If everything is working well,we should see the consoled log,so lets inspect.Greatt
So next is to create a class method that will enalbe the functionality in axios.so
```
fetchActivity = () =>{
axios.get()
};
```
This is the api we will be using,so we need to get a request from the url.
If I refresh,it will display another activity,the type of activity,participants,price,link key and accessibility.What we are actually interested in are the first three datas
But first lets try to get all this into our console and then we can destructure it to get the specifics
so inside our axios.get,we will pass in the url api as a string.Link will be in the description
Using dot then and dot catch syntax,we can get the request the way we like it,so:
```
fetchActivity = () =>{
axios.get("https://www.boredapi.com/api/activity")
.then(() =>{

})
.catch(()=>{

});
```
First parameter to the call back function of dot then is the response and the parameter to the catch method is error.so in either case we need to console log what is returned.
```
fetchActivity = () =>{
axios.get("https://www.boredapi.com/api/activity")
.then(() =>{
console.log(response);
})
.catch(()=>{
console.log(error);
});
```
Currenrly we only have a method declaration but not calling it.So lets call it.
Since we need the data initially,we call it in the component did mount.
```
componentDidMount(){
this.fetchActivity();
}
```
We do this.fetchActivity since this a method of this class.

For my case,the auto save is on so it will save any changes outmatically.
So if I go back to the application,in our console,we do get the response.

Lets try to fake an error,to console the error

So will console response.data and get an object,we then need to go one level deeper,for example reponse.data.activity
What I like to do is to destructure this activity from the response and say:
```
const {activity} = response.data 
```
Now we dont need to console log all of this,we can call the activity variable,Lets see if that works

Great.

Ill also destructure the rest of data items
```
const {activity,type,participants} = response.data 
```
Well would want to display our returned data on the divs and h1,but  we dont have access in that scope.How do we get it out?

For that specific problem we have the app’s state ,so we need to populate it,so

in basic Javascript there is a rule that if you have the property and value having the same name,you can simply ommit the latter,so
```
this.setState({activity,type,participants})
```
now we have access to the datas so
```
<div className="app">
<div className="card">
<h1 className="activity">Activity:
<span className="heading">
{this.state.activity}
</span></h1>
<h1 className="type">Activity Type : <br/>
<span className="typeHeading">
{this.state.type}
</span>
</h1> 
<h1 className="participants">Participants: <br/>
<span className="participantsHeading">
{this.state.participants}
</span>
</h1> 
</div>
</div>
```
If we now go back to the application,we can now see our activity,type of activity and no. of participants

Now we need to style it properly in our App.css,I know most of you are not willing to retype the css so i’ll copy paste my own.If you need to go through the stylesheet,i’ll leave the link in the description

Lets see how it looks,Ok it looks really good

The next thing we will add is the button having a span illustrating “FUN ACTIVITY”.Much much better.
We now want to display a new activity when we click the button.So what we need to do is to call the fetchActivity method using the onclick event hanlder so:
```
<button className="button" onClick={this.fetchActivity}>
```

Lets try it out.Yeah its actually working.

Ok great,now that we are done building the application,the only task remaing is to deploy our app as a live service.
So what we need to do is to go to github,create an account if you dont have one.Otherwise create a new repo giving it a name,ill name mine “” and create
You will be greeted with some steps,just go ahead and follow them
Now that we have everything ready,lets go to netlify,whuch is a hosting website.So create an account and login.I suggest logging in with github.
Next click “new site rom git”.Click on your reference github repo and wait for delpoyment.
There you have it your webpage is up and running 
