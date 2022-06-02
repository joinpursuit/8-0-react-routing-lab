export const Owner = ( {owner} ) => {
  const { id, firstName, lastName, zipCode } = owner;

  return (
    <article className='owner'>
      <h3>
        Name:  {firstName} {lastName}
      </h3>
      <h5>Id:  {id}</h5>
      <h4>ZipCode: {zipCode}</h4>
    </article>
  );
};

export default Owner;
