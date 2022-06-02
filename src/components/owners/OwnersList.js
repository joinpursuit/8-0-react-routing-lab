import Owner from './Owner';
import "./owner.css";
 
export const OwnersList = ({ owners }) => {
  const owner = owners.map((owner) => (
    <Owner
      key={owner.id}
      owner={owner}
    />
  ));

  return (
    <section className='owner-list'>
      <h2> Owners</h2>
      <div className='owners'>{owner}</div>
    </section>
  );
};

export default OwnersList;
