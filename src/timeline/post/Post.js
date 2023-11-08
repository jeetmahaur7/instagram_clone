import React from 'react'
import "./Post.css";
import { Avatar } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';


const Post = ({ user, postImage, likes, timestamp }) => {
    return (
        <div className='post'>
            <div className="post_header">
                <div className="post_headerAuthor">
                    <Avatar style={{ marginRight: "10px" }}>
                        {user.charAt(0).toUpperCase()}
                    </Avatar>{""}
                    {user}.<span>{timestamp}</span>
                </div>
                <MoreHorizIcon />
            </div>
            <div className="post_image">
                <img src={postImage} alt="Post" />
            </div>
            <div className="post_footer">
                <div className="post_footerIcons">
                    <div className="post_iconsMain">
                        <ThumbUpOffAltIcon className="postIcon" />
                        <ThumbDownOffAltIcon className="postIcon" />
                        <ChatBubbleOutlineIcon className="postIcon" />
                        <TelegramIcon className="postIcon" />
                    </div>
                    <div className="post_iconSave">
                        <BookmarkBorderIcon className="postIcon" />
                    </div>
                </div>
                Liked by {likes} people.
            </div>
        </div>
    );
}

export default Post;
