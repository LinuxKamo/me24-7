import { Route } from "react-router-dom"
import PageLayout from "../../layout/PageLayout"
import Announcements from "../../shared/pages/Announcements"
import { MEDIA_ANNOUNCEMENTS, MEDIA_MAKE_ANNOUNCEMTS, MEDIA_PROFILE, MEDIA_SECTION, MEDIA_SERVICES } from "../const/routes.media"
import Profile from "../../shared/pages/Profile"
import MakeAnnouncement from "../../shared/pages/MakeAnnouncement"
import Service from "../pages/Service"
import Sections from "../pages/Sections"
import Home from "../pages/Home"

export const MediaRoutes = ()=> {
    return <Route path="/media" element={<PageLayout/>}>
        <Route index element={<Home/>} />
        <Route path={MEDIA_ANNOUNCEMENTS} element={<Announcements/>} />
        <Route path={MEDIA_PROFILE} element={<Profile/>} />
        <Route path={MEDIA_MAKE_ANNOUNCEMTS} element={<MakeAnnouncement/>}/>
        <Route path={MEDIA_SERVICES} element={<Service/>}/>
        <Route path={MEDIA_SECTION} element={<Sections/>}/>
    </Route>
}