import {useAuth} from "../../Provider/AuthProvider"
import styles from './Profile.module.css'
const Profile = () => {
 const  userInformation=useAuth()
    return (
        <>
<h2>Profile</h2>
        {userInformation ? <div className={styles.profile}><span>Name: {userInformation.name}</span>
        <span>phoneNumber: {userInformation.phoneNumber}</span>
        <span>email: {userInformation.email}</span>
        </div> :<div>Please siguup</div>}
        </>
      );

    }
export default Profile;