import { useNavigate} from 'react-router-dom'
import './NewsletterForm.css';

export const NewsLetterForm = () => {
  const navigate = useNavigate();

  const signMeUp= ()  => { 
      alert('Thanks for signingup for the newsletter');
      navigate('/');
  }
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
        <button onClick={signMeUp}type='submit'>Sign Up</button>
     
      </form>
    </section>
  );
};

export default NewsLetterForm


