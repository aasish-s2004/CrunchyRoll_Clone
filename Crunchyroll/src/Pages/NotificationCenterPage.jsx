import React from 'react'
import './NotificationCenterPage.css'
import Navbar from './Navbar'
import Footer from './Footer'
import EmptyNotifications from '../assets/empty-notifications@2x.png'

function NotificationCenterPage() {
    return (
        <div className="NotificationsPageContainer">
            <Navbar active="notifications" />

            <div className="NotificationsMainContent">
                <h1 className="NotificationsHeading">Notification Center</h1>

                <div className="NotificationsWrapper">
                    <h2 className="PastNotificationsTitle">Past Notifications</h2>

                    <div className="NotificationsDashedCard">
                        <img
                            src={EmptyNotifications}
                            alt="No notifications"
                            className="EmptyNotificationsImg"
                        />
                        <p className="EmptyNotificationsTitle">You don't have any notifications.</p>
                        <p className="EmptyNotificationsSubtitle">
                            We'll send you a notification when we have something new to share!
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default NotificationCenterPage

