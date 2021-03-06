import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/closeIcon.png';
import { NotificationItem } from './NotificationItem';
import PropTypes from 'prop-types'
import { NotificationItemShape } from '../utils';

const Notifications = ({ displayDrawer, listNotifications }) => (

    <div className="containerx">
        <div className="menuItem">
            Your notifications
        </div>

        {(displayDrawer && listNotifications.length === 0 && "no new Notifications") || (displayDrawer && <div className="Notifications" style={{ "paddingBottom": "18px" }}>

            <div style={{ "padding": "18px", "display": "flex", "justifyContent": "space-between" }}>
                {displayDrawer && <p style={{ "fontSize": "12px" }}>
                    Here is the lists of notifications
                </p>}
                <button
                    type="submit"
                    aria-label="Close"
                    onClick={() => console.log("Close button has been clicked")}
                >
                    <img src={closeIcon} alt="" width="24" height="10" />
                </button>
            </div>

            <div style={{ "padding": "0 18px" }} className="list">

                {displayDrawer && <ul style={{ "padding": "0 18px" }} className="listNotificationItems">
                {listNotifications.map(item=> {
                    return(
                        <NotificationItem
                        key={item.id}
                        type={item.default}
                        value={item.value}
                        html={item.html || ''}
                        />
                    )
                })}
                </ul>}
            </div>
        </div>)}

    </div>)

Notifications.prototype = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications:[]

};

export { Notifications };