import PropTypes from "prop-types"; 
const Profile=(props)=>{
    const textSlyle = {color : "red" , fontWeight : "bold"};
    const {
        fullName,
        bio,
        profession,
        handleName,
        children } = props
    
    return (
        <div>
        <p style={textSlyle}>
        I'm {fullName} I provides {bio} classes and I'm a {profession}
        </p>
        <p>{children}
        </p>
        <button onClick={()=>handleName(fullName)}>Click Me</button>
        </div>)
}
Profile.defaultProps={
    fullName : 'Ilhem Baroud',
    bio : 'Beginner',
    profesion : 'Trainee'

}
Profile.propTypes = {
    fullName : PropTypes.string,
    bio : PropTypes.string,
    profession : PropTypes.string
}
export default Profile;