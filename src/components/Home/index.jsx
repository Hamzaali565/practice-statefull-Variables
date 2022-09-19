import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faShare, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import './index.css'
import { useState } from 'react';




function Home(props) {
    const [isLit, setLit] = useState(true);

    function Change() {
        setLit(!isLit)
    }



    return (
        <div className={`${(isLit) ? "light" : "dark"} `}>
            <div className='button'><button onClick={Change}>Change Mode</button></div>
            <div className={"mainDiv"}>
                <div className={`${(isLit) ? "post" : "post1"} `}>
                    <div className={`${(isLit) ? "postHeader" : "postHeader1"} `}>
                        <img src={props.profilePhoto} className={`${(isLit) ? "profile" : "profile1"} `} />
                        <div>
                            {props.name}<br />
                            {moment(props.postDate).fromNow()}
                        </div>
                    </div>
                    <div className={`${(isLit) ? "postText" : "postText1"} `}>
                        {props.postText}
                    </div>
                    <div >
                        <img src={props.postImage} className={`${(isLit) ? "postImage" : "postImage1"} `} />
                    </div>
                    <hr />
                    <div className={`${(isLit) ? "botButtons" : "botButtons1"} `}>
                        <FontAwesomeIcon icon={faThumbsUp} />Like
                        <FontAwesomeIcon icon={faComment} />Commnet
                        <FontAwesomeIcon icon={faShare} />Share
                    </div>
                    <hr />
                </div>
            </div>
        </div>

    );
}
export default Home;
