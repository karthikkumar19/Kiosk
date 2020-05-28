import React, { useState } from 'react'
import classes from '../Kiosk/main.module.css';
import Button from '../compoenents/Button';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faClipboardCheck, faEdit, faComments } from '@fortawesome/free-solid-svg-icons'
const  Main = props =>  {
        return (
            <div className={classes.main}>
             
                <div className={classes.mainflex}>
                    <div className={classes.content}>
                        <h1>What is Lorem Ipsum?</h1>
                        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h5>
                    </div>
                    <div className={classes.buttons}>
                    <Button style={classes.view}>
                        <DynamicFeedIcon style={{ color: 'white', fontSize:52}}/>
                       <h3>View Schemes </h3> </Button>
                       <Button style={classes.apply}>
                           <FontAwesomeIcon icon={faEdit} style={{ color: 'white', fontSize:52, }}/>
                       <h3>Apply for Schemes </h3> </Button>
                       <Button style={classes.status}>
                       <FontAwesomeIcon icon={faClipboardCheck} style={{ color: 'white', fontSize:52, }}/>
                       <h3>Application Status </h3> </Button>
                       <Button style={classes.help}>
                       <FontAwesomeIcon icon={faComments} style={{ color: 'white', fontSize:52, }}/>
                       <h3>Help Desk </h3> </Button>
                    </div >
                   
            
           
                </div>
            </div>
        )
    }

    export default Main;
