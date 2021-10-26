import classes from './MeetupItem.module.css';
import Card from '../ui/Card'
function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
      <div className={classes.image}>
        <img src={props.meetup.image} alt={props.meetup.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.meetup.title}</h3>
        <address>{props.meetup.address}</address>
        <p>{props.meetup.description}</p>
      </div>
      <div className={classes.actions}>
        <button>To Favorites</button>
      </div>
      </Card>
    </li>
  );
}

export default MeetupItem;

// function MeetupItem(props) {
//     return (
//       <li className={classes.item}>
//         <div className={classes.image}>
//           <img src={props.image} alt={props.title} />
//         </div>
//         <div className={classes.content}>
//           <h3>{props.title}</h3>
//           <address>{props.address}</address>
//           <p>{props.description}</p>
//         </div>
//         <div className={classes.actions}>
//           <button>To Favorites</button>
//         </div>
//       </li>
//     );
//   }