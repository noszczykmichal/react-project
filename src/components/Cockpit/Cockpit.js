import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    //if I need useEffect as componentDidMount I can pass and empty array

    useEffect(()=>{
        console.log('[Cockpit.js] useEffect');
        //Http request

        setTimeout(()=>{
            alert('Saved data to cloud!');
        }, 1000);

        return ()=>{
            
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);//=> [props.persons]

    //if you have different effects using different data you can use UseEffect more than once 
    //useEffect();

    useEffect(()=>{
        console.log('[Cockpit.js] 2nd useEffect');
        return ()=>{
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    });

    const assignedClasses=[];
    let btnClass='';
    

    if(props.showPersons){
        btnClass=classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
      }
      if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
      }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>
                Toggle Persons
            </button>
        </div>
    );
}

//optimization of functional component with React.memo() so that component won't update with every change of parent component unless the component changes

export default React.memo(cockpit);