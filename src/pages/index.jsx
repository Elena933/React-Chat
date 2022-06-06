import {Switch, Route, Redirect} from "react-router-dom"
import {HomePage} from "./home";
import {ProfilePage} from "./profile";
import {ChatsPage} from "./chats";
import {ChatPage} from "./chat";

export const Routing = () => {
    return <Switch>
        <Route path={'/chats' }>
            <ChatsPage>
                <ChatPage/>
            </ChatsPage>

        </Route>

        <Route path={' /profile'} component={ProfilePage}/>
        <Route path={'/'} component={HomePage}/>
    </Switch>
}