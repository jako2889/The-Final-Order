import React from "react"
import { Link } from "gatsby"
// GLOBALS
import { colors } from "../../../../styles/global/colors"
// ICONS
import { Li, Top, Bottom } from "./classroom_list_item_one_styles"

const Classroom_list_item_one = props => {
  const { title, description, owner, id, userID, ownerID } = props.classroom
  const dim = Math.floor(Math.random() * 200)
  console.log(dim)
  const image = `http://placeimg.com/${dim}/${dim}/any`
  console.log("CLASSROOM: ", props.classroom);

  //GET LOGGED IN USER
  let cookieID = document.cookie.replace(
    /(?:(?:^|.*;\s*)userID\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  return (
    <Li>
      <Top>
        <img src={image} alt="classroom image" />
        <div>
          <h3>{title}</h3>
          <h4>By {owner}</h4>
        </div>
      </Top>
      <Bottom>
        <p>{description}</p>
        {cookieID === ownerID ? <Link to={"/app/my-classrooms/classroom-edit"} state={{ classroom_id: id }}>GO TO YOUR ROOM</Link> : <Link to={"app/classroom"} state={{ classroom_id: id }}>GO TO ROOM</Link>}
      </Bottom>
    </Li>
  )
}

export default Classroom_list_item_one