import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  const sidebarProps = [
    { title: "Pages", Icon: EmojiFlagsIcon },
    { title: "Friends", Icon: PeopleIcon },
    { title: "Messenger", Icon: ChatIcon },
    { title: "Marketplace", Icon: StorefrontIcon },
    { title: "Videos", Icon: VideoLibraryIcon },
    { title: "Marketplace", Icon: ExpandMoreOutlinedIcon },
  ];

  return (
    <div className='sidebar'>
      {/* <SidebarRow title='Pages' />
      <SidebarRow title='Friends' />
      <SidebarRow title='Messenger' />
      <SidebarRow /> */}
      <SidebarRow src={user.photoURL} title={user.displayname} />
      {sidebarProps.map((el, idx) => (
        <SidebarRow title={el.title} Icon={el.Icon} />
      ))}
    </div>
  );
}

export default Sidebar;
