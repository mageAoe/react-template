import { useNavigate } from 'react-router-dom';

function Detail() {
  const router = useNavigate();

  function toDetail() {
    router('/home');
  }
  return (
    <>
      <div>
        detail
        <button onClick={toDetail}>去 home</button>
      </div>
    </>
  );
}

export default Detail;
