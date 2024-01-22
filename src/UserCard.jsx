import "./userCard.css";

const UserCard = ({ employee }) => {
  return (
    <div className="card">
      <img src={employee.picture.large} alt="avatar" />
      <div className="info-container">
        <div className="info-head">
          <h4>
            {employee.name.first} {employee.name.last}
          </h4>
        </div>
        <div className="info-body">
          <p>{employee.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
