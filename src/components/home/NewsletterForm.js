// import { useNavigate} from 'react-router-dom'
import './NewsletterForm.css';

export const NewsletterForm = () => {
  // const navigate = useNavigate();

  // const signMeUp= ()  => { 
  //     alert('Thanks for signingup for the newsletter');
  //     navigate('/');
  // }
  return (
    <section className='signup'>
       <h2>Sign up for our newsletter!</h2> 
      <form>
        <input
          id='email'
          name='email'
          type='email'
          placeholder='Your email...'
        />
        <button type='submit'>Sign Up</button>
     
      </form>
    </section>
  );
};

export default NewsletterForm


